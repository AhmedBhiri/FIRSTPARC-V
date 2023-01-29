"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var middlewares_1 = require("../../../middlewares");
var contenu_controller_1 = __importDefault(require("./contenu.controller"));
var contenuRouter = express_1["default"].Router();
contenuRouter.get("/", (0, middlewares_1.expressCallback)(contenu_controller_1["default"].querycontenu));
exports["default"] = contenuRouter;
//# sourceMappingURL=contenu.route.js.map