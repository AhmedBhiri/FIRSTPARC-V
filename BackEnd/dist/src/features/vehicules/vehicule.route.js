"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var middlewares_1 = require("../../middlewares");
var vehicule_controller_1 = __importDefault(require("./vehicule.controller"));
var vehiculeRouter = express_1["default"].Router();
vehiculeRouter.get("/", (0, middlewares_1.expressCallback)(vehicule_controller_1["default"].queryVehicule));
exports["default"] = vehiculeRouter;
//# sourceMappingURL=vehicule.route.js.map