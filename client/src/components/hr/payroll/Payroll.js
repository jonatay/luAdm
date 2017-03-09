/**
 * Created by Jono on 17 02 22.
 */
import React, {Component}  from 'react';

import {loadEmployees} from '../../../lib/employeeService';


class Payslip extends Component {
  state = {
    employees: [],
    currentEmployee: {}
  }

  componentDidMount() {
    loadEmployees().then(employees => this.setState({employees}))
  }


  render() {
    // const dispEmployees = this.state.employees;
    return (
      <div>
        <h1>Payroll</h1>
      </div>
    )
  }
}

export default Payslip