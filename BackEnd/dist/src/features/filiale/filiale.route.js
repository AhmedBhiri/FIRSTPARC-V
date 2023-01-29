"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var middlewares_1 = require("../../middlewares");
var filiale_controller_1 = __importDefault(require("./filiale.controller"));
var filialeRouter = express_1["default"].Router();
filialeRouter.get("/", (0, middlewares_1.expressCallback)(filiale_controller_1["default"].queryfiliale));
exports["default"] = filialeRouter;
//# sourceMappingURL=filiale.route.js.map