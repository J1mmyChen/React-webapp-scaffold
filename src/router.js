import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Footer from './pages/footer/footer'
import Home from './pages/home/home'
import NewPage from './pages/new-page/new-page'
import { setHistory } from './controller/redux/storage'

class Router extends Component {
  constructor(props) {
    super(props)
    console.log('props', props)
  }

  componentDidUpdate(prevProps) {
    const { history, dispatch } = this.props

    if (prevProps.history !== history) {
      dispatch(setHistory(history.location))
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/new-page" exact component={NewPage} />
        <Footer />
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (store) => {
  console.log('store :', store)
}

export default connect(mapStateToProps)(Router)
