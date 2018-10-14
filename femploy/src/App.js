import React, { Component } from 'react';
import CompanyGrid from './Components/CompanyGrid/CompanyGrid'; 
import ChartGrid from './Components/ChartGrid/ChartGrid';
import Difference from './Components/Difference/Difference'

import './App.css';
import myLogo from './myLogo.png';

import Routes from './routes';
import Company from './Components/views/company.js';
import Review from './Components/views/review.js';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'


class App extends Component {
  state = {
    diffData: []
  }

  componentDidMount() {
    this.setState({
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

    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <div className="App-cover">
            <img src={myLogo} className="App-logo" alt="logo" width="470px" height="150"/>
            <p>description</p>
          </div>
        </header>
        <div className="App-topCompanies">
          <div className="myText">
            <h2>Top Companies</h2>
          </div>
        </div>
        <CompanyGrid>
        </CompanyGrid>



        <div className="App-charts">
          <ChartGrid>
          </ChartGrid>
        </div>


        <div className ="App-diff"> 
          {this.state.diffData.map(thing => {
            return <Difference diffData={thing}/>
          } ) }
        </div>

      </div>
    );
  }
}

export default App;
