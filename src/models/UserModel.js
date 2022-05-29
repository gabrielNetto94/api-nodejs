const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/db')

const User = sequelize.define('User', {
  // Model attributes are defined here
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
});

module.exports = User;
// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); 