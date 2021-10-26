const { Router } = require('express');
const { auth } = require('../controller/AuthController');
const {
  ordersGetAll, orderGet, ordersPost, orderDelete,
} = require('../controller/OrdersController');

const router = Router();

router.get('/', auth, ordersGetAll);
router.post('/', auth, ordersPost);
router.get('/:id', auth, orderGet);
router.delete('/:id', auth, orderDelete);

module.exports = router;
