import Joi from "joi";
import Category from "../models/Category.js";

const checkCategory = (document) => (value, helpers) => {
  if (!document) {
    return helpers.messages("there is no category with this id");
  }

  return value;
};

const addFeedbackSchema = async (data) => {
  const category = await Category.findOne({ id: data.category_id });
  return Joi.object({
    title: Joi.string().min(3).required().messages({
      "string.base": "Title should be a string",
      "string.min": "Title should include 3 characters or more",
      "any.required": "Title is required",
    }),
    description: Joi.string().min(3).required().messages({
      "string.base": "Description should be a string",
      "string.min": "Description should include 3 characters or more",
      "any.required": "Description is required",
    }),
    category_id: Joi.number()
      .custom(checkCategory(category))
      .required()
      .messages({
        "number.base": "category_id should be a string",
        "any.required": "category_id is required",
      }),
  });
};

export default addFeedbackSchema;
