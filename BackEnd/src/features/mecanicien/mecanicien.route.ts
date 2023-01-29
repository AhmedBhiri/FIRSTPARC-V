import express from "express";
import {  expressCallback } from "../../middlewares";
import mecanicienController from "./mecanicien.controller";

const mecanicienRouter = express.Router();

mecanicienRouter.get("/", expressCallback(mecanicienController.queryMecanicien));
 

export default mecanicienRouter;
