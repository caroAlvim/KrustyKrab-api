const { Router } = require('express');
const { UsersControllers } = require('../controller/UsersController');

const router = Router();

router.get('/', UsersControllers.usersGetAll);
router.post('/', usersPost);
router.put('/:id', updateUser);
router.get('/:id', getUserById);
router.delete('/:id', usersDelete);
// router.patch('/:id', getExample);
// router.get('/users', getOtherExample);

module.exports = router;
