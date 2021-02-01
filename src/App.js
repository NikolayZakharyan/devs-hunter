import React, { useState, useEffect } from 'react';
import SearchAll from './pages/SearchAll';
import './App.css';
import GithubTrend from './components/GithubTrend';
import TopLanguage from './components/TopLanguage';


function App() {
  return (
    <div className="App">
      <SearchAll />
      <GithubTrend />
      <TopLanguage />
    </div>
  );
}

export default App;
