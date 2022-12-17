import Joi from "joi";
import Feedback from "../models/Feedback.js";

const determineIfFeedbackExists = (feedback) => (value, helpers) => {
  if (!feedback) {
    return helpers.messages("There is no feedback with this ID");
  }
  return value;
};

const updateFeedbackSchema = async (data) => {
  const feedback = Feedback.findOne({ id: data.id });
  return Joi.object({
    title: Joi.string().min(3).required().messages({
      "string.base": "title should be a string",
      "string.min": "title should include 3 characters or more",
      "any.required": "title is required",
    }),
    description: Joi.string().min(3).required().messages({
      "string.base": "description should be a string",
      "string.min": "description should include 3 characters or more",
      "any.required": "description is required",
    }),
    category_id: Joi.number().required().messages({
      "number.base": "category id should be a number",
      "any.required": "category id is required",
    }),
    status_id: Joi.number().required().messages({
      "number.base": "category id should be a number",
      "any.required": "category id is required",
    }),
    id: Joi.number()
      .custom(determineIfFeedbackExists(feedback))
      .required()
      .messages({
        "number.base": "category id should be a number",
        "any.required": "category id is required",
      }),
  });
};

export default updateFeedbackSchema;
