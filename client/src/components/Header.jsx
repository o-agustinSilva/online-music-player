import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from "../context/ThemeProvider";
import Options from './Options';
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBBtn,
    MDBIcon,
    MDBNavbarNav,
    MDBInputGroup
} from 'mdb-react-ui-kit';

const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const [openNavNoTogglerSecond, setOpenNavNoTogglerSecond] = useState(false);

    return (
        <div>
            <MDBNavbar expand='lg' style={{background:"#1c1f21"}}>
                <MDBContainer fluid className='Header'>
                    <MDBNavbarBrand style={{color:"#00a6ff"}} href='/'>BRAND</MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarTogglerDemo02'
                        aria-controls='navbarTogglerDemo02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setOpenNavNoTogglerSecond(!openNavNoTogglerSecond)}
                        style={{color:"#00a6ff"}}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar open={openNavNoTogglerSecond}>
                        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                            <MDBNavbarItem>
                                <MDBNavbarLink active aria-current='page' href='/rooms'>
                                    Lista de salas
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href="create-room">Crear una sala</MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
            </div>

    );
}

export default Header