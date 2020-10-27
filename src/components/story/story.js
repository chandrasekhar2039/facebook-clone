import React from "react";
import { Avatar } from "@material-ui/core";
import "./story.css";

function Story(prop) {
  return (<div className="story_prop">
    <div style={{ background: `url(${prop.image})` }} className="story">
      <Avatar className="story_avatar" src={prop.pic} />
      <h4>{prop.name_user}</h4>
    </div></div>
  );
}

export default Story;
