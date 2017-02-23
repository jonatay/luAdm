import React, {Component} from 'react';
import logo from './lu-logo.svg';
//import './variables.less';
import './bootstrap.css';
import './App.less';
import {EmployeeList} from './components/employees/EmployeeList';

import {loadEmployees} from './lib/employeeService';

class App extends Component {
  state = {
    employees: [],
    currentEmployee: {}
  }

  componentDidMount() {
    loadEmployees().then(employees => this.setState({employees}))
  }


  render() {
    const dispEmployees = this.state.employees;
    return (
      <div className="App container">
        <div className="App-header">
          <img src={logo} className="App-logo pulse" alt="logo"/>
          <h2>luAdm</h2>
        </div>
        <EmployeeList employees={dispEmployees}/>
      </div>
    );
  }
}

export default App;
