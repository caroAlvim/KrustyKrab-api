const { Router } = require('express');
const { auth } = require('../controller/AuthController');
const {
  productsGetAll, productsPost, getProductById, updateProducts, productsDelete,
} = require('../controller/ProductsController');

const router = Router();

router.get('/', auth, productsGetAll);
router.get('/:id', auth, getProductById);
router.post('/', auth, productsPost);
router.put('/:id', auth, updateProducts);
router.delete('/:id', auth, productsDelete);

module.exports = router;
