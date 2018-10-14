//routes

import React from 'react';
import { Route, IndexRoute, Switch } from 'react-router-dom';
import App from './App';
import Company from './Components/views/company.js';
import Review from './Components/views/review.js';
export default (
	 <Switch>
	 	<Route exact path='/' component={App}/>
	 	<Route exact path='/company' component={Company}/>
	 	<Route path='/review' component={Review}/>
	 </Switch>
);