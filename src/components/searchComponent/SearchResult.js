// import { getDefaultNormalizer } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import Example from './Example.js';
import axios from 'axios';
import * as cheerio from 'cheerio';

const SearchResult = ({ data }) => {
  const [card, setCard] = useState([]);
  const [searchLimit, setSearchlimit] = useState(0);
  const [searchResult, setSearchResult] = useState(0);
  const [isload, setIsload] = useState(false);

  console.log(data)

  const mainUrl = `https://api.github.com/search/users?q=`;

  useEffect(() => {
    rateLimit();

    const getAPI = () => {
      // console.log(mainUrl + data);
      setIsload(false);
      axios(mainUrl + data)
        .then(({ data }) => {
          if (data.items.length) {
            getData(data.items);
            setSearchResult(data.items.length);
            setIsload(true);
          } else {
            console.log('no search result');
            setSearchResult(0);
            setIsload(true);
          }
        })
        .catch(function (error) {
          console.log('Show error notification!');
          console.log(error);
          setIsload(true);
        });
    };
    getAPI();
  }, [data]);

  const rateLimit = async () => {
    axios(`https://api.github.com/rate_limit`)
      .then(({ data }) => {
        const { remaining } = data.resources.search;

        setSearchlimit(remaining);
      })
      .catch(function (error) {
        console.log('Show error notification!');
        console.log(error);

        // return Promise.reject(error)
      });
  };

  const getData = async (dataArray) => {
    // https://cors-anywhere.herokuapp.com/
    // https://api.allorigins.win/raw?url=



    setCard([]);

    dataArray.forEach(function (el, i) {
      axios(`https://api.allorigins.win/raw?url=https://github.com/${el.login}`)
        .then(({ data }) => {
          const $ = cheerio.load(data);
          const fullName = $('.vcard-fullname').text();
          const profileBio = $('.user-profile-bio').text();
          const location = $('.p-label').text();
          const skills = [];
          const org = $('#org-members').text();

          console.log(org);

          $('[itemprop="programmingLanguage"]').each((i, elem) => {
            if (skills.indexOf($(elem).text()) === -1 && $(elem).text()) {
              skills.push($(elem).text());
            }
          });
          const { login, avatar_url } = dataArray[i];
          setCard((card) => [
            ...card,
            { fullName, profileBio, location, skills, login, avatar_url, org },
          ]);
        })
        .catch(function (error) {
          console.log('Show error notification!');
          // console.log(error);

          // return Promise.reject(error)
        });
    });
  };

  return (
    <div>
      {isload ? (
        <>
          <h4>{searchResult} : we find users (max limit 30 result)</h4>
          <h5>{searchLimit} : search try limit count</h5>
          {searchResult ? <Example info={card} /> : <>NO SEARCH RESULT</>}
        </>
      ) : (
        <h1>LOADING here ....</h1>
      )}
    </div>
  );
};

export default SearchResult;
