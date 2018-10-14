//routes

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Company from './Components/views/company.js';
import Review from './Components/views/review.js';
export default (
 	<div>
 		<Route exact path='/' component={App}/>
 		<Route path='company' component={Company}/>
 		<Route path='review' component={Review}/>
 	</div>
    
  

  
);