import React, { Component } from "react";
import ChartGrid from '../ChartGrid/ChartGrid';
import ProgressBar from '../ProgressBar/ProgressBar';

// graphs and shit

export default class Company extends Component {
	state = {
    //diffData: [],
    percent: []
  }

  componentDidMount() {
    // CALL API, PROMISE FOR: PERCENT
    this.setState({
      percent: [60, 90]
      /*
      diffData: [
      {
        datasets: [
          {
            label: "Rating",
            data: [
              1000,
              1250
            ],
            backgroundColor: [
              'rgba(127, 191, 63, 0.6)',
              'rgba(54, 162, 235, 0.6)'
              //'rgba(255, 206, 86, 0.6)'
            ]
          }
        ]
      }
    ]
    */

    });
  }

  render() {
    return (
      <div id="company">
        This is the company  page.

        <div className="App-charts">
          <ChartGrid>
          </ChartGrid>
        </div>

        <div className="App-progress">
          {this.state.percent.map(thing => {
            return <ProgressBar percent={thing}></ProgressBar>
          })}
        </div>

      </div>
    );
  }
}