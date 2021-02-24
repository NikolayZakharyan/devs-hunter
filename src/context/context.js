import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [limite, setLimite] = useState(60);

  useEffect(() => {
    axios(`https://api.github.com/rate_limit`)
      .then(({ data }) => {
        console.log(data.rate.remaining);
        setLimite(data.rate.remaining);
      })
      .catch(function (error) {
        console.log('Show error notification!');
        console.log(error);

        // return Promise.reject(error)
      });
  }, []);

  return (
    <GithubContext.Provider value={{ limite }}>
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };
