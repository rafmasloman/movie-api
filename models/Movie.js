const Sequelize = require('sequelize');
const db = require('../config/db');

const Movie = db.define('movies', {
  id: {
    type: Sequelize.STRING(200),
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING(200),
  },
  sinopsis: {
    type: Sequelize.STRING(2048),
  },
  createdAt: {
    field: 'created_at',
    type: Sequelize.DATE,
    defaultValue: Sequelize.DataTypes.NOW(),
  },
  updatedAt: {
    field: 'update_at',
    type: Sequelize.DATE,
    defaultValue: Sequelize.DataTypes.NOW(),
  },
});

module.exports = Movie;
