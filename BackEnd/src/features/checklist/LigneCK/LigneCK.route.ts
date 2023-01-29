import express from "express";
import { expressCallback } from "../../../middlewares";
import entetecheckListController from "./LigneCK.Controller";

const EnteteCKRouter = express.Router();

EnteteCKRouter.get("/", expressCallback(entetecheckListController.queryLignesCK));
EnteteCKRouter.delete("/:id", expressCallback(entetecheckListController.deleteLignesCK));
EnteteCKRouter.post("/", expressCallback(entetecheckListController.createLignesCK)
);
//update 
EnteteCKRouter.patch("/:id", expressCallback(entetecheckListController.updateLignesCK));


export default EnteteCKRouter;
