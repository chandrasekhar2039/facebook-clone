import React, { useState } from "react";
//avtar
import { Avatar } from "@material-ui/core";
//css
import "./create.css";
//icons
import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded';
import AddToPhotosRoundedIcon from '@material-ui/icons/AddToPhotosRounded';
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import VideocamRoundedIcon from '@material-ui/icons/VideocamRounded';

import {Container,Col,Row,Image} from "react-bootstrap"

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
  const [mob,setmob]=useState(false);

  function handleSubmit(e) {

    e.preventDefault();


    setmob(false);
    var store =input;
    setInput("");


    DB.collection("Public").add({
      message: store,
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
  console.log(event.target);
  setsrc(event.target.result);

}

function handleClose() {
    setOpen(false);
  };

  async function handlePost(){

   setOpen(false);
   var hold=input;
   setInput("");

   let bucketName="publicImages";
   let storageRef =Firebase.storage().ref(`${bucketName}/${fileUploaded.name}`);
   await storageRef.put(fileUploaded);
   let downloadUrl=await storageRef.getDownloadURL();



    DB.collection("Public").add({
      message: hold,
      timeStamp: Firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      userName: user.displayName,
      image: downloadUrl,
    });
    setInput("");

  }

  function handleClick_mob(){
    setmob(true);
  }
 function  handleClose_mob(){
   setmob(false);
 }


  return <>
  <Container className="main_cre p-1">
<Row className="user_input mt-2 pb-3">
   <Col xs={1}className="justify-content-center d-flex pr-0 ml-1 pt-1" >{<Avatar src={user.photoURL} />}</Col>

   <Col xs={7} className="">
   <form className="thoughts  p-1 mt-1">
      <input className=" pl-3 pr-2 p-1 w-100 des_in"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`what's on your mind ${firstname}? `}
            type="text"
          />
          <input className=" pl-3 pr-2 p-1 w-100 mob_in"
                value={input}
              onClick={handleClick_mob}
                placeholder={`Any thought's ${firstname}? `}
                type="text"
              />


           <button  onClick={handleSubmit} type="submit" style={{display:"none"}} ></button>
      </form>
     </Col>
   <Col xs={3} className="p-0">
    <form className="img_url  mt-1 p-1">
      <input className="pl-3 w-100 pr-2 p-1"
            value={imageUrl}

            onChange={(e) => setInput(e.target.value)}

            type="text"
            placeholder="Image Url"
          />


          <button onClick={handleSubmit} type="submit" style={{display:"none"}}></button></form>
    </Col>
       </Row>
  <Row className="activity mt-2 " >
    <Col xs={4} className="live" >
     <VideocamRoundedIcon style={{ color: "red" }} />
          <p className="pl-2">Live Video</p>
   </Col>
   <Col xs={4} className="" >
  <div onClick={handleClick} data-title="Click to Upload Photo"  className="d-flex">
  <AddToPhotosRoundedIcon style={{ color: "green" }}  />
          <p className="pl-2 ">Photo/Video</p></div>




          {/* ===================for popup================*/}

          <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" >Create Post</DialogTitle>
        <DialogContent>

          <DialogContentText>
          <div className="popup_main">
            <div className="popup_top d-flex">
              <Avatar src={user.photoURL} />
                <h5 className="p-2 ">{firstname}</h5>
                </div>
                <p className="m-1 ">{new Date().toLocaleDateString()}</p>
              </div>
          </DialogContentText>

          <TextField autoFocus autoComplete="off"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`what's on your mind  ${firstname} ? `}
          type="text"
          fullWidth
           />

           <Container><Row><Col> <Image src={src} className="w-100 mt-2" rounded /></Col></Row></Container>

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

      {/*========================================== for mob popup=================================*/}

      <Dialog
    open={mob}
    onClose={handleClose_mob}
    aria-labelledby="form-dialog-title"
  >
    <DialogTitle id="form-dialog-title" >Create Post</DialogTitle>
    <DialogContent>

      <DialogContentText>
      <div className="popup_main">
        <div className="popup_top d-flex">
          <Avatar src={user.photoURL} />
            <h5 className="p-2 ">{firstname}</h5>
            </div>
            <p className="m-1 ">{new Date().toLocaleDateString()}</p>
          </div>
      </DialogContentText>

      <TextField autoFocus autoComplete="off"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder={`Any thought's ${firstname} ? `}
      type="text"
      fullWidth
       />

     {/*<Container><Row><Col> <Image src={src} className="w-100 mt-2" rounded /></Col></Row></Container>*/}

    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose_mob} color="primary">
        Cancel
      </Button>
      <Button variant="contained" color="primary"  onClick={handleSubmit}>
       Post
    </Button>
    </DialogActions>
  </Dialog>
      </Col>



      {/*==============================pop up ends================================*/}
{/* ======================= input stream==============*/}
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{display: 'none'}}
       />
       {/* ======================= input stream ends==============*/}

   <Col xs={4} className="des">
     <InsertEmoticonIcon style={{ color: "orange" }} />
          <p className="pl-2">Feeling/Activity</p>
    </Col>
    <Col xs={4} className="mob">
    <VideoCallRoundedIcon style={{ color: "Purple" }} />
           <p className="pl-2">Room</p>
     </Col>
</Row>

  </Container>



  </>
}

export default Createpost;
