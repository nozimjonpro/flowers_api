const auth = require('./admin/router.js');
const categories = require('./category/router.js');
const product = require('./product/router.js')
const news = require('./news/router.js')
const banners = require('./banner/router.js')

module.exports = [
    auth, categories, product, news, banners
]