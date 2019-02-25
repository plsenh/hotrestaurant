const router = require('express').Router()

const waitListData = require('../../data/waitingListData')

// Matches with "/api/tables"
router.route('/').get(function (req, res) {
  res.json(waitListData)
})

module.exports = router
