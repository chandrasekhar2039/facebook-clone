import React from "react";
import { Avatar } from "@material-ui/core";
import "./story.css";

function Story() {
  return (<div className="story_prop">
    <div style={{ background: `url('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png')` }} className="story">
      <Avatar className="story_avatar" src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" />
      <h4>user</h4>
    </div></div>
  );
}

export default Story;
