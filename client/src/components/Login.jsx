import React from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import { MDBBtn } from 'mdb-react-ui-kit';
const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("ingresado");
    }

    return (
        <Container className="d-flex justify-content-center my-auto">
            <div id="box" className="p-5 d-flex flex-column justify-content-between">
                <form onSubmit={handleSubmit}>
                    <Row>
                        <Col md={12} className='d-flex justify-content-center'>
                            <h1 style={{ color: "#00a6ff" }}>Iniciar sesión</h1>
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

                    <Row className="d-flex mt-4">
                        <div className="d-grid gap-2">
                            <MDBBtn type="submit" className='custom-botton'>
                                Continuar
                            </MDBBtn>
                        </div>
                    </Row>

                    <Row className="d-flex mt-3">
                        <Col className='d-flex justify-content-center'>
                            <hr style={{ borderColor: 'white', width: '100%', marginTop: '1em' }} />
                        </Col>
                    </Row>
                </form>
                <Row className="d-flex mt-3">
                    <Link to="/signup">
                        <div className="d-grid gap-2">
                            <MDBBtn type="submit" color='secondary'>
                                Registrarse
                            </MDBBtn>
                        </div>
                    </Link>
                </Row>
            </div>
        </Container>
    )
}

export default Login