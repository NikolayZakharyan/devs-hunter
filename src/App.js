import React, { useState, useEffect } from 'react';
import SearchAll from './pages/SearchAll';
import './App.css';
import GithubTrend from './components/GithubTrend';
import TopLanguage from './components/TopLanguage';

import Header from './header/Header';

function App() {
  return (
    <div className="App">
      <SearchAll />
      <GithubTrend />
      <TopLanguage />
      <Header />
    </div>
  );
}

export default App;
