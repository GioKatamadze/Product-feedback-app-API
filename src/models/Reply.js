import mongoose from "mongoose";

const { Schema, model } = mongoose;

const replySchema = new Schema({
  content: {
    type: Schema.Types.String,
    required: true,
  },
  replyingTo: {
    type: Schema.Types.String,
    required: true,
  },
  feedbackId: {
    type: Schema.Types.Number,
    required: true,
  },
  commentId: {
    type: Schema.Types.Number,
    required: true,
  },
  userId: {
    type: Schema.Types.Number,
    required: true,
  },
  id: {
    type: Schema.Types.Number,
    required: true,
  },
});

const Reply = mongoose.model("Reply", replySchema);

export default Reply;
