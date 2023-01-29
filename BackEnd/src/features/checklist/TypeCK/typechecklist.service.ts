import { ErrorHandler, HTTP_STATUS_CODES, prisma } from "../../../utils"
//creation de checklist
const DoCreateTypeCheckList = async (designation: string) => {
  try {
    const typecheckList = await prisma.cK_Type.create({
      data: {
        Designation: designation
      },
    });
    return typecheckList;
  } catch (err) {
    throw new ErrorHandler("Server Error", HTTP_STATUS_CODES.INTERNAL_SERVER);
  }
};

//suppression du checklist

const doDeleteTypeCheckList = async (CodeCK_Type: number) => {
  try {
    const typecheckListDeleted = await prisma.cK_Type.delete({
      where: { CodeCK_Type: CodeCK_Type },
    });
    return typecheckListDeleted != null;
  } catch (err) {
    throw new ErrorHandler("Server Error", HTTP_STATUS_CODES.INTERNAL_SERVER);
  }
};

//affichage du checklist

const doQueryTypeCheckList = async () => {
  try {
    const typecheckLists = await prisma.cK_Type.findMany({
      orderBy: { CodeCK_Type: "desc" },
      select: {
        CodeCK_Type: true,
        Designation: true,

      }
    });
    return typecheckLists;
  } catch (err) {
    console.log("err", err);
    throw new ErrorHandler("Server Error", HTTP_STATUS_CODES.INTERNAL_SERVER);
  }
};

//modification du checklist
const doUpdateTypeCheckList = async (
  id: number,
  updateTypeCheckList: any
) => {
  try {
    const validTypeCheckList = await prisma.cK_Type.findUnique({
      where: {
        CodeCK_Type: id
      },
      
    });
    if (!validTypeCheckList) {
      throw new ErrorHandler("CK_Type not found", HTTP_STATUS_CODES.NOT_FOUND);
    }

    const typecheckList = await prisma.cK_Type.update({
      data: updateTypeCheckList,
      where: {
        CodeCK_Type: id,
      },
    });

    return typecheckList;
  } catch (err) {
    throw new ErrorHandler("Server Error", HTTP_STATUS_CODES.INTERNAL_SERVER);
  }
};


export default {
  doQueryTypeCheckList,
  doDeleteTypeCheckList,
  DoCreateTypeCheckList,
  doUpdateTypeCheckList
};
