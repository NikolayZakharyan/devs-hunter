import { getDefaultNormalizer } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import Example from './Example.js';
import axios from 'axios';
import * as cheerio from 'cheerio';

const SearchResult = ({ data }) => {
  const [card, setCard] = useState([]);

  const mainUrl = `https://api.github.com/search/users?q=`;

  useEffect(() => {
    getAPI();
  }, [data]);

  const getAPI = () => {
    console.log(mainUrl + data);
    axios(mainUrl + data).then(({ data }) => {
      getData(data.items);
    });
  };

  const getData = async (dataArray) => {
    // https://cors-anywhere.herokuapp.com/
    // https://api.allorigins.win/raw?url=

    setCard([]);

    dataArray.map((el, i) => {
      axios(
        `https://api.allorigins.win/raw?url=https://github.com/${el.login}`
      ).then(({ data }) => {
        const $ = cheerio.load(data);
        const fullName = $('.vcard-fullname').text();
        const profileBio = $('.user-profile-bio').text();
        const location = $('.p-label').text();
        const skills = [];

        $('[itemprop="programmingLanguage"]').each((i, elem) => {
          if (skills.indexOf($(elem).text()) == -1 && $(elem).text()) {
            skills.push($(elem).text());
          }
        });
        const { login, avatar_url } = dataArray[i];
        setCard((card) => [
          ...card,
          { fullName, profileBio, location, skills, login, avatar_url },
        ]);
      });
    });
  };

  return (
    <div>
      <Example info={card} />
    </div>
  );
};

export default SearchResult;
