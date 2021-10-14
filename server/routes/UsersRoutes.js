const { Router } = require('express');
const {
  usersGetAll, usersPost, usersDelete, getUserById,
} = require('../controller/UsersController');

const router = Router();

router.get('/', usersGetAll);
router.post('/', usersPost);
router.get('/:id', getUserById);
router.delete('/:id', usersDelete);
// router.patch('/:id', getExample);
// router.get('/users', getOtherExample);

module.exports = router;
