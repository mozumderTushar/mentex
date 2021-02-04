import React from 'react';
import './Sidebar.css'
import logo from '../../assets/images/fluoride.png'
import { Link } from 'react-router-dom';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>MenTex</h1>
        </div>
        <i className="fa fa-times"
          id="sidebarIcon"
          onClick={() => closeSidebar()}
        ></i>
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="#">Dashboard</a>
        </div>
        <h2>MNG</h2>
        <div className="sidebar__link">
          <i className="fa fa-user-secret"></i>
          <Link to="/">Home</Link>
        </div>
        <div className="sidebar__link">
        <i className="fab fa-atlassian"></i>
          <Link to="/post">Post</Link>
        </div>
        <div className="sidebar__link">
          <i className="fas fa-book"></i>
          <Link to="/stories">Stories</Link>
        </div>
        <div className="sidebar__link">
          <i className="fas fa-envelope-open-text"></i>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="sidebar__link">
          <i className="fas fa-list-alt"></i>
          <Link to="/dashboard/appointment/list">Appointment List</Link>
        </div>
        <h2>LEAVE</h2>
        <div className="sidebar__link">
          <i className="fa fa-question"></i>
          <a href="#">Requests</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-sign-out-alt"></i>
          <a href="#">Leave Policy</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-calendar-check"></i>
          <a href="#">Special Days</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-file"></i>
          <a href="#">Apply for Leave</a>
        </div>
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="#">Log out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;