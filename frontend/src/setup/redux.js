// modules
import { createStore, combineReducers } from 'redux'

// reducers
import RecentPensReducer from '../components/Main/RecentPens/RecentPens.reducer'
// epics

const store = createStore(
  combineReducers({
    RecentPens: RecentPensReducer,
  }),
)

export const { dispatch, getState } = store
export default store
