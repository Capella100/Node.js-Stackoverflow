const express = require('express');
const router = express.Router();

const postControllers = require('../models/post');




router.get('/posts', postControllers.getAll);

router.get('/posts/:id', postControllers.getById);

router.post('/posts', postControllers.create);

router.put('/postId', postControllers.updateById);

router.delete('/postId', postControllers.deleteById);

module.exports = router;