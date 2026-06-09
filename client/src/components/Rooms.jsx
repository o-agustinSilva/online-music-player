import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import TableOfRooms from './TableOfRooms';
import SearchRooms from './SearchRooms';
import AccessCode from './AccessCode';

const Rooms = () => {

    return (
        <Container className="d-flex flex-column justify-content-center p-5">
            <Row style={{ width: "100%" }} className='d-flex mb-4'>
                <Col>
                    <h1 style={{ color: "#ffffff" }}>Lista de salas</h1>
                </Col>
            </Row>

            <SearchRooms/>
            <TableOfRooms />
            <AccessCode />
        </Container>
    )
}

export default Rooms