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
    <Navbar />
    <div className="body">
    <Leftbar />
    <Body />
    <Rightbar /> </div>
    </div>
  );
}

export default App;
