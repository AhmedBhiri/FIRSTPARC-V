"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var middlewares_1 = require("../../../middlewares");
var soustypechecklist_controller_1 = __importDefault(require("./soustypechecklist.controller"));
var soustypecheckListRouter = express_1["default"].Router();
soustypecheckListRouter.get("/", (0, middlewares_1.expressCallback)(soustypechecklist_controller_1["default"].querySousTypeCheckList));
soustypecheckListRouter["delete"]("/:id", (0, middlewares_1.expressCallback)(soustypechecklist_controller_1["default"].deleteSousTypeCheckList));
soustypecheckListRouter.post("/", (0, middlewares_1.expressCallback)(soustypechecklist_controller_1["default"].createSousTypeCheckList));
//update 
soustypecheckListRouter.patch("/:id", (0, middlewares_1.expressCallback)(soustypechecklist_controller_1["default"].updateSousTypeCheckList));
exports["default"] = soustypecheckListRouter;
//# sourceMappingURL=soustypechecklist.route.js.map