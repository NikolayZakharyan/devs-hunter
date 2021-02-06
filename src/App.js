import React from 'react';
import SearchAll from './pages/SearchAll';
import './App.css';
import GithubTrend from './components/GithubTrend';
import Header from './pages/header/Header';
// import AboutUsAndFooter from './AboutUs&Footer/AboutUs&Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <SearchAll />
      <GithubTrend />
      {/* <AboutUsAndFooter/> */}
    </div>
  );
}

export default App;
