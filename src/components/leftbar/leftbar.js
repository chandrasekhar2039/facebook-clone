import React from "react";

import Nav from "./props/navigations.js"

import Avatar from '@material-ui/core/Avatar';

import FlagTwoToneIcon from '@material-ui/icons/FlagTwoTone';
import LocalHospitalTwoToneIcon from '@material-ui/icons/LocalHospitalTwoTone';
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
import GroupTwoToneIcon from '@material-ui/icons/GroupTwoTone';
import StorefrontTwoToneIcon from '@material-ui/icons/StorefrontTwoTone';
import VideoLibraryTwoToneIcon from '@material-ui/icons/VideoLibraryTwoTone';
import EventAvailableTwoToneIcon from '@material-ui/icons/EventAvailableTwoTone';
import UpdateTwoToneIcon from '@material-ui/icons/UpdateTwoTone';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';

function Leftbar(){
  return(<div className="leftbar">
    <Nav icon={<Avatar />} name="Username" />
    <Nav icon={<FlagTwoToneIcon />} name="Pages" />
    <Nav icon={<LocalHospitalTwoToneIcon />} name="COVID-19 Information Centre" />
    <Nav icon={<PeopleAltTwoToneIcon />} name="Friends" />
    <Nav icon={<GroupTwoToneIcon />} name="Groups" />
    <Nav icon={<StorefrontTwoToneIcon />} name="Marketplace" />
    <Nav icon={<VideoLibraryTwoToneIcon />} name="Videos" />
    <Nav icon={<EventAvailableTwoToneIcon />} name="Events" />
    <Nav icon={<UpdateTwoToneIcon />} name="Memories" />
    <Nav icon={<KeyboardArrowDownRoundedIcon />} name="See more" />

  </div>);
}

export default Leftbar;
