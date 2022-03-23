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
    create(req, res) {

        const { username, password } = req.body;

        res.json({ message: `User ${username} created!` })
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