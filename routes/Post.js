const express = require('express');
const router = express.Router();

const postControllers = require('../controllers/posts');




router.get('/', postControllers.getAll);

router.get('/:id', postControllers.getById);

router.post('/', postControllers.create);

router.put('/postId', postControllers.updateById);

router.delete('/postId', postControllers.deleteById);

module.exports = router;