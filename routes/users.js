const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/users');

router.post('/register', userControllers.create);
router.post('/login', userControllers.authenticate);

module.exports = router;