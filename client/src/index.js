import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './index.css';

import {Router, Route, hashHistory} from 'react-router';
import Employees from './components/hr/employees';
import Payroll from './components/hr/payroll';

import '../semantic/dist/semantic.min.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/employees" component={Employees}/>
        <Route path="/payroll" component={Payroll}/>
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
