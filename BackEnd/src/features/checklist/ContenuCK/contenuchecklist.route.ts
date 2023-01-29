import express from "express";
import {  expressCallback } from "../../../middlewares";
import contenucheckListController from "./contenuchecklist.controller";

const contenucheckListRouter = express.Router();

contenucheckListRouter.get("/", expressCallback(contenucheckListController.queryContenuCheckList));
contenucheckListRouter.delete("/:id", expressCallback(contenucheckListController.deleteContenuCheckList));
contenucheckListRouter.post("/", expressCallback(contenucheckListController.createContenuCheckList)
);
//update 
contenucheckListRouter.patch("/:id", expressCallback(contenucheckListController.updateContenuCheckList));


export default contenucheckListRouter;
