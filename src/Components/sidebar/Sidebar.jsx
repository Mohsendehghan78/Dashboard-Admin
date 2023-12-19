import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ReportIcon from '@mui/icons-material/Report';

export default function Sidebar() {
  return (
    <div className="sidebarContainer col-md-2">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem">
              <LineStyleIcon className="sidebarListItemIcon" />
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarListItemIcon" />
              Analitcys
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarListItemIcon" />
              sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to={"/users"} className="link" >
            <li className="sidebarListItem">
              <Person2OutlinedIcon className="sidebarListItemIcon" />
              users
            </li>
            </Link>
            <Link to={"/newUser"} className="link">
            <li className="sidebarListItem">
              <Person2OutlinedIcon className="sidebarListItemIcon" />
              New User
            </li>
            </Link>
            <Link to={"/products"} className="link">
            <li className="sidebarListItem">
              <StorefrontOutlinedIcon className="sidebarListItemIcon" />
              Products
            </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoneyIcon className="sidebarListItemIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChartIcon className="sidebarListItemIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutlineIcon className="sidebarListItemIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeedIcon className="sidebarListItemIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutlineIcon className="sidebarListItemIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutlineOutlinedIcon className="sidebarListItemIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarListItemIcon" />
              Analitcys
            </li>
            <li className="sidebarListItem">
              <ReportIcon className="sidebarListItemIcon" />
              Report
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}
