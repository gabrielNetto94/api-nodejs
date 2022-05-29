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

        if (!user)
            return res.status(400).json({ error: 'User or password invalid' })

        const id = user.dataValues.id;

        const token = jwt.sign({ id }, process.env.KEY_TOKEN, {
            expiresIn: 30000
        });

        return res.json({
            id,
            auth: true,
            token: token
        });

    },
    logout(req, res) {
        res.json({ auth: false, token: null });
    }
}