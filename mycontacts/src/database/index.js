// src/database/index.js

const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5435,
  user: 'root',
  password: 'root',
  database: 'mycontacts',
});

client.connect();

async function Query(query) {
  const { rows } = await client.query(query);
  return rows;
}

Query('SELECT * FROM contacts').then(console.log);

// async function testConnection() {
//   try {
//     await client.connect();
//     console.log('✅ Database connected successfully!');

//   } catch (error) {
//     console.error('❌ Failed to connect to the database:', error);
//     await client.end();
//   }
// }

// testConnection();