import * as R from 'ramda'
import { ofType, combineEpics } from 'redux-observable'
import { ignoreElements, tap, map, mergeMap } from 'rxjs/operators'
import { FETCH_USER_PENS, dispatchSetUserPens } from './Dashboard.action'
import { getRequests } from '../../../helper/functions/request.helper'

const effectFetchUserPensEpic = action$ =>
  action$.pipe(
    ofType(FETCH_USER_PENS),
    map(R.prop('payload')),
    mergeMap(user =>
      getRequests('/fetchUserPens')
        .query(user)
        .catch(console.log("couldm't find user pens :")),
    ),
    map(R.prop('body')),
    tap(dispatchSetUserPens),
    ignoreElements(),
  )

export default combineEpics(effectFetchUserPensEpic)
