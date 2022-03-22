const express = require('express');
const routes = new express.Router();
const LoginController = require('../../controllers/LoginController')

routes.post('/login', LoginController.login)
routes.post('/logout', LoginController.logout)

module.exports = routes