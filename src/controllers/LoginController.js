const jwt = require('jsonwebtoken');
const User = require('../models/UserModel')

module.exports = {
    async login(req, res, next) {

        const { username, password } = req.body

        const user = await User.findOne({
            where: {
                username,
                password
            }
        })

        if (username == user.dataValues.username && password == user.dataValues.password) {

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

        return res.status(500).json({ message: 'Login inválido!' });
    },
    logout(req, res) {
        res.json({ auth: false, token: null });
    }
}