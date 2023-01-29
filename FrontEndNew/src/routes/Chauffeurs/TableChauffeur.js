
import React ,{useState,useEffect} from "react"
import { DataGrid } from "@mui/x-data-grid";
import ViewMoreChauffeurs from "../../components/Modals/ViewMoreChauffeurs/ViewMoreChauffeurs";
import styles from "./table.module.css";
import data from "redux/reducers/authData/authData";
//import { Chauffeur } from "../../../api/chauffeur/chauffeur";
const rows = [
  {
    id: 1,
    prenom: "Ahmed",
    nom: "Ali",
    numtel: "23 555 874",
    adresse: "sousse",
  },
  {
    id: 2,
    prenom: "Mohamed",
    nom: "Ben Salem",
    numtel: "55 329 555",
    adresse: "Tunis",
  },
  {
    id: 3,
    prenom: "Samir",
    nom: "Ben ahmed",
    numtel: "28 002 471",
    adresse: "Sfax",
  },
  {
    id: 4,
    prenom: "Hammadi",
    nom: "Ben Ali",
    numtel: "50 998 741",
    adresse: "Beja",
  },
  {
    id: 5,
    prenom: "Ahmed",
    nom: "Ali",
    numtel: "55 555 555",
    adresse: "sousse",
  },
];

function Table() {
  const [chauffeur, setChauffeur]=useState([]);
  //const { getChauffeur,removeContenu } = Chauffeur();

  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [reloadCKTable, setReloadCKTable] = useState(false);


  
  useEffect(async () => {
    const response = await fetch("http://localhost:5000/api/chauffeur");
    const data = await response.json();
    // const [item] = data.results;
    setChauffeur(data);

    console.log(data);

  }, []);


//   const fireGetCK = () => {
//     //setLoading(true);
//     getChauffeur()
//         .then((response) => {
//           setChauffeur(response.data);
//             setTotal(response.count);
//             setLoading(false);
//         }) 
//         .catch(() => {
//             setLoading(false);
//         });
// };

// useEffect(() => {
//     fireGetCK();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [reloadCKTable]);

  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "nom", headerName: "Nom", width: 120},
    { field: "prenom", headerName: "Prenom", width: 120 },
    {
      field: "numtel",
      headerName: "N de telephone",
      width: 140,
    },
    {
      field: "adresse",
      headerName: "Adresse",
      width: 140,
    },

    {
      field: "viewMore",
      headerName: "Details",

      width: 160,
      renderCell: () => (
        <button
          className="btn btn-warning"
          onClick={toggleShow}
          title="Voir plus"
        >
          <i className="fa-solid fa-eye"></i>
        </button>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={chauffeur}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
      <ViewMoreChauffeurs show={show} handleClose={toggleShow} />
      
    </div>
  );
}

export default Table;
