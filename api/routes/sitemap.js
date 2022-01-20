const router = require('express').Router()
const { sitemap } = require('../controllers/sitemap')

router.get('/', sitemap)

module.exports = router
