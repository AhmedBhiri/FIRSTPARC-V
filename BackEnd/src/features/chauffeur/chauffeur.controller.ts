import { Request } from "express";
import { ErrorHandler, HTTP_STATUS_CODES } from "../../utils";
import chauffeurService from "./chauffeur.service"
import { GetChauffeurParams } from "./definitions";



const queryChauffeur = async (httpRequest: Request) => {
  const query: GetChauffeurParams = { ...httpRequest.query };

  const {chauffeur, count } = await chauffeurService.doQueryChauffeur(query);
  return {
    status: HTTP_STATUS_CODES.OK,
    body: {
      data: chauffeur,
      count
    },
  };
};



export default {
  queryChauffeur,

};
