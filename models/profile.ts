import { model, Schema, Model, Document } from 'mongoose'

export {
  Profile
}

interface MProfile extends Document {
    email: string;
    name: string;
    avatar: string;
  }
  

const profileSchema: Schema  = new Schema(
  {
    email: String,
    name: String,
    avatar: {
      type: String,
      default: '/images/Account/user.svg'
    },
    balance: Number,
    friends: [{type: Schema.Types.ObjectId, ref: "Profile"}],
    payment: [{type: Schema.Types.ObjectId, ref: "Media"}],
    event:[{type: Schema.Types.ObjectId, ref: "Review"}],
  },
  {
    timestamps: true,
  }
)

const Profile: Model<MProfile> = model('Profile', profileSchema)
