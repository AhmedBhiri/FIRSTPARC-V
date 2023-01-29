import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import styles from "./table.module.css";
import ViewMore from "./ViewMore";
import { useSelector } from "react-redux";
import ConfirmModal from "../../components/Modals/ConfirmModal/ConfirmModal";
import ModifyPanneModal from "./modals/ModifyPanneModal";
import { deletePanne } from "../../redux/actions/panneAction";
let rowID;

function Table() {
  const [showViewMore, setShowViewMore] = useState(false);
  const [showModify, setShowModify] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const toggleShowViewMore = () => setShowViewMore(!showViewMore);
  const toggleShowModify = () => setShowModify(!showModify);
  const toggleShowDelete = () => setShowDelete(!showDelete);

  const pannes = useSelector((state) => state.pannes);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 60,
      valueFormatter: (params) => {
        return params.value.toString().substring(0, 2);
      },
    },
     
    {
      field: "date",
      headerName: "Date",
      width: 100,
    },
    {
      field: "cause",
      headerName: "Cause",
      width: 130,
    },

    {
      field: "chauffeur",
      headerName: "Chauffeur",
      width: 130,
    },
    {
      field: "vehicule",
      headerName: "vehicule",
      width: 100,
    },
    {
      field: "lieu",
      headerName: "lieu",
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
            onClick={toggleShowModify}
          >
            <i className="fa-solid fa-pen"></i>
          </button>

          <button
            className="btn btn-warning"
            title="Voir plus"
            onClick={toggleShowViewMore}
          >
            <i className="fa-solid fa-eye"></i>
          </button>

          <button
            className="btn btn-danger"
            title="Supprimer"
            onClick={toggleShowDelete}
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
        rows={pannes}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        onSelectionModelChange={(id) => {
          rowID = id;
        }}
      />
      {showViewMore && (
        <ViewMore
          show={showViewMore}
          handleClose={toggleShowViewMore}
          rowID={rowID[0]}
        />
      )}

      {showDelete && (
        <ConfirmModal
          show={showDelete}
          handleClose={toggleShowDelete}
          rowID={rowID[0]}
          reduxAction={deletePanne}
        />
      )}

      {showModify && (
        <ModifyPanneModal
          show={showModify}
          handleClose={toggleShowModify}
          rowID={rowID[0]}
        />
      )}
    </div>
  );
}

export default Table;
