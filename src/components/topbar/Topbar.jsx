import React, { Component } from 'react';
import "./topbar.css";
import {Language, Settings,NotificationsNone} from '@material-ui/icons'; 

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
               <span className="logo">benadmin</span>
            </div>
            <div className='topRight'>
                <div className="topbarIconContainer">
                    <NotificationsNone />
                    <span className="topIconBadge">
                        2
                    </span>
                </div>
                <div className="topbarIconContainer">
                    <Language />
                    <span className="topIconBadge">
                        2
                    </span>
                </div>
                <div className="topbarIconContainer">
                    <Settings />
                    <span className="topIconBadge">
                        2
                    </span>
                </div>
                <img 
src="https://images.pexels.com/photos/12610341/pexels-photo-12610341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="" 
                className="topAvatar" />
            </div>
        </div>
    </div>
  )
}

