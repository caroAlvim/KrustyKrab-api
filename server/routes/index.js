const { Router } = require('express');
const AuthRouter = require('./AuthRoutes');
const UsersRouter = require('./UsersRoutes');
const ProductsRouter = require('./ProductsRoutes');
const OrdersRouter = require('./OrdersRoutes');

const router = Router();

router.use('/auth', AuthRouter);
router.use('/users', UsersRouter);
router.use('/products', ProductsRouter);
router.use('/orders', OrdersRouter);

module.exports = router;
