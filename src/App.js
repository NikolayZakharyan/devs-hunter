import React, { useState, useEffect } from 'react';
import SearchAll from './pages/SearchAll';
import './App.css';
import GithubTrend from './components/GithubTrend';
import Header from './pages/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchAll />
      <GithubTrend />
    </div>
  );
}

export default App;
