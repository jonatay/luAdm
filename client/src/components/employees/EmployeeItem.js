/**
 * Created by Jono on 17 02 22.
 */

import React from 'react';
import { NavItem } from 'react-bootstrap';

export const EmployeeItem = (props) => {

  return (
        <NavItem eventKey={props.id} href="#"><strong>{props.employee_code}</strong> {props.surname}, {props.first_names}</NavItem>
  )
}