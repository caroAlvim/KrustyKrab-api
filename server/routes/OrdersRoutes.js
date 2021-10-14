const { Router } = require('express');
const { getOrdersExample, getOtherOrdersExample } = require('../controller/OrdersController');

const router = Router();

// aqui vao as requisições
router.get('/', getOrdersExample);
router.get('/orders', getOtherOrdersExample);

module.exports = router;
