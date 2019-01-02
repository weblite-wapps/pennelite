// import rxjs from 'rxjs'
import { combineEpics, ofType } from 'redux-observable'
import { ignoreElements, tap } from 'rxjs/operators'
import { SAVE_PEN, dispatchSavePen } from './CreatePen.action'

const effectSavePenEpic = action$ =>
  action$.pipe(
    ofType(SAVE_PEN),
    tap(console.log('in effect')),
    ignoreElements(),
  )

// console.log('in effect')

export default combineEpics(effectSavePenEpic)
