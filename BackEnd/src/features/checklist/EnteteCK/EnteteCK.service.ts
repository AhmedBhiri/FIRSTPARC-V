//import { Time } from "aws-sdk/clients/codedeploy";
import { ErrorHandler, HTTP_STATUS_CODES, prisma } from "../../../utils";
import { GetEnteteCKParams } from "./definitions";
//creation de ck entete
const DoCreaEnteteCheckList = async (
    Filiale: number,
    Vehicule: string,
    Remorque: string,
    Chauffeur: string,
    Date: Date,
    Heure: Date
    
) => {
  try {
    const EnteteCK = await prisma.cK_Entete.create({
      data: {
        Filiale: Filiale,
        Vehicule: Vehicule,
        Remorque: Remorque,
        Chauffeur: Chauffeur,
        Date: Date,
        Heure: Heure
      },
    });
    return EnteteCK;
  } catch (err) {
    throw new ErrorHandler("Server Error", HTTP_STATUS_CODES.INTERNAL_SERVER);
  }
};

//suppression du checklist

const doDeleteEnteteCheckList = async (id: number) => {
  try {
    const EntetecheckListDeleted = await prisma.cK_Entete.delete({
      where: { CodeDoc: id},
    });
    return EntetecheckListDeleted != null;
  } catch (err) {
    throw new ErrorHandler("Server Error", HTTP_STATUS_CODES.INTERNAL_SERVER);
  }
};

//affichage du checklist

const doQueryEnteteCheckList = async () => {
  try {
    const EnteteCK = await prisma.cK_Entete.findMany({
      orderBy: { CodeDoc: "desc" },
      select: {
        Filiale: true,
        Vehicule: true,
        Remorque: true,
        Chauffeur: true,
        Date: true,
        Heure: true
      },
    });
    return EnteteCK;
  } catch (err) {
    console.log("err", err);
    throw new ErrorHandler("Server Error", HTTP_STATUS_CODES.INTERNAL_SERVER);
  }
};

//modification du checklist
const doUpdateEnteteCheckList = async (id: number, updateEnteteCheckList: any) => {
  try {
    const validEnteteCheckList = await prisma.cK_Entete.findUnique({
      where: {
        CodeDoc: id
      },
    });
    if (!validEnteteCheckList) {
      throw new ErrorHandler("Entete not found", HTTP_STATUS_CODES.NOT_FOUND);
    }

    const EnteteCK = await prisma.cK_Entete.update({
      data: updateEnteteCheckList,
      where: {
        CodeDoc: id
      },
    });

    return EnteteCK;
  } catch (err) {
    throw new ErrorHandler("Server Error", HTTP_STATUS_CODES.INTERNAL_SERVER);
  }
};

export default {
    doQueryEnteteCheckList,
    doDeleteEnteteCheckList,
  DoCreaEnteteCheckList,
  doUpdateEnteteCheckList,
};
