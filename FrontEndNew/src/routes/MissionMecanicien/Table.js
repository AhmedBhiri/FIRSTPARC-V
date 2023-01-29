import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import styles from "./table.module.css";
import ViewMore from "./ViewMore";
const rows = [
  {
    id: 1,
    vehicule: "Peugot",
    Mecanicien: "Sousse",
    TypePanne: "Tunis",
    etat: "attente",
  },
  {
    id: 2,
    vehicule: "Peugot",
    Mecanicien: "Sousse",
    TypePanne: "Tunis",
    etat: "effectuée",
  },
  {
    id: 3,
    vehicule: "Peugot",
    Mecanicien: "Sousse",
    TypePanne: "Tunis",

    etat: "annulée",
  },
];

function Table() {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  const columns = [
    { field: "id", headerName: "ID", width: 60 },

    {
      field: "vehicule",
      headerName: "Véhicule",
      width: 100,
    },

    {
      field: "Mecanicien",
      headerName: "Mecanicien",
      width: 130,
    },
    {
      field: "TypePanne",
      headerName: "Type de panne",
      width: 130,
    },

    {
      field: "etat",
      headerName: "Etat",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 140,
      renderCell: ({ value }) => {
        let customClassName;

        switch (value) {
          case "attente":
            customClassName = styles.attente;
            break;
          case "annulée":
            customClassName = styles.annulée;
            break;

          case "effectuée":
            customClassName = styles.effectuée;
            break;
          case "en_cours":
            customClassName = styles.en_cours;
            break;
          default:
            break;
        }

        return (
          <div className={`${styles.icon} ${customClassName} text-uppercase`}>
            {value}
          </div>
        );
      },
    },

    {
      field: "Actions",
      headerName: "Actions",
      width: 220,
      renderCell: () => (
        <div className="d-flex justify-content-between align-items-center w-100">
          <button className="btn btn-secondary" title="Modifier">
            <i className="fa-solid fa-pen"></i>
          </button>
          <button
            className="btn btn-warning"
            onClick={toggleShow}
            title="Voir plus"
          >
            <i className="fa-solid fa-eye"></i>
          </button>

          <button className="btn btn-primary" title="Imprimer">
            <i className="fa fa-print"></i>
          </button>
          {/* <button className="btn btn-danger" title="Supprimer">
            <i className="fa-solid fa-trash"></i>
          </button> */}
        </div>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
      {show && <ViewMore show={show} handleClose={toggleShow} />}
    </div>
  );
}

export default Table;
