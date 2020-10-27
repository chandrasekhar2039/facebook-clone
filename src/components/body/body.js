import React from "react";
import Stry from "../story/story.js"
import "./body.css"
import Createpost from "../create_post/create.js"
function Body(){


    return(
      <div className="body_whole">
      <div className="story_frame">
       <Stry />
       <Stry />
       <Stry />
       <Stry />
       <Stry />
       <Stry />
    </div>
    <div className="createpost">
      <Createpost />
    </div>
    </div>
  );
}

export default Body;
