import React from 'react';

import './githubTrend.css';
import PopLangChart from './PopLangChart';
import StarsCard from './StarsCard';

const GithubTrend = () => {
  const language = ['JavaScript', 'Python', 'Java'];

  // https://api.allorigins.win/raw?url=
  // https://cors-anywhere.herokuapp.com/

  return (
    <section>
      <div className="container">
        <h1>Trends</h1>
        <p>These are the developers building the hot tools today.</p>
      </div>
      <PopLangChart />
      <div className="trends-contanier">
        <h4>--------------ROCK STARs in GITHUB week---------------</h4>
        <h6>
          JAVASCRIPT------------------------------------------------------------
        </h6>

        <div className="trends">
          <StarsCard data={language[0]} />
        </div>
        <h6>
          PYTHON ------------------------------------------------------------
        </h6>

        <div className="trends">
          {' '}
          <StarsCard data={language[1]} />
        </div>
        <h6>JAVA --------------------------------------------------------</h6>

        <div className="trends">
          {' '}
          <StarsCard data={language[2]} />
        </div>
      </div>
    </section>
  );
};

export default GithubTrend;
