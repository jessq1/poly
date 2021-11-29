import { Profile } from "../models/profile.js"

export {
  index,
}

function index(res) {
  Profile.find({})
  .populate('media')
  .populate('friends')
  .then(profiles => {
    res.json(profiles)
  })
}

