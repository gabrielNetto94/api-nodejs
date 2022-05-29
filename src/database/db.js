const { Sequelize } = require('sequelize')
const dotenv = require('dotenv/config.js') // importar o dotenv para localizar as variáveis de ambiente
const { default: ModelManager } = require('sequelize/types/model-manager')

const dbName = process.env.DB_NAME
const dbUser = process.env.DB_USER
const dbHost = process.env.DB_HOST
const dbPassword = process.env.DB_PASSWORD

const sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    //port: 1434,
    dialect: 'mysql',//mssql
});

module.exports = sequelize;