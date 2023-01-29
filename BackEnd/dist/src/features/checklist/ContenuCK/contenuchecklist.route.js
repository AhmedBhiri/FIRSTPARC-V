"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var middlewares_1 = require("../../../middlewares");
var contenuchecklist_controller_1 = __importDefault(require("./contenuchecklist.controller"));
var contenucheckListRouter = express_1["default"].Router();
contenucheckListRouter.get("/", (0, middlewares_1.expressCallback)(contenuchecklist_controller_1["default"].queryContenuCheckList));
contenucheckListRouter.get("/:id", (0, middlewares_1.expressCallback)(contenuchecklist_controller_1["default"].queryContenuCheckListByid));
contenucheckListRouter["delete"]("/:id", (0, middlewares_1.expressCallback)(contenuchecklist_controller_1["default"].deleteContenuCheckList));
contenucheckListRouter.post("/", (0, middlewares_1.expressCallback)(contenuchecklist_controller_1["default"].createContenuCheckList));
//update 
contenucheckListRouter.patch("/:id", (0, middlewares_1.expressCallback)(contenuchecklist_controller_1["default"].updateContenuCheckList));
exports["default"] = contenucheckListRouter;
//# sourceMappingURL=contenuchecklist.route.js.map