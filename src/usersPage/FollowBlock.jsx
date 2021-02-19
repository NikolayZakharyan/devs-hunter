import React, { useState, useEffect } from 'react';

const FollowBlock = (follow) => {
  // https://api.github.com/users/willmcgugan/followers
  // https://api.github.com/users/willmcgugan/following

//   console.log(follow);
  //

  const [urlFollowers, setUrlFollowers] = useState(`#`);
  const [urlFollowing, setUrlFollowing] = useState(`#`);

  useEffect(() => {
    setUrlFollowing(`https://api.github.com/users/${follow.login}/following`);
    setUrlFollowers(`https://api.github.com/users/${follow.login}/followers`);
  }, [follow]);

  console.log(urlFollowers);

  return (
    <div>
      <div>FOLLOWERS: {follow.followers}</div>
      <div>FOLLOWing: {follow.following}</div>
    </div>
  );
};

export default FollowBlock;
