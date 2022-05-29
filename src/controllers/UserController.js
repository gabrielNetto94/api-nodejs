const Users = require('../models/UserModel')
module.exports = {

    users(req, res, next) {

        res.json(
            [
                { id: 1, nome: 'luiz' },
                { id: 2, nome: 'gabriel' }
            ]);
    },
    find(req, res) {

        const { id } = req.params;

        console.log(id)

        res.json({
            id: 1,
            name: "Luiz bla "
        })
    },
    async create(req, res) {

        const { username, password } = req.body;

        console.log(username, password)

        Users.create({
            username: "asdasda",
            password: "senha"
        })
            .then((user) => res.status(201).send(user))
            .catch((error) => {
                console.log(error);
                res.status(400).send(error);
            })

    },
    update(req, res) {

        const { id } = req.params;

        res.json({ message: `User ${id} updated!` })
    },
    delete(req, res) {
        const { id } = req.params;

        res.json({ message: `User ${id} deleted!` })
    }
}