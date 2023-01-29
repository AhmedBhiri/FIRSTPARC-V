import { Request } from "express";
import { ErrorHandler, HTTP_STATUS_CODES } from "../../utils";
import remorqueService from "./remorque.service"
import { GetremorqueParams } from "./definitions";



const queryremorque = async (httpRequest: Request) => {
  const query: GetremorqueParams = { ...httpRequest.query };

  const {remorque, count } = await remorqueService.doQueryremorque(query);
  return {
    status: HTTP_STATUS_CODES.OK,
    body: {
      data: remorque,
      count
    },
  };
};



export default {
  queryremorque,

};
