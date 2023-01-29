import { Request } from "express";
import { ErrorHandler, HTTP_STATUS_CODES } from "../../../utils";
import contenucheckListService from "./contenuchecklist.service";

const createContenuCheckList = async (httpRequest: any) => {
  const { Designation } = httpRequest.body;
  try {
    const contenucheckListCreated = await contenucheckListService.DoCreateContenuCheckList(Designation);

    return {
      status: HTTP_STATUS_CODES.OK,
      body: {
        success: true,
        message: "contenuchecklist  Successfully Created",
        data: contenucheckListCreated,
      },
    };
  } catch {
    throw new ErrorHandler(
      "Something went wrong",
      HTTP_STATUS_CODES.BAD_REQUEST
    );
  }
};


const queryContenuCheckList = async (httpRequest: Request) => {
  const contenucheckLists = await contenucheckListService.doQueryContenuCheckList();
  return {
    status: HTTP_STATUS_CODES.OK,
    body: {
      data: contenucheckLists,
    },
  };
};

const deleteContenuCheckList = async (httpRequest: any) => {
  const { id } = httpRequest.params;
  const isContenuCheckListDeleted = await contenucheckListService.doDeleteContenuCheckList(
    Number(id)
  );
  return {
    status: HTTP_STATUS_CODES.OK,
    body: {
      success: isContenuCheckListDeleted,
      message: "contenuchecklist  Successfully Deleted",
    },
  };
};

const updateContenuCheckList = async (httpRequest: Request) => {
  const { id } = httpRequest.params;
  const props = httpRequest.body;

  const contenucheckListUpdate = await contenucheckListService.doUpdateContenuCheckList(
    Number(id),
    props
  );

  return {
    status: HTTP_STATUS_CODES.OK,
    body: {
      success: true,
      message: "Contenuchecklist Successfully updated",
      data: contenucheckListUpdate,
    },
  };
};


export default {
  deleteContenuCheckList,
  queryContenuCheckList,
  createContenuCheckList,
  updateContenuCheckList
};
