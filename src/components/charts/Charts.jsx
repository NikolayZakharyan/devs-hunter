import React, { useState, useEffect } from 'react';
import PieChartRepo from './currentChart/PieChartRepo';
import axios from 'axios';
import styled from 'styled-components';

const Charts = (allData) => {
  const { public_repos, repos_url } = allData;

  console.log(repos_url);
  const [countAndTitle, setCountAndTitle] = useState([]);
  const [languageSize, setLanguageSize] = useState(null);
  const [allSize, setAllSize] = useState(0);

  useEffect(() => {
    getData();
  }, [repos_url]);

  const getData = async () => {
    axios(repos_url + '?sort=created&direction=asc&per_page=100').then(
      ({ data }) => {
        const lan = {};
        let all = 0;

        data.map(({ language, size }, i) => {
          all += size;
          if (!lan[language]) {
            lan[language] = size;
          } else if (lan[language]) {
            lan[language] = lan[language] + size;
          }
        });
        setAllSize(all);
        setLanguageSize(lan);
      }
    );
  };

  const createDataForChart = (languageSize) => {
    let store = [];
    for (const [key, value] of Object.entries(languageSize)) {
      console.log(`${key}: ${value}`);
      let prasent = Math.round((value / allSize) * 100);
      console.log(prasent);

      if (prasent) {
        store.push(
          // <div >
            <PieChartRepo
              
              count={prasent}
              title={key !== 'null' ? key : 'OTHER'}
              key={key}
            />
          // </div>
        );
      }
    }
    return store;
  };

  return (
    <Wrapper>
        CHARTS

      <div className={'charts'}>
        {languageSize ? (
          // <PieChartRepo count={66} title={'language'} />
          createDataForChart(languageSize)
        ) : (
          <>LOADING</>
        )}
      </div>
    </Wrapper>
  );
};

export default Charts;

const Wrapper = styled.div`
.charts {
  margin: 80px;
  margin-left:30%;
  display: flax;
}
.pirChart{
  /* border:1px solid red; */
  width:150px;
  height:150px;
}

`;
