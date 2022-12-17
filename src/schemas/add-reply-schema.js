import Joi from "joi";
import Feedback from "../models/Feedback.js";
import User from "../models/User.js";
import Comment from "../models/Comment.js";

const determineIfUserExist = (user) => (value, helpers) => {
  if (!user) {
    return helpers.messages("There is no user with this ID");
  }
  return value;
};
const determineIfFeedbackExist = (feedback) => (value, helpers) => {
  if (!feedback) {
    return helpers.messages("There is no user with this ID");
  }
  return value;
};
const determineIfCommentExist = (comment) => (value, helpers) => {
  if (!comment) {
    return helpers.messages("There is no user with this ID");
  }
  return value;
};

const addreplySchema = async (data) => {
  const user = await User.findOne({ id: data.userId });
  const feedback = await Feedback.findOne({ id: data.feedbackId });
  const comment = await Comment.findOne({ id: data.commentId });

  return Joi.object({
    content: Joi.string().min(4).required().messages({
      "string.base": "content should be a string",
      "string.min": "content should include 4 characters or more",
      "any.required": "content is required",
    }),
    replyingTo: Joi.string().required().messages({
      "string.base": "content should be a string",
      "any.required": "content is required",
    }),
    feedbackId: Joi.number()
      .custom(determineIfFeedbackExist(feedback))
      .required()
      .messages({
        "number.base": "feedback id should be a number",
        "any.required": "feedback id is required",
      }),
    commentId: Joi.number()
      .custom(determineIfCommentExist(comment))
      .required()
      .messages({
        "number.base": "comment id should be a number",
        "any.required": "comment id is required",
      }),
    userId: Joi.number()
      .custom(determineIfUserExist(user))
      .required()
      .messages({
        "number.base": "user id should be a number",
        "any.required": "user id is required",
      }),
  });
};

export default addreplySchema;
