import React, { useState } from "react";

import { DataGrid } from "@mui/x-data-grid";

import styles from "./table.module.css";

import ViewMoreCars from "../../components/Modals/ViewMoreCars/ViewMoreCars";
const rows = [
  {
    id: 1,
    immatriculation: "2590-120",
    cartegrise: "111-888-8888",
    date: "20-02-2021",
    typecarburant: "Essence",
    remorque: " 223-887-77",
    etat: "panne",
  },
  {
    id: 2,
    immatriculation: "2590-120",
    cartegrise: "111-888-8888",

    date: "20-02-2021",
    typecarburant: "Essence",
    remorque: " 223-887-77",

    etat: "panne",
  },
  {
    id: 3,
    immatriculation: "7102TU87",

    cartegrise: "111-888-8888",
    date: "20-02-2021",
    typecarburant: "Essence",
    remorque: " 223-887-77",

    etat: "bonne",
  },
  {
    id: 4,
    immatriculation: "332TU110",

    cartegrise: "111-888-8888",

    date: "20-02-2021",
    typecarburant: "Essence",
    remorque: " 223-887-77",

    etat: "panne",
  },
  {
    id: 5,
    immatriculation: "332TU87",
    cartegrise: "111-888-8888",
    date: "20-02-2021",
    typecarburant: "Essence",
    remorque: " 223-887-77",

    etat: "bonne",
  },
];

function Table() {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "immatriculation", headerName: "Immatriculation", width: 130 },
    { field: "cartegrise", headerName: "Carte grise", width: 130 },
    { field: "date", headerName: "Date", width: 130 },
    { field: "typecarburant", headerName: "Type carburant", width: 130 },
    { field: "remorque", headerName: "Remorque", width: 130 },
    {
      field: "etat",
      headerName: "Etat",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 100,
      renderCell: ({ value }) => {
        let customClassName;

        switch (value) {
          case "mission":
            customClassName = styles.mission;
            break;
          case "panne":
            customClassName = styles.panne;
            break;

          case "bonne":
            customClassName = styles.bonne;
            break;
          case "entretien":
            customClassName = styles.entretien;
            break;
          default:
            break;
        }

        return (
          <div className={`${styles.icon} ${customClassName}`}>{value}</div>
        );
      },
    },

    {
      field: "viewMore",
      headerName: "Fiche technique",
      flex: 1,
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
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
      <ViewMoreCars show={show} handleClose={toggleShow} />
    </div>
  );
}

export default Table;
