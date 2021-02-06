import React, { useState } from 'react';
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
      <div style={{ margin: '0 15%' }}>
        <SearchBar
          value={input}
          onChange={(e) => setInput(e)}
          onRequestSearch={() => getInput()}
        />
      </div>

      {rearchRes ? <SearchResult data={rearchRes} /> : <></>}
    </div>
  );
};

export default Search;
