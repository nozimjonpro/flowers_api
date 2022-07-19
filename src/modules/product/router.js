const router = require('express').Router()

const controller = require('./controller.js')

router.get('/products', controller.GET);
router.get('/products/:productId', controller.GET);
router.post('/products', controller.POST);
router.delete('/products/:productId', controller.DELETE);
router.put('/products/:productId', controller.PUT);
router.post('/products/:productId/images', controller.imagesUploads, controller.POSTIMAGE);



module.exports = router 