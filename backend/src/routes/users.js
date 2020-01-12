const { Router } = require('express');
const router = Router();

const { getUsers,createUser, deleteUser, logUser } = require('../controllers/users.controllers')

router.route('/')
    .get(getUsers)
    .post(createUser);
    
router.route('/logUser')
    .post(logUser);

router.route('/:id')
    .delete(deleteUser);

module.exports = router;