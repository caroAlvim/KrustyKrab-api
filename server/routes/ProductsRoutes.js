const { Router } = require('express');
const { getProductsExample, getOtherProductsExample } = require('../controller/ProductsController');

const router = Router();

// aqui vao as requisições
router.get('/', getProductsExample);
router.get('/products', getOtherProductsExample);

module.exports = router;
