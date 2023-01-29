import { Request } from "express";
import { ErrorHandler, HTTP_STATUS_CODES } from "../../../utils";
import soustypecheckListService from "./soustypechecklist.service";

const createSousTypeCheckList = async (httpRequest: any) => {
  const { Designation } = httpRequest.body;

  try {
    const soustypecheckListCreated = await soustypecheckListService.DoCreateSousTypeCheckList(Designation);

    return {
      status: HTTP_STATUS_CODES.OK,
      body: {
        success: true,
        message: "Sous type checklist  Successfully Created",
        data: soustypecheckListCreated,
      },
    };
  } catch {
    throw new ErrorHandler(
      "Something went wrong",
      HTTP_STATUS_CODES.BAD_REQUEST
    );
  }
};


const querySousTypeCheckList = async (httpRequest: Request) => {
  const soustypecheckLists = await soustypecheckListService.doQuerySousTypeCheckList();
  return {
    status: HTTP_STATUS_CODES.OK,
    body: {
      data: soustypecheckLists,
    },
  };
};

const deleteSousTypeCheckList = async (httpRequest: any) => {
  const { id } = httpRequest.params;
  const isSousTypeCheckListDeleted = await soustypecheckListService.doDeleteSousTypeCheckList(
    Number(id)
  );
  return {
    status: HTTP_STATUS_CODES.OK,
    body: {
      success: isSousTypeCheckListDeleted,
      message: "Sous typechecklist  Successfully Deleted",
    },
  };
};

const updateSousTypeCheckList = async (httpRequest: Request) => {
  const { id } = httpRequest.params;
  const props = httpRequest.body;

  const soustypecheckListUpdate = await soustypecheckListService.doUpdateSousTypeCheckList(
    Number(id),
    props
  );

  return {
    status: HTTP_STATUS_CODES.OK,
    body: {
      success: true,
      message: "typechecklist Successfully updated",
      data: soustypecheckListUpdate,
    },
  };
};


export default {
  deleteSousTypeCheckList,
  querySousTypeCheckList,
  createSousTypeCheckList,
  updateSousTypeCheckList
};
