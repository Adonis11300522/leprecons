import React from "react";
import { Container } from "react-bootstrap";
import Roadmapwave from '../../assets/images/wave/roadmapwave.png';
import Map from '../../assets/images/map.png';
import Phase1 from '../../assets/images/img/1.png';
import Phase2 from '../../assets/images/img/2.png';
import Phase3 from '../../assets/images/img/3.png';
import Phase4 from '../../assets/images/img/4.png';
import Phase5 from '../../assets/images/img/5.png';
import Phase6 from '../../assets/images/img/6.png';
import './Roadmap.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
function Roadmap() {
  return (
    <div className="Roadmap" id="Roadmap">
      <div className="Roadmapwave">
          <img src={Roadmapwave} alt="Roadmapwave"/>
      </div>
      <div className="Roadmap-main">
            
        <Container className="Roadmap-main-body pt-4 pb-4">
            <div className="Roadmap-main-body-title">
                <h4>Roadmap</h4>    
            </div>    
            <div className="Roadmap-map"><img src={Map} alt="Map"/></div>  
            <VerticalTimeline>
                            {/* <VerticalTimelineElement className="vertical-timeline-element--work"></VerticalTimelineElement>                             */}
                <VerticalTimelineElement className="vertical-timeline-element--work">
                    <div className="vertical-timeline-element-text">
                    <h6>PHASE1</h6>
                        <h5>“Let’s Get Started” </h5>
                        <p>Our Artists and Devs work very hard to create an amazing collection of 11,111 randomly generated Lying LepreCons from over 100 hand drawn traits. Discord, Twitter and YouTube begins</p>
                    </div>
                    <div className="vertical-timeline-element-image">
                        <img src={Phase1} alt="Avatar2"/>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--work"> 
                    <div className="vertical-timeline-element-image">
                        <img src={Phase1} alt="Avatar3"/>
                    </div>
                    <div className="vertical-timeline-element-text">
                        <h3 className="vertical-timeline-element-title">PHASE1</h3> 
                        <h5>“Let’s Get Started” </h5>
                        <p>"Our Artists and Devs work very hard to create an amazing<br/> collection of 11,111 randomly generated Lying LepreCons from <br/>over 100 hand drawn traits. Discord, Twitter and YouTube begins</p>
                    </div>                                
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--work">
                    <div className="vertical-timeline-element-text">
                    <h3 className="vertical-timeline-element-title">PHASE2</h3> 
                        <h5>“PURE LUCK!”</h5>
                        <p>"Level 4 🍀 " or higher will qualify for up to $6,000 on Sellout<br/> Day and a special Grand Prize! Winners are chosen randomly!</p>
                    </div>
                    <div className="vertical-timeline-element-image">
                        <img src={Phase2} alt="Avatar4"/>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--work">
                    <div className="vertical-timeline-element-image">
                        <img src={Phase3} alt="Avatar5"/>
                    </div>
                    <div className="vertical-timeline-element-text">
                    <h3 className="vertical-timeline-element-title">PHASE3</h3> 
                        <h5>“POT O’ SOL!” </h5>
                        <p>From Sell Out to New Year's Day holder get access to the Pot<br/> O’ Sol where will give away $60,000 in Sol and NFT’s! You’ll<br/> need your LepreCon and free Clover-Coin-Nfts to get access.</p>
                    </div>                                
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--work">
                    <div className="vertical-timeline-element-text">
                    <h3 className="vertical-timeline-element-title">PHASE4</h3> 
                        <h5>“DAO of Wisdom ”</h5>
                        <p>Exclusive Top Tier NFT and Crypto Investors will empower<br/> members of the community with Alpha level investment<br/> knowledge, designed to guide them to their financial freedom<br/> goals.  We will fund the DAO with $60,000 and its focus will be<br/> fractional blue chip NFTs, floor sweeps and Crypto. It will<br/> provide passive yield to members based on the number of<br/> LeprCons and Clover Coin NFts they hold.</p>
                    </div>
                    <div className="vertical-timeline-element-image">
                        <img src={Phase4} alt="Avatar6"/>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--work">
                    <div className="vertical-timeline-element-image">
                        <img src={Phase5} alt="Avatar7"/>
                    </div>
                    <div className="vertical-timeline-element-text">
                    <h3 className="vertical-timeline-element-title">PHASE5</h3> 
                        <h5>“$40K Comp Fund” </h5>
                        <p>The Compensation Fund will be started with $40,000 to pay<br/> victims of NFT project scams. Simply tell your story in our<br/> Discord to be reviewed for qualification.It won't fix everything<br/> but it's a start.</p>
                    </div>                                
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--work">
                    <div className="vertical-timeline-element-text">
                    <h3 className="vertical-timeline-element-title">CHAPTER 2</h3> 
                    <h5>“Clover Coin ICO </h5><h4>🌈<span>”</span></h4>
                    <p>Holders of at least 1 Lying LepreCon and free Clover Coin NFT<br/>gain premiere access to the Clover Coin ICO and the 2nd<br/> Chapter in the Lying LepreCons Saga.</p>
                    </div>
                    <div className="vertical-timeline-element-image">
                        <img src={Phase6} alt="Avatar8"/>
                    </div>
                </VerticalTimelineElement>                
            </VerticalTimeline>  
            <div className="Roadmap-phases">
                <div className="Roadmap-phase mt-5">
                    <div className="Roadmap-phase-image">
                        <img src={Phase1} alt="Phase1"/>
                    </div>
                    <div className="Roadmap-phase-text">
                        <h6>PHASE1</h6>
                        <h5>“Let’s Get Started” </h5>
                        <p>Our Artists and Devs work very hard to create an amazing collection of 11,111 randomly generated Lying LepreCons from over 100 hand drawn traits. Discord, Twitter and YouTube begins</p>
                    </div>
                </div>
                <div className="Roadmap-phase mt-5">                    
                    <div className="Roadmap-phase-text">
                        <h6>PHASE2</h6>
                        <h5>“PURE LUCK!”  </h5>
                        <p>"Level 4 🍀 " or higher will qualify for up to $6,000 on Sellout Day and a special Grand Prize! Winners are chosen randomly!</p>
                    </div>
                    <div className="Roadmap-phase-image">
                        <img src={Phase2} alt="Phase2"/>
                    </div>
                </div>
                <div className="Roadmap-phase mt-5">
                    <div className="Roadmap-phase-image">
                        <img src={Phase3} alt="Phase3"/>
                    </div>
                    <div className="Roadmap-phase-text">
                        <h6>PHASE3</h6>
                        <h5>“POT O’ SOL!” </h5>
                        <p>From Sell Out to New Year's Day holder get access to the Pot O’ Sol where will give away $60,000 in Sol and NFT’s! You’ll need your LepreCon and free Clover-Coin-Nfts to get access.</p>
                    </div>
                </div>
                <div className="Roadmap-phase mt-5">                    
                    <div className="Roadmap-phase-text">
                        <h6>PHASE4</h6>
                        <h5>“DAO of Wisdom ”</h5>
                        <p>Exclusive Top Tier NFT and Crypto Investors will empower members of the community with Alpha level investment knowledge, designed to guide them to their financial freedom goals.  We will fund the DAO with $60,000 and its focus will be fractional blue chip NFTs, floor sweeps and Crypto. It will provide passive yield to members based on the number of LeprCons and Clover Coin NFts they hold.</p>
                    </div>
                    <div className="Roadmap-phase-image">
                        <img src={Phase4} alt="Phase4"/>
                    </div>
                </div>
                <div className="Roadmap-phase mt-5">
                    <div className="Roadmap-phase-image">
                        <img src={Phase5} alt="Phase5"/>
                    </div>
                    <div className="Roadmap-phase-text">
                        <h6>PHASE5</h6>
                        <h5>“$40K Comp Fund” </h5>
                        <p>The Compensation Fund will be started with $40,000 to pay victims of NFT project scams. Simply tell your story in our Discord to be reviewed for qualification.It won't fix everything but it's a start.</p>
                    </div>
                </div>
                <div className="Roadmap-phase mt-5">                    
                    <div className="Roadmap-phase-text">
                        <h6>CHAPTER 2</h6>
                        <h5>“Clover Coin ICO </h5><h4>🌈<span>”</span></h4>
                        <p>Holders of at least 1 Lying LepreCon and free Clover Coin NFT gain premiere access to the Clover Coin ICO and the 2nd Chapter in the Lying LepreCons Saga.</p>
                    </div>
                    <div className="Roadmap-phase-image">
                        <img src={Phase6} alt="Phase6"/>
                    </div>
                </div>
            </div>             
        </Container>
      </div>
    </div>
  );
}

export default Roadmap;