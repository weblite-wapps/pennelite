import * as R from 'ramda'
import { combineEpics, ofType } from 'redux-observable'
import { ignoreElements, tap, mergeMap, map } from 'rxjs/operators'
import { FETCH_PEN, dispatchSetPen } from './App.action'
import { getRequests } from '../../helper/request.helper'

const effectInitPenEpic = action$ =>
  action$.pipe(
    ofType(FETCH_PEN),
    map(R.prop('payload')),
    mergeMap(({ _id }) =>
      getRequests('/fetchSinglePen')
        .query({ _id })
        .catch(() => console.log('couldnt fetch')),
    ),
    map(R.prop('body')),
    tap(console.log),
    tap(dispatchSetPen),
    ignoreElements(),
  )
//
export default combineEpics(effectInitPenEpic)
