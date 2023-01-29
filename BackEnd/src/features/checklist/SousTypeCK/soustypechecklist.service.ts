import { ErrorHandler, HTTP_STATUS_CODES, prisma } from "../../../utils";
//creation de checklist
const DoCreateSousTypeCheckList = async (
  designation: string
) => {
  try {
    const soustypecheckList = await prisma.cK_SousType.create({
      data: {
        Designation: designation
      },
    });
    return soustypecheckList;
  } catch (err) {
    throw new ErrorHandler("Server Error", HTTP_STATUS_CODES.INTERNAL_SERVER);
  }
};

//suppression du checklist

const doDeleteSousTypeCheckList = async (CodeCK_SousType: number) => {
  try {
    const typecheckListDeleted = await prisma.cK_SousType.delete({
      where: { CodeCK_SousType: CodeCK_SousType },
    });
    return typecheckListDeleted != null;
  } catch (err) {
    throw new ErrorHandler("Server Error", HTTP_STATUS_CODES.INTERNAL_SERVER);
  }
};

//affichage du checklist

const doQuerySousTypeCheckList = async () => {
  try {
    const soustypecheckLists = await prisma.cK_SousType.findMany({
      orderBy: { CodeCK_SousType: "desc" },
      select: {
        CodeCK_SousType: true,
        Designation: true
      },
    });
    return soustypecheckLists;
  } catch (err) {
    console.log("err", err);
    throw new ErrorHandler("Server Error", HTTP_STATUS_CODES.INTERNAL_SERVER);
  }
};

//modification du checklist
const doUpdateSousTypeCheckList = async (
  id: number,
  updateSousTypeCheckList: any
) => {
  try {
    const validSousTypeCheckList = await prisma.cK_SousType.findUnique({
      where: {
        CodeCK_SousType: id,
      },
    });
    if (!validSousTypeCheckList) {
      throw new ErrorHandler("CK_Type not found", HTTP_STATUS_CODES.NOT_FOUND);
    }

    const soustypecheckList = await prisma.cK_SousType.update({
      data: {
        Designation: updateSousTypeCheckList.Designation
      },
      where: {
        CodeCK_SousType: id,
      },
    });

    return soustypecheckList;
  } catch (err) {
    throw new ErrorHandler("Server Error", HTTP_STATUS_CODES.INTERNAL_SERVER);
  }
};

export default {
  doQuerySousTypeCheckList,
  doDeleteSousTypeCheckList,
  DoCreateSousTypeCheckList,
  doUpdateSousTypeCheckList,
};
