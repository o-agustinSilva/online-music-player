import React from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import { MDBBtn, MDBSwitch, MDBCheckbox } from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form';

const CreateRoom = () => {
    return (
        <Container className="d-flex p-5 justify-content-center my-auto">
            <div id="box" style={{ maxWidth: "700px" }} className="p-5 d-flex flex-column justify-content-between">
                <form >
                    <Row>
                        <Col md={12} className='d-flex justify-content-center'>
                            <h1 style={{ color: "#00a6ff" }}>Crear sala</h1>
                        </Col>
                    </Row>
                    <Row className="d-flex mt-4 align-items-center">
                        <Col>
                            <label htmlFor='name' style={{ color: "white" }}>Nombre</label>
                            <input type='text' className='custom-input' name='name' required />
                        </Col>
                    </Row>
                    <Row className="d-flex mt-3">
                        <Col>
                            <label htmlFor='description' style={{ color: "white" }}>Descripción</label>
                            <textarea rows="4" cols="50" className='custom-input'></textarea>
                        </Col>
                    </Row>

                    <Row className="d-flex mt-3">
                        <Col>
                            <label htmlFor='privacy' style={{ color: "white" }}>Privacidad</label>
                            <Form.Select name='privacy'>
                                <option value="public">Pública</option>
                                <option value="private">Privada</option>
                            </Form.Select>
                        </Col>
                    </Row>

                    <Row className="d-flex mt-4 align-items-center">
                        <Col sm={12} md={6} style={{ color: "white" }}>
                            <MDBSwitch id='can_pause' label='Permitir pausado de música'/>
                        </Col>
                        <Col sm={12} md={6} style={{ color: "white" }}>
                            <MDBSwitch id='can_skip' label='Permitir cambio de música' />
                        </Col>
                    </Row>

                    <Row className="d-flex mt-4">
                        <div className="d-grid gap-2">
                            <MDBBtn type="submit" className='custom-botton'>
                                Crear
                            </MDBBtn>
                        </div>
                    </Row>
                </form>
            </div>
        </Container>
    )
}

export default CreateRoom