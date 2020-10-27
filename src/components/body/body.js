import React from "react";
import Stry from "../story/story.js"
import "./body.css"
import Createpost from "../create_post/create.js";
import Post from "../post/post.js";
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
    <div className="post_main">
    <Post

        profilePic="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
        message="hey i m chandrasekhar jagannath samanta"

        username="username"
        image="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
      />
      <Post

          profilePic="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
          message="aveuioveaoivbnibvbosibmieove,jevjuevj0e89rt89ujetiuehvtruygweuviowcmuhbyuvweuinmuiv ihyvi"

          username="username"
          image="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
        />
        <Post

            profilePic="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
            message="aveuioveaoivbnibvbosyiefu uwuhre ugwbuygf ugfgygf uwtfbufsbugf"

            username="username"
            image=""
          />
    </div>
    </div>
  );
}

export default Body;
