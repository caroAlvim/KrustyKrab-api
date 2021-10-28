const { Router } = require('express');
const { login } = require('../controller/AuthController');

const router = Router();

router.post('/', login);

module.exports = router;
