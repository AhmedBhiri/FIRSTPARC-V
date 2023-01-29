"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var utils_1 = require("../../../utils");
//creation de checklist
var DoCreateTypeCheckList = function (designation) { return __awaiter(void 0, void 0, void 0, function () {
    var typecheckList, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, utils_1.prisma.cK_Type.create({
                        data: {
                            Designation: designation
                        }
                    })];
            case 1:
                typecheckList = _a.sent();
                return [2 /*return*/, typecheckList];
            case 2:
                err_1 = _a.sent();
                throw new utils_1.ErrorHandler("Server Error", utils_1.HTTP_STATUS_CODES.INTERNAL_SERVER);
            case 3: return [2 /*return*/];
        }
    });
}); };
//suppression du checklist
var doDeleteTypeCheckList = function (CodeCK_Type) { return __awaiter(void 0, void 0, void 0, function () {
    var typecheckListDeleted, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, utils_1.prisma.cK_Type["delete"]({
                        where: { CodeCK_Type: CodeCK_Type }
                    })];
            case 1:
                typecheckListDeleted = _a.sent();
                return [2 /*return*/, typecheckListDeleted != null];
            case 2:
                err_2 = _a.sent();
                throw new utils_1.ErrorHandler("Server Error", utils_1.HTTP_STATUS_CODES.INTERNAL_SERVER);
            case 3: return [2 /*return*/];
        }
    });
}); };
//affichage du checklist
var doQueryTypeCheckList = function () { return __awaiter(void 0, void 0, void 0, function () {
    var typecheckLists, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, utils_1.prisma.cK_Type.findMany({
                        orderBy: { CodeCK_Type: "desc" },
                        select: {
                            CodeCK_Type: true,
                            Designation: true
                        }
                    })];
            case 1:
                typecheckLists = _a.sent();
                return [2 /*return*/, typecheckLists];
            case 2:
                err_3 = _a.sent();
                console.log("err", err_3);
                throw new utils_1.ErrorHandler("Server Error", utils_1.HTTP_STATUS_CODES.INTERNAL_SERVER);
            case 3: return [2 /*return*/];
        }
    });
}); };
//modification du checklist
var doUpdateTypeCheckList = function (id, updateTypeCheckList) { return __awaiter(void 0, void 0, void 0, function () {
    var validTypeCheckList, typecheckList, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, utils_1.prisma.cK_Type.findUnique({
                        where: {
                            CodeCK_Type: id
                        }
                    })];
            case 1:
                validTypeCheckList = _a.sent();
                if (!validTypeCheckList) {
                    throw new utils_1.ErrorHandler("CK_Type not found", utils_1.HTTP_STATUS_CODES.NOT_FOUND);
                }
                return [4 /*yield*/, utils_1.prisma.cK_Type.update({
                        data: updateTypeCheckList,
                        where: {
                            CodeCK_Type: id
                        }
                    })];
            case 2:
                typecheckList = _a.sent();
                return [2 /*return*/, typecheckList];
            case 3:
                err_4 = _a.sent();
                throw new utils_1.ErrorHandler("Server Error", utils_1.HTTP_STATUS_CODES.INTERNAL_SERVER);
            case 4: return [2 /*return*/];
        }
    });
}); };
exports["default"] = {
    doQueryTypeCheckList: doQueryTypeCheckList,
    doDeleteTypeCheckList: doDeleteTypeCheckList,
    DoCreateTypeCheckList: DoCreateTypeCheckList,
    doUpdateTypeCheckList: doUpdateTypeCheckList
};
//# sourceMappingURL=typechecklist.service.js.map