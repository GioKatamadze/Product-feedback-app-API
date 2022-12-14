import Express from "express";
import getAllStatuses from "../controllers/Status-controller.js";

const statusRouter = Express.Router();

statusRouter.get("/status", getAllStatuses);

export default statusRouter;
