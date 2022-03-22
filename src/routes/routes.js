const express = require('express');
const routes = new express.Router();

const authRouter = require('./modules/authRoutes')
const userRouter = require('./modules/userRoutes')
const rootRouter = require('./modules/root')

//const contasPagar = 
//const contasReceber

// routes.use('/contasReceber', authRouter)
// routes.use('/contasPagar', authRouter)

routes.use('/', rootRouter)
routes.use('/auth', authRouter)
routes.use('/users', userRouter)

module.exports = routes