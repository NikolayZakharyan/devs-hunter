import React, { useState, useEffect } from 'react';
import SearchResult from './SearchResult';
import SearchBar from 'material-ui-search-bar';

const Search = () => {
  
  const [input, setInput] = useState('');
  const [rearchRes, setRearchRes] = useState(null);

  const getInput = () => {

    if (input.trim().length) {


      setRearchRes(input.trim().split(' ').join('+'));
      
    }
    setInput('');
  };

  return (
    <div>
      <SearchBar
        value={input}
        onChange={(e) => setInput(e)}
        onRequestSearch={() => getInput()}
      />

      {rearchRes ? <SearchResult data={rearchRes} /> : <></>}
    </div>
  );
};

export default Search;
