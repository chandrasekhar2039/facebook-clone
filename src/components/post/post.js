import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import "./post.css";
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NearMeIcon from "@material-ui/icons/NearMe";
import { ExpandMoreOutlined } from "@material-ui/icons";
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
import Femojis from "../reactions/reaction.js";

import {Container,Row,Col} from "react-bootstrap"


function Post({ profilePic, image, username, timestamp, message }) {
  const [emoji, setEmoji] = useState(false);
  const [likesCounter, setLikesCounter] = useState(0);

  // const likecounterfun = () => {
  //   let setcounter = likesCounter + 1;
  //   setLikesCounter(setcounter);
  // };
  return <>
<Container className="posts mt-3 p-0">

<Container className="top_post pt-1">
<Row className="pl-3 pr-3">
<Col className="avtar d-flex align-self-center p-0" xs={1}>
 <Avatar src={profilePic} className="post_avatar" />
</Col>

<Col className="display_info  align-self-center pl-0 pr-0 " xs={9}>
<h6 className="mb-0 mt-3">{username}</h6>
<p className="post_time" >{new Date(timestamp?.toDate()).toUTCString()}</p>
</Col>

<Col className="more p-0 ml-auto d-flex justify-content-end align-self-center" xs={1}>
<MoreVertRoundedIcon />
</Col>
</Row>
</Container>

<Container className="content_post pr-0 pl-0">

<div className="user_msg">
<p className="pl-4 pr-4">{message}</p>
</div>

<div className="">
<img className="w-100 user_img" src={image}></img>
</div>
</Container>

<Container className="share_post m-4 ">
<Row className="d-flex justify-content-centre pl-3 pr-3">
<Col className="post_like d-flex" xs={4} >
<ThumbUpRoundedIcon />
<p className="pl-2" >Like </p>
</Col>

<Col className="post_cmnt d-flex" xs={4} >
<ChatBubbleOutlineIcon />
<p className="pl-2">Comment</p>
</Col>

<Col className="post_share d-flex" xs={4} >
<NearMeIcon />
<p className="pl-2">Share</p>
</Col>
</Row>

</Container>


</Container>



  </>
}

export default Post;
