const { Router } = require('express');
const { login, auth } = require('../controller/AuthController');

const router = Router();

router.get('/login', login);
router.get('/', auth);

module.exports = router;
