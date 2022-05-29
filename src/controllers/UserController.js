const User = require('../models/UserModel')

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

        return res.json(user);
    },
    async create(req, res) {

        const { username, password } = req.body

        const user = await User.create({ username, password })

        return res.status(201).json(user)

    },
    async update(req, res) {

        const { id, username, password } = req.body

        const user = await User.upsert({
            id: id,
            username,
            password
        });

        return res.status(200).json(user)

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