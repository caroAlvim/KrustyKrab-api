const { Router } = require('express');
const {
  productsGetAll, productsPost, getProductById, updateProducts, productsDelete,
} = require('../controller/ProductsController');

const router = Router();

router.get('/', productsGetAll);
router.get('/:id', getProductById);
router.post('/', productsPost);
router.put('/:id', updateProducts);
router.delete('/:id', productsDelete);

module.exports = router;
