import axios from 'axios'

export default {
  // Gets all the tables
  getTables: function () {
    return axios.get('/api/tables')
  },
  // Gets the waitlist
  getWaitlist: function () {
    return axios.get('/api/waitlist')
  },
  saveTable: function (table) {
    return axios.post('/api/tables', table)
  }
}
