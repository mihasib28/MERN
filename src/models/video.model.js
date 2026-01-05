import mongoose, {Schema} from "mongoose";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema(
  {
    videoFile:{
        type: String, // cloudinary url
        required: true,
        default: ""
    },
    title: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      default: ""
    },

    videoUrl: {
      type: String,
      required: true
    },

    thumbnail: {
      type: String,
      required: true,
      default: ""
    },

    duration: {
      type: Number, // in seconds cloudinary
      default: 0,
      required: true
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    views: {
      type: Number,
      default: 0
    },

    isPublished: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true // createdAt & updatedAt
  }
);

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Apply the plugin to your schema
userSchema.plugin(aggregatePaginate);

module.exports = mongoose.model("Video", videoSchema);
