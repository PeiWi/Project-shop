// const moment = require('moment');

const Post = require('../models/post');
// const Category = require('../models/category');

/* READ *****************************/

exports.getPosts = (req, res, next) => {
    Post.fetchAll()
        .then(([rows]) => {
            // for (let p of rows) {
            //     p.date = moment(p.date).format('MMM D, YYYY');
            // }
            console.log(JSON.stringify(rows, ["id", "pname", "price", "detail", "cname"]));
            // res.send(JSON.stringify(rows));
            res.render('posts', {
                data: rows,
                title: 'Post List',
            });
        })
        .catch(err => console.log(err));
};

exports.getItemPosts = async(req, res, next) => {

    let post;

    const findItemById = await Post.findById(req.query.id)
        .then(([rows]) => {
            post = rows;
        })
        .catch(err => console.log(err));

    console.log('item: ', JSON.stringify(post[0].date));

    res.render('item', {
        data: post,
    });

};

