const router = require('express').Router()
const controller = require('./controller.js')

router.get('/banners', controller.GET);
router.get('/banners/:bannerId', controller.GET);
router.post('/banners', controller.imagesUploads, controller.POST)
router.delete('/banners/:bannerId', controller.DELETE)
router.put('/banners/:bannerId', controller.imagesUploads, controller.PUT)


module.exports = router