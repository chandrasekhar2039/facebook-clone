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

function Navbar() {
  return (
    <div className="navbar">
       <div className="left_nav">
         <img src="/img/logo.png" alt="Logo"/>
          <div className="search"><SearchIcon/><input type="text" placeholder="Search facebook" /></div>
       </div>
       <div className="centre_nav">
       <div className="icon active_block" ><Badge color="secondary" ><HomeRoundedIcon /></Badge></div>
       <div className="icon" ><Badge color="secondary" badgeContent={99} max={9}  ><OndemandVideoRoundedIcon /></Badge></div>
       <div className="icon" ><Badge color="secondary" badgeContent={4} max={9} ><NfcRoundedIcon /> </Badge></div>
       <div className="icon" ><Badge color="secondary"><StorefrontRoundedIcon /></Badge></div>
       <div className="icon" ><Badge color="secondary"> <GroupRoundedIcon /></Badge></div>


       </div>
       <div className="right_nav">
       <Avatar src="" />
       <Badge color="secondary" className="icon" >
           <AddRoundedIcon />
       </Badge>
       <Badge color="secondary" badgeContent={2} max={9} className="icon" >
          <ForumRoundedIcon />
       </Badge> <Badge color="secondary" badgeContent={7} max={9} className="icon" >
           <NotificationsActiveRoundedIcon />
        </Badge>
        <Badge color="secondary" className="icon" >
            <ArrowDropDownRoundedIcon />
        </Badge>
       </div>
    </div>
  );
}

export default Navbar;
