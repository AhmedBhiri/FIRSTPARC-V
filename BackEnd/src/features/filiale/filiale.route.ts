import express from "express";
import {  expressCallback } from "../../middlewares";
import filialeController from "./filiale.controller";

const filialeRouter = express.Router();

filialeRouter.get("/", expressCallback(filialeController.queryfiliale));
 
export default filialeRouter;
