"use strict";
// Routes
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.getRoutes = void 0;
var checklist_module_1 = __importDefault(require("../features/checklist/CK/checklist.module"));
var checkListRoute = checklist_module_1["default"].checkListRoute;
var typechecklist_module_1 = __importDefault(require("../features/checklist/TypeCK/typechecklist.module"));
var typecheckListRoute = typechecklist_module_1["default"].typecheckListRoute;
var soustypechecklist_module_1 = __importDefault(require("../features/checklist/SousTypeCK/soustypechecklist.module"));
var soustypecheckListRoute = soustypechecklist_module_1["default"].soustypecheckListRoute;
var contenuchecklist_module_1 = __importDefault(require("../features/checklist/ContenuCK/contenuchecklist.module"));
var contenucheckListRoute = contenuchecklist_module_1["default"].contenucheckListRoute;
var vehicule_module_1 = __importDefault(require("../features/vehicules/vehicule.module"));
var vehiculeRoute = vehicule_module_1["default"].vehiculeRoute;
var filiale_module_1 = __importDefault(require("../features/filiale/filiale.module"));
var filialeRoute = filiale_module_1["default"].filialeRoute;
var chauffeur_module_1 = __importDefault(require("../features/chauffeur/chauffeur.module"));
var chauffeurRoute = chauffeur_module_1["default"].chauffeurRoute;
var mecanicien_module_1 = __importDefault(require("../features/mecanicien/mecanicien.module"));
var mecanicienRoute = mecanicien_module_1["default"].mecanicienRoute;
var remorque_module_1 = __importDefault(require("../features/remorque/remorque.module"));
var remorqueRoute = remorque_module_1["default"].remorqueRoute;
//const { contenuRouter } = checklistToContenuModule;
var getRoutes = function (app) {
    app.use("/api/checkList/CK", checkListRoute);
    app.use("/api/checkList/CK_Type", typecheckListRoute);
    app.use("/api/checkList/CK_SousType", soustypecheckListRoute);
    app.use("/api/checkList/CK_Contenu", contenucheckListRoute);
    app.use("/api/vehicule", vehiculeRoute);
    app.use("/api/chauffeur", chauffeurRoute);
    app.use("/api/mecanicien", mecanicienRoute);
    app.use("/api/filiale", filialeRoute);
    app.use("/api/remorque", remorqueRoute);
    //app.use("/api/checkList/CkToContenu",contenuRouter);
};
exports.getRoutes = getRoutes;
//# sourceMappingURL=routes.js.map