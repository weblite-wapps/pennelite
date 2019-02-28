import User from '../models/User'

export const likePen = (user, _id) =>
  User.updateOne(
    { user },
    { user, $addToSet: { likes: _id } },
    { upsert: true },
  ).exec()
// console.log(
//   'title: ',
//   title,
//   'writer: ',
//   writer,
//   'html: ',
//   html,
//   'css: ',
//   css,
//   'js: ',
//   js,
//   '_id: ',
//   _id,
// )
// console.log('_id: ', typeof _id)

export const dislikePen = ({ user, _id }) =>
  User.updateOne({ user }, { $pop: _id }).exec()
