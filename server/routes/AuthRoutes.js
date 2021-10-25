const { Router } = require('express');
const { login, auth } = require('../controller/AuthController');

const router = Router();

router.post('/login', login);
router.get('/', auth);

module.exports = router;
