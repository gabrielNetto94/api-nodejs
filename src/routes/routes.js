const express = require('express');
const routes = new express.Router();

const authRouter = require('./modules/authRoutes')
const userRouter = require('./modules/userRoutes')

routes.use('/auth', authRouter)
routes.use('/users', userRouter)

module.exports = routes