const router = require('express').Router()
const { defaultMetas } = require('../controllers/metas')

router.get('/getdefault', defaultMetas)

module.exports = router
