import React from "react";
import "./WidgetSm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { newUsers } from "../../datas";

export default function WidgetSm() {
  return (
    <div className="widgetSmContainer col-md-3">
      <h3 className="widgetSmTitle">New User</h3>
      <ul className="ps-0">
        {newUsers.map((user) => (
          <li key={user.id} className="widgetSmContent">
            <img src={user.img} className="widgetSmImg" />
            <div className="widgetSmDiscrib">
              <div className="widgetSmName">{user.name}</div>
              <div className="widgetSmDiscribeTitle">{user.title}</div>
            </div>
            <button className="widgetSmBotton">
              <VisibilityIcon className="widgetSmBottonIcon"></VisibilityIcon>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
