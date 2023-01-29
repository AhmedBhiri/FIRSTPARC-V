import express from "express";
import {  expressCallback } from "../../middlewares";
import vehiculeController from "./vehicule.controller";

const vehiculeRouter = express.Router();

 vehiculeRouter.get("/", expressCallback(vehiculeController.queryVehicule));
 

export default vehiculeRouter;
