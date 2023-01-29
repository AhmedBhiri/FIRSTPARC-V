import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';

import { DataGrid } from "@mui/x-data-grid";
import { Contenuck } from '../../../api/CK/contenuck/Contenuck';
import ViewMore from './ViewMore';
import ConfirmModal from "../../../components/Modals/ConfirmModal/ConfirmModal";
import ModifyTypeModal from "./ModifyTableModal";
import ViewMoreCars from "../../../components/Modals/ViewMoreCars/ViewMoreCars";
import { Typeck } from "../../../api/CK/typeck/Typeck";
let rowID;

function Table({ reloadCKTable }) {
  const [showViewMore, setShowViewMore] = useState(false);
    // const [showModify, setShowModify] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [selectedRowId, setSelectedRowId] = useState(null);

    const [Contenu, setContenu] = useState([]);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const { getContenuCK,removeContenu } = Contenuck();


    const toggleShowViewMore = (id) => {
      setSelectedRowId(id ?? null);
      setShowViewMore(!showViewMore);
    };
    const toggleShowDelete = (id) => {
        setSelectedRowId(id ?? null);
        setShowDelete(!showDelete);
    };

    const handleRemoveCK = (id) => {
      removeContenu(id).then(() => {
          toast.success('Checklist supprimé avec succées');
          fireGetCK();
          toggleShowDelete();
      });
    };

    const fireGetCK = () => {
      setLoading(true);
      getContenuCK()
          .then((response) => {
            setContenu(response.data);
              setTotal(response.count);
              setLoading(false);
          })
          .catch(() => {
              setLoading(false);
          });
  };
  console.log(Contenu.data);


useEffect(() => {
  fireGetCK();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [reloadCKTable]);
  
const columns=[
  {title:'CodeCK',field:'CodeCK'},
  {title:'Designation',field:'CodeCK'},
  {title:'CodeCk_Contenu',field:'CodeCk_Contenu'}
]
// const columns = [
//   { field: 'CodeCK', headerName: 'ID', width: 10 },
//   {
//     field: 'CodeCK_Contenu',
//     headerName: 'CodeCK_Contenu',
//     width: 180,
//     renderCell: ({ row }) => {
//         return row?.CodeCK_Contenu ?? '';
//     }
//   },
//   {
//     field: 'Designation',
//     headerName: 'Designation',
//     width: 150,
//     renderCell: ({ row }) => {
//         return row?.Designation;
//     }
// },


// {
// field: 'viewMore',
// headerName: 'Actions',
// width: 220,
// renderCell: ({ row }) => (
//     <div className='d-flex justify-content-between align-items-center w-100'>
//         <button
//             className='btn btn-warning'
//             title='Voir plus'
//             onClick={() => toggleShowViewMore(row.CodeCK)}
//         >
//             <i className='fa-solid fa-eye'></i>
//         </button>
        
//         {/*<button className='btn btn-secondary' title='Modifier'>
//             <i className='fa-solid fa-pen'></i>
//         </button>*/}

//         <button
//       className='btn btn-danger'
//       title='Supprimer'
//       onClick={() => toggleShowDelete(row.CodeCK)}
//   >
//       <i className='fa-solid fa-trash'></i>
//   </button>
//     </div>
// )
// }
// ];
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
console.log(Contenu);
  return (
    <div style={{ width: '100%' }}>
            <DataGrid
                rows={Contenu}
                columns={columns}
                loading={loading}
                pageSize={10}
                autoHeight
                pagination
                rowCount={total}
                rowsPerPageOptions={[20]}
                
            />
            {showViewMore && selectedRowId != null && (
                <ViewMore
                    show={showViewMore}
                    handleClose={toggleShowViewMore}
                   // CK={CK.filter((CK) => CK.CodeCK === selectedRowId)[0] ?? null}
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
