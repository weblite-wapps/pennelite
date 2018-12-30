// Modules
import React from 'react'
import { Provider } from 'react-redux'
import { Router } from '@reach/router'
// Setup
import store from './redux'

// Component
import RecentPens from '../components/Main/RecentPens/RecentPens.container'
import CreatePen from '../components/Main/CreatePen/CreatePen.container'
import Dashboard from '../components/Main/Dashboard/Dashboard.container'

export default () => (
  <Provider store={store}>
    <Router>
      <RecentPens path="/" />
      <Dashboard path="/Dashboard" />
      <CreatePen path="/CreatePen" />
    </Router>
  </Provider>
)
