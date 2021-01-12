import React from "react";
import "./login.css";

import {Container,Row,Col,Card,Button} from "react-bootstrap"
import Firebase from "firebase";
import { auth, provider } from "../../firebase/firebase.js";
import { actionTypes } from "../../data/reducer.js";
import { useStateValue } from "../../data/stateprovide.js";

function Login() {
  const [state, dispatch] = useStateValue();

//   function signInRedirect(e) {
//     // e.preventDefault();
//   Firebase.auth().signInWithRedirect(provider);
//
// }

//   React.useEffect(() => {
//     // e.preventDefault();
// // auth.signInWithRedirect(provider);
//
//     auth
//        .getRedirectResult()
//       .then((result) => {
//         dispatch({
//           type: actionTypes.SET_USER,
//           user: result.user,
//         });
//         // console.log(result);
//       })
//       .catch((error) => alert(error.message));
//   });

const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        // console.log(result);
      })
      .catch((error) => alert(error.message));
  };

const revoke =() =>{
  alert("congo!");
}

  return <>
  <Container>
    <Row className="login_main">
      <Col sm={12} lg={8} >
      <img src="./assets/Logo/fb_logo.svg" alt="Facebook logo" />
      {/*<p className="ml-2 mr-2 pl-3 pr-3 login_para">This is just a Facebook-clone. Its 100% safe. Feel free to Login.</p>*/}
      </Col>
      <Col sm={12} lg={4} className="d-inline-block align-self-center">

      <Card className="card_login mt-2 " >
       <Card.Body>

          <Button variant="primary" className="w-100 login_btn" onClick={signIn}>Login using Google</Button>

        </Card.Body>
     </Card>

      </Col>
    </Row>
      <p className="m-3 p-2 text-center login_para">Developed by <a href="https://www.instagram.com/developer_dev/?hl=en" target="_blank">Chandrasekhar</a></p>
  </Container>
  </>
}
export default Login;
