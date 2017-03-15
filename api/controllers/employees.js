// var Emp = require('../models/employee');

const queryLinkup = require('../models/pgLinkup').queryLinkup;
var squel = require("squel");

var sendJSONresponse = function (res, status, content) {
  res.status(status);
  res.json(content);
};

var fetchCols = [
  'e.id',
  'e.surname',
  'e.first_names',
  'e.employee_code',
  'e.designation',
  'e.gender',
  'e.race',
  'e.id_number',
  'e.company_code',
  'e.hire_date',
  'e.leave_date',
  'e.tax_reference_number',
  'e.last_updated',
  'e.employee_group_id',
  'e.employee_cc_id',
  'e.branch_id',
  'e.empnum',
  'c.name as company',
  'b.name as branch'
];


module.exports.get = (query, done) => {
  const squ = squel.select({separator: " ", autoQuoteAliasNames: false})
    .from('hr.employee', 'e')
  for (fc in fetchCols) {
    squ.field(fetchCols[fc]);
  }
  const sql = squ
    .left_join('coy.company', 'c', 'e.company_code = c.cubit_company_code')
    .left_join('coy.branch', 'b', 'e.branch_id = b.id')
    .where('e.first_names is not null')
    .order('e.employee_code')
    .toString();
  //console.log(sql);
  queryLinkup(sql, function (err, result) {
    if (err) done(err, null);
    done(null, result.rows);
  })
}


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

