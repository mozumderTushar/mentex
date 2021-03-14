import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css'
import logo from '../../assets/images/fluoride.png'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App/App';
import { Badge } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isExpert, setIsExpert] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [prescription, setPrescription] = useState([]);
  const userLoggedInSession = sessionStorage.getItem('email');

  useEffect(() => { /** Experts */
    fetch('https://peaceful-lake-24732.herokuapp.com/allExperts')
      .then(response => response.json())
      .then(data => {
        const isExpert = data.find(expert => expert.email === (loggedInUser.email || userLoggedInSession));
        if (isExpert) {
          setIsExpert(true)
          setIsAdmin(false)
        }
      })
  }, [])

  useEffect(() => { /** Admin */
    fetch('https://peaceful-lake-24732.herokuapp.com/allAdmins')
      .then(response => response.json())
      .then(data => {
        const isAdmin = data.find(admin => admin.email === (loggedInUser.email || userLoggedInSession));
        if (isAdmin) {
          setIsAdmin(true)
          setIsExpert(false)
        }
      })
  }, [])

  useEffect(() => {
    fetch('https://peaceful-lake-24732.herokuapp.com/allPrescription')
      .then(response => response.json())
      .then(data => {
        const prescriptionData = data.filter(SinglePrescription => SinglePrescription.patientEmail === (loggedInUser.email || userLoggedInSession));
        setPrescription(prescriptionData)
      })
  }, [])

  const deleteItems = () => {
    sessionStorage.clear();
    window.location.reload();
  }
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
          <Link to="/allPost">Stories</Link>
        </div>
        {
          (isExpert && !isAdmin) &&
          <div className="sidebar__link">
            <i className="fas fa-list-alt"></i>
            <Link to="/appointmentList">Requested Advices</Link>
          </div>
        }

        {
          (isAdmin && !isExpert) &&
          <div className="sidebar__link">
            <i className="fas fa-list"></i>
            <Link to="/adminList">Admin List</Link>
          </div>
        }

        {
          (isAdmin && !isExpert) &&
          <div className="sidebar__link">
            <i className="fas fa-list"></i>
            <Link to="/expertList">Expert List</Link>
          </div>
        }
        {
          (isAdmin && !isExpert) &&
          <div className="sidebar__link">
            <i className="fas fa-user-plus"></i>
            <Link to="/addAdmin">Add Admin</Link>
          </div>
        }

        {
          (isAdmin && !isExpert) &&
          <div className="sidebar__link">
            <i className="fas fa-user-tie"></i>
            <Link to="/addExperts">Add Experts</Link>
          </div>
        }
        <h2>INFO</h2>
        <div className="sidebar__link">
          <i className="fa fa-info-circle"></i>
          <Link to="/about">About Us</Link>
        </div>
        <div className="sidebar__link">
          <i className="fas fa-envelope-open-text"></i>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a onClick={deleteItems} style={{ cursor: 'pointer' }}>Log out</a>
        </div>
      </div>
    </div >
  );
};

export default Sidebar;