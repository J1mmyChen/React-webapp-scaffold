import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { routerMiddleware } from 'react-router-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './controller/redux'
import Router from './router'

import './assets/less/layout.less'

const createHistory = require('history').createHashHistory

const history = createHistory() // 初始化history
const routerWare = routerMiddleware(history)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, routerWare))
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} />
  </Provider>,

  document.getElementById('index')
)
