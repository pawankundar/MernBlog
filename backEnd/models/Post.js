const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
    },
    categories: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.export = mongoose.model("Post", PostSchema);
