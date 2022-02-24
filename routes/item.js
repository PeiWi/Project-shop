var express = require('express');
var router = express.Router();

const itemController = require('../controllers/item');

router.get('/', itemController.getitems);

module.exports = router;

