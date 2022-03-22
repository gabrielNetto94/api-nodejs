const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//log em toda a aplicação
//app.use(logger);

app.use(bodyParser.json());

const routes = require('./routes/routes')
app.use(routes)





function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

const server = http.createServer(app);
server.listen(3000);
console.log("Server running on port 3000")