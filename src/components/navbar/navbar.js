import React from "react";

// style sheet
import "./navbar.css"

//icons
import SearchIcon from '@material-ui/icons/Search';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import OndemandVideoRoundedIcon from '@material-ui/icons/OndemandVideoRounded';
import NfcRoundedIcon from '@material-ui/icons/NfcRounded';
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';

import AddRoundedIcon from '@material-ui/icons/AddRounded';
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import NotificationsActiveRoundedIcon from '@material-ui/icons/NotificationsActiveRounded';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';

// Avatar
import Avatar from '@material-ui/core/Avatar';
//badge
import Badge from '@material-ui/core/Badge';

import { useStateValue } from "../../data/stateprovide.js";


function Navbar() {
  const [{ user }, dispatch] = useStateValue();
  var firstname = user.displayName.substr(0, user.displayName.indexOf(" "));
  return (
    <div className="navbar">
       <div className="left_nav">
         <img src="/img/logo.png" alt="Logo"/>
          <div className="search"><SearchIcon/><input type="text" placeholder="Search facebook" /></div>
       </div>
       <div className="centre_nav">
       <div className="icon active_block" data-title="Home" ><Badge color="secondary" ><HomeRoundedIcon /></Badge></div>
       <div className="icon" data-title="Watch"><Badge color="secondary" badgeContent={99} max={9}  ><OndemandVideoRoundedIcon /></Badge></div>
       <div className="icon" data-title="Gamming"><Badge color="secondary" badgeContent={4} max={9} ><NfcRoundedIcon /> </Badge></div>
       <div className="icon" data-title="Marketplace"><Badge color="secondary"><StorefrontRoundedIcon /></Badge></div>
       <div className="icon" data-title="Groups"><Badge color="secondary"> <GroupRoundedIcon /></Badge></div>


       </div>
       <div className="right_nav">
       <div className="user_info"><Avatar src={user.photoURL} /> <p>{firstname}</p> </div>
       <Badge color="secondary" className="icon" data-title="Create" >
           <AddRoundedIcon />
       </Badge>
       <Badge color="secondary" badgeContent={2} max={9} className="icon" data-title="Messenger">
          <ForumRoundedIcon />
       </Badge> <Badge color="secondary" badgeContent={7} max={9} className="icon" data-title="Notifications" >
           <NotificationsActiveRoundedIcon />
        </Badge>
        <Badge color="secondary" className="icon" data-title="Account">
            <ArrowDropDownRoundedIcon />
        </Badge>
       </div>
    </div>
  );
}

export default Navbar;
