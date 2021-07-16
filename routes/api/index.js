const router = require('express').Router();
const API = require('./api')

router.get('/getproducts/:name?', API.getAll)
router.post('/add', API.addOne)

module.exports = router