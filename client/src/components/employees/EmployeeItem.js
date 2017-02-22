/**
 * Created by Jono on 17 02 22.
 */

import React from 'react';

export const EmployeeItem = (props) => {

  return (
    <div className="Employee-Item">
      <span><strong>{props.employee_code}</strong> {props.surname}, {props.first_names}</span>
    </div>
  )
}