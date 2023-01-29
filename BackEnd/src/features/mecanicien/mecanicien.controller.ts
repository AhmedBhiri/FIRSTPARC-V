import { Request } from "express";
import { ErrorHandler, HTTP_STATUS_CODES } from "../../utils";
import mecanicienService from "./mecanicien.service"
import { GetMecanicienParams } from "./definitions";



const queryMecanicien = async (httpRequest: Request) => {
  const query: GetMecanicienParams = { ...httpRequest.query };

  const {mecanicien, count } = await mecanicienService.doQueryMecanicien(query);

  return {
    status: HTTP_STATUS_CODES.OK,
    body: {
      data: mecanicien,
      count
    },
  };
};



export default {
  queryMecanicien,
 
};
