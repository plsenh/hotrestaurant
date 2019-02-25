import React from 'react'
import { Container } from '../components/grid'
import { Jumbotron } from '../components/container'
import { Input, FormBtn } from '../components/form'
import { Redirect } from 'react-router-dom'
import API from '../api/API'

export default class Reserve extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      customerName: '',
      customerId: '',
      phone: '',
      email: '',
      redirect: false
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    if (this.state.customerName && this.state.customerId) {
      API.saveTable({
        customerName: this.state.customerName,
        customerID: this.state.customerId,
        phoneNumber: this.state.phone,
        customerEmail: this.state.email
      })
        .then(() => {
          this.setState({ redirect: true })
        })
        .catch(err => console.log(err))
    }
  }

  _renderRedirect = () => {
    return <Redirect to='/tables' />
  }

  render () {
    if (this.state.redirect) {
      return this._renderRedirect()
    } else {
      return (
        <Container>
          <Jumbotron headerName='Hot Restaurant' lead='Make your reservation'>
            <div className='text-center'>
              <a href='/tables'>
                <button className='btn btn-lg btn-primary'>
                  <span className='fa fa-list-alt' /> View Tables
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
                <div className='card-header'>Table Reservation</div>
                <div className='card-body'>
                  <form>
                    <div className='form-group'>
                      <label for='reserve-name'>Name</label>
                      <Input
                        value={this.state.customerName}
                        onChange={this.handleInputChange}
                        name='customerName'
                        placeholder='Customer Name...'
                      />
                    </div>
                    <div className='form-group'>
                      <label for='reserve-phone'>Phone Number</label>
                      <Input
                        value={this.state.phone}
                        onChange={this.handleInputChange}
                        name='phone'
                        placeholder='Phone Number...'
                      />
                    </div>
                    <div className='form-group'>
                      <label for='reserve-email'>Email</label>
                      <Input
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        name='email'
                        placeholder='Email...'
                      />
                    </div>
                    <div className='form-group'>
                      <label for='reserve-unique-id'>Unique ID</label>
                      <Input
                        value={this.state.customerId}
                        onChange={this.handleInputChange}
                        name='customerId'
                        placeholder='Customer ID...'
                      />
                    </div>
                    <FormBtn
                      disabled={
                        !(this.state.customerId && this.state.customerName)
                      }
                      onClick={this.handleFormSubmit}
                    >
                      Submit Reservation
                    </FormBtn>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Container>
      )
    }
  }
}
