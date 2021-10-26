const { Router } = require('express');
const { auth } = require('../controller/AuthController');
const {
  usersGetAll, usersPost, updateUser, getUserById, usersDelete,
} = require('../controller/UsersController');

const router = Router();

router.get('/', auth, usersGetAll);
router.get('/:id', auth, getUserById);
router.post('/', usersPost);
router.put('/:id', auth, updateUser);
router.delete('/:id', auth, usersDelete);

module.exports = router;
