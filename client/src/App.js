import React, { Component } from 'react';
import logo from './lu-logo.svg';
import './App.less';
import EmployeeList from './components/employees/EmployeeList';

import {loadEmployees} from './lib/employeeService';

class App extends Component {
  state = {
    employees: [],
    currentEmployee: {}
  }

  componentDidMount() {
    loadEmployees().then(employees => this.setState({employees}));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo pulse" alt="logo" />
          <h2>luAdm</h2>
        </div>
        <EmployeeList employees={this.state.employees}/>
      </div>
    );
  }
}

export default App;
