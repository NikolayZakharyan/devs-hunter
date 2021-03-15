import React, { Component } from 'react';
import { VictoryPie, VictoryAnimation, VictoryLabel } from 'victory';

class PieChartRepo extends Component {
  constructor() {
    super();
    this.state = {
      percent: 0,
      data: this.getData(0),
      language: '',
    };
  }

  componentDidMount() {
    // console.log(this.props);
    this.setStateInterval = window.setTimeout(() => {
      this.setState({
        percent: this.props.count,
        data: this.getData(this.props.count),
        language: this.props.title,
      });
    }, 1000);
    console.log(this.props.title);
  }

  componentWillUnmount() {
    window.clearInterval(this.setTimeout);
  }

  getData(percent) {
    return [
      { x: 1, y: percent },
      { x: 2, y: 100 - percent },
    ];
  }

  render() {
    return (
      <div className="pirChart">
        <div>{this.state.language}</div>
        <svg viewBox="0 0 400 400" width="100%" height="100%">
          <VictoryPie
            standalone={false}
            animate={{ duration: 1000 }}
            width={400}
            height={400}
            data={this.state.data}
            innerRadius={120}
            cornerRadius={25}
            labels={() => null}
            colorScale={['tomato']}
            style={{
              data: {
                stroke: "#929292",
                fill: ({ datum }) => {
                  const color = datum.y > 30 ? 'green' : 'red';
                  return datum.x === 1 ? color : 'transparent';
                },
              },
            }}
          />
          <VictoryAnimation duration={1000} data={this.state}>
            {(newProps) => {
              return (
                <VictoryLabel
                  textAnchor="middle"
                  verticalAnchor="middle"
                  x={200}
                  y={200}
                  text={`${Math.round(newProps.percent)}%`}
                  style={{ fontSize: 45 }}
                />
              );
            }}
          </VictoryAnimation>
        </svg>
      </div>
    );
  }
}

export default PieChartRepo;
