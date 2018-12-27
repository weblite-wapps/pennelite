// Modules
import React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
// Setup
import store, { history } from './redux'
// Component
import App from '../components/Main/App.container.react'
// scssClasses
import scssClasses from './root.scss'

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className={scssClasses.container}>
        <App />
        <Route exact path="/" component={App} />
        <Route path="/CreatePen" component={App} />
      </div>
    </ConnectedRouter>
  </Provider>
)
