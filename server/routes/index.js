const { Router } = require('express');
const UsersRouter = require('./UsersRoutes');
const ProductsRouter = require('./ProductsRoutes');
const OrdersRouter = require('./OrdersRoutes');

const router = Router();

// aqui vao todas as rotas
router.use('/users', UsersRouter);
router.use('/products', ProductsRouter);
router.use('/orders', OrdersRouter);

module.exports = router;
