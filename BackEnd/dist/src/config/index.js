"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
exports["default"] = {
    JWT_ACCESS_TOKEN_SECRET: process.env.JWT_ACCESS_TOKEN_SECRET,
    ACCESS_TOKEN_EXPIRES_IN: process.env.ACCESS_TOKEN_EXPIRES_IN,
    REFRESH_TOKEN_EXPIRES_IN: process.env.REFRESH_TOKEN_EXPIRES_IN,
    PORT: process.env.PORT,
    CURRENCY_CONVERTER_BASE_API: process.env.CURRENCY_CONVERTER_BASE_API || "http://data.fixer.io/api/",
    FIXER_API_ACCESS: process.env.FIXER_API_ACCESS
};
//# sourceMappingURL=index.js.map