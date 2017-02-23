/**
 * Created by Jono on 17 02 22.
 */
import React from 'react';
import {EmployeeItem} from './EmployeeItem';
import { Nav } from 'react-bootstrap';

export const EmployeeList = (props) => {
  return (
    <div className="Employee-List">
      <Nav bsStyle="pills" stacked activeKey={1} >
        {props.employees.map(employee => <EmployeeItem key={employee.id} {...employee}/>)}
      </Nav>
    </div>
  )
}