import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import styled from 'styled-components';
import axios from 'axios';

const FollowBlock = (follow) => {
  // const [urlFollowers, setUrlFollowers] = useState(false);
  // const [urlFollowing, setUrlFollowing] = useState(false);
  const [followersAll, setFollowersAll] = useState([]);
  const [followingAll, setFollowingAll] = useState([]);
  const [user, setUser] = useState(useParams().slug);

  // console.log(follow);

  useEffect(() => {
    // setUrlFollowing(`https://api.github.com/users/${user}/following`);
    // setUrlFollowers(`https://api.github.com/users/${user}/followers`);

    Promise.allSettled([
      axios(`https://api.github.com/users/${user}/following`),
      axios(`https://api.github.com/users/${user}/followers`),
    ])
      .then((result) => {
        setFollowingAll(result[0].value.data);
        setFollowersAll(result[1].value.data);
      })
      .catch((error) => {
        // console.log(error);
        console.log('---E--R--R--O--R---');
      });
  }, [user]);

  return (
    <Wrapper>
      <div className="container">
        <p className="flw">FOLLOWING: {follow.following}</p>
        <div className="followers">
          <div className="followers-cards">
            {followingAll.map((item, i) => {
              return (
                <div className="card" key={i}>
                  <Avatar alt={item.login} src={item.avatar_url} />
                  <Link
                    href={`https://github.com/${item.login} `}
                    target={'blank'}
                    // onClick={preventDefault}
                  >
                    <p>{item.login}</p>
                  </Link>
                  <Button
                    href={`/show/${item.login} `}
                    target={'blank'}
                    color="primary"
                  >
                    <p>Analytics</p>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container">
        <p className="flw">FOLLOWERS: {follow.followers}</p>
        <div className="followers">
          <div className="followers-cards">
            {followersAll.map((item, i) => {
              return (
                <div className="card" key={i}>
                  <Avatar alt={item.login} src={item.avatar_url} />
                  <Link
                    href={`https://github.com/${item.login} `}
                    target={'blank'}
                    // onClick={preventDefault}
                  >
                    <p>{item.login}</p>
                  </Link>
                  <Button
                    href={`/show/${item.login} `}
                    target={'blank'}
                    color="primary"
                  >
                    <p>Analytics</p>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FollowBlock;

const Wrapper = styled.div`
  .container {
    margin-top: 5px;
    width: 50%;
    padding: 15px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
  }
  .followers {
    display: flex;
    overflow: auto;
  }
  .followers-cards {
    /* background-size:cover; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 15px;
  }
  .card {
    /* overflow-x: auto; */

    align-items: center;
    width: 100px;
    height: 140px;
  }
  .MuiAvatar-root {
    margin: 10px;
    width: 60px;
    height: 60px;
    border: 3px solid #9c9898;
  }
  p {
    font-size: 10px;
    margin: 0 auto;
  }
  .MuiButton-label {
    margin: 0 auto;
  }

  .flw {
    font-size: 14px;
    margin-right: 100%;
  }
`;
