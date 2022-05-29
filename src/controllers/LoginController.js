const jwt = require('jsonwebtoken');

module.exports = {
    login(req, res, next) {
        //esse teste abaixo deve ser feito no seu banco de dados
        if (req.body.user === 'luiz' && req.body.password === '123') {
            //auth ok
            const id = 1; //esse id viria do banco de dados

            const token = jwt.sign({ id }, process.env.KEY_TOKEN, {
                expiresIn: 30000 // expires in 5min
            });
            return res.json({ auth: true, token: token });
        }

        res.status(500).json({ message: 'Login inválido!' });
    },
    logout(req, res) {
        res.json({ auth: false, token: null });
    }
}