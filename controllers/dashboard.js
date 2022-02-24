// const moment = require('moment');

const Post = require('../models/post');
// const Category = require('../models/category');
// const User = require('../models/user');

exports.getDashboard = async (req, res, next) => {

  let posts;

  try {
    const getPosts = await Post.fetchAll()
      .then(([rows]) => {
    //     for (let p of rows) {
    //       p.date = moment(p.date).format('MMM D, YYYY');
    //     }
        posts = rows;
      })

    // const getCategories = await Category.fetchAll()
    //   .then(([rows]) => {
    //     // for (let p of rows) {
    //     //   p.date = moment(p.date).format('MMM D, YYYY');
    //     // }
    //     categories = rows;
    //   })

    // const getCategoryCount = await Category.getCount()
    //   .then(([rows]) => {
    //     categoryCount = rows[0].count;
    //   })

    // const getUserCount = await User.getCount()
    //   .then(([rows]) => {
    //     userCount = rows[0].count;
    //     console.log('user count 1: ', userCount);
    //   })

    let data = {
      posts: posts,
    //   categories: categories,
    //   categoryCount: categoryCount,
    //   userCount: userCount
    }

    console.log(JSON.stringify(data));
    //res.send(JSON.stringify(data));

    res.render('dashboard', {
      title: 'Dashboard',
      color: 'btn-primary',
      icon: 'fa-cog',
      data: posts,
    //   categories: categories,
    //   categoryCount: categoryCount,
    //   userCount: userCount
    });

  } catch (err) {
    console.log(err);
  };

};