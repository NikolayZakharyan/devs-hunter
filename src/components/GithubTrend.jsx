import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as cheerio from 'cheerio';
import "./githubTrend.css";
import ImgMediaCard from "./EachItem";


const GithubTrend = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // loadData();
  }, []);

  const loadData = async () => {
    axios(`https://cors-anywhere.herokuapp.com/https://github.com/trending/developers/java?since=monthly
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
            info: $('article').children('.mt-1').children()[i]?.next.data,
          };
        } else {
          return;
        }
      });

      setUsers(topJS);
    });
  };

  // console.log(users);

  return (
    <section>
      <div className="container">
        <h1>Trends</h1>
        <p>These are the developers building the hot tools today.</p>
      </div>
      <div className="trends">
        {
          users.map((item, index) => {
            return <ImgMediaCard
              index={index}
              src={item.img}
              fullname={item.fullname}
              username={item.userName}
              info={item.info} />
          })
        }
      </div>
    </section>
  );
};

export default GithubTrend;
