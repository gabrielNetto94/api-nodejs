const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/UserModel')

module.exports = {
    async login(req, res, next) {

        try {

            const { email, password } = req.body

            const user = await User.findOne({
                where: {
                    email
                }
            })

            if (!user)
                return res.status(400).json({ error: 'User no found' })

            if (await bcrypt.compare(password, user.dataValues.password)) {

                const id = user.dataValues.id

                const token = jwt.sign({ id }, process.env.KEY_TOKEN, {
                    expiresIn: 30000
                })

                return res.json({
                    id,
                    auth: true,
                    token: token
                })
            }

            return res.status(400).json({ error: 'Password invalid' })

        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },
}