module.exports = {

    users(req, res, next) {

        res.json(
            [
                { id: 1, nome: 'luiz' },
                { id: 2, nome: 'gabriel' }
            ]);
    },
    find(req, res) {

        console.log(req.params.id)

        res.json({
            id: 1,
            name: "Luiz bla "
        })
    },
    update(req, res) {
        const { username, password } = req.body;

        res.json({ message: `User ${username} updated!` })
    },
    delete(req, res) {
        const { id } = req.body;

        res.json({ message: `User ${id} deleted!` })
    }
}