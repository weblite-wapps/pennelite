// Modules
import React from 'react'
import { Provider } from 'react-redux'
// Setup
import store from './redux'
import './root.scss'
// Component
import App from '../components/App/App.container'

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
