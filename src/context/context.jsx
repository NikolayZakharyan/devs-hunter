import React, { useState, useEffect } from 'react';
import axios from 'axios';

//example user search == `hrach+tadevosyan`

const rootUrl = `https://api.github.com`;

//userSearch shuld be [string]+[string] or [string]

//create main context
const AllSearchResult = React.createContext();

const AllSearchResultProvider = ({ children }) => {
  const [githubUsers, setGithubUsers] = useState(null);
  const [requests, setRequests] = useState(0);
  const [error, setError] = useState({ show: false, msg: '' });

    useEffect(() => {
        checkRequests()
  }, []);
    
  

//   const searchGithubUsers = async (userSearch) => {
//     // const searchUrl = `https://api.github.com/search/users?q=${userSearch}`;
//     const response = await axios(
//       `https://api.github.com/search/users?q=${userSearch}`
//     ).catch((err) => {
//       console.log(err + ' aaaaaaaaaaa');
//     });
//       setGithubUsers(response);
//     // checkRequests();
      
//   };


  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        // remaining = 0;
        setRequests(remaining);
        if (remaining === 0) {
          toggleError(true, 'rate linit is done');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function toggleError(show = false, msg = '') {
    setError({ show, msg });
  }
    
  // console.log(githubUsers);

  return (
    <AllSearchResult.Provider value={{ githubUsers, setGithubUsers , requests}}>
      {children}
    </AllSearchResult.Provider>
  );
};

export { AllSearchResult, AllSearchResultProvider };

// ----- checkRequests => rate limit JSON
// {
//     "resources": {
//     "core": {
//     "limit": 60,
//     "remaining": 59,
//     "reset": 1611664517,
//     "used": 1
//     },
//     "graphql": {
//     "limit": 0,
//     "remaining": 0,
//     "reset": 1611664524,
//     "used": 0
//     },
//     "integration_manifest": {
//     "limit": 5000,
//     "remaining": 5000,
//     "reset": 1611664524,
//     "used": 0
//     },
//     "search": {
//     "limit": 10,
//     "remaining": 10,
//     "reset": 1611660984,
//     "used": 0
//     }
//     },
//     "rate": {
//     "limit": 60,
//     "remaining": 59,
//     "reset": 1611664517,
//     "used": 1
//     }
//     }
