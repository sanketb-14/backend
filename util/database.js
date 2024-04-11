const Sequelize = require('sequelize');

const sequelize = new Sequelize('Products', 'root', 'node123@', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
