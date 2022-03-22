const express = require('express');
const routes = new express.Router();

routes.get('/', (req, res, next) => {
    res.json({ message: "It's Workingasdasdasd" });
})
module.exports = routes