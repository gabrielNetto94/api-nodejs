const User = require('../models/UserModel')
const bcrypt = require('bcrypt')

module.exports = {

    async users(req, res, next) {

        const users = await User.findAll()

        return res.json(users)

    },
    async find(req, res) {

        const { id } = req.params

        const user = await User.findByPk(id)

        if (!user)
            return res.status(400).json({ error: 'User not found' })

        return res.json(user)
    },
    async create(req, res) {

        const { password, email } = req.body

        let user = await User.findOne({
            where: {
                email,
            }
        })

        if (!user) {
            const passwordEncrypted = await bcrypt.hash(password, 10)

            user = await User.create({
                password: passwordEncrypted,
                email
            })

            return res.status(201).json(user)
        }
        return res.status(400).json({ message: 'User alredy exists' })
    },
    async update(req, res) {

        const { id, password, email } = req.body

        let user = await User.findByPk(id)

        if (!user)
            return res.status(400).json({ error: 'User not found' })

        const passwordEncrypted = await bcrypt.hash(password, 10)

        await User.update({
            password: passwordEncrypted,
            email

        }, {
            where: { id }
        })

        return res.status(200).json({ message: `User ${id} Updated` })

    },
    async delete(req, res) {
        const { id } = req.params

        const user = await User.findByPk(id)

        if (!user)
            return res.status(400).json({ error: 'User not found' })

        await User.destroy({
            where: {
                id: id
            }
        })

        res.json({ message: `User ${id} deleted!` })
    }
}