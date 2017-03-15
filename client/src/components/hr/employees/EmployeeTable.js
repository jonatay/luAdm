/**
 * Created by Jono on 17 03 08.
 */

import React, {
  // PropTypes,
} from 'react';

import {Table} from 'semantic-ui-react'

const EmployeeTable = (props) => {
  return (
    <Table sortable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell width={1}>code</Table.HeaderCell>
          <Table.HeaderCell>name</Table.HeaderCell>
          <Table.HeaderCell>hire</Table.HeaderCell>
          <Table.HeaderCell>leave</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {props.employees.map(emp =>
          <Table.Row key={emp.id}>
            <Table.Cell>{emp.employee_code}</Table.Cell>
            <Table.Cell>{emp.surname}, {emp.first_names}</Table.Cell>
            <Table.Cell>{(emp.hire_date > '') ? emp.hire_date.substring(0, 10) : ''}</Table.Cell>
            <Table.Cell>{(emp.leave_date > '') ? emp.leave_date.substring(0, 10) : ''}</Table.Cell>
          </Table.Row>)}
      </Table.Body>
    </Table>
  );
};

// EmployeeTable.propTypes = {};
// EmployeeTable.defaultProps = {};

export default EmployeeTable;

