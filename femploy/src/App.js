import React, { Component } from 'react';
import CompanyGrid from './Components/CompanyGrid/CompanyGrid'; 

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
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <div className="App-cover">
            <img src={myLogo} className="App-logo" alt="logo" width="470px" height="150"/>
            <p>best coders</p>
          </div>
        </header>
        <div className="App-topCompanies">
          <h2>Top Companies</h2>
        </div>
        <CompanyGrid>
        </CompanyGrid>
      </div>
    );
  }
}

export default App;


