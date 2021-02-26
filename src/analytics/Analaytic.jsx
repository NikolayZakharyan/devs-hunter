import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom';
import axios from 'axios';
import { GithubContext } from '../context/context';
import SideMenu from '../usersPage/usersPageParts';
import FollowBlock from '../usersPage/FollowBlock';
import Follow from '../components/follow/Follow';
import { useAuth } from '../context/AuthContext';
import Button from '@material-ui/core/Button';

function Analytic() {
  const { limite } = React.useContext(GithubContext);
  const [user, setUser] = useState(useParams().slug);
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [follow, setFollow] = useState({ followers: 0, following: 0 });
  const [userInfo, setUserInfo] = useState({
    bio: '',
    location: '',
    name: '',
    blog: '',
    company: '',
    created_at: '',
    twitter_username: '',
    updated_at: '',
    type: '',
  });
  const [userrepo, setUserrepo] = useState('');
  const { currentUser } = useAuth();

  useEffect(() => {
    axios(`https://api.github.com/users/${user}`).then(({ data }) => {
      // console.log(data);
      const {
        avatar_url,
        name,
        followers,
        following,
        bio,
        location,
        blog,
        company,
        created_at,
        twitter_username,
        updated_at,
        repos_url,
        type,
        login,
      } = data;
      //add in state
      setAvatar(avatar_url);
      setName(name);
      setFollow({ followers, following, login });
      setUserInfo({
        name,
        bio,
        location,
        blog,
        company,
        created_at,
        twitter_username,
        updated_at,
        type,
        avatar_url,
        login,
      });
      setUserrepo(repos_url);
    });
  }, [user]);

  // console.log(userInfo);

  const redirectToSignupPage = () => {
    console.log("doing something");
    const win = window.open("/signup", "_blank");
    win.focus();
  }

  return (
    <div>
      limit: <h1>{limite}</h1>
      {/* <UsersPage user={userInfo} /> */}
      <SideMenu user={userInfo} />
      <FollowBlock {...follow} />
      {/* <div>
        <img src={avatar} alt="" />
        <h4>{name}</h4>
        <p>followers: {follow.followers}</p>
        <p>following: {follow.following}</p>
      </div>
      <div>repo URL: {userrepo}</div> */}
      {currentUser ? (
        <Follow user={userInfo} />
      ) : (
        <Button variant="outlined" color="secondary" title="SIGN UP or LOG IN FIRST" onClick={redirectToSignupPage}>
          FOllow
        </Button>
      )}
    </div>
  );
}

export default Analytic;
