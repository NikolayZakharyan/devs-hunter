import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as cheerio from 'cheerio';

const GithubTrend = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    axios(`https://cors-anywhere.herokuapp.com/https://github.com/trending/developers/javascript?since=monthly
      `).then(({ data }) => {
      const user = [];
      const $ = cheerio.load(data);

      $('.lh-condensed').children('a');
      const topJS = [];
      $('.avatar-user').each((i, el) => {
        if (i < 5) {
            topJS[i] = {
            img: $(el).attr('src'),
            userName: $(el).attr('alt').slice(1, $(el).attr('alt').length),
            fullname: $('.h3').children('a')[i].children[0].data.trim(),
            info: $('article').children('.mt-1').children()[i].next.data,
          };
        } else {
          return;
        }
      });

      setUsers(topJS);
    });
  };

  console.log(users);

  return <div></div>;
};

export default GithubTrend;
