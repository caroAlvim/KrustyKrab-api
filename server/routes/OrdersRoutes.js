const { Router } = require('express');
const { auth } = require('../controller/AuthController');
const {
  ordersGetAll, orderGet, ordersPost, orderDelete, updateOrder,
} = require('../controller/OrdersController');

const router = Router();

router.get('/', auth, ordersGetAll);
router.post('/', auth, ordersPost);
router.put('/:id', auth, updateOrder);
router.get('/:id', auth, orderGet);
router.delete('/:id', auth, orderDelete);

module.exports = router;
