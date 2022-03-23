const express = require('express');
const router = new express.Router();
const auth = require('../../middleware/auth')

const UserController = require('../../controllers/UserController')

//log na rota user
router.use(logger)

router.get('/', auth.verifyJWT, UserController.users)

//encadear verbos HTTP para a mesma rota
router.route('/:id')
    .get(auth.verifyJWT, UserController.find)
    .put(auth.verifyJWT, UserController.update)
    .delete(auth.verifyJWT, UserController.delete)

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

module.exports = router