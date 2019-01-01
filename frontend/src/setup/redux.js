// modules
import { createStore, combineReducers } from 'redux'

// reducers
import RecentPensReducer from '../components/Main/RecentPens/RecentPens.reducer'
import CreatePenReducer from '../components/Main/CreatePen/CreatePen.reducer'
// epics

/* eslint-disable no-underscore-dangle */
const store = createStore(
  combineReducers({
    RecentPens: RecentPensReducer,
    CreatePen: CreatePenReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
/* eslint-enable */

export const { dispatch, getState } = store
export default store
