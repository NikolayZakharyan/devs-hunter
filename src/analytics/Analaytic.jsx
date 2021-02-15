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
    type:''
  });
  const [userrepo, setUserrepo] = useState('');
  // const [following, setFollowing] = useState(0);

  let { slug } = useParams();

  // console.log(limite);

  useEffect(() => {
    axios(`https://api.github.com/users/${user}`).then(({ data }) => {
      console.log(data);
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
        type
      } = data;
      //add in state
      setAvatar(avatar_url);
      setName(name);
      setFollow({ followers, following });
      setUserInfo({
        name,
        bio,
        location,
        blog,
        company,
        created_at,
        twitter_username,
        updated_at,
        type
      });
      setUserrepo(repos_url)
    });
  }, [user]);

  // console.log(userInfo);

  return (
    <div>
      limite: <h1>{limite}</h1>
      <div>
        <img src={avatar} alt="" />
        <h4>{name}</h4>
        <p>followers: {follow.followers}</p>
        <p>following: {follow.following}</p>
        
      </div>
      <div>
        repo URL: {userrepo}
      </div>
    </div>
  );
}

export default Analytic;
