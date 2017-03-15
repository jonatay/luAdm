/**
 * Created by Jono on 17 03 13.
 */

var pg = require('pg')

const config = require('config');
const pgConnection = config.get('dbLinkup.pgConnection');


var pool = new pg.Pool(pgConnection);

exports.queryLinkup = (query, cb) => {
  pool.connect(function(err,client,done) {
    if (err)
      cb(err,null);
    client.query(query, function(err, result) {
      done(err);
      if (err)
        cb(err,null);
      console.log('queryLinkup got ',result.rows.length, 'rows from query: ', query);
      cb(null, result);
    })
  })
}

// pool.connect(function(err, client, done) {
//   if(err) {
//     return console.error('error fetching client from pool', err);
//   }
//   client.query('SELECT $1::int AS number', ['1'], function(err, result) {
//     //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
//     done(err);
//
//     if(err) {
//       return console.error('error running query', err);
//     }
//     console.log(result.rows[0].number);
//     //output: 1
//   });
// });

pool.on('error', function (err, client) {
  console.error('idle client error', err.message, err.stack)
});

