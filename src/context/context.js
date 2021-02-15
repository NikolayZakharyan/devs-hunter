import React, { useState, useEffect } from 'react';

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  
  const [getUserLogin, setGetUserLogin] = useState('hello');


  console.log(getUserLogin + ' - -- - CONTEXT')

  useEffect(() => {

    updateUsername()

  }, [getUserLogin]);


  const updateUsername = () => {
    setGetUserLogin(getUserLogin)
    return getUserLogin

  }



  


  return (
    <GithubContext.Provider value={{ setGetUserLogin, getUserLogin }}>{children}</GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };
