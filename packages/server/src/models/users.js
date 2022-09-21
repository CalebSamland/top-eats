import mongoose, { Mongoose } from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const userSchema = new Mongoose.Schema(
  {
    firstName: {
      type: String,
      unique: true,
      required: true,
    },
    lastName: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    zip: {
      type: Number,
      unique: true,
      required: true,
    },
    profile_image: {
      type: String,
      default: "packages/client/public/defaultavatar.jpeg",
      required: true,
    },
    birthday: {
      type: String,
      required: false,
    },
    reviews: [
      {
        type: ObjectId,
      },
    ],
    savedRestaurants: [
      {
        type: ObjectId,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;