import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import styles from "./table.module.css";
import ViewMore from "./ViewMore";
import { useSelector } from "react-redux";

let rowID;

function Table() {
  const [show, setShow] = useState(false);

  let rows = useSelector((state) => state.amendes);
 

  const toggleShow = () => {
    setShow(!show);
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 60,
      valueFormatter: (params) => {
        return params.value.toString().substring(0, 2);
      },
    },
    { field: "nomchauffeur", headerName: "Nom chauffeur", width: 130 },
    {
      field: "nomvehicule",
      headerName: "Nom vehicule",
      width: 130,
    },
    {
      field: "cause",
      headerName: "Cause",
      width: 100,
    },

    {
      field: "date",
      headerName: "Date",
      width: 120,
    },
    {
      field: "montant",
      headerName: "Montant",
      width: 100,
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

          case "Payée":
            customClassName = styles.effectuée;
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
          <button className="btn btn-danger" title="Supprimer">
            <i className="fa-solid fa-trash"></i>
          </button>
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
        onSelectionModelChange={(id) => {
          rowID = id;
        }}
      />
      {show && (
        <ViewMore show={show} handleClose={toggleShow} rowID={rowID[0]} />
      )}
    </div>
  );
}

export default Table;
