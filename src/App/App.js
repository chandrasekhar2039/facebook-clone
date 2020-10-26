import React from 'react';

// components
import Navbar from "../components/navbar/navbar.js";
import Leftbar from "../components/leftbar/leftbar.js";
import Body from "../components/body/body.js";
import Rightbar from "../components/rightbar/rightbar.js";
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="navbar_main" > <Navbar /> </div>
    <div className="leftbar_main" > <Leftbar /> </div>
    <div className="body_main" > <Body /> </div>
    <div className="rightbar_main" > <Rightbar />  </div>

    </div>
  );
}

export default App;
