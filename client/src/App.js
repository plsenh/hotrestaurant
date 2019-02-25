import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NoMatch from './pages/NoMatch'
import Home from './pages/Home'
import Tables from './pages/Tables'
import Reserve from './pages/Reserve'
import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/tables' component={Tables} />
            <Route exact path='/reserve' component={Reserve} />

            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
