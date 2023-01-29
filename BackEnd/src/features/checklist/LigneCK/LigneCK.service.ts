import { ErrorHandler, HTTP_STATUS_CODES, prisma } from "../../../utils";
//creation de checklist
const DoCreateLignesCK = async (
    Filiale: number,
    Oui: boolean,
    Non: boolean,
    Observations: string,
) => {
  try {
    const LigneCK = await prisma.cK_Ligne.create({
      data: {
        Filiale: Filiale,
        Oui: Oui,
        Non: Non,
        Observations: Observations
      },
    });
    return LigneCK;
  } catch (err) {
    throw new ErrorHandler("Server Error", HTTP_STATUS_CODES.INTERNAL_SERVER);
  }
};

//suppression du checklist

const doDeleteLignesCK = async (id: number) => {
  try {
    const LignesCKDeleted = await prisma.cK_Ligne.delete({
      where: { CodeDoc: id },
    });
    return LignesCKDeleted != null;
  } catch (err) {
    throw new ErrorHandler("Server Error", HTTP_STATUS_CODES.INTERNAL_SERVER);
  }
};

//affichage du checklist

const doQueryLignesCK = async () => {
  try {
    const LignesCK = await prisma.cK_Ligne.findMany({
      orderBy: { CodeDoc: "desc" },
      select: {
        CodeDoc: true,
        Filiale: true,
        Oui: true,
        Non: true,
        Observations: true,
      },
    });
    return LignesCK;
  } catch (err) {
    console.log("err", err);
    throw new ErrorHandler("Server Error", HTTP_STATUS_CODES.INTERNAL_SERVER);
  }
};

//modification du checklist
const doUpdateLignesCK = async (id: number,  updateLignesCK: any) => {
  try {
    const validLignesCK = await prisma.cK_Ligne.findUnique({
      where: {
        CodeDoc: id,
      },
    });
    if (!validLignesCK) {
      throw new ErrorHandler("Lignes CK not found", HTTP_STATUS_CODES.NOT_FOUND);
    }

    const LignesCK = await prisma.cK_Ligne.update({
      data: {
        Oui: updateLignesCK.Oui,
        Non: updateLignesCK.Non,
        Observations: updateLignesCK.Observations
      },
      where: {
        CodeDoc: id,
      },
    });

    return LignesCK;
  } catch (err) {
    throw new ErrorHandler("Server Error", HTTP_STATUS_CODES.INTERNAL_SERVER);
  }
};

export default {
    doQueryLignesCK,
    doDeleteLignesCK,
    DoCreateLignesCK,
    doUpdateLignesCK,
};
