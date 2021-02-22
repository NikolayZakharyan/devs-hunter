import React, { useState } from 'react';
import './App.css';
import GithubTrend from './components/githubTrends/GithubTrend';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/footer';

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
        <Navbar />
        <Switch>
          <Route path="/" exact>
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
        <Footer />
        {/* <AboutUsAndFooter /> */}
      </Router>
    </div>
  );
}

export default App;
