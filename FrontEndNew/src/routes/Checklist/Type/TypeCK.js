import React, { useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import TableTypeCK from './TableTypeCK';
import AjouterTypeCK from '../../../components/Modals/AjouterTypeCK/AjouterTypeCK';
import { Link, BrowserRouter } from 'react-router-dom';

function TypeCK() {
    const [openAjouterTypeCK, setOpenAjouterTypeCK] = useState(false);
    const [reloadTypeCKTable, setReloadTypeCKTable] = useState(false);

    const toggleOpenAjouterTypeCK = (reloadAfterAdd = false) => {
        setOpenAjouterTypeCK(!openAjouterTypeCK);
        if (reloadAfterAdd) {
            setReloadTypeCKTable(!reloadTypeCKTable);
        }
    };

    return (
        <Container>
            <div>
                <h4>Liste des types checklist </h4>
                <Button
                    className='btn btn-info rounded mt-3'
                    onClick={() => toggleOpenAjouterTypeCK()}
                >
                    + Créer un type
                </Button>
               

                <Row className='mt-5'>
                    <TableTypeCK reloadTypeCKTable={reloadTypeCKTable} />
                </Row>

                {openAjouterTypeCK && (
                    <AjouterTypeCK show={openAjouterTypeCK} handleClose={toggleOpenAjouterTypeCK} />
                )}
            </div>
        </Container>
    );
}
export default TypeCK;
