
const config = require('config');
const pgConnection = config.get('dbLinkup.pgConnection');

const knex = require('knex')({
    client: 'pg',
    connection: pgConnection
});

module.exports = require('bookshelf')(knex);

