import Comment from "../models/Comment.js";
import Feedback from "../models/Feedback.js";
import Reply from "../models/Reply.js";
import addCommentSchema from "../schemas/add-comment-schema.js";
import addReplySchema from "../schemas/add-reply-schema.js";

export const addComment = async (req, res) => {
  const { body } = req;

  const validator = await addCommentSchema(body);
  const { value: data, error } = validator.validate(body);
  if (error) {
    return res.status(401).json(error.details);
  }
  const { content, feedbackId, userId } = data;

  const lastComment = await Comment.find().sort({ _id: -1 }).limit(1);
  const id = lastComment.length > 0 ? lastComment[0].id + 1 : 1;
  const newComment = {
    content,
    feedbackId,
    userId,
    id,
  };

  await Comment.create({ ...newComment });
  const feedback = await Feedback.findOne({ id: feedbackId });
  await feedback.update({
    commentAmount: feedback.commentAmount + 1,
  });
  return res.status(201).json({ ...newComment });
};

export const addReply = async (req, res) => {
  const { body } = req;

  const validator = await addReplySchema(body);
  const { value: data, error } = validator.validate(body);
  if (error) {
    return res.status(401).json(error.details);
  }

  const { content, feedbackId, userId, commentId, replyingTo } = data;

  const lastReply = await Reply.find().sort({ _id: -1 }).limit(1);
  const id = lastReply.length > 0 ? lastReply[0].id + 1 : 1;

  const newReply = {
    content,
    replyingTo,
    feedbackId,
    commentId,
    userId,
    id,
  };

  await Reply.create({ ...newReply });
  const feedback = await Feedback.findOne({ id: feedbackId });
  await feedback.update({
    commentAmount: feedback.commentAmount + 1,
  });
  return res.status(201).json({ ...newReply });
};
