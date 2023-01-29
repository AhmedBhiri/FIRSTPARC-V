import React from 'react';

import { Modal, Button, Row, Col } from 'react-bootstrap';

function ViewMore({ show, handleClose, CK }) {
    console.log('ck', CK);
    return (
        <Modal show={show} onHide={handleClose} size='xs'>
            <Modal.Header closeButton>
                <Modal.Title> CheckList N° : {CK.CodeCK} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Row className='mb-3'>
                        <h4>Details CheckList</h4>
                    </Row>

                    
                    <Row>
                        {' '}
                        <Col>
                            <h5 className='text-info col-3'>id :</h5>{' '}
                        </Col>
                        <Col>
                            <p className='text-left'>{CK.CodeCK}</p>{' '}
                        </Col>
                        <Col>
                            <h5 className='text-info col-3'>Type :</h5>{' '}
                        </Col>
                        <Col>
                            <p className='text-left'>{CK.CK_Type.Designation}</p>{' '}
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h5 className='text-info col-3'>Sous type :</h5>
                        </Col>
                        <Col>
                            <p className=' text-left'>{CK.CK_SousType.Designation}</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h5 className='text-info col-3'>Contenu :</h5>{' '}
                        </Col>

                        <Col>
                            <p className='text-left'>
                            {CK.CK_Contenu.Designation}
                                
                            </p>{' '}
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h5 className='text-info col-3'>Designation :</h5>
                        </Col>
                        <Col>
                            <p className='text-left'>{CK.DesignationCK}</p>
                        </Col>
                    </Row>
                </Row>
            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-end align-items-center pb-1'>
                <Button variant='secondary' onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ViewMore;
