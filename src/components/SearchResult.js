import { getDefaultNormalizer } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import Example from './Example.js';
import axios from 'axios';
import * as cheerio from 'cheerio';



const SearchResult = ({ data }) => {
  console.log(data);
  const mainUrl = `https://github.com/hrach`;

  useEffect(() => {
    getData();
  }, []);

  const getData = async (url) => {
    // https://cors-anywhere.herokuapp.com/

    axios('https://api.allorigins.win/raw?url=https://github.com/armen').then(
      ({ data }) => {
        // console.log(data)
        const $ = cheerio.load(data);

        // console.log($('.vcard-fullname').text())
        // console.log($('.user-profile-bio').text())
        // console.log($('.p-label').text())

        console.log($('span'));

        // $('.programmingLanguage').each(elem => {
        //     console.log(elem.text())
        // })
      }
    );


  };

  return (
    <div>
      <Example />
    </div>
  );
};

export default SearchResult;
