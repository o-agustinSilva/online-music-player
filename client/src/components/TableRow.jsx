// TableRow.jsx
import React from 'react'
import { MDBBtn, MDBBadge } from 'mdb-react-ui-kit';

const TableRow = ({ roomName, creator, access, openModal }) => {
    const handleJoin = () => {
        openModal();
    };

    return (
        <tr>
            <td className='d-flex align-items-center'>
                <div>
                    <h4 className='fw-bold mb-1' style={{ color: "#00a6ff" }}>{roomName}</h4>
                </div>
            </td>
            <td>
                <h6 className='fw-normal mb-1'>{creator}</h6>
            </td>
            <td>
                <MDBBadge color={access === "Pública" ? 'success' : 'danger'}>{access}</MDBBadge>
            </td>
            <td className='d-flex justify-content-end'>
                {access === 'Pública' ? (
                        <MDBBtn color='info'>
                            UNIRSE
                        </MDBBtn>
                    ) : (
                        <MDBBtn color='info' onClick={handleJoin}>
                            UNIRSE
                        </MDBBtn>
                    )}
            </td>
        </tr>
    );
}

export default TableRow;
