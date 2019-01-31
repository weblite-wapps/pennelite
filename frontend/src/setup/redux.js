// modules
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'

// reducers
import RecentPensReducer from '../components/Main/RecentPens/RecentPens.reducer'
import CreatePenReducer from '../components/Main/CreatePen/CreatePen.reducer'
import DashboardReducer from '../components/Main/Dashboard/Dashboard.reducer'
import AppReducer from '../components/Main/App/App.reducer'

// epics
import CreatePensEffect from '../components/Main/CreatePen/CreatePen.effect'
import RecentPensEffect from '../components/Main/RecentPens/RecentPens.effect'
import DashboardEffect from '../components/Main/Dashboard/Dashboard.effect'

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'pennelite',
      })
    : compose
/* eslint-enable */

const rootEpic = combineEpics(
  CreatePensEffect,
  DashboardEffect,
  RecentPensEffect,
)
const epicMiddleware = createEpicMiddleware()

const store = createStore(
  combineReducers({
    RecentPens: RecentPensReducer,
    CreatePen: CreatePenReducer,
    Dashboard: DashboardReducer,
    App: AppReducer,
  }),
  composeEnhancers(applyMiddleware(epicMiddleware)),
)
// composeEnhancers(applyMiddleware(epicMiddleware)),

epicMiddleware.run(rootEpic)

export const { dispatch, getState } = store
export default store
