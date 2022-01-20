const router = require('express').Router()
const { blogs } = require('../controllers/blogs')

router.get('/', blogs)

module.exports = router
