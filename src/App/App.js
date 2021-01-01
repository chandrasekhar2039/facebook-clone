import React from 'react';

// components
// import Navbar from "../components/navbar/navbar.js";
// import Leftbar from "../components/leftbar/leftbar.js";
// import Body from "../components/body/body.js";
// import Rightbar from "../components/rightbar/rightbar.js";

// import { useStateValue } from "../data/stateprovide.js";

import Login from "../components/login/login.js";
import './App.css';

function App() {
  // const [{ user }, dispatch] = useStateValue();
  return (
<Login />
  );
}

export default App;

// <div className="App">
//  {!user ? (
//     <Login />
//   ) : (
//     <>
//     <div className="navbar_main" > <Navbar /> </div>
//     <div className="leftbar_main" > <Leftbar /> </div>
//    <div className="body_main" > <Body /> </div>
//    <div className="rightbar_main" > <Rightbar />  </div>
//     </>
//   )}
// </div>
