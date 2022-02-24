const moment = require('moment');

const Products = require('../models/products');
const Cid = require('../models/cid');


/* READ *****************************/

exports.getProducts = async (req, res, next) => {

    let cids;
    let products;

    const getProducts = await Products.fetchAll()
        .then(([rows]) => {
            products = rows;
            console.log(JSON.stringify(rows));

        })

    const getcids = await Cid.fetchAll()
        .then(([rows]) => {
            cids = rows;

        })
        .catch(err => console.log(err));

    res.render('products', {
        data: products,
        cid: cids
    });

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