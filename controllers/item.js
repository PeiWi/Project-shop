// const moment = require('moment');

const item = require('../models/item');
// const Category = require('../models/category');

/* READ *****************************/

exports.getitems = (req, res, next) => {
    item.fetchAll()
        .then(([rows]) => {
            // for (let p of rows) {
            //     p.date = moment(p.date).format('MMM D, YYYY');
            // }
            console.log(JSON.stringify(rows, ["id", "pname", "price", "detail", "cname"]));
            // res.send(JSON.stringify(rows));
            res.render('item', {
                data: rows,
            });
        })
        .catch(err => console.log(err));
};

