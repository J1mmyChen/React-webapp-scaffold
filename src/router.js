import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// import Header from './pages/header/header'
import Home from './pages/home/home'

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <Header /> */}
        <Route path="/" exact component={Home} />
      </BrowserRouter>
    )
  }
}

export default Router
