import { Request } from "express";
import { ErrorHandler, HTTP_STATUS_CODES } from "../../../utils";
import checkListService from "./checklist.service";

const createCheckList = async (httpRequest: any) => {
  const { CodeCK } = httpRequest.body;
  const { CodeCK_Type } = httpRequest.body;
  const { CodeCK_SousType } = httpRequest.body;
  const { CodeCK_Contenu } = httpRequest.body;
  const { DesignationCK } = httpRequest.body;


  try {
    const checkListCreated = await checkListService.DoCreateCheckList(CodeCK, CodeCK_Type,CodeCK_SousType,CodeCK_Contenu, DesignationCK);

    return {
      status: HTTP_STATUS_CODES.OK,
      body: {
        success: true,
        message: "Checklist  Successfully Created",
        data: checkListCreated,
      },
    };
  } catch {
    throw new ErrorHandler(
      "Something went wrong",
      HTTP_STATUS_CODES.BAD_REQUEST
    );
  }
};


const queryCheckList = async (httpRequest: Request) => {
  const checkLists = await checkListService.doQueryCheckList();
  return {
    status: HTTP_STATUS_CODES.OK,
    body: {
      data: checkLists,
    },
  };
};

const queryCheckListByCode = async (httpRequest: Request) => {
  const { id } = httpRequest.params;
  const checkLists = await checkListService.doQueryCheckListByCode(
    Number(id)
  );
  return {
    status: HTTP_STATUS_CODES.OK,
    body: {
      data: checkLists,
    },
  };
};

const queryCheckListLastRow = async (httpRequest: Request) => {
  const checkLists = await checkListService.doQueryCheckListLastRow();
  return {
    status: HTTP_STATUS_CODES.OK,
    body: {
      data: checkLists,
    },
  };
};

const queryCountCK = async (httpRequest: Request) => {
  const countCK = await checkListService.doGetCountRowsofCKs();
  return {
    status: HTTP_STATUS_CODES.OK,
    body: {
      data: countCK,
    },
  };
};

const deleteCheckList = async (httpRequest: any) => {
  const { id } = httpRequest.params;
  const isCheckListDeleted = await checkListService.doDeleteCheckList(
    Number(id)
  );
  return {
    status: HTTP_STATUS_CODES.OK,
    body: {
      success: isCheckListDeleted,
      message: "checklist  Successfully Deleted",
    },
  };
};

const updateCheckList = async (httpRequest: Request) => {
  const { id } = httpRequest.params;
  const props = httpRequest.body;

  const checkListUpdate = await checkListService.doUpdateCheckList(
    Number(id),
    props
  );

  return {
    status: HTTP_STATUS_CODES.OK,
    body: {
      success: true,
      message: "checklist Successfully updated",
      data: checkListUpdate,
    },
  };
};


export default {
  deleteCheckList,
  queryCheckList,
  createCheckList,
  updateCheckList,
  queryCheckListByCode,
  queryCheckListLastRow,
  queryCountCK
};
