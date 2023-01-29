import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { DataGrid } from '@mui/x-data-grid';
import { SousTypeck } from '../../../api/CK/soustypeck/SousTypeck';

import ConfirmModal from '../../../components/Modals/ConfirmModal/ConfirmModal';
import ModifySousTypeModal from './ModifySousTypeModal';
let rowID;

function Table({ reloadSousTypeCKTable }) {
    const [showModify, setShowModify] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [selectedRowId, setSelectedRowId] = useState(null);

    const [soustypeCK, setSousTypeCK] = useState([]);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const { getSousTypeCK, removeSousType, updateSousType } = SousTypeck();

    const toggleShowModify = (id) => {
        setSelectedRowId(id ?? null);
        setShowModify(!showModify);
    };

    const handleUpdateSousType = (id, payload) => {
        updateSousType(id, payload).then(() => {
            toast.success('Sous type supprimé avec succées');
            fireGetSousType();
            toggleShowModify();
        });
    };
    const toggleShowDelete = (id) => {
        setSelectedRowId(id ?? null);
        setShowDelete(!showDelete);
    };

    const handleRemoveSousType = (id) => {
        removeSousType(id).then(() => {
            toast.success('SousType supprimé avec succées');
            fireGetSousType();
            toggleShowDelete();
        });
    };

    const fireGetSousType = () => {
        setLoading(true);
        getSousTypeCK()
            .then((response) => {
                setSousTypeCK(response.data);
                setTotal(response.count);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        fireGetSousType();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reloadSousTypeCKTable]);

    const columns = [
        { field: 'CodeCK_SousType', headerName: 'ID', width: 10 },

        { field: 'Designation', headerName: 'Designation', width: 180 },
        /*{
            field: 'CodeCK_Type',
            headerName: 'CodeCK',
            width: 180,
            renderCell: ({ row }) => {
                return row?.CK_Type?.Designation ?? '';
            }
        }*/,
        {
            field: 'viewMore',
            headerName: 'Actions',
            width: 220,
            renderCell: ({ row }) => (
                <div className='d-flex justify-content-between align-items-center w-100'>
                    <button
                        className='btn btn-secondary'
                        title='Modifier'
                        onClick={() => toggleShowModify(row.CodeCK_SousType)}
                    >
                        <i className='fa-solid fa-pen'></i>
                    </button>

                    <button
                        className='btn btn-danger'
                        title='Supprimer'
                        onClick={() => toggleShowDelete(row.CodeCK_SousType)}
                    >
                        <i className='fa-solid fa-trash'></i>
                    </button>
                </div>
            )
        }
    ];

    return (
        <div style={{ width: '100%' }}>
            <DataGrid
                rows={soustypeCK}
                columns={columns}
                loading={loading}
                pageSize={8}
                autoHeight
                pagination
                rowCount={total}
                rowsPerPageOptions={[5]}
                getRowId={(row) => {
                    return row.CodeCK_SousType;
                }}
                onSelectionModelChange={(gridSelectionModel) => {
                    rowID = gridSelectionModel.CodeCK_SousType;
                }}
            />
            {showDelete && selectedRowId != null && (
                <ConfirmModal
                    show={showDelete}
                    handleClose={toggleShowDelete}
                    rowID={selectedRowId}
                    requestCallback={handleRemoveSousType}
                />
            )}
             {showModify && selectedRowId != null && (
                <ModifySousTypeModal
                    show={showModify}
                    handleClose={toggleShowModify}
                    soustypeCK={soustypeCK.filter((soustype) => soustype.CodeCK_SousType === selectedRowId)[0] ?? null}
                    requestCallback={handleUpdateSousType}
                />
            )}
        </div>
    );
}

export default Table;
