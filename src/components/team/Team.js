import React from "react";
import { Container, NavLink } from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';
import Teamwave from '../../assets/images/wave/teamwave.png';
import Avatar1 from '../../assets/images/avatar/1.png';
import Avatar2 from '../../assets/images/avatar/15.png';
import Avatar3 from '../../assets/images/avatar/34.png';
import './Team.css';
import { FaTwitter } from "react-icons/fa";

function Team() {

  return (
    <div className="Team" id="Team">
      <div className="Teamwave"><img src={Teamwave} alt="Teamwave"/></div>
      <div className="Team-main">
        <Container className="Team-main-body pt-4 pb-4">
            <div className="Team-main-title">
                <h4 className="mt-2">TEAM</h4>
            </div>
            <div className="Team-main-members">
                <div className="Team-member">
                    <img src={Avatar1} alt="Avatar1"/>
                    <h5>Alfie Robles</h5>
                    <p>Art God</p>
                    <NavLink href="https://twitter.com/THEAlfieRobles?t=9Dwau1tOiMQIenMLBznkUQ&s=09" target="_blank"><FaTwitter/>@THEAlfieRobles</NavLink>
                </div>
                <div className="Team-member">
                    <img src={Avatar2} alt="Avatar1"/>
                    <h5>Phasad</h5>
                    <p>Operations </p>
                    <NavLink href="https://twitter.com/Phasad2323?t=ZjoZZMSvI0LuWDhcW18_lQ&s=09" target="_blank"><FaTwitter/>@Phasad2323</NavLink>
                </div>
                <div className="Team-member">
                    <img src={Avatar3} alt="Avatar1"/>
                    <h5>UmerHQ</h5>
                    <p>Divine Dev</p>
                    <NavLink href="https://twitter.com/umerhqureshi?t=YdOGrFe91HzILJz7ACrt3A&s=09" target="_blank"><FaTwitter/>@umerhqureshi</NavLink>
                </div>
            </div>
        </Container>
      </div>
    </div>
  );
}

export default Team;