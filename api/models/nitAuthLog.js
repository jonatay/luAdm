var sql = require('mssql');
const config = require('config');
const msSqlConnection = config.get('dbLinkup.msSqlConnection') + 'NitgenAccessManager';


module.exports.nitAuthLog = function (dateFrom, dateTo, employeeCode, callback) {
    dateFrom = new Date(dateFrom);
    dateFrom.setHours(0);
    dateTo = new Date(dateTo);
    dateTo.setHours(24);
    console.log(dateFrom, dateTo);
    var qry = "SELECT " +
        "ui.EmployeeNum, ui.Name, g.ID AS groupId, g.Name AS groupName,al.* " +
        "FROM dbo.NGAC_AUTHLOG al " +
        "JOIN dbo.NGAC_USERINFO ui on ui.ID = al.UserId " +
        "JOIN dbo.NGAC_GROUP g on g.ID = ui.GroupId " +
        "WHERE TransactionTime BETWEEN @date_from AND @date_to " +
        "ORDER BY TransactionTime";

  console.log('trying to connect to', msSqlConnection);
  console.log('query', qry );


  sql.connect(msSqlConnection).then(function () {
        if (employeeCode) {
            qry += "AND ui.EmployeeNum = @employee_code";
        }
        console.log('nitAuthLog: connected, querying ', qry);
        new sql
            .Request()
            .input('date_from', dateFrom)
            .input('date_to', dateTo)
            .input('employee_code', employeeCode)
            .query(qry)
            .then(function (recordset) {
                console.log('nitAuthLog: queried ', recordset.length, ' recs returned');
                sql.close();
                callback(recordset);
            })
            .catch(function (err) {
                console.dir(err);
            });
    });
}

