import React from "react";
import "./footer.css";
import {Container,Row,Col} from "react-bootstrap"

function Footer(){
  return(<>
    <Container>
    <Row><Col sm={6} lg={12} className="footer_main mt-5">
    <h6> Developed by <a href="https://www.instagram.com/developer_dev/?hl=en" target="_blank"> Chandrasekhar</a></h6>
    <h6>&#169; 2020</h6>
  </Col></Row>
    </Container>
    </>
  );
}

export default Footer;
