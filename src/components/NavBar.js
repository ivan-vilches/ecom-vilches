import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';



function Navi(){
    return (
      
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">EcomVilches</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#aceites">Aceites</Nav.Link>
                        <Nav.Link href="#inciensos">Inciensos</Nav.Link>
                        <Nav.Link href="#inciensos">Joyas</Nav.Link>
                 
                    </Nav>
            
                </Navbar.Collapse>
            </Navbar>

    
    )

}


export default Navi;