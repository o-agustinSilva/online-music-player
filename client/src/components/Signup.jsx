import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { MDBBtn } from 'mdb-react-ui-kit';

const Signup = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (
        <Container className="d-flex justify-content-center my-auto p-5">
            <div id="box" className="p-5 m-4 d-flex flex-column justify-content-between">
                <form onSubmit={handleSubmit}>
                    <Row>
                        <Col md={12} className='d-flex justify-content-center'>
                            <h1 style={{ color: "#00a6ff" }}>Registrarse</h1>
                        </Col>
                    </Row>
                    <Row className="d-flex mt-4">
                        <Col>
                            <label htmlFor='username' style={{ color: "white" }}>Nombre de usuario</label>
                            <input type='text' className='custom-input' name='username' required />
                        </Col>
                    </Row>
                    <Row className="d-flex mt-3">
                        <Col>
                            <label htmlFor='password' style={{ color: "white" }}>Contraseña</label>
                            <input type='password' className='custom-input' name='password' required={true} />
                        </Col>
                    </Row>
                    <Row className="d-flex mt-3">
                        <Col>
                            <label htmlFor='confirmPassword' style={{ color: "white" }}>Confirmar contraseña</label>
                            <input type='password' className='custom-input' name='confirmPassword' required={true} />
                        </Col>
                    </Row>

                    <Row className="d-flex mt-4 justify-content-center">
                        <Col md={12}>
                            <div className="d-grid gap-2">
                                <MDBBtn type="submit" className='custom-botton'>
                                    Continuar
                                </MDBBtn>
                            </div>
                        </Col>
                        <Col md={12} className='d-flex justify-content-center mt-4'>
                            <p style={{ color: "white" }}>
                                <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Volver</Link>
                            </p>
                        </Col>
                    </Row>
                </form>
            </div>
        </Container>
    )
}

export default Signup