// import rxjs from 'rxjs'
import { combineEpics, ofType, filter } from 'redux-observable'
import { ignoreElements, tap } from 'rxjs/operators'
import { SAVE_PEN, CHANGE_HTML_CODE } from './CreatePen.action'
import { codesView } from './CreatePen.reducer'

import { postRequests } from '../../../helper/functions/request.helper'

const effectSavePenEpic = action$ =>
  action$.pipe(
    ofType(SAVE_PEN),
    tap(() =>
      postRequests('/updateCurrentPen')
        .send(codesView())
        .then(res => console.log('res: ', res))
        .catch(() => console.log("couldn't update")),
    ),
    ignoreElements(),
  )

export default combineEpics(effectSavePenEpic)
