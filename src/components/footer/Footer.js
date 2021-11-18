import React from "react";
import { Container, NavLink } from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';
import Footerwave from '../../assets/images/wave/footerwave.png';
import Footerlogo from '../../assets/images/f_logo.png';
import './Footer.css';
import { FaTwitter, FaDiscord } from "react-icons/fa";

function Footer() {

  return (
    <div className="Footer">
      <div className="Footerwave"><img src={Footerwave} alt="Footerwave"/></div>
      <div className="Footer-main">
        <Container className="Footer-main-body pt-4 pb-4">
            <div className="Footer-main-logo"><img src={Footerlogo} alt="Footerlogo"/></div>
            <div className="Footer-main-community mt-5">
                <NavLink><FaTwitter/></NavLink>
                <NavLink><FaDiscord/></NavLink>
            </div>
            <div className="Footer-main-infor mt-5">
                <p>Terms of Service</p>
                <p>All rights reserved</p>
            </div>
        </Container>
      </div>
    </div>
  );
}

export default Footer;