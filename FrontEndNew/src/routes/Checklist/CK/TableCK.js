import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';

import { DataGrid } from "@mui/x-data-grid";
import { CheckList } from '../../../api/CK/CK/CK';
import ViewMore from './ViewMore';
import AddContenu from './AddContenu';
import ConfirmModal from "../../../components/Modals/ConfirmModal/ConfirmModal";
import ModifyTypeModal from "./ModifyTableModal";
import ViewMoreCars from "../../../components/Modals/ViewMoreCars/ViewMoreCars";
import { Typeck } from "../../../api/CK/typeck/Typeck";
let rowID;

function Table({ reloadCKTable }) {
  const [showViewMore, setShowViewMore] = useState(false);
  const [addNewContenu, setAddContenu] = useState(false);
    // const [showModify, setShowModify] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [selectedRowId, setSelectedRowId] = useState(null);

    const [CK, setCK] = useState([]);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const { getCK, removeCK } = CheckList();


    const toggleShowViewMore = (id) => {
      setSelectedRowId(id ?? null);
      setShowViewMore(!showViewMore);
    };
    const toggleAddContenu = (id) => {
      setSelectedRowId(id ?? null);
      setAddContenu(!addNewContenu);
    };
    const toggleShowDelete = (id) => {
        setSelectedRowId(id ?? null);
        setShowDelete(!showDelete);
    };

    const handleRemoveCK = (id) => {
      removeCK(id).then(() => {
          toast.success('Checklist supprimé avec succées');
          fireGetCK();
          toggleShowDelete();
      });
    };

    const fireGetCK = () => {
      setLoading(true);
      getCK()
          .then((response) => {
              setCK(response.data);
              setTotal(response.count);
              setLoading(false);
          })
          .catch(() => {
              setLoading(false);
          });
  };



useEffect(() => {
  fireGetCK();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [reloadCKTable]);
  

  const columns = [
    { field: 'CodeCK', headerName: 'Code', width: 30 },
    {
      field: 'CodeCK_Type',
      headerName: 'Type',
      width: 150,
      renderCell: ({ row }) => {
          return row?.CK_Type?.Designation ?? '';
      }
  },
  {
    field: 'CodeCK_SousType',
    headerName: 'Sous Type',
    width: 180,
    renderCell: ({ row }) => {
        return row?.CK_SousType?.Designation ?? '';
    }
},
/*{
  field: 'CodeCK_Contenu',
  headerName: 'Contenu',
  width: 180,
  renderCell: ({ row }) => {
      return row?.CK_Contenu?.Designation ?? '';
  }
},*/
{
  field: 'viewMore',
  headerName: 'Actions',
  width: 220,
  renderCell: ({ row }) => (
      <div className='d-flex justify-content-between align-items-center w-100'>
          <button
              className='btn btn-warning'
              title='Voir Details'
              onClick={() => toggleShowViewMore(row.CodeCK)}
          >
              <i className='fa-solid fa-eye'></i>
          </button>

          <button
              className='btn btn-info'
              title='Ajouter Contenu'
              onClick={() => toggleAddContenu(row.CodeCK)}
          >
              <i className='fa-solid fa-add'></i>
          </button>
          
          {/*<button className='btn btn-secondary' title='Modifier'>
              <i className='fa-solid fa-pen'></i>
          </button>*/}

          <button
        className='btn btn-danger'
        title='Supprimer'
        onClick={() => toggleShowDelete(row.CodeCK)}
    >
        <i className='fa-solid fa-trash'></i>
    </button>
      </div>
  )
}
  ];

  /*const rows = [
    {
      id: 1,
      Type: "Contôle Batiments",
      SousType: "Avant Chargement"
    },
    {
      id: 2,
      Type: "Contôle Batiments",
      SousType: "Après Chargement"
    }
  ];*/

  return (
    <div style={{ width: '100%' }}>
            <DataGrid
                rows={CK}
                columns={columns}
                loading={loading}
                pageSize={6}
                autoHeight
                pagination
                rowCount={total}
                rowsPerPageOptions={[5]}
                getRowId={(row) => {
                    return row.CodeCK;
                }}
                onSelectionModelChange={(gridSelectionModel) => {
                    rowID = gridSelectionModel.CodeCK;
                }}
            />
            {showViewMore && selectedRowId != null && (
                <ViewMore
                    show={showViewMore}
                    handleClose={toggleShowViewMore}
                    CK={CK.filter((CK) => CK.CodeCK === selectedRowId)[0] ?? null}
                />
            )}
            {AddContenu && selectedRowId != null && (
                <AddContenu
                    show={addNewContenu}
                    handleClose={toggleAddContenu}
                    CK={CK.filter((CK) => CK.CodeCK === selectedRowId)[0] ?? null}
                />
            )}
            {showDelete && selectedRowId != null && (
                <ConfirmModal
                    show={showDelete}
                    handleClose={toggleShowDelete}
                    rowID={selectedRowId}
                    requestCallback={handleRemoveCK}
                />
            )}
        </div>
  );
}

export default Table;
