import * as R from 'ramda'
import { combineEpics, ofType } from 'redux-observable'
import { tap, mergeMap, ignoreElements, map } from 'rxjs/operators'
import { FETCH_RECENT_PENS, dispatchSetRecentPens } from './RecentPens.action'
import // CHANGE_HTML_CODE,
// dispatchChangeHtmlCode,
'../CreatePen/CreatePen.action'
import { getRequests } from '../../../helper/functions/request.helper'

const effectFetchRecentPensEpic = action$ =>
  action$.pipe(
    ofType(FETCH_RECENT_PENS),
    mergeMap(() =>
      getRequests('/')
        .then(Promise.resolve('Dummy response to keep the console quiet'))
        .catch(() => console.log("can't get from server")),
    ),
    map(R.prop('body')),
    tap(dispatchSetRecentPens),
    ignoreElements(),
  )

export default combineEpics(effectFetchRecentPensEpic)