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
          <Link to="/">Dashboard</Link>
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
          <i className="fas fa-list-alt"></i>
          <Link to="/dashboard/appointment/list">Appointment List</Link>
        </div>
        <h2>LEAVE</h2>
        <div className="sidebar__link">
          <i className="fa fa-info-circle"></i>
          <Link to="/about">About Us</Link>
        </div>
        <div className="sidebar__link">
          <i className="fas fa-envelope-open-text"></i>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-calendar-check"></i>
          <Link to="/">Special Days</Link>
        </div>
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <Link to="/">Log out</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;