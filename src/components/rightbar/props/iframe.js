import React from "react";
import "./style.css"

function Iframe(props){
  return(

<div className="frame">
<iframe src={props.src} width="285" height="565" frameBorder="0" scrolling="no" allowtransparency="true"></iframe><br />
</div>
  )
}

export default Iframe;
