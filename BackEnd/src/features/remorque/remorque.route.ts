import express from "express";
import {  expressCallback } from "../../middlewares";
import remorqueController from "./remorque.controller";

const remorqueRouter = express.Router();

remorqueRouter.get("/", expressCallback(remorqueController.queryremorque));
 

export default remorqueRouter;
