var express = require('express');
var router = express.Router();

const productsController = require('../controllers/products');

router.get('/', productsController.getProducts);

router.get('/edit', productsController.getEditProducts);

router.post('/add', productsController.postAddproducts);

router.post('/update', productsController.postUpdateproducts);

router.get('/delete', productsController.getDeleteproducts);



module.exports = router;

