import React, { useState } from 'react';
import './App.css';
// <<<<<<< UsersPage_Liana
// import GithubTrend from './components/GithubTrend';
// import Header from './pages/header/Header';
// import AboutUsAndFooter from './aboutUs&Footer/aboutUs&Footer'
// =======
import GithubTrend from './components/githubTrends/GithubTrend';
import Navbar from './components/navbar/Navbar';
import AboutUsAndFooter from './AboutUs&Footer/AboutUs&Footer';

import SearchResult from './components/searchComponent/SearchResult';
import SearchBar from 'material-ui-search-bar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './components/about_us/About';
import Analytic from './analytics/Analaytic';

function App() {
  const [input, setInput] = useState('');
  const [rearchRes, setRearchRes] = useState(null);

  const getInput = () => {
    if (input.trim().length) {
      setRearchRes(input.trim().split(' ').join('+'));
    }
    setInput('');
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            {/* <Header /> */}
            <Navbar />
            <div style={{ margin: '10% 15%' }}>
              <SearchBar
                value={input}
                onChange={(e) => setInput(e)}
                onRequestSearch={() => getInput()}
              />
            </div>
            {rearchRes ? <SearchResult data={rearchRes} /> : <GithubTrend />}
            <div className="push" style={{ height: '150px' }}></div>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/show/:slug">
            <Analytic />
          </Route>
        </Switch>
        <AboutUsAndFooter />
      </Router>
    </div>
  );
}

export default App;
