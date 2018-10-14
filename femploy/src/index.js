import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Company from './Components/views/company.js';
import Review from './Components/views/review.js';
import * as serviceWorker from './serviceWorker';

//import { Router } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom'
//import routes from './routes';



// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

//import { BrowserRouter } from 'react-router-dom'
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))

// ReactDOM.render(<Router history={browserHistory} routes={routes}/>, document.getElementById('root'));

// export default () => (
// 	ReactDOM.render((
// 	  <BrowserRouter>
// 	    <App />
// 	  </BrowserRouter>
// 	), document.getElementById('root'))
	


// );




// ReactDOM.render(
//   <Router history={browserHistory} routes={routes} />,
//   document.querySelector('#app')
// );