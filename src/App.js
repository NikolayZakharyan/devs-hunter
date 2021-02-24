import React, { useState } from 'react';
import './App.css';
import GithubTrend from './components/githubTrends/GithubTrend';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/footer';
import SearchResult from './components/searchComponent/SearchResult';
import SearchBar from 'material-ui-search-bar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/about_us/About';
import Analytic from './analytics/Analaytic';
import { AuthProvider } from './context/AuthContext';
import SignUp from './components/authFire/SignUp';
import LogIn from './components/authFire/LogIn';
import Dashboard from './components/userDashboard/Dashboard';

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
    <>
      <div className="App">
        <AuthProvider>
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
                {rearchRes ? (
                  <SearchResult data={rearchRes} />
                ) : (
                  <GithubTrend />
                )}
                <div className="push" style={{ height: '150px' }}></div>
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/login">
                <LogIn />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/show/:slug">
                <Analytic />
              </Route>
            </Switch>
            <Footer />
            {/* <AboutUsAndFooter /> */}
          </Router>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
