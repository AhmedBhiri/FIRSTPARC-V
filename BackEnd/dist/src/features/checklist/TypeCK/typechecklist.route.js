"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var middlewares_1 = require("../../../middlewares");
var typechecklist_controller_1 = __importDefault(require("./typechecklist.controller"));
var typecheckListRouter = express_1["default"].Router();
typecheckListRouter.get("/", (0, middlewares_1.expressCallback)(typechecklist_controller_1["default"].queryTypeCheckList));
typecheckListRouter["delete"]("/:id", (0, middlewares_1.expressCallback)(typechecklist_controller_1["default"].deleteTypeCheckList));
typecheckListRouter.post("/", (0, middlewares_1.expressCallback)(typechecklist_controller_1["default"].createTypeCheckList));
//update 
typecheckListRouter.patch("/:id", (0, middlewares_1.expressCallback)(typechecklist_controller_1["default"].updateTypeCheckList));
exports["default"] = typecheckListRouter;
//# sourceMappingURL=typechecklist.route.js.map