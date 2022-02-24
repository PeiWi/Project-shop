
const Category = require('../models/category');


/* READ *****************************/

exports.getCategories = async (req, res, next) => {
    Category.fetchAll()
        .then(([rows]) => {
            console.log(JSON.stringify(rows, ["id", "cname"]));
            res.render('category', {
                data: rows,
            });
        })
        .catch(err => console.log(err));
};

exports.getEditCategory = async (req, res, next) => {

    let categories;

    const getcategories = await Category.fetchAll()
        .then(([rows]) => {
            categories = rows;
        })

    const findCategoryById = await Category.findCategoryById(req.query.id)
        .then(([rows]) => {
            category = rows;
        })
        .catch(err => console.log(err));

    // console.log('products: ', JSON.stringify(products[0].date));

    res.render('editsCA', {
        data: categories,
    });

};

exports.postAddCategory = (req, res, next) => {

    Category.add(req, res)
        .then(([rows]) => {
            res.redirect('/category');
        })
        .catch(err => console.log(err));
};



exports.postUpdatecategory = (req, res, next) => {

    Category.updateById(req, res)
        .then(([rows]) => {
            res.redirect('/category');
        })
        .catch(err => console.log(err));
};

exports.getDeletecategory = (req, res, next) => {
    Category.deleteById(req.query.id)
        .then(([rows]) => {
            res.redirect('/category');
        })
        .catch();
};