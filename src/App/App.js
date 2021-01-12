import React from 'react';

// components
import Login from "../components/login/login.js";
import Navbar from "../components/navbar/navbar.js";
import Leftbar from "../components/leftbar/leftbar.js";
import Body from "../components/body/body.js";
import Rightbar from "../components/rightbar/rightbar.js";

import { useStateValue } from "../data/stateprovide.js";

import {Container,Row,Col} from "react-bootstrap"

import './App.css';

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (<>
    { !user ? (
         <Login />
     ) : (
       <>
<Navbar />
<Container fluid ><Row>
<Col lg={3} className="mob"><Leftbar/></Col>
<Col lg={6} sm={12}><Body/></Col>
<Col lg={3} className="mob"><Rightbar/></Col>
</Row></Container>
</>
)} </>
  );
}

export default App;
