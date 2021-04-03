import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SiderbarOption from "./SiderbarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />

      <SiderbarOption active Icon={HomeIcon} text="Home" />
      <SiderbarOption Icon={SearchIcon} text="Explore" />
      <SiderbarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SiderbarOption Icon={MailOutlineIcon} text="Messages" />
      <SiderbarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SiderbarOption Icon={ListAltIcon} text="Lists" />
      <SiderbarOption Icon={PermIdentityIcon} text="Profile" />
      <SiderbarOption Icon={MoreHorizIcon} text="More" />

      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;