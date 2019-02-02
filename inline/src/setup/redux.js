// modules
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'

// reducers
import AppReducer from '../components/App/App.reduer'

// epics
import AppEpic from '../components/App/App.effect'

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'pennelite-inline',
      })
    : compose
/* eslint-enable */

const rootEpic = combineEpics(AppEpic)
const epicMiddleware = createEpicMiddleware()

const store = createStore(
  combineReducers({
    App: AppReducer,
  }),
  composeEnhancers(applyMiddleware(epicMiddleware)),
)
// composeEnhancers(applyMiddleware(epicMiddleware)),

epicMiddleware.run(rootEpic)

export const { dispatch, getState } = store
export default store
