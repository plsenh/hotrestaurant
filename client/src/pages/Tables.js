import React from 'react'
import { Container } from '../components/grid'
import { Jumbotron } from '../components/container'
import API from '../api/API'

export default class Tables extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tables: [],
      waitList: []
    }
  }

  componentDidMount = async () => {
    const tables = await API.getTables()
    const waitList = await API.getWaitlist()
    console.log(JSON.stringify(tables.data))
    this.setState({
      tables: tables.data,
      waitList: waitList.data
    })
  }

  render () {
    return (
      <Container>
        <Jumbotron
          headerName='Hot Restaurant'
          lead='Current Reservations and Waiting List'
        >
          <div className='text-center'>
            <a href='/reserve'>
              <button className='btn btn-lg btn-danger'>
                <span className='fa fa-credit-card' /> Make Reservation
              </button>
            </a>
            <a href='/'>
              <button className='btn btn-lg btn-default'>
                <span className='fa fa-home' />
              </button>
            </a>
          </div>
        </Jumbotron>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='card'>
              <div className='card-header'>
                <h4>Current Reservations</h4>
              </div>
              <div className='card-body'>
                <ul id='tableList' className='list-group'>
                  {this.state.tables.map((table, index) => {
                    return (
                      <li className='list-group-item mt-4' key={index}>
                        <h2>Table #{index + 1}</h2>
                        <h2>Customer ID: {table.customerID}</h2>
                        <h2>Customer: {table.customerName}</h2>
                        <h2>Email: {table.customerEmail}</h2>
                        <h2>Phone: {table.phoneNumber}</h2>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>

            <div className='card mt-4'>
              <div className='card-header'>
                <h4>Waiting List</h4>
              </div>
              <div className='card-body'>
                {this.state.waitList.map((table, index) => {
                  return (
                    <li className='list-group-item mt-4' key={index}>
                      <h2>Table #{index + 1}</h2>
                      <h2>Customer ID: {table.customerID}</h2>
                      <h2>Customer: {table.customerName}</h2>
                      <h2>Email: {table.customerEmail}</h2>
                      <h2>Phone: {table.phoneNumber}</h2>
                    </li>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    )
  }
}
