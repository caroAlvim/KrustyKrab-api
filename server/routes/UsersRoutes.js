const { Router } = require('express');
const {
  usersGetAll, usersPost, usersDelete, userGet,
} = require('../controller/UsersController');

const router = Router();

router.get('/', usersGetAll);
router.post('/', usersPost);
router.get('/:id', userGet);
router.delete('/:id', usersDelete);
// router.put('/:id', getExample);
// router.get('/users', getOtherExample);

module.exports = router;
