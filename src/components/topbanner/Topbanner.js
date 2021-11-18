import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container } from "react-bootstrap";
import Banner from '../../assets/images/banner.jpg';
import './Topbanner.css';

function Topbanner() {

  return (
    <div className="Topbanner">
      <div className="Topbanner-main">
          <img src={Banner} alt="banner"/>
      </div>
    </div>
  );
}

export default Topbanner;