const { Router } = require('express');
const { signIn, auth } = require('../controller/AuthController');

const router = Router();

router.get('/', signIn);
router.post('/', auth);

module.exports = router;
