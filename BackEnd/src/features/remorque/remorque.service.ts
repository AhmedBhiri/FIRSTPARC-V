import { ErrorHandler, HTTP_STATUS_CODES, prisma } from "../../utils";
import { GetremorqueParams } from "./definitions";





const doQueryremorque = async (params: GetremorqueParams) => {

  let { skip, take } = params;

  const paginationConfig: {
    skip?: number;
    take?: number;
  } = {
    skip: skip ? Number(skip) : undefined,
    take: take ? Number(take) : undefined,
  };
  try {
    let remorque = await prisma.remorque.findMany({

      select: {
        NChassisRem:true,
        PoidsRem:true,
      
        
      },
      ...paginationConfig
    })
    const count = await prisma.remorque.count();
    

    return { remorque, count };
  } catch (err) {
    console.log("err", err);
    throw new ErrorHandler("Server Error", HTTP_STATUS_CODES.INTERNAL_SERVER);
  }
};

export default {
  doQueryremorque,

};
