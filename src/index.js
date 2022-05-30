const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./database/db')
const routes = require('./routes/routes')
require('dotenv/config.js')

const app = express()
app.use(bodyParser.json())
app.use(routes)

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

(async() => {
    try {
        await sequelize.sync({ alter: true })

    } catch (error) {
        console.log(error)
    }

})()

http.createServer(app).listen(process.env.DEFAULT_PORT)

console.log(`Server running on port ${process.env.DEFAULT_PORT}`)