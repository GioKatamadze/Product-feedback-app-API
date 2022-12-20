import mongoose from "mongoose";

const { Schema } = mongoose;

const commentSchema = new Schema({
  content: {
    type: Schema.Types.String,
    required: true,
  },
  feedback_id: {
    type: Schema.Types.Number,
    required: true,
  },
  user_id: {
    type: Schema.Types.Number,
    required: true,
  },
  id: {
    type: Schema.Types.Number,
    required: true,
  },
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
