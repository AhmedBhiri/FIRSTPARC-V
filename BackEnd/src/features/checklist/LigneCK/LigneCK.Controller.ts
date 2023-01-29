import { Request } from "express";
import { ErrorHandler, HTTP_STATUS_CODES } from "../../../utils";
import LignesCKService from "./LigneCK.service";

const createLignesCK = async (httpRequest: any) => {
  const { Filiale } = httpRequest.body;
  const { Oui } = httpRequest.body;
  const { Non } = httpRequest.body;
  const { Observations } = httpRequest.body;

  try {
    const soustypecheckListCreated = await LignesCKService.DoCreateLignesCK(
        Filiale,Oui,Non,Observations
    );

    return {
      status: HTTP_STATUS_CODES.OK,
      body: {
        success: true,
        message: "Lines of checklist  Successfully Created",
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


const queryLignesCK = async (httpRequest: Request) => {
  const soustypecheckLists = await LignesCKService.doQueryLignesCK();
  return {
    status: HTTP_STATUS_CODES.OK,
    body: {
      data: soustypecheckLists,
    },
  };
};

const deleteLignesCK = async (httpRequest: any) => {
  const { id } = httpRequest.params;
  const isSousTypeCheckListDeleted = await LignesCKService.doDeleteLignesCK(
    Number(id)
  );
  return {
    status: HTTP_STATUS_CODES.OK,
    body: {
      success: isSousTypeCheckListDeleted,
      message: "Lines of checklist  Successfully Deleted",
    },
  };
};

const updateLignesCK = async (httpRequest: Request) => {
  const { id } = httpRequest.params;
  const props = httpRequest.body;

  const soustypecheckListUpdate = await LignesCKService.doUpdateLignesCK(
    Number(id),
    props
  );

  return {
    status: HTTP_STATUS_CODES.OK,
    body: {
      success: true,
      message: "Lines of checklist Successfully updated",
      data: soustypecheckListUpdate,
    },
  };
};


export default {
deleteLignesCK,
queryLignesCK,
  createLignesCK,
  updateLignesCK
};
