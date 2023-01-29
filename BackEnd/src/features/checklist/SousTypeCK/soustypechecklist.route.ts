import express from "express";
import {  expressCallback } from "../../../middlewares";
import soustypecheckListController from "./soustypechecklist.controller";

const soustypecheckListRouter = express.Router();

soustypecheckListRouter.get("/", expressCallback(soustypecheckListController.querySousTypeCheckList));
soustypecheckListRouter.delete("/:id", expressCallback(soustypecheckListController.deleteSousTypeCheckList));
soustypecheckListRouter.post("/", expressCallback(soustypecheckListController.createSousTypeCheckList)
);
//update 
soustypecheckListRouter.patch("/:id", expressCallback(soustypecheckListController.updateSousTypeCheckList));


export default soustypecheckListRouter;
