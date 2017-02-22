var Emp = require('../models/employee');


var sendJSONresponse = function (res, status, content) {
  res.status(status);
  res.json(content);
};

var fetchCols = [
  'id',
  'surname',
  'first_names',
  'employee_code',
  'designation',
  'gender',
  'race',
  'id_number',
  'company_code',
  'hire_date',
  'leave_date',
  'tax_reference_number',
  'last_updated',
  'employee_group_id',
  'employee_cc_id',
  'branch_id',
  'empnum'
];

// employeesList
module.exports.get = (query, done) => {
  console.log('query:', query)
  let where = {};
  if (query.company_code) {
    where = Object.assign(where, {where: {company_code: query.company_code}})
  }
  if (query.is_current) {
    where = Object.assign(where, {where: {leave_date: null}})
  }
  if (!query.is_current) {
    where = Object.assign(where, {whereNot: {leave_date: null}})
  }
  Emp
    .query(where)
    .fetchAll({
      columns: fetchCols
    })
    .then(data =>
      done(null, data)
    )
    .catch(error =>
      done(error, null))
};

// employeesCreate
module.exports.employeesCreate = function (req, res) {
};

// employeesReadOne
module.exports.employeesReadOne = function (req, res) {
};

// employeesUpdateOne
module.exports.employeesUpdateOne = function (req, res) {
};

// employeesDeleteOne
module.exports.employeesDeleteOne = function (req, res) {
};

