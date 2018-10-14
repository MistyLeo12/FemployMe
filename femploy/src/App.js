import React, { Component } from 'react';

import CompanyGrid from './Components/CompanyGrid/CompanyGrid'; 
import ChartGrid from './Components/ChartGrid/ChartGrid';
import Difference from './Components/Difference/Difference';
import ProgressBar from './Components/ProgressBar/ProgressBar';

import './App.css';
import myLogo from './myLogo.png';

import Routes from './routes';
import Company from './Components/views/company.js';
import Review from './Components/views/review.js';

import Grid from '@material-ui/core/Grid';

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
        <Link to="/company"><button>company page</button></Link>
        <Link to="/review"><button>review page</button></Link>

          <div className="App-cover">
            <img src={myLogo} className="App-logo" alt="logo" width="470px" height="150"/>
            <Grid container spacing={24} className="spacing">
                    
            </Grid>
            <Grid container spacing={24}>
              <Grid item xs>
              </Grid>
              <Grid item xs={6}>
                <p className="help">A transparent platform that answers women's hard-to-ask questions about pay, treatment, and diversity in the workplace. By factoring financial satisfaction and gender equality measures, Femploy.me helps you find the right job for you.</p>
              </Grid>
              <Grid item xs>
              </Grid>
            </Grid>
                      </div>
        </header>
        <div className="App-topCompanies">
          <div className="myText">
            <h2>Top Companies</h2>
          </div>
        </div>
        <CompanyGrid>
        </CompanyGrid>

        {/*
        <div className ="App-diff"> 
          {this.state.diffData.map(thing => {
            return <Difference diffData={thing}/>
          } ) }
        </div>
      */}

      </div>
    );
  }
}

export default App;
