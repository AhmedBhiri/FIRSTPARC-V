import { ErrorHandler, HTTP_STATUS_CODES, prisma } from "../../utils";
import { GetVehiculeParams } from "./definitions";





const doQueryVehicule = async (params: GetVehiculeParams) => {

  let { skip, take } = params;

  const paginationConfig: {
    skip?: number;
    take?: number;
  } = {
    skip: skip ? Number(skip) : undefined,
    take: take ? Number(take) : undefined,
  };
  try {
    let vehicule = await prisma.vehicule.findMany({

      select: {
        ImmatriculationVeh:true,
        DateAchat:true,
      
        
      },
      ...paginationConfig
    })
    const count = await prisma.vehicule.count();
    

    return { vehicule, count };
  } catch (err) {
    console.log("err", err);
    throw new ErrorHandler("Server Error", HTTP_STATUS_CODES.INTERNAL_SERVER);
  }
};

export default {
  doQueryVehicule,

};
