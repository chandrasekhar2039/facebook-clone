import React from "react";
import "./login.css";
import { auth, provider } from "../../firebase/firebase.js";
import { actionTypes } from "../../data/reducer.js";
import { useStateValue } from "../../data/stateprovide.js";

function Login() {
  const [state, dispatch] = useStateValue();

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

  return (
    <div className="login_main">
      <div className="login_logo">
        <img
          src="/img/fb_logo.svg"
          alt=""
        />
      </div>
      <div className="login_port">
      <form onSubmit={signIn}>
        <button type="submit" className="btn btn-primary">Log In with Google </button>
        </form>
      </div>

    </div>
  )
}
export default Login;
