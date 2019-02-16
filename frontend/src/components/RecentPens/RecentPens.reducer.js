// modules
import * as R from 'ramda'
// local modules
import { getState } from '../../setup/redux'
import {
  SET_RECENT_PENS,
  SET_SEARCH_IS_SHOWN,
  SET_MENU_IS_SHOWN,
  SET_CLOSE_MENU,
} from './RecentPens.action'

// state
const initialState = {
  recentPens: [],
  menuIsShown: false,
  searchIsShown: false,
}

// lens
const recentPensLens = R.lensProp('recentPens')
const menuIsShownLens = R.lensProp('menuIsShown')
const searchIsShownLens = R.lensProp('searchIsShown')

// views
export const pensView = () => R.path(['RecentPens', 'recentPens'])(getState())
export const menuIsShownView = () =>
  R.path(['RecentPens', 'menuIsShown'])(getState())
export const searchIsShownView = () =>
  R.path(['RecentPens', 'searchIsShown'])(getState())

// reducers
const reducers = {
  [SET_RECENT_PENS]: (state, { pens }) => R.set(recentPensLens, pens, state),

  [SET_CLOSE_MENU]: state => R.set(menuIsShownLens, false, state),

  [SET_MENU_IS_SHOWN]: state =>
    R.set(menuIsShownLens, !state.menuIsShown, state),

  [SET_SEARCH_IS_SHOWN]: state =>
    R.set(searchIsShownLens, !state.searchIsShown, state),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
