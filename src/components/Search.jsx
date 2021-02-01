import React, { useState, useEffect } from 'react';
import SearchResult from './SearchResult';

const Search = () => {
  const [input, setInput] = useState('');

  const getInput = () => {};

  return (
    <div>
      <div className="search">
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
        <button onClick={getInput}>SEARCH</button>
      </div>
      <SearchResult />
    </div>
  );
};

export default Search;
