import React from "react";
import {Container,Row,Col} from "react-bootstrap";
import "./style.css"


function Navigations(props){
  return(<>
<Container>
<Row className="props_left">
<Col lg={2}><div>{props.icon}</div></Col>
<Col lg={10} className="name_prop"><div>{props.name}</div></Col>
</Row>
</Container>

    </>

  );
}

export default Navigations;
