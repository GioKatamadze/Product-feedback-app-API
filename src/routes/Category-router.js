import Express from "express";
import { getAllCategories } from "../controllers/Category-controller.js";

const categoryRouter = Express.Router();

categoryRouter.get("/categories", getAllCategories);

export default categoryRouter;
