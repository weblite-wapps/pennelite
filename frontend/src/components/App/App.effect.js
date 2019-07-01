import { combineEpics, ofType } from 'redux-observable'
import { CHANGE_MENU_MODE, dispatchSetAnchorEl } from './App.action'
import { pluck, tap, ignoreElements } from 'rxjs/operators'

const effectMenuButtonClick = action$ =>
  action$.pipe(
    ofType(CHANGE_MENU_MODE),
    pluck('payload'),
    tap(dispatchSetAnchorEl),
    ignoreElements(),
  )

export default combineEpics(effectMenuButtonClick)
