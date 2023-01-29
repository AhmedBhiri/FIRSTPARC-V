"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var middlewares_1 = require("../../middlewares");
var remorque_controller_1 = __importDefault(require("./remorque.controller"));
var remorqueRouter = express_1["default"].Router();
remorqueRouter.get("/", (0, middlewares_1.expressCallback)(remorque_controller_1["default"].queryremorque));
exports["default"] = remorqueRouter;
//# sourceMappingURL=remorque.route.js.map