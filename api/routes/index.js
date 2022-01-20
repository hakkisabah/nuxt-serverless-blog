const router = require('express').Router()
router.use('/sitemap', require('./sitemap'))
router.use('/blogs', require('./blogs'))
router.use('/metas', require('./metas'))

module.exports = router
