import React, { useState } from "react";
//avtar
import { Avatar } from "@material-ui/core";
//css
import "./create.css";
//icons
import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded';
import AddToPhotosRoundedIcon from '@material-ui/icons/AddToPhotosRounded';
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

import { useStateValue } from "../../data/stateprovide.js";
import DB from "../../firebase/firebase.js";
import Firebase from "firebase";


import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";





function Createpost() {

  //state and hooks
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [{ user }, dispatch] = useStateValue();
  const [open, setOpen] = useState(false);
  const [src,setsrc]=useState("");
  const [fileUploaded,setfile]=useState("");

  function handleSubmit(e) {

    e.preventDefault();

    DB.collection("posts").add({
      message: input,
      timeStamp: Firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      userName: user.displayName,
      image: imageUrl,
    });


    setInput("");
    setImageUrl("");
  };

  var firstname = user.displayName.substr(0, user.displayName.indexOf(" "));

  const hiddenFileInput = React.useRef(null);

  function handleClick (event) {
    hiddenFileInput.current.click();
  };



  async function handleChange (event){
    const picFile=event.target.files[0];
     setfile(picFile);


   var reader = new FileReader();
   reader.onload = function(event) {
    openpopup(event);
  }

  reader.readAsDataURL(event.target.files[0]);


  };


function openpopup(event){
  setOpen(true);
  setsrc(event.target.result);

}

function handleClose() {
    setOpen(false);
  };

  async function handlePost(){

   setOpen(false);

   let bucketName="postImages";
   let storageRef =Firebase.storage().ref(`${bucketName}/${fileUploaded.name}`);
   await storageRef.put(fileUploaded);
   let downloadUrl=await storageRef.getDownloadURL();



    DB.collection("posts").add({
      message: input,
      timeStamp: Firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      userName: user.displayName,
      image: downloadUrl,
    });
    setInput("");

  }

  return (
    <div className="messageSender">
      <div className="messageSender_top">
        {<Avatar src={user.photoURL} />}
        <form>
        <div className="words">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`what's on your mind ${firstname}? `}
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
        <div className="messageSender_option" onClick={handleClick} data-title="Click to Upload Photo">
          <AddToPhotosRoundedIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3></div>
           <div className="popup">
          <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" style={{"textAlign":"center","width":"550px"}} ><h4>Create Post</h4></DialogTitle>
        <DialogContent>
          <DialogContentText>
          <div className="popup_main">
            <div className="popup_top">
              <Avatar src={user.photoURL} />
              <div className="poup_topinfo">
                <h3>{user.displayName}</h3>
                <p>{new Date().toLocaleDateString()}</p>
              </div></div></div>
          </DialogContentText>
          <TextField autoFocus autoComplete="off"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`what's on your mind ${firstname} ? `}
          type="text"
          fullWidth
           />
            <div className="popup_img"><img src={src}></img></div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button variant="contained" color="primary"  onClick={handlePost}>
           Post
        </Button>
        </DialogActions>
      </Dialog>
         </div>
        <div className="messageSender_option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={handleChange}
          style={{display: 'none'}}
         />
      </div>
    </div>
  );
}

export default Createpost;
