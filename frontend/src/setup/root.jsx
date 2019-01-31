// Modules
import React from 'react'
import { Provider } from 'react-redux'
import {
  Router,
  LocationProvider,
  createHistory,
  createMemorySource,
} from '@reach/router'
// Setup
import store from './redux'

// Component
import RecentPens from '../components/Main/RecentPens/RecentPens.container'
import CreatePen from '../components/Main/CreatePen/CreatePen.container'
import Dashboard from '../components/Main/Dashboard/Dashboard.container'
import App from '../components/Main/App/App.container'

const source = createMemorySource()
const history = createHistory(source)

export default () => (
  <Provider store={store}>
    <LocationProvider history={history}>
      <App />
      <Router>
        <RecentPens path="/" />
        <Dashboard path="/Dashboard" />
        <CreatePen path="/CreatePen" />
      </Router>
    </LocationProvider>
  </Provider>
)
