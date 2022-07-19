const router = require('express').Router()

const controller = require('./controller.js')

router.get('/news', controller.GET);
router.get('/news/:newsId', controller.GET);
router.post('/news', controller.newsImage, controller.POST);
router.delete('/news/:newsId', controller.DELETE);
router.put('/news/:newsId', controller.PUT);




module.exports = router 