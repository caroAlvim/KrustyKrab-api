const { Router } = require('express');
const {
  productsGetAll, productsPost, getProductById, updateProducts, productsDelete,
} = require('../controller/ProductsController');

const router = Router();

router.get('/', productsGetAll);
router.post('/', productsPost);
router.get('/:id', getProductById);
router.put('/:id', updateProducts);
router.delete('/:id', productsDelete);

module.exports = router;
