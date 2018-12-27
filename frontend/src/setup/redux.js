// modules
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createMemoryHistory'
// reducers
import AppReducer from '../components/Main/App.reducer'
// epics

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
/* eslint-enable */

// redux observable
const rootEpic = combineEpics()
const epicMiddleware = createEpicMiddleware(rootEpic)

const store = createStore(
  combineReducers({
    App: AppReducer,
    router: routerReducer,
  }),
  composeEnhancers(applyMiddleware(middleware, epicMiddleware)),
)

export const { dispatch, getState } = store
export default store
// window.store = store
