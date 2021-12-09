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
                         <Nav.Link href="/#Lore">LORE</Nav.Link>
                         <Nav.Link href="/#About">ABOUT</Nav.Link>
                         <Nav.Link href="/#Club">CLUB</Nav.Link>
                         <Nav.Link href="/#Roadmap">ROADMAP</Nav.Link>
                         <Nav.Link href="/#Team">TEAM</Nav.Link>
                         <Nav.Link href="/#Faqs">FAQS</Nav.Link>
                     </Nav>
                     <a className="join-btn" href="https://discord.gg/JCXW9Qucux" target="_blank">JOIN DISCORD</a>
                 </Navbar.Collapse>
             </Container>
         </Navbar>
    </div>
  );
}

export default Header;