const express = require('express')
const routes = new express.Router()
const LoginController = require('../../controllers/LoginController')

routes.post('/login', LoginController.login)

module.exports = routes