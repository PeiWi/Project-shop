var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var dashboardRouter = require('./routes/dashboard');
// var usersRouter = require('./routes/users');
// var accountRouter = require('./routes/account');
const postRouter = require('./routes/post');
const aboutRouter = require('./routes/about');
const contactRouter = require('./routes/contact');
const adminRouter = require('./routes/admin');
const itemRouter = require('./routes/item');
const productsRouter = require('./routes/products');
const categoryRouter = require('./routes/category');
const chartsRouter = require('./routes/charts');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', dashboardRouter);
app.use('/contact', contactRouter);
app.use('/post', postRouter);
app.use('/about', aboutRouter);
app.use('/admin', adminRouter);
app.use('/item', itemRouter);
app.use('/products', productsRouter);
app.use('/category', categoryRouter);
app.use('/charts', chartsRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;