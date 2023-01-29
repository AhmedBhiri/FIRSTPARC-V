// Routes

import checkListModule from "../features/checklist/CK/checklist.module";
const { checkListRoute } = checkListModule;

import typecheckListModule from "../features/checklist/TypeCK/typechecklist.module";
const { typecheckListRoute } = typecheckListModule;

import soustypecheckListModule from "../features/checklist/SousTypeCK/soustypechecklist.module";
const { soustypecheckListRoute } = soustypecheckListModule;

import contenucheckListModule from "../features/checklist/ContenuCK/contenuchecklist.module";
const { contenucheckListRoute } = contenucheckListModule;

import vehiculeModule from "../features/vehicules/vehicule.module";
const { vehiculeRoute } = vehiculeModule;

import filialeModule from "../features/filiale/filiale.module";
const { filialeRoute } = filialeModule;

import chauffeurModule from "../features/chauffeur/chauffeur.module";
const { chauffeurRoute } = chauffeurModule;

import mecanicienModule from "../features/mecanicien/mecanicien.module";
const { mecanicienRoute } = mecanicienModule;


import remorqueModule from "../features/remorque/remorque.module";
const { remorqueRoute } = remorqueModule;





export const getRoutes = (app: any) => {

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
