import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    return <h5>Home</h5>
  }
}

export default connect()(Home)
