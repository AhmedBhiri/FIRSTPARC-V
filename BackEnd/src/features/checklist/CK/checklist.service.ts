import { ErrorHandler, HTTP_STATUS_CODES, prisma } from "../../../utils";
//creation de checklist
const DoCreateCheckList = async (
  CodeCK: number,
  codeCK_Type: number,
  codeCK_SousType: number,
  designation: number,
  DesignationCK: string,

) => {
  try {
    const checkList = await prisma.cK_Checklist.create({
      data: {
        CodeCK: CodeCK,
        CodeCK_Type: codeCK_Type,
        CodeCK_SousType: codeCK_SousType,
        CodeCK_Contenu : designation,
        /*CK_Contenu: {
          connect: CodeCK_Contenu.map((elt) => ({ CodeCK_Contenu: elt })),
        },*/
        DesignationCK: DesignationCK,
      },
    });
    return checkList;
  } catch (err) {
    throw new ErrorHandler("Server Error", HTTP_STATUS_CODES.INTERNAL_SERVER);
  }
};

//suppression du checklist

const doDeleteCheckList = async (CodeCK: number) => {
  try {
    const checkListDeleted = await prisma.cK_Checklist.deleteMany({
      where: { CodeCK: CodeCK },
    });
    return checkListDeleted != null;
  } catch (err) {
    throw new ErrorHandler("Server Error", HTTP_STATUS_CODES.INTERNAL_SERVER);
  }
};

//affichage du checklist

const doQueryCheckList = async () => {
  try {
    const checkLists = await prisma.cK_Checklist.findMany({

      orderBy: { CodeCK: "desc" },
      distinct:['CodeCK'],
      select: {
        CodeCK: true,
        CK_Type: true,
        CK_SousType: true,
        CK_Contenu: { select: { Designation: true } },
        DesignationCK: true
      },
    });
    return checkLists;
  } catch (err) {
    console.log("err", err);
    throw new ErrorHandler("Server Error", HTTP_STATUS_CODES.INTERNAL_SERVER);
  }
};

// affichage du checklist par CodeCK
const doQueryCheckListByCode = async (id: number) => {
  try {
    const checkLists = await prisma.cK_Checklist.findMany({
      where: {
        CodeCK: id,
      },
      include: { CK_Contenu: true },
    });
    return checkLists;
  } catch (err) {
    console.log("err", err);
    throw new ErrorHandler("Server Error", HTTP_STATUS_CODES.INTERNAL_SERVER);
  }
};


//affichage de la derniere ligne de checklist

const doGetCountRowsofCKs = async () => {
  try{
    const count = await prisma.cK_Checklist.count();

    return {count};
   
  } catch (err) {
    console.log("err", err);
    throw new ErrorHandler("Server Error", HTTP_STATUS_CODES.INTERNAL_SERVER);

  }
}

const doQueryCheckListLastRow = async () => {
  try {
    
    const checkLists = await prisma.cK_Checklist.findFirst({
      orderBy: { CodeCK: "desc" },
      select: {
        CodeCK: true,
        CK_Type: true,
        CK_SousType: true,
        //DesignationCK: true
      },
    });
    return checkLists;
  } catch (err) {
    console.log("err", err);
    throw new ErrorHandler("Server Error", HTTP_STATUS_CODES.INTERNAL_SERVER);
  }
};

//modification du checklist
const doUpdateCheckList = async (id: number, updateCheckList: any) => {
  try {
    const validCheckList = await prisma.cK_Checklist.findMany({
      where: {
        CodeCK: id,
      },
    });
    if (!validCheckList) {
      throw new ErrorHandler("Contenu not found", HTTP_STATUS_CODES.NOT_FOUND);
    }

    const checkList = await prisma.cK_Checklist.updateMany({
      data: updateCheckList,
      where: {
        CodeCK: id,
      },
    });

    return checkList;
  } catch (err) {
    throw new ErrorHandler("Server Error", HTTP_STATUS_CODES.INTERNAL_SERVER);
  }
};

export default {
  doQueryCheckList,
  doDeleteCheckList,
  DoCreateCheckList,
  doUpdateCheckList,
  doQueryCheckListByCode,
  doQueryCheckListLastRow,
  doGetCountRowsofCKs,
};
