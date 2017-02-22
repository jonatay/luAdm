/**
 * Created by Jono on 17 02 21.
 */

import srvEmployees from './employeeService';

test('srvEmployees.search should return some data', () => {
  srvEmployees.search('se099', (employees) => {
      console.log('got empls:',employees);
  })
})

