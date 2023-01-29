import { ErrorHandler, HTTP_STATUS_CODES, prisma } from "../../utils";
import { GetMecanicienParams } from "./definitions";





const doQueryMecanicien = async (params: GetMecanicienParams) => {

  let { skip, take } = params;

  const paginationConfig: {
    skip?: number;
    take?: number;
  } = {
    skip: skip ? Number(skip) : undefined,
    take: take ? Number(take) : undefined,
  };
  try {
    let mecanicien = await prisma.mecanicien.findMany({

      select: {
        PrenomM: true,
        NomM: true,
        Photo: true,
        PortableM: true,
        EmailM: true,
        MatriculeM:true
      },
      ...paginationConfig
    })
    const count = await prisma.mecanicien.count();
    // const ChauffeursUpdated = Chauffeurs.map(elt => {
    //   return ({ ...elt, PhotoCam: elt.PhotoCam ? Buffer.from(elt.PhotoCam).toString('base64') : null })
    // })

    return { mecanicien, count };
  } catch (err) {
    console.log("err", err);
    throw new ErrorHandler("Server Error", HTTP_STATUS_CODES.INTERNAL_SERVER);
  }
};

export default {
  doQueryMecanicien,
   
};
