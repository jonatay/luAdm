/**
 * Created by Jono on 17 03 07.
 */
import React, {Component}  from 'react'

import EmployeeFilter from './EmployeeFilter'
import EmployeeTable from './EmployeeTable'
import {loadEmployees} from '../../../lib/employeeService'

class Employees extends Component {
  state = {
    employees: [],
    currentEmployee: {},
    empFilter: {
      company: '',
      state: 'curr',
    },
  }

  componentDidMount() {
    loadEmployees().then(employees => this.setState({employees}))
  }

  handleFilterCoyClick = (coy) => (this.state.empFilter.company === coy) ? this.setState({
      empFilter: {
        company: '',
        state: this.state.empFilter.state
      }
    }) : this.setState({
      empFilter: {
        company: coy,
        state: this.state.empFilter.state
      }
    });
  handleFilterStateClick = (state) => (this.state.empFilter.state === state) ? this.setState({
      empFilter: {
        state: '',
        company: this.state.empFilter.company
      }
    }) : this.setState({
      empFilter: {
        state: state,
        company: this.state.empFilter.company
      }
    });

  filterEmployees = (list, empFilter) => {
    return [...list.filter(emp => (
      (empFilter.company === '' || emp.company_code === empFilter.company) &&
      (empFilter.state === '' || ( empFilter.state === 'curr' && emp.leave_date == null ))
    ))]

  }

  render() {
    const displayEmployees = this.filterEmployees(this.state.employees, this.state.empFilter)
    return (
      <div className="Employee-List">
        <EmployeeFilter empFilter={this.state.empFilter}
                        handleFilterCoyClick={this.handleFilterCoyClick}
                        handleFilterStateClick={this.handleFilterStateClick}/>
        <EmployeeTable employees={displayEmployees}/>
      </div>
    )
  }
}

export default Employees

/*

 <Grid>
 <Row>
 <Col xs={4} sm={4} md={4} lg={4}>
 <EmployeeFilter/>
 </Col>
 </Row>
 <Row>
 <Col xs={4} sm={4} md={4} lg={4}>
 <Nav className="" bsStyle="pills" stacked activeKey={1}>
 {dispEmployees.map(employee =>
 <EmployeeItem key={employee.id} {...employee}/>
 )}
 </Nav>
 </Col>
 </Row>
 </Grid>


 */