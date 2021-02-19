import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Followers = (followers) => {
  console.log(followers);
  const [followersData, setFollowersData] = useState([]);
  const [followingData, setFollowingData] = useState([]);

  const [allDataProps, setAllDataProps] = useState(null);

  const { slug } = useParams();

  //   setAllDataProps(followers);
  useEffect(() => {
    axios(`https://api.github.com/users/${slug}/followers`)
      .then(({ data }) => {
        // console.log(data);
        setFollowersData(data);
      })
      .catch(function (error) {
        console.log('Show error notification!');
      });

    axios(`https://api.github.com/users/${slug}/following`)
      .then(({ data }) => {
        // console.log(data);
        setFollowingData(data);
      })
      .catch(function (error) {
        console.log('Show error notification!');
      });
  }, [slug]);

  return (
    <StyleWrapper>
      <div>FOLLOWERS: {followers.followers}</div>
      {followers.followers ? (
        <div className="followers_container">
          {followersData.map((user, i) => {
            return (
              <div className={'avt-div'} key={i}>
                <Avatar
                  alt={user.login}
                  src={user.avatar_url}
                  onClick={() => {
                    window.open(`/show/${user.login}`, '_blank');
                  }}
                />
                <span>{user.login}</span>
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
      <div>FOLLOWEING: {followers.following}</div>
      {followers.following ? (
        <div className="following_container">
          {followingData.map((user, i) => {
            return (
              <div className={'avt-div'} key={i}>
                <Avatar
                  alt={user.login}
                  src={user.avatar_url}
                  onClick={() => {
                    window.open(`/show/${user.login}`, '_blank');
                  }}
                />
                <span>{user.login}</span>
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </StyleWrapper>
  );
};

export default Followers;

const StyleWrapper = styled.div`
  .following_container {
    border: 1px solid red;
    height: 100px;
    width: 400px;
    margin: 0 auto;
    /* background-color: #333; */
    overflow: auto;
    white-space: nowrap;
    display: flex;
    gap: 10px;
    padding: 10px;
  }
  .followers_container {
    border: 1px solid red;
    height: 100px;
    width: 400px;
    margin: 0 auto;
    /* background-color: #333; */
    overflow: auto;
    white-space: nowrap;
    display: flex;
    gap: 10px;
    padding: 10px;
  }
  .MuiAvatar-root {
    height: 70px;
    width: 70px;
    cursor: pointer;
  }
  .MuiAvatar-root:hover {
    border: 1px solid red;
    /* background: red; */
  }

  .avt-div span {
    position: relative;
    top: -48px;
    margin: 0 auto;
    font-size: 12px;
    cursor: pointer;
  }
`;
