import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import styles from "./table.module.css";
import ViewMore from "./ViewMore";
import { useSelector } from "react-redux";
import ConfirmModal from "../../components/Modals/ConfirmModal/ConfirmModal";
import ModifyModal from "../../components/Modals/ModifyModal/ModifyModal";
import { deleteMission } from "../../redux/actions/missionActions";

let rowID;

function Table() {
  const [show, setShow] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showModifyModal, setShowModifyModal] = useState(false);

  let rows = useSelector((state) => state.missions);
  rows = [...rows].reverse();

  const toggleShow = () => {
    setShow(!show);
  };

  const toggleShowConfirmModal = () => {
    setShowConfirmModal(!showConfirmModal);
  };

  const toggleShowModifyModal = () => {
    setShowModifyModal(!showModifyModal);
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
    { field: "client", headerName: "Client", width: 100 },
    {
      field: "vehicule",
      headerName: "Véhicule",
      width: 100,
    },
    {
      field: "chauffeur",
      headerName: "Chauffeur",
      width: 130,
    },
    {
      field: "lieuDepart",
      headerName: "Lieu départ",
      width: 130,
    },
    {
      field: "lieuArrive",
      headerName: "Lieu arrivé",
      width: 130,
    },
    {
      field: "produit",
      headerName: "Produit",
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
          <button
            className="btn btn-secondary"
            title="Modifier"
            onClick={toggleShowModifyModal}
          >
            <i className="fa-solid fa-pen"></i>
          </button>
          <button
            className="btn btn-warning"
            onClick={toggleShow}
            title="Voir plus"
          >
            <i className="fa-solid fa-eye"></i>
          </button>

          <a href="./sample.pdf" download>
            <button className="btn btn-primary" title="Imprimer">
              <i className="fa fa-print"></i>
            </button>
          </a>

          <button
            className="btn btn-danger"
            title="Supprimer"
            onClick={toggleShowConfirmModal}
          >
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

      {/* Modals */}

      {show && (
        <ViewMore show={show} handleClose={toggleShow} rowID={rowID[0]} />
      )}

      {showConfirmModal && (
        <ConfirmModal
          show={showConfirmModal}
          handleClose={toggleShowConfirmModal}
          rowID={rowID[0]}
          reduxAction={deleteMission}
        />
      )}

      {showModifyModal && (
        <ModifyModal
          show={showModifyModal}
          handleClose={toggleShowModifyModal}
          rowID={rowID[0]}
        />
      )}
    </div>
  );
}

export default Table;
