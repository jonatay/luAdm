var dateFormat = require('dateformat');
var _ = require("underscore");

var NitUsers = require('../models/nitUsers');
var NitAL = require('../models/nitAuthLog');


// Date.prototype.addDays = function (days) {
//     var dat = new Date(this.valueOf());
//     dat.setDate(dat.getDate() + days);
//     return dat;
// };
//
// Date.prototype.getDaysSe = function () {
//     return Math.floor(this / 8.64e7)
// };


const sendJSONresponse = (res, status, content) => {
    res.status(status);
    res.json(content);
};

const nitAccessUsers = (req, res) => {
    NitUsers.nitUsersInfo(function (data) {
        sendJSONresponse(res, 200, data);
    });
};



// var aCols = [];
// var dDay = new Date(data[0].dateTo);
// var dFrom = new Date(data[0].dateFrom);
// while (dDay.getDaysSe() >= dFrom.getDaysSe()) {
//     // aCols.push(dateFormat(dDay, 'yy-mm-dd'));
//     aCols.push({
//         head: $filter('date')(dDay, 'MM-dd'),
//         date: dDay
//     });
//     dDay = dDay.addDays(-1);
// }
// vm.dayCols = aCols;


// var processLogIntoDays = function (aLog, dTt) {
//
//     // var sDate = dateFormat(dTt, 'mm-dd');
//     // var aDay = _.find(aLog.dayLog, function(iLog) {
//     //    return iLog.accessDay == sDate;
//     // });
//     // if (aDay) {
//     //     aDay.accessTimes.push(dTt);
//     // } else {
//     //     aDay = {
//     //         accessDay : sDate,
//     //         accessTimes: [dTt]
//     //     }
//     //     aLog.dayLog.push(aDay);
//     // }
// };

var processAccessLogToDayLog = function(aLog, dFrom, dTo) {
    var dDay = new Date(dTo);
    var ret = [];
    while (dDay.getDaysSe() >= dFrom.getDaysSe()) {
        var sDate = dateFormat(dDay, 'mm-dd');
        var aDay = { name : sDate, date : new Date(dDay.getDaysSe()), log : [] };
        dDay = dDay.addDays(-1);
        _.each(aLog, function(dAt) {
           if (dateFormat(new Date(dAt), 'mm-dd') == sDate) {
               aDay.log.push(dAt);
           }
        });
        ret.push(aDay);
    }
    return ret;
};


module.exports.nitAuthLog = function (req, res) {
    console.log('nitAuthLog req param: ', req.query);
    var now = new Date();
    var dateTo = (req.query.date_to) ? req.query.date_to : dateFormat(now, 'yyyy-mm-dd');
    var dateFrom = (req.query.date_from) ? req.query.date_from : dateFormat(new Date(dateTo).addDays(-7), 'yyyy-mm-dd');
    console.log('nitAuthLog dateFrom: ', dateFrom, ' to ', dateTo);
    NitAL.nitAuthLog(dateFrom, dateTo, req.query.employee_code, function (data) {
        var aLog = [];
        console.log('nitAuthLog processing log ', data.length, ' items');
        _.each(data, function (item) {
            var dTt = new Date(item.TransactionTime);
            dTt.setHours(dTt.getHours()-2);
            var logItem = _.find(aLog, function (iLog) {
                return iLog.empNum == item.EmployeeNum
            });
            if (logItem) {
                logItem.accessLog.push(dTt);
                if (dTt > logItem.accessLast) {
                    logItem.accessLast = dTt;
                }
                if (dTt < logItem.accessFirst) {
                    logItem.accessFirst = dTt;
                }
                // processLogIntoDays(logItem, dTt);
            } else {
                logItem = {
                    empNum: item.EmployeeNum,
                    empName: item.Name,
                    groupName: item.groupName,
                    groupId : item.groupId,
                    dateFrom: dateFrom,
                    dateTo: dateTo,
                    accessLog: [dTt],
                    accessFirst: dTt,
                    accessLast: dTt,
                };
                aLog.push(logItem);
                // processLogIntoDays(logItem, dTt);
            }
        });
        _.each(aLog, function(uLog) {
            uLog.dayLog = processAccessLogToDayLog(uLog.accessLog, new Date(uLog.dateFrom), new Date(uLog.dateTo));
        })
        console.log('nitAuthLog processed log ', aLog.length, ' items');
        sendJSONresponse(res, 200, aLog);
    });
};
