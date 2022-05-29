const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Users = sequelize.define('Users', {
  // Model attributes are defined here
  username: {
    type: sequelize.Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: sequelize.Sequelize.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
});

module.exports = Users; //exportar