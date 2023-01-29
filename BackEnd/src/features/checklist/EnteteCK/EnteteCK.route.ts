import express from "express";
import { expressCallback } from "../../../middlewares";
import entetecheckListController from "./EnteteCK.controller";

const EnteteCKRouter = express.Router();

EnteteCKRouter.get("/", expressCallback(entetecheckListController.queryEnteteCheckList));
EnteteCKRouter.delete("/:id", expressCallback(entetecheckListController.deleteEnteteCheckList));
EnteteCKRouter.post("/", expressCallback(entetecheckListController.createEnteteCheckList)
);
//update 
EnteteCKRouter.patch("/:id", expressCallback(entetecheckListController.updateEnteteCheckList));


export default EnteteCKRouter;
