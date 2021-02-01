import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as cheerio from 'cheerio';

const TopLanguage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    axios(`https://cors-anywhere.herokuapp.com/https://madnight.github.io/githut/#/pull_requests/2020/4
      `).then(({ data }) => {

          console.log(data);
    //   const user = [];
          const $ = cheerio.load(data);
          console.log($('.table-condensed'));

    //   $('.lh-condensed').children('a');
    //   const topJS = [];
    //   $('.avatar-user').each((i, el) => {
    //     if (i < 5) {
    //         topJS[i] = {
    //         img: $(el).attr('src'),
    //         userName: $(el).attr('alt').slice(1, $(el).attr('alt').length),
    //         fullname: $('.h3').children('a')[i].children[0].data.trim(),
    //         info: $('article').children('.mt-1').children()[i].next.data,
    //       };
    //     } else {
    //       return;
    //     }
    //   });

    //   setUsers(topJS);
    });
  };

//   console.log(users);

  return <div></div>;
};

export default TopLanguage;

