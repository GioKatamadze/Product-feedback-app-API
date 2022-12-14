import Express from "express";
import {
  addFeedback,
  getAllFeedbacks,
} from "../controllers/Feedback-controller.js";

const feedbackRouter = Express.Router();

feedbackRouter.get("/feedbacks", getAllFeedbacks);
feedbackRouter.post("/feedbacks/new", addFeedback);

export default feedbackRouter;
