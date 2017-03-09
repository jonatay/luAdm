/**
 * Created by Jono on 17 02 22.
 */
import React, {Component}  from 'react';
// import EmployeeItem from './EmployeeItem';
// import {Grid, Row, Col, Nav} from 'react-bootstrap';
import {List, ListItem} from 'material-ui/List';
// import EmployeeFilter from './EmployeeFilter';
import {loadEmployees} from '../../lib/employeeService';

import MobileTearSheet from '../MobileTearSheet';

class EmployeeList extends Component {
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
      <div className="Employee-List">
        <MobileTearSheet>
          <List>
            {dispEmployees.map(employee =>
                <ListItem key={employee.id}>
                  <strong>{employee.employee_code} </strong>
                  {employee.surname}, {employee.first_names}
                </ListItem>
              /*<EmployeeItem key={employee.id} {...employee}/>*/
            )}
          </List>
        </MobileTearSheet>
      </div>
    )
  }
}

export default EmployeeList

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