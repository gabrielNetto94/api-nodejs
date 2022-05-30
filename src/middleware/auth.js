const jwt = require('jsonwebtoken')
require('dotenv').config()
const User = require('../models/UserModel')

module.exports = {
    verifyJWT(req, res, next) {

        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]

        if (!token) return res.status(401).json({
            auth: false,
            message: 'No token provided.'
        })

        jwt.verify(token, process.env.KEY_TOKEN, async function(err, decoded) {

            if (err) return res.status(403).json({
                auth: false,
                message: 'Failed to authenticate token.'
            })

            //buscar usuário e setar na request
            const user = await User.findByPk(decoded.id)

            req.user = user

            next()
        })
    },
}