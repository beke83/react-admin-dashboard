import React from 'react';
import './widgetSm.css';
import { Visibility } from '@material-ui/icons';

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle">New Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/12610341/pexels-photo-12610341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="widgetSmImage" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/12610341/pexels-photo-12610341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" 
          className="widgetSmImage" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/12610341/pexels-photo-12610341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="widgetSmImage" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/12610341/pexels-photo-12610341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="widgetSmImage" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/12610341/pexels-photo-12610341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="widgetSmImage" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}
