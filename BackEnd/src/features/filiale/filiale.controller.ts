import { Request } from "express";
import { ErrorHandler, HTTP_STATUS_CODES } from "../../utils";
import filialeService from "./filiale.service"
import { GetFilialeParams } from "./definitions";



const queryfiliale = async (httpRequest: Request) => {

  const {filiale, count } = await filialeService.doQueryfiliale();
  return {
    status: HTTP_STATUS_CODES.OK,
    body: {
      data: filiale,
      count
    },
  };
};



export default {
  queryfiliale,

};
