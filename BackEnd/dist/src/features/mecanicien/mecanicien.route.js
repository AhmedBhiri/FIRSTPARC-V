"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var middlewares_1 = require("../../middlewares");
var mecanicien_controller_1 = __importDefault(require("./mecanicien.controller"));
var mecanicienRouter = express_1["default"].Router();
mecanicienRouter.get("/", (0, middlewares_1.expressCallback)(mecanicien_controller_1["default"].queryMecanicien));
exports["default"] = mecanicienRouter;
//# sourceMappingURL=mecanicien.route.js.map