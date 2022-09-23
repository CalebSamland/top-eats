import mongoose from "mongoose";
import { ObjectId } from mongoose.Schema.Types

const reviewSchema = new mongoose.Schema (
  {
    author: {
      type: {ObjectId},
      ref: 'User'
    },
    usersProfileImage: {
      type: {ObjectId},
      ref: 'User',
    },
    reviewBody: {
      type: String,
      required: true,

    },
    rating: {
      type: Number,
      required: true,
    },
    created: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
)

const Review = mongoose.model('Review', reviewSchema)

export default Review