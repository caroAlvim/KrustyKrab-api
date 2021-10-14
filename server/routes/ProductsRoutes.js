const { Router } = require('express');
const { productsGetAll, getProductById } = require('../controller/ProductsController');

const router = Router();

// aqui vao as requisições
router.get('/', productsGetAll);
router.get('/:id', getProductById);

module.exports = router;
