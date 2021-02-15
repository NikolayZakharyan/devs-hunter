import React from 'react';
import Chart from 'react-google-charts';

const PopLangChart = () => {
  return (
    <div
      className="git_language"
      style={{
        width: '90%',
        margin: '0 auto',
        background: 'white',
        padding: '20px 60px',
      }}
    >
      <Chart
        // style={{}}
        width={'100%'}
        height={'300px'}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={[
          ['', 'JavaScript', 'Python', 'Java', 'other'],
          ['2015', 24.078, 14.696, 10.592, 51],
          ['2016', 27.798, 14.479, 10.454, 48],
          ['2017', 22.338, 15.857, 10.076, 52],
          ['2018', 20.738, 17.795, 9.969, 53],
          ['2019', 20.266, 17.577, 10.177, 52],
          ['2020', 18.772, 16.488, 11.546, 54],
        ]}
        //   https://madnight.github.io/githut/#/pull_requests/2015/4
        options={{
          // Material design options
          backgroundColor: '#FF0000',
          colors: ['#FFEB3B', '#607D8B', 'FF5722', 'E0E0E0'],

          chart: {
            title: 'DISCOVER LANGUAGES IN GITHUB',
            subtitle: '2015-2020',
          },
        }}
        // For tests
        // rootProps={{ 'data-testid': '2' }}
      />
    </div>
  );
};

export default PopLangChart;
