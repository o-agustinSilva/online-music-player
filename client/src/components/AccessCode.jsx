import React from 'react';
import { MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter, MDBBtn, MDBInput } from 'mdb-react-ui-kit';

const AccessCode = ({ isOpen, closeModal }) => {
    return (
        <MDBModal className='mt-4' staticBackdrop tabIndex='-1' open={isOpen} onClose={closeModal}>
            <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle>Sala privada</MDBModalTitle>
                        <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
                    </MDBModalHeader>
                    <MDBModalBody className='d-flex justify-content-center'>
                        <MDBInput type="text" label="Código de acceso" name='access_code'/>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color='danger' onClick={closeModal}>Cerrar</MDBBtn>
                        <MDBBtn color='info'>Continuar</MDBBtn>
                    </MDBModalFooter>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    );
}

export default AccessCode;