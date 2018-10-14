//routes

import React from 'react';
import { Route, IndexRoute, Switch } from 'react-router';
import App from './App';
import Company from './Components/views/company.js';
import Review from './Components/views/review.js';
export default () => (
 	<div>
 		<Route exact path='/' component={App}/>
 		<Route exact path='/company' component={Company}/>
 		<Route exact path='/review' component={Review}/>
 	</div>
    
  

  
);