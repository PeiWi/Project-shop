var express = require('express');
var router = express.Router();

const postController = require('../controllers/post');

router.get('/', postController.getPosts);

router.get('/item', postController.getItemPosts);


module.exports = router;