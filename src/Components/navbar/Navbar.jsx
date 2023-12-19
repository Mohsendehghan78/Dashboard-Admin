import React from 'react';
import "./Navbar.css";
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
export default function Navbar() {
  return (
    <div className='navbar-container '>
        <div className='navbar-wrapper'>
            <div className='navbar-right'>
                MOHSEN DEHGHAN 
            </div>
            <div className='navbar-left'>
              <div className='navbar-icons '><NotificationsIcon/>
                <span className='navbar-icon-badg'>2</span>
                </div>
              <div className='navbar-icons'><LanguageIcon/>
              <span className='navbar-icon-badg'>2</span>
              </div>
              <div className='navbar-icons'><SettingsIcon/></div>
              <img src='images/mohsen.png' className='navbar-img'></img>
            
            </div>
        </div>
    </div>
  )
}
