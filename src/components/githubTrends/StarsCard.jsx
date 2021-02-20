import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import * as cheerio from 'cheerio';
import React, { useState, useEffect } from 'react';

const StarsCard = ({ data }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadData(data);
  }, [data]);

  const loadData = async (languageGit) => {
    axios(`https://api.allorigins.win/raw?url=https://github.com/trending/developers/${languageGit}?since=week
      `).then(({ data }) => {
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

  return users.map((item, i) => {
    return (
      <Wrapper key={i}>
        <div className="our-team">
          <div className="picture">
            <img
              className="img-fluid"
              src={item.img}
              alt={`/${item.userName}`}
            ></img>
          </div>
          <div className="team-content">
            <h5 className="name">{item.fullname}</h5>
            <h6 className="title">{item.userName}</h6>
            <Button
              className="btn"
              variant="outlined"
              color="primary"
              href={`https://github.com/${item.userName}`}
              target="blank"
            >
              GO TO GITHUB
            </Button>
            <Button
              className="btn"
              variant="outlined"
              color="primary"
              href={`/show/${item.userName}`}
              target="blank"
            >
              ANALAYTICs
            </Button>
          </div>
        </div>
      </Wrapper>
    );
  });
};

export default StarsCard;

const Wrapper = styled.div`
  .our-team {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 6px 0 rgba(0, 0, 0, 0.01);
    padding: 26px 20px;
    margin-bottom: 30px;
    background-color: #ffffff;
    text-align: center;
    overflow: hidden;
    position: relative;
  }

  .our-team .picture {
    display: inline-block;
    height: 100px;
    width: 100px;
    margin-bottom: 20px;
    z-index: 1;
    position: relative;
  }

  .our-team .picture::before {
    content: '';
    width: 100%;
    height: 0;
    border-radius: 50%;
    background-color: #546e7a;
    position: absolute;
    bottom: 165%;
    right: 0;
    left: 0;
    opacity: 0.9;
    transform: scale(3);
    transition: all 0.5s linear 0s;
  }

  .our-team:hover .picture::before {
    height: 100%;
  }

  .our-team .picture::after {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #546e7a;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .our-team .picture img {
    width: 100%;
    height: auto;
    border-radius: 50%;
    transform: scale(1);
    transition: all 0.9s ease 0s;
  }

  .our-team:hover .picture img {
    box-shadow: 0 0 0 10px #f7f5ec;
    transform: scale(0.7);
  }

  .our-team .title {
    display: block;
    font-size: 15px;
    color: #4e5052;
    text-transform: capitalize;
  }

  .our-team .social li {
    display: inline-block;
  }

  .our-team .social li a:hover {
    color: #1369ce;
    background-color: #f7f5ec;
  }
  .btn {
    margin-top: 20px;
  }
`;
