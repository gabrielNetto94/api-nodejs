const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { Sequelize } = require('sequelize')
//const sequelize = require('./database/db')
const Users = require('./models/UserModel')

//log em toda a aplicação
//app.use(logger);

app.use(bodyParser.json())

const routes = require('./routes/routes')
app.use(routes)

const sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    //port: 1434,
    dialect: 'mysql',//mssql
});

sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(() => console.error('Unable to connect to the database:', error))


function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

const server = http.createServer(app);
server.listen(3000);
console.log("Server running on port 3000")