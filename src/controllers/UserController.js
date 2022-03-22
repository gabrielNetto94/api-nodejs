module.exports = {

    findUser(req, res) {

        console.log(req.params.id)

        res.json({
            id: 1,
            name: "Luiz bla "
        })
    },
    users(req, res, next) {

        res.json(
            [
                { id: 1, nome: 'luiz' },
                { id: 2, nome: 'gabriel' }
            ]);
    }
}