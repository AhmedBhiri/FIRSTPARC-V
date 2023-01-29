import { ErrorHandler, HTTP_STATUS_CODES, prisma } from "../../../utils"
//creation de checklist
const DoCreateContenuCheckList = async (designation: string) => {
  try {
    const contenucheckList = await prisma.cK_Contenu.create({
      data: {
        Designation: designation
      },
    });
    return contenucheckList;
  } catch (err) {
    throw new ErrorHandler("Server Error", HTTP_STATUS_CODES.INTERNAL_SERVER);
  }
};

//suppression du checklist

const doDeleteContenuCheckList = async (CodeCK_Contenu: number) => {
  try {
    const contenucheckListDeleted = await prisma.cK_Contenu.delete({
      where: { CodeCK_Contenu: CodeCK_Contenu },
    });
    return contenucheckListDeleted != null;
  } catch (err) {
    throw new ErrorHandler("Server Error", HTTP_STATUS_CODES.INTERNAL_SERVER);
  }
};

//affichage du checklist

const doQueryContenuCheckList = async () => {
  try {
    const contenucheckLists = await prisma.cK_Contenu.findMany({
      orderBy: { CodeCK_Contenu: "desc" },
      select: {
        CodeCK_Contenu: true,
        Designation: true,

      }
  
    });
    return contenucheckLists;
  } catch (err) {
    console.log("err", err);
    throw new ErrorHandler("Server Error", HTTP_STATUS_CODES.INTERNAL_SERVER);
  }
};

//modification du checklist
const doUpdateContenuCheckList = async (
  id: number,
  updateContenuCheckList: any
) => {
  try {
    const validContenuCheckList = await prisma.cK_Contenu.findUnique({
      where: {
        CodeCK_Contenu: id
      },
      
    });
    if (!validContenuCheckList) {
      throw new ErrorHandler("Contenu not found", HTTP_STATUS_CODES.NOT_FOUND);
    }

    const contenucheckList = await prisma.cK_Contenu.update({
      data: updateContenuCheckList,
      where: {
        CodeCK_Contenu: id,
      },
    });

    return contenucheckList;
  } catch (err) {
    throw new ErrorHandler("Server Error", HTTP_STATUS_CODES.INTERNAL_SERVER);
  }
};


export default {
  doQueryContenuCheckList,
  doDeleteContenuCheckList,
  DoCreateContenuCheckList,
  doUpdateContenuCheckList
};
