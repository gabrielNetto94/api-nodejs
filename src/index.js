const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./database/db')
const routes = require('./routes/routes')

const app = express()
app.use(bodyParser.json())
app.use(routes)

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

(async() => {
    try {
        await sequelize.sync({ alter: true });

    } catch (error) {
        console.log(error);
    }

})();

http.createServer(app)
    .listen(3333);
console.log("Server running on port 3333")