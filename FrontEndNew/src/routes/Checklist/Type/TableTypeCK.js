import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';

import { DataGrid } from "@mui/x-data-grid";

import ConfirmModal from "../../../components/Modals/ConfirmModal/ConfirmModal";
import ModifyTypeModal from "./ModifyTypeModal";
import { Typeck } from "../../../api/CK/typeck/Typeck";
let rowID;

function Table({ reloadTypeCKTable }) {
  const [showModify, setShowModify] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);

  const [typeCK, setTypeCK] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const { getCK,removeType,updateType } = Typeck();

  const toggleShowModify = (id) => {
    setSelectedRowId(id ?? null);

    setShowModify(!showModify);
};
  const toggleShowDelete = (id) => {
    setSelectedRowId(id ?? null);
    setShowDelete(!showDelete);
};
const handleUpdateType = (id, payload) => {
  updateType(id, payload).then(() => {
      toast.success('type supprimé avec succées');
      fireGetType();
      toggleShowModify();
  });
};
const handleRemoveType = (id) => {
  removeType(id).then(() => {
      toast.success('Utilisateur supprimé avec succées');
      fireGetType();
      toggleShowDelete();
  });
};

const fireGetType = () => {
  setLoading(true);
  getCK()
      .then((response) => {
          setTypeCK(response.data);
          setTotal(response.count);
          setLoading(false);
      })
      .catch(() => {
          setLoading(false);
      });
};


useEffect(() => {
  fireGetType();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [reloadTypeCKTable]);
  



  const columns = [


    { field: "CodeCK_Type", headerName: "ID", width: 130 },
   
    { field: "Designation", headerName: "Designation", width: 200 },
    {
      field: 'viewMore',
      headerName: 'Actions',
      width: 200,
      renderCell: ({ row }) => (
          <div className='d-flex justify-content-between align-items-center w-100'>
            
            <button
                        className='btn btn-secondary'
                        title='Modifier'
                        onClick={() => toggleShowModify(row.CodeCK_Type)}
                    >
                        <i className='fa-solid fa-pen'></i>
                    </button>

              <button
                  className='btn btn-danger'
                  title='Supprimer'
                  onClick={() => toggleShowDelete(row.CodeCK_Type)}
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
        rows={typeCK}
        columns={columns}
        loading={loading}
        pageSize={8}
        autoHeight
        pagination
        rowCount={total}
        rowsPerPageOptions={[5]}
        getRowId={(row) => {
          return row.CodeCK_Type
        }}
        onSelectionModelChange={(gridSelectionModel) => {
          rowID = gridSelectionModel.CodeCK_Type;
        }}
      />
      

      {showDelete && selectedRowId != null && (
                <ConfirmModal
                    show={showDelete}
                    handleClose={toggleShowDelete}
                    rowID={selectedRowId}
                    requestCallback={handleRemoveType}
                />
            )}
              {showModify && selectedRowId != null && (
                <ModifyTypeModal
                    show={showModify}
                    handleClose={toggleShowModify}
                    typeCK={typeCK.filter((type) => type.CodeCK_Type === selectedRowId)[0] ?? null}
                    requestCallback={handleUpdateType}
                />
            )}
    </div>
  );
}

export default Table;
