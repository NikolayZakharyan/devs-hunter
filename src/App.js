import React, { useState, useEffect } from 'react';
import SearchAll from './pages/SearchAll';
import './App.css';
import GithubTrend from './components/GithubTrend';
import Header from './pages/header/Header';
import AboutUsAndFooter from './aboutUs&Footer/aboutUs&Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="middle-page">
      <SearchAll />
      <GithubTrend />
      </div>
      <AboutUsAndFooter/>
    </div>
  );
}

export default App;
