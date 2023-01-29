import { ErrorHandler, HTTP_STATUS_CODES, prisma } from "../../utils";
import { GetFilialeParams } from "./definitions";





const doQueryfiliale = async () => {
  try {
   const filiale = await prisma.filiale.findMany({
      select: {
    
            DesignationFilial:true
      },
   
    })
    const count = await prisma.filiale.count();
    // const ChauffeursUpdated = Chauffeurs.map(elt => {
    //   return ({ ...elt, PhotoCam: elt.PhotoCam ? Buffer.from(elt.PhotoCam).toString('base64') : null })
    // })

    return { filiale, count };
  } catch (err) {
    console.log("err", err);
    
    throw new ErrorHandler("Server Error", HTTP_STATUS_CODES.INTERNAL_SERVER);
  }
};

export default {
  doQueryfiliale,

};
