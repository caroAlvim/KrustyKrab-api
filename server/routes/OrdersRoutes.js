const { Router } = require('express');
const {
  ordersGetAll, orderGet, ordersPost, orderDelete, orderUpdate,
} = require('../controller/OrdersController');

const router = Router();

// aqui vao as requisições
router.get('/', ordersGetAll);
router.post('/', ordersPost);
router.get('/:id', orderGet);
router.delete('/:id', orderDelete);
router.patch('/:id', orderUpdate);

module.exports = router;
