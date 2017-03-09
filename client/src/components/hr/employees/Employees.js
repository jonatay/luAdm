/**
 * Created by Jono on 17 03 07.
 */
import React, {Component}  from 'react';

import {List, ListItem} from 'material-ui/List';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import IconPerson from 'material-ui/svg-icons/social/person-outline';
import IconChecked from 'material-ui/svg-icons/image/leak-add';
import IconUnChecked from 'material-ui/svg-icons/image/leak-remove';


import EmployeeFilter from './EmployeeFilter';
import {loadEmployees} from '../../../lib/employeeService';

import MobileTearSheet from '../../lib/MobileTearSheet';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const personIcon = <IconPerson />;
const checkedIcon = <IconChecked/>;
const uncheckedIcon = <IconUnChecked/>;


class Employees extends Component {
  style = {
    tbMain: {
      padding: 0,
      // position:'fixed',
      maxWidth: 350,
    },
    tbGroup: {
      padding: 0,
    },
    tbBtn: {
      padding: 2,
    },
    tearSheet: {
      marginTop: 20,
    },
    empFilter: {
      position: 'fixed',
    },
  }
  state = {
    employees: [],
    currentEmployee: {},
    selectedIndex: 0,
  }

  componentDidMount() {
    loadEmployees().then(employees => this.setState({employees}))
  }



  render() {
    const dispEmployees = this.state.employees;
    return (
      <div className="Employee-List">
        <EmployeeFilter/>
        <MobileTearSheet style={this.style.tearSheet}>
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