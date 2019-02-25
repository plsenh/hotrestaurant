const router = require('express').Router()
const tablesRoutes = require('./tables')
const waitListRoutes = require('./waitlist')

// Book routes
router.use('/tables', tablesRoutes)
router.use('/waitlist', waitListRoutes)

module.exports = router
