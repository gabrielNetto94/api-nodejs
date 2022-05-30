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
// (async () => {
//     await sequelize.authenticate()
//         .then(() => console.log('Connection has been established successfully.'))
//         .catch(() => console.error('Unable to connect to the database:', error))
// })();

(async() => {
    const database = require('./database/db');
    const user = require('./models/UserModel');
    try {
        const resultado = await database.sync();

    } catch (error) {
        console.log(error);
    }

})();

http.createServer(app)
    .listen(3333);
console.log("Server running on port 3333")