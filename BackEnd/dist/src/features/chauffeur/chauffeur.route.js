"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var middlewares_1 = require("../../middlewares");
var chauffeur_controller_1 = __importDefault(require("./chauffeur.controller"));
var chauffeurRouter = express_1["default"].Router();
chauffeurRouter.get("/", (0, middlewares_1.expressCallback)(chauffeur_controller_1["default"].queryChauffeur));
exports["default"] = chauffeurRouter;
//# sourceMappingURL=chauffeur.route.js.map