const sequilize = require('sequelize');

const db = new sequilize('moviez', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = db;
