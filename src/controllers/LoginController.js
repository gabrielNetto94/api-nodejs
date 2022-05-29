const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const User = require('../models/UserModel')

module.exports = {
    async login(req, res, next) {

        const { username, password } = req.body

        const user = await User.findOne({
            where: {
                username
            }
        })

        if (!user)
            return res.status(400).json({ error: 'User invalid' })


        bcrypt.compare(password, user.dataValues.password)
        if (bcrypt.compare(password, user.dataValues.password)) {

            const id = user.dataValues.id;

            const token = jwt.sign({ id }, process.env.KEY_TOKEN, {
                expiresIn: 30000
            });

            return res.json({
                id,
                auth: true,
                token: token
            });
        }

        return res.status(400).json({ error: 'Password invalid' })
    },
    logout(req, res) {
        res.json({ auth: false, token: null });
    }
}