import express from "express";
import {  expressCallback } from "../../../middlewares";
import typecheckListController from "./typechecklist.controller";

const typecheckListRouter = express.Router();

typecheckListRouter.get("/", expressCallback(typecheckListController.queryTypeCheckList));
typecheckListRouter.delete("/:id", expressCallback(typecheckListController.deleteTypeCheckList));
typecheckListRouter.post("/", expressCallback(typecheckListController.createTypeCheckList)
);
//update 
typecheckListRouter.patch("/:id", expressCallback(typecheckListController.updateTypeCheckList));


export default typecheckListRouter;
