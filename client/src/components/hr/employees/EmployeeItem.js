/**
 * Created by Jono on 17 02 22.
 */

import React from 'react';
// import {NavItem} from 'react-bootstrap';
import {ListItem} from 'material-ui/List';

const EmployeeItem = (props) => {

  return (
    <ListItem primaryText="{props.surname}, {props.first_names} {props.employee_code}"/>
  )
};

export default EmployeeItem;