import React from 'react';
import './user.css';
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from '@material-ui/icons';

export default function User() {
  return (
    <div className='user'>
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit user</h1>
        <button className="userAddButton">Create</button>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src="https://images.pexels.com/photos/12610341/pexels-photo-12610341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="" className="userShowImage" />
            <div className="userShowTopTitle">
              <span className="userShowUserName">Anna Becker</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck999</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10-2-1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span> 
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">0909837272</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">annaback999@hotmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate"></div>
      </div>
    </div>
  )
}
