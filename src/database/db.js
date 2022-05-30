const { Sequelize } = require('sequelize')
require('dotenv/config.js')

const dbName = process.env.DB_NAME
const dbUser = process.env.DB_USER
const dbHost = process.env.DB_HOST
const dbPassword = process.env.DB_PASSWORD
const dbPort = process.env.PORT
const dbDialect = process.env.DB_DIALECT

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    port: dbPort,
    dialect: dbDialect,
    timezone: "-03:00",
})

module.exports = sequelize