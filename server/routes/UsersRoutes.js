const { Router } = require('express');
const {
  usersGetAll, usersPost, updateUser, getUserById, usersDelete,
} = require('../controller/UsersController');

const router = Router();

router.get('/', usersGetAll);
router.post('/', usersPost);
router.put('/:id', updateUser);
router.get('/:id', getUserById);
router.delete('/:id', usersDelete);

module.exports = router;
