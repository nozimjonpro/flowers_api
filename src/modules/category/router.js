const router = require('express').Router()

const controller = require('./controller.js')

router.get('/categories', controller.GET);
router.get('/categories/:categoryId', controller.GET);
router.post('/categories', controller.POST);
router.delete('/categories/:categoryId', controller.DELETE);
router.put('/categories/:categoryId', controller.PUT);

module.exports = router 