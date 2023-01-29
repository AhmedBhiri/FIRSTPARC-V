import { ErrorHandler, HTTP_STATUS_CODES, prisma } from "../../utils";
import { GetChauffeurParams } from "./definitions";


// const DoCreatechauffeur = async (
//   codeCK_Type: number,
//   codeCK_SousType: number,
//   CodeCK_Contenu: number[]
// ) => {
//   try {
//     const chauffeur = await prisma.chauffeur.create({
//       data: {
//         CodeCK_Type: codeCK_Type,
//         CodeCK_SousType: codeCK_SousType,
//         CK_Contenu: {
//           connect: CodeCK_Contenu.map((elt) => ({ CodeCK_Contenu: elt })),
//         },
//       },
//     });
//     return chauffeur;
//   } catch (err) {
//     throw new ErrorHandler("Server Error", HTTP_STATUS_CODES.INTERNAL_SERVER);
//   }
// };



const doQueryChauffeur = async (params: GetChauffeurParams) => {

  let { skip, take } = params;

  const paginationConfig: {
    skip?: number;
    take?: number;
  } = {
    skip: skip ? Number(skip) : undefined,
    take: take ? Number(take) : undefined,
  };
  try {
    let chauffeur = await prisma.chauffeur.findMany({

      select: {
        PrenomC: true,
        NomC: true,
        Photo: true,
        PortableC: true,
        VilleC: true,
        MatriculeC:true
      },
      ...paginationConfig
    })
    const count = await prisma.chauffeur.count();
    // const ChauffeursUpdated = Chauffeurs.map(elt => {
    //   return ({ ...elt, PhotoCam: elt.PhotoCam ? Buffer.from(elt.PhotoCam).toString('base64') : null })
    // })

    return { chauffeur, count };
  } catch (err) {
    console.log("err", err);
    throw new ErrorHandler("Server Error", HTTP_STATUS_CODES.INTERNAL_SERVER);
  }
};

export default {
  doQueryChauffeur,
  // DoCreatechauffeur

};
