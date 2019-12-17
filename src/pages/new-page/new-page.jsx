import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewPage extends Component {
  render() {
    return <h5>NewPage</h5>
  }
}

export default connect()(NewPage)
