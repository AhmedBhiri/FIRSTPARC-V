import express from "express";
import { expressCallback } from "../../../middlewares";
import checkListController from "./checklist.controller";

const checkListRouter = express.Router();

checkListRouter.get("/Rows/:id", expressCallback(checkListController.queryCheckListByCode));
checkListRouter.get("/Rows/", expressCallback(checkListController.queryCheckList));
checkListRouter.get("/lastRow/", expressCallback(checkListController.queryCheckListLastRow));/////
checkListRouter.get("/count/", expressCallback(checkListController.queryCountCK));
checkListRouter.delete("/Rows/:id", expressCallback(checkListController.deleteCheckList));
checkListRouter.post("/Rows/", expressCallback(checkListController.createCheckList)
);
//update 
checkListRouter.patch("/:id", expressCallback(checkListController.updateCheckList));


export default checkListRouter;
