import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import "./post.css";
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NearMeIcon from "@material-ui/icons/NearMe";
import { ExpandMoreOutlined } from "@material-ui/icons";
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import Femojis from "../reactions/reaction.js";


function Post({ profilePic, image, username, timestamp, message }) {
  const [emoji, setEmoji] = useState(false);
  const [likesCounter, setLikesCounter] = useState(0);

  const likecounterfun = () => {
    let setcounter = likesCounter + 1;
    setLikesCounter(setcounter);
  };
  return (<div>
    <div className="post">
      <div className="post_top">
        <Avatar src={profilePic} className="post_avatar" />
        <div className="post_topinfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
        <div className="dots"><MoreHorizRoundedIcon /></div>
      </div>
      <div className="post_bottom">
        <p>{message}</p>
      </div>
      <div className="post_image">
        <p>
          <img style={{ width: "100%", cursor: "pointer" }} src={image}></img>
        </p>
      </div>

      <div className="post_options">
        <div
          onMouseEnter={() => setEmoji(true)}
          onMouseLeave={() => setEmoji(false)}
          className="likeemoji"
        >
          {emoji && (
            <span className="facebookemojiset" onClick={likecounterfun}>
                <Femojis />
            </span>
          )}
          <ThumbUpRoundedIcon onClick={likecounterfun}/>
          <p onClick={likecounterfun}>Like {likesCounter}</p>
        </div>
        <div className="post_option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post_option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post_option">
          <AccountCircleIcon />
          <ExpandMoreOutlined />
        </div>
      </div></div>
    </div>
  );
}

export default Post;
