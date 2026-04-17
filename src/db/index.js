const { drizzle } = require('drizzle-orm/node-postgres');
const { Client } = require('pg');
const schema = require('./schema');
const client = new Client({
   host: '127.0.0.1',
   port: 5432,
   user: 'iryna',
   password: 'irynapwd',
   database: 'nodejs_course_database',
});
client.connect();
module.exports = drizzle(client, { schema });