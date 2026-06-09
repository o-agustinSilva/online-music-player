import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBInput, MDBBtn } from 'mdb-react-ui-kit';

const SearchRooms = () => {
    return (
        <>
            <Row className='mb-4 pt-3' style={{ background: "#1c1f21", minHeight: "60px", borderRadius: "12px" }}>
                <Col sm={12} md={4} className='d-flex justify-content-md-start justify-content-center mb-3'>
                    <MDBDropdown group>
                        <MDBBtn color='secondary'>Ordenar</MDBBtn>
                        <MDBDropdownToggle size='sm' split color='light'/>
                        <MDBDropdownMenu>
                            <MDBDropdownItem link>Sala</MDBDropdownItem>
                            <MDBDropdownItem link>Creador</MDBDropdownItem>
                            <MDBDropdownItem link>Acceso</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </Col>

                <Col sm={12} md={6} className='d-flex justify-content-end mb-3'>
                    <MDBInput label='Buscar por nombre de sala' id='search' type='text' style={{ background: "#ffffff" }} />
                </Col>

                <Col sm={12} md={2} className='mb-3'>
                    <div className="d-grid gap-2">
                        <MDBBtn type="submit" color='secondary'>
                            Buscar
                        </MDBBtn>
                    </div>
                </Col>

            </Row>
        </>
    )
}

export default SearchRooms