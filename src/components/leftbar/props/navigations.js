import React from "react";

import "./style.css"


function Navigations(props){
  return(
    <div className="row">
    <div className="col-1">{props.icon}</div>
    <div className="col-2">{props.name}</div>
    </div>
  );
}

export default Navigations;
