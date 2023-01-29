"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var middlewares_1 = require("../../../middlewares");
var checklist_controller_1 = __importDefault(require("./checklist.controller"));
var checkListRouter = express_1["default"].Router();
checkListRouter.get("/", (0, middlewares_1.expressCallback)(checklist_controller_1["default"].queryCheckList));
checkListRouter.get("/:id", (0, middlewares_1.expressCallback)(checklist_controller_1["default"].queryCheckListById));
checkListRouter["delete"]("/:id", (0, middlewares_1.expressCallback)(checklist_controller_1["default"].deleteCheckList));
checkListRouter.post("/", (0, middlewares_1.expressCallback)(checklist_controller_1["default"].createCheckList));
//update 
checkListRouter.patch("/:id", (0, middlewares_1.expressCallback)(checklist_controller_1["default"].updateCheckList));
exports["default"] = checkListRouter;
//# sourceMappingURL=checklist.route.js.map