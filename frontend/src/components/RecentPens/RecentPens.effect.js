import { ofType } from 'redux-observable'
import { mergeMap, pluck, map } from 'rxjs/operators'
import { FETCH_RECENT_PENS, setRecentPens } from './RecentPens.action'
import { getRequests } from '../../helper/functions/request.helper'

const effectFetchRecentPensEpic = action$ =>
  action$.pipe(
    ofType(FETCH_RECENT_PENS),
    mergeMap(() => getRequests('/').catch(console.log)),
    pluck('body'),
    map(setRecentPens),
  )

export default effectFetchRecentPensEpic
