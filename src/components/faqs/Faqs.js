import React from "react";
import { Container, Accordion } from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';
import Faqswave from '../../assets/images/wave/faqswave.png';
import './Faqs.css';
import Button from "@restart/ui/esm/Button";

function Faqs() {

  return (
    <div className="Faqs">
      <div className="Faqswave" id="/#Faq"><img src={Faqswave} alt="Faqswave"/></div>
      <div className="Faqs-main">
        <Container className="Faqs-main-body pt-4 pb-4">
            <div className="Faqs-main-title">
                <h4>FREQUENTLY ASKED</h4>
                <h3 className="mt-2">QUESTIONS</h3>
            </div>
            <div className="Faqs-main-accordion mb-5">
                <Accordion defaultActiveKey="0">
                    <hr/>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What’s an NFT?</Accordion.Header>
                        <Accordion.Body>
                        NFT stands for non-fungible token which is a unique, one of kind item that is provably rare. Think of the Mona Lisa, but digital
                        </Accordion.Body>
                    </Accordion.Item>
                    <hr/>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>How can I purchase a Lying LepreCon on Mint Day?</Accordion.Header>
                        <Accordion.Body>
                        EZ! You will come to our website with a special link which we will give to our Discord members. Just click the link, connect your Phantom Wallet and click “Mint” www.phantom.app
                        </Accordion.Body>
                    </Accordion.Item>
                    <hr/>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Will LyingLepreCon’s be available on secondary exchanges?</Accordion.Header>
                        <Accordion.Body>
                        Yes. Digital Eyes, Solanartand Magic Eden. Stay tuned for more
                        </Accordion.Body>
                    </Accordion.Item>
                    <hr/>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Are there any restrictions on how I can use my Lying LepreCon?</Accordion.Header>
                        <Accordion.Body>
                        No. You own all rights to your Lying LepreCons
                        </Accordion.Body>
                    </Accordion.Item>
                    <hr/>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Are there advantages to owning Rare LepreCons?</Accordion.Header>
                        <Accordion.Body>
                        Rare LepreCons will get more Clover Coin NFTs, special airdrops and access to our exclusive clubs.
                        </Accordion.Body>
                    </Accordion.Item>
                    <hr/>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>How do I qualify for compensation if I've been scammed?</Accordion.Header>
                        <Accordion.Body>
                        Post your story in our Discord in scammed-stories. Tell us the name of the project, a little about what happened. We will pick those stories we feel most fit.
                        </Accordion.Body>
                    </Accordion.Item>
                    <hr/>
                </Accordion>
            </div><hr className="mt-5 mb-5"/>
            <div className="Faqs-main-discord mt-5">
                <h4>THE PARTY NEVER STOPS</h4>
                <h3 className="mb-5">GET LUCKY WITH US! JOIN OUR DISCORD</h3>
                <a href="https://discord.gg/JCXW9Qucux">Let's Start</a>
            </div>
        </Container>
      </div>
    </div>
  );
}

export default Faqs;