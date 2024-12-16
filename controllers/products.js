const moment = require('moment');

const Products = require('../models/products');
const Cid = require('../models/cid');


/* READ *****************************/

exports.getProducts = async (req, res, next) => {
    try {
      const [products] = await Products.fetchAll();
      const [cids] = await Cid.fetchAll();
  
      console.log('Products:', products);
      console.log('Categories:', cids);
  
      res.render('products', {
        data: products,
        cid: cids,
      });
    } catch (err) {
      console.error('Error fetching products or categories:', err);
      res.status(500).send('Error loading products.');
    }
  };
  
exports.getEditProducts = async (req, res, next) => {

    let cids;
    let products;

    const getcids = await Cid.fetchAll()
        .then(([rows]) => {
            cids = rows;
        })

    const findProductsById = await Products.findProductsById(req.query.id)
        .then(([rows]) => {
            products = rows;
        })
        .catch(err => console.log(err));

    // console.log('products: ', JSON.stringify(products[0].date));

    res.render('edits', {
        data: products,
        cids: cids
    });

};

exports.postAddproducts = (req, res, next) => {

    Products.add(req, res)
        .then(([rows]) => {
            res.redirect('/products');
        })
        .catch(err => console.log(err));
};



exports.postUpdateproducts = (req, res, next) => {

    Products.updateById(req, res)
        .then(([rows]) => {
            res.redirect('/products');
        })
        .catch(err => console.log(err));
};

exports.getDeleteproducts = (req, res, next) => {
    Products.deleteById(req.query.id)
        .then(([rows]) => {
            res.redirect('/products');
        })
        .catch();
};