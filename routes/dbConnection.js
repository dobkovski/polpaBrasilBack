const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgres://localhost:5432/polpabrasil',
  ssl: true,
});
client.connect(); 

module.exports = client;
