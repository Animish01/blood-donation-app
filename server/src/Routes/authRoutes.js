const { login, signUp } = require('../controllers/authController');
const router = require('express').Router();

router.post('/login', login);
router.post('/signUp', signUp);

module.exports = router;