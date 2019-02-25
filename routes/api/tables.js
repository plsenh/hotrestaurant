const router = require('express').Router()

const tableData = require('../../data/tableData')
const waitListData = require('../../data/waitingListData')

// Matches with "/api/tables"
router
  .route('/')
  .get(function (req, res) {
    res.json(tableData)
  })
  .post(function (req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    if (tableData.length < 5) {
      tableData.push(req.body)
      res.json(true)
    } else {
      waitListData.push(req.body)
      res.json(false)
    }
  })

module.exports = router
