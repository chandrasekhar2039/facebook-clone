import React from "react";
import {Navbar,Nav} from "react-bootstrap"
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

// import { useStateValue } from "../../data/stateprovide.js";


function Navbar_comp() {
  // const [{ user }, dispatch] = useStateValue();
  // var firstname = user.displayName.substr(0, user.displayName.indexOf(" "));
  return <>

   <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="navbar_main" fixed="top">
     <Navbar.Brand href="#home">
     <img
       src="./Favicion/logo.png"
       width="30"
       height="30"
       className="d-inline-block align-top"
       alt="Facebook logo"
     />
     </Navbar.Brand>
     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
     <Navbar.Collapse id="responsive-navbar-nav">

     <Nav className="mr-auto nav_left">
       <Nav.Link href="#">
       <div className="search_bar"><SearchIcon/><input type="text" placeholder="Search facebook" /></div>
       </Nav.Link>
     </Nav>

     <Nav className="mx-auto nav_center">
     <Nav.Link href="#1" data-title="Home" className="active_block"> <div className="icon"  ><Badge color="secondary" ><HomeRoundedIcon /></Badge><h6>Home</h6></div></Nav.Link>
     <Nav.Link href="#2"  data-title="Watch"> <div className="icon"><Badge color="secondary" badgeContent={99} max={9}  ><OndemandVideoRoundedIcon /></Badge><h6>Watch</h6></div></Nav.Link>
     <Nav.Link href="#3" data-title="Gamming"> <div className="icon" ><Badge color="secondary" badgeContent={4} max={9} ><NfcRoundedIcon /> </Badge><h6>Gamming</h6></div></Nav.Link>
     <Nav.Link href="#4" data-title="Marketplace">  <div className="icon" ><Badge color="secondary"><StorefrontRoundedIcon /></Badge><h6>Marketplace</h6></div></Nav.Link>
     <Nav.Link href="#5" data-title="Groups"><div className="icon" ><Badge color="secondary"> <GroupRoundedIcon /></Badge><h6>Groups</h6></div></Nav.Link>
     </Nav>

     <Nav className="ml-auto nav_right">
       <Nav.Link href="#deets" data-title="User"><div className="user_info d-flex mr-1 mt-1"><Avatar src="#" /> <p className="pl-2 pr-1">test</p> </div></Nav.Link>
       <Nav.Link href="#deets"><Badge color="secondary" className="icon" data-title="Create" ><AddRoundedIcon /></Badge></Nav.Link>
       <Nav.Link href="#deets"><Badge color="secondary" badgeContent={4} max={9} className="icon" data-title="Messenger"><ForumRoundedIcon /> </Badge></Nav.Link>
       <Nav.Link href="#deets"><Badge color="secondary" badgeContent={7} max={9} className="icon" data-title="Notifications" ><NotificationsActiveRoundedIcon /> </Badge></Nav.Link>
       <Nav.Link href="#deets"><Badge color="secondary" className="icon" data-title="Account"> <ArrowDropDownRoundedIcon /> </Badge></Nav.Link>
     </Nav>


          </Navbar.Collapse>
        </Navbar>

        </>
}

export default Navbar_comp;
