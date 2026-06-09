import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import TableRow from './TableRow';
import AccessCode from './AccessCode';

const TableOfRooms = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <Row id="custom-table">
                <MDBTable align='middle' borderless responsive>
                    <MDBTableHead>
                        <tr>
                            <th scope='col'>Sala</th>
                            <th scope='col'>Creador</th>
                            <th scope='col'>Acceso</th>
                        </tr>
                    </MDBTableHead>

                    <MDBTableBody>
                        <TableRow roomName="Los peteretes" creator="Sugu Pachonq" access="Pública" openModal={openModal} />
                        <TableRow roomName="Los peteretes 2" creator="Burgus" access="Privada" openModal={openModal} />
                    </MDBTableBody>
                </MDBTable>
            </Row>
            <AccessCode isOpen={modalOpen} closeModal={closeModal} />
        </>
    )
}

export default TableOfRooms;
