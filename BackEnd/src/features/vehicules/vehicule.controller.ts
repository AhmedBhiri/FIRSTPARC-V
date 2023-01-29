import { Request } from "express";
import { ErrorHandler, HTTP_STATUS_CODES } from "../../utils";
import vehiculeService from "./vehicule.service"
import { GetVehiculeParams } from "./definitions";



const queryVehicule = async (httpRequest: Request) => {
  const query: GetVehiculeParams = { ...httpRequest.query };

  const {vehicule, count } = await vehiculeService.doQueryVehicule(query);
  return {
    status: HTTP_STATUS_CODES.OK,
    body: {
      data: vehicule,
      count
    },
  };
};



export default {
  queryVehicule,

};
