import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';

import { DataGrid } from "@mui/x-data-grid";
import ConfirmModal from "../../../components/Modals/ConfirmModal/ConfirmModal";
import ModifyContenuModal from "./ModifyContenuModal";
import { Contenuck } from "../../../api/CK/contenuck/Contenuck";
let rowID;

function Table({ reloadContenuCKTable }) {
  const [showModify, setShowModify] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);

  const [ContenuCK, setContenuCK] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const { getContenuCK,removeContenu,updateContenu } = Contenuck();
  const toggleShowModify = (id) => {
    setSelectedRowId(id ?? null);

    setShowModify(!showModify);
};
  const toggleShowDelete = (id) => {
    setSelectedRowId(id ?? null);
    setShowDelete(!showDelete);
};
const handleUpdateContenu = (id, payload) => {
  updateContenu(id, payload).then(() => {
      toast.success('Contenu modifié avec succées');
      fireGetContenu();
      toggleShowModify();
  });
};
const handleRemoveContenu = (id) => {
  removeContenu(id).then(() => {
      toast.success('Contenu supprimé avec succées');
      fireGetContenu();
      toggleShowDelete();
  });
};

const fireGetContenu = () => {
  setLoading(true);
  getContenuCK()
      .then((response) => {
          setContenuCK(response.data);
          setTotal(response.count);
          setLoading(false);
      })
      .catch(() => {
          setLoading(false);
      });
};


useEffect(() => {
  fireGetContenu();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reloadContenuCKTable])


  const columns = [


    { field: "CodeCK_Contenu", headerName: "ID", width: 130 },
   
    { field: "Designation", headerName: "Designation", width: 200 },
    {
      field: 'viewMore',
      headerName: 'Actions',
      width: 220,
      renderCell: ({ row }) => (
          <div className='d-flex justify-content-between align-items-center w-100'>
            
            <button
                        className='btn btn-secondary'
                        title='Modifier'
                        onClick={() => toggleShowModify(row.CodeCK_Contenu)}
                    >
                        <i className='fa-solid fa-pen'></i>
                    </button>

              <button
                  className='btn btn-danger'
                  title='Supprimer'
                  onClick={() => toggleShowDelete(row.CodeCK_Contenu)}
              >
                  <i className='fa-solid fa-trash'></i>
              </button>
          </div>
      )
  }

  ];

  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        rows={ContenuCK}
        columns={columns}
        loading={loading}
        pageSize={8}
        autoHeight
        pagination
        rowCount={total}
        rowsPerPageOptions={[5]}
        getRowId={(row) => {
          return row.CodeCK_Contenu
        }}
        onSelectionModelChange={(gridSelectionModel) => {
          rowID = gridSelectionModel.CodeCK_Contenu;
        }}
      />
      {showDelete && selectedRowId != null && (
                <ConfirmModal
                    show={showDelete}
                    handleClose={toggleShowDelete}
                    rowID={selectedRowId}
                    requestCallback={handleRemoveContenu}
                />
            )}
    {showModify && selectedRowId != null && (
                <ModifyContenuModal
                    show={showModify}
                    handleClose={toggleShowModify}
                    contenuCK={ContenuCK.filter((contenu) => contenu.CodeCK_Contenu === selectedRowId)[0] ?? null}
                    requestCallback={handleUpdateContenu}
                />
            )}
     
    </div>
  );
}

export default Table;
