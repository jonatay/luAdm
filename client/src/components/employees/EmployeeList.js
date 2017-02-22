/**
 * Created by Jono on 17 02 22.
 */
import React from 'react';
import EmployeeItem from './EmployeeItem';

export const EmployeeList = (props) => {
  return (
    <div className="Todo-List">
      <ul>
        {props.employees.map(employee => <EmployeeItem key={employee.id} {...employee}/>)}
      </ul>
    </div>
  )
}