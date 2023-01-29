import React, { useState } from "react";

import { DataGrid } from "@mui/x-data-grid";

import styles from "./table.module.css";
import ViewMore from "./modals/ViewMore";
import { useSelector } from "react-redux";
import ConfirmModal from "../../components/Modals/ConfirmModal/ConfirmModal";
import ModifyUserModal from "./modals/ModifyUserModal";
import { deleteUser } from "../../redux/actions/usersActions";

let rowID;

function Table() {
  const [showViewMore, setShowViewMore] = useState(false);
  const [showModify, setShowModify] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const toggleShowViewMore = () => setShowViewMore(!showViewMore);
  const toggleShowModify = () => setShowModify(!showModify);
  const toggleShowDelete = () => setShowDelete(!showDelete);

  const users = useSelector((state) => state.users);
  const data = [
    {
      id: 1,
      nom: "Ahmed ",
      prenom: "Ali",
      
      role: "Mecanicien",
      datecreation: "22-22-2022",
      motdepasse: "mdp123",
    },
    {
      id: 2,
      nom: "Mohamed ",
      prenom: "Ben salah",
      /*email: "ahmed-ali@gmail.com",
      numtel: "23 999 999"*/
      role: "Chef de parc",
      datecreation: "22-22-2022",
      motdepasse: "mdp123456",
    },
  ];
  

  const columns = [
    { field: "id", headerName: "ID", width: 10 },
    { field: "nom", headerName: "Nom", width: 130 },
    { field: "prenom", headerName: "Prenom", width: 120 },
    /*{{ field: "email", headerName: "Email", width: 180 },
    {
      field: "numtel",
      headerName: "N telephone",
      //type: "number",
      width: 130,
    }}*/
    {
      field: "role",
      headerName: "Role",
      width: 140,
    },
    {
      field: "datecreation",
      headerName: "Date de creation",
      width: 140,
    },

    {
      field: "viewMore",
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
        rows={data}
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
          reduxAction={deleteUser}
        />
      )}

      {showModify && (
        <ModifyUserModal
          show={showModify}
          handleClose={toggleShowModify}
          rowID={rowID[0]}
        />
      )}
    </div>
  );
}

export default Table;
