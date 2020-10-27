import React from "react";
//props
import Nav from "./props/navigations.js"
//avatar
import Avatar from '@material-ui/core/Avatar';
//icons
import FlagTwoToneIcon from '@material-ui/icons/FlagTwoTone';
import LocalHospitalTwoToneIcon from '@material-ui/icons/LocalHospitalTwoTone';
import SupervisorAccountTwoToneIcon from '@material-ui/icons/SupervisorAccountTwoTone';
import GroupTwoToneIcon from '@material-ui/icons/GroupTwoTone';
import StorefrontTwoToneIcon from '@material-ui/icons/StorefrontTwoTone';
import VideoLibraryTwoToneIcon from '@material-ui/icons/VideoLibraryTwoTone';
import EventAvailableTwoToneIcon from '@material-ui/icons/EventAvailableTwoTone';
import UpdateTwoToneIcon from '@material-ui/icons/UpdateTwoTone';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';

import { useStateValue } from "../../data/stateprovide.js";
//css
import "./style.css";

function Leftbar(){
  const [{ user }, dispatch] = useStateValue();

  return(<div className="leftbar">
    <div className="leftbar_top">
    <Nav icon={<Avatar src={user.photoURL} />} name={user.displayName} />
    <Nav icon={<FlagTwoToneIcon />} name="Pages" />
    <Nav icon={<LocalHospitalTwoToneIcon />} name="COVID-19 Information Centre" />
    <Nav icon={<SupervisorAccountTwoToneIcon />} name="Friends" />
    <Nav icon={<GroupTwoToneIcon />} name="Groups" />
    <Nav icon={<StorefrontTwoToneIcon />} name="Marketplace" />
    <Nav icon={<VideoLibraryTwoToneIcon />} name="Videos" />
    <Nav icon={<EventAvailableTwoToneIcon />} name="Events" />
    <Nav icon={<UpdateTwoToneIcon />} name="Memories" />
    <Nav icon={<KeyboardArrowDownRoundedIcon />} name="See more" />
  </div>
 <hr className="line" />
  <div className="leftbar_botom">
   <h3>Your Shortcuts</h3>
    <Nav icon={<GroupTwoToneIcon />} name="VSSUT CLUB" />
  </div>

</div>);
}

export default Leftbar;
