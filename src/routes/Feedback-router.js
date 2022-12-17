import Express from "express";
import {
  addFeedback,
  deleteFeedback,
  getAllFeedbacks,
  getSingleFeedback,
  updateFeedback,
} from "../controllers/Feedback-controller.js";

const feedbackRouter = Express.Router();

feedbackRouter.post("/feedbacks/new", addFeedback);
feedbackRouter.delete("/feedbacks/:id", deleteFeedback);
feedbackRouter.get("/feedbacks", getAllFeedbacks);
feedbackRouter.get("/feedbacks/:id", getSingleFeedback);
feedbackRouter.put("/feedback", updateFeedback);

export default feedbackRouter;
