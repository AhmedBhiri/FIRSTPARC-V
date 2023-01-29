import { Request } from "express";
import { ErrorHandler, HTTP_STATUS_CODES } from "../../../utils";
import entetecheckListService from "./EnteteCK.service";

const createEnteteCheckList = async (httpRequest: any) => {
  const { Filiale } = httpRequest.body;
  const { Vehicule } = httpRequest.body;
  const { Remorque } = httpRequest.body;
  const { Chauffeur } = httpRequest.body;
  const { Date } = httpRequest.body;
  const { Heure } = httpRequest.body;
  //const { Heure } = httpRequest.body;

  try {
    const EntetecheckListCreated = await entetecheckListService.DoCreaEnteteCheckList(
        Filiale,Vehicule,Remorque,Chauffeur,Date, Heure
    );

    return {
      status: HTTP_STATUS_CODES.OK,
      body: {
        success: true,
        message: "CK entete  Successfully Created",
        data: EntetecheckListCreated,
      },
    };
  } catch {
    throw new ErrorHandler(
      "Something went wrong",
      HTTP_STATUS_CODES.BAD_REQUEST
    );
  }
};


const queryEnteteCheckList = async (httpRequest: Request) => {
  const EntetecheckLists = await entetecheckListService.doQueryEnteteCheckList();
  return {
    status: HTTP_STATUS_CODES.OK,
    body: {
      data: EntetecheckLists,
    },
  };
};

const deleteEnteteCheckList = async (httpRequest: any) => {
  const { id } = httpRequest.params;
  const isEnteteCheckListDeleted = await entetecheckListService.doDeleteEnteteCheckList(
    Number(id)
  );
  return {
    status: HTTP_STATUS_CODES.OK,
    body: {
      success: isEnteteCheckListDeleted,
      message: "Entete checklist was Successfully Deleted",
    },
  };
};

const   updateEnteteCheckList = async (httpRequest: Request) => {
  const { id } = httpRequest.params;
  const props = httpRequest.body;

  const EntetecheckListUpdate = await entetecheckListService.doUpdateEnteteCheckList(
    Number(id),
    props
  );

  return {
    status: HTTP_STATUS_CODES.OK,
    body: {
      success: true,
      message: "Entete checklist was Successfully updated",
      data: EntetecheckListUpdate,
    },
  };
};


export default {
  deleteEnteteCheckList,
  queryEnteteCheckList,
  createEnteteCheckList,
  updateEnteteCheckList
};
