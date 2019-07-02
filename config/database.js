const Sequelize = require('sequelize');

// Conecting to the DB
const db = new Sequelize('codegig', 'postgres', '123456', {
  host: 'localhost',
  dialect: 'postgres'
});

// Exporting the db
module.exports = db;
