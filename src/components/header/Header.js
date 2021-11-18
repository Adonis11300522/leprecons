import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import './Header.css';
import Headerlogo from '../../assets/images/f_logo.png';
function Header() {
  return (
    <div className="Header">
         <Navbar collapseOnSelect fixed="top" expand="sm">
             <Container>
                 <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                 <Navbar.Brand href="#"><img src={Headerlogo} alt="Headerlogo"/></Navbar.Brand>
                 <Navbar.Collapse id="responsive-navbar-nav">
                     <Nav>
                         <Nav.Link href="#">HOME</Nav.Link>
                         <Nav.Link href="#">LORE</Nav.Link>
                         <Nav.Link href="#">ABOUT</Nav.Link>
                         <Nav.Link href="#">CLUB</Nav.Link>
                         <Nav.Link href="#">ROADMAP</Nav.Link>
                         <Nav.Link href="#">TEAM</Nav.Link>
                         <Nav.Link href="#">FAQS</Nav.Link>
                     </Nav>
                     <Button>JOIN DISCORD</Button>
                 </Navbar.Collapse>
             </Container>
         </Navbar>
    </div>
  );
}

export default Header;