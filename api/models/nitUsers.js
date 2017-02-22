const sql = require('mssql');
const table = 'dbo.NGAC_USERINFO';
const config = require('config');
const msSqlConnection = config.get('dbLinkup.msSqlConnection')

module.exports.nitUsersInfo = function (callback) {
    console.log('nitUserInfo: connection');
    sql.connect(msSqlConnection).then(function () {
        console.log('nitUserInfo: connected, querying');
        new sql.Request().query('select * from ' + table).then(function (recordset) {
            console.log('nitUserInfo: queried ', recordset.length, ' recs returned');
            sql.close();
            callback(recordset);
        });
    });
};

