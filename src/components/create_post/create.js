import React, { useState } from "react";
//avtar
import { Avatar } from "@material-ui/core";
//css
import "./create.css";
//icons
import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded';
import AddToPhotosRoundedIcon from '@material-ui/icons/AddToPhotosRounded';
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
//contexAPI

// import { useStateValue } from "./StateProvider";
// import db from "../firebase";
// import firebase from "firebase";

function Createpost() {
  //state and hooks
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  // const [{ user }, dispatch] = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();

    // db.collection("posts").add({
    //   message: input,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //   profilePic: user.photoURL,
    //   username: user.displayName,
    //   image: imageUrl,
    // });

    setInput("");
    setImageUrl("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender_top">
        {/* <Avatar src={user.photoURL} /> */}
        <Avatar src="" />
        <form>
        <div className="words">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            // placeholder={`what's on your mind  ${user.displayName} ? `}
            type="text"
          /> </div>
          <div className="img">
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            type="text"
            placeholder="Image URL (optional)"
          /></div>
          <button onClick={handleSubmit} type="submit"></button>
        </form>
      </div>

      <div className="messageSender_bottom">
        <div className="messageSender_option">
          <VideoCallRoundedIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender_option">
          <AddToPhotosRoundedIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender_option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default Createpost;
