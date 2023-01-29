import { Request } from "express";
import { ErrorHandler, HTTP_STATUS_CODES } from "../../../utils";
import typecheckListService from "./typechecklist.service";

const createTypeCheckList = async (httpRequest: any) => {
  const { Designation } = httpRequest.body;
  try {
    const typecheckListCreated = await typecheckListService.DoCreateTypeCheckList(Designation);

    return {
      status: HTTP_STATUS_CODES.OK,
      body: {
        success: true,
        message: "typechecklist  Successfully Created",
        data: typecheckListCreated,
      },
    };
  } catch {
    throw new ErrorHandler(
      "Something went wrong",
      HTTP_STATUS_CODES.BAD_REQUEST
    );
  }
};


const queryTypeCheckList = async (httpRequest: Request) => {
  const typecheckLists = await typecheckListService.doQueryTypeCheckList();
  return {
    status: HTTP_STATUS_CODES.OK,
    body: {
      data: typecheckLists,
    },
  };
};

const deleteTypeCheckList = async (httpRequest: any) => {
  const { id } = httpRequest.params;
  const isTypeCheckListDeleted = await typecheckListService.doDeleteTypeCheckList(
    Number(id)
  );
  return {
    status: HTTP_STATUS_CODES.OK,
    body: {
      success: isTypeCheckListDeleted,
      message: "typechecklist  Successfully Deleted",
    },
  };
};

const updateTypeCheckList = async (httpRequest: Request) => {
  const { id } = httpRequest.params;
  const props = httpRequest.body;

  const typecheckListUpdate = await typecheckListService.doUpdateTypeCheckList(
    Number(id),
    props
  );

  return {
    status: HTTP_STATUS_CODES.OK,
    body: {
      success: true,
      message: "typechecklist Successfully updated",
      data: typecheckListUpdate,
    },
  };
};


export default {
  deleteTypeCheckList,
  queryTypeCheckList,
  createTypeCheckList,
  updateTypeCheckList
};
