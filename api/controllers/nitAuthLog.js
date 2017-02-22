import dateFormat from 'dateformat';
import _ from 'underscore';

import {nitAuthLog} from '../models';

Date.prototype.addDays = function (days) {
  const dat = new Date(this.valueOf());
  dat.setDate(dat.getDate() + days);
  return dat;
};

const sendJSONresponse = function (res, status, content) {
  res.status(status);
  res.json(content);
};


module.exports.get = (query, done) => {
  console.log('nitAuthLog req param: ', query);
  const now = new Date();
  const dateTo = (query.date_to) ? query.date_to : dateFormat(now, 'yyyy-mm-dd');
  const dateFrom = (query.date_from) ? query.date_from : dateFormat(new Date(dateTo).addDays(-7), 'yyyy-mm-dd');
  console.log('nitAuthLog dateFrom: ', dateFrom, ' to ', dateTo);
  nitAuthLog.nitAuthLog(dateFrom, dateTo, query.employee_code, function (data) {
    let aLog = [];
    console.log('nitAuthLog processing log ', data.length, ' items');
    _.each(data, function (item) {
      const dTt = new Date(item.TransactionTime);
      dTt.setHours(dTt.getHours()-2);
      let logItem = _.find(aLog, function (iLog) {
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
    // sendJSONresponse(res, 200, aLog);
    done(null, aLog);

  });
}