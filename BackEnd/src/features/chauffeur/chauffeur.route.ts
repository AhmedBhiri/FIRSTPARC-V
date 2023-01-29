import express from "express";
import {  expressCallback } from "../../middlewares";
import chauffeurController from "./chauffeur.controller";

const chauffeurRouter = express.Router();

chauffeurRouter.get("/", expressCallback(chauffeurController.queryChauffeur));
 

export default chauffeurRouter;
