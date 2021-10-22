const { Router } = require('express');
const {
  ordersGetAll, orderGet, ordersPost, orderDelete,
} = require('../controller/OrdersController');

const router = Router();

router.get('/', ordersGetAll);
router.post('/', ordersPost);
router.get('/:id', orderGet);
router.delete('/:id', orderDelete);

module.exports = router;
