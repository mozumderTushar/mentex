import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import ResponsiveSidebar from '../../Dashboard/ResponsiveSidebar/ResponsiveSidebar';
import { UserContext } from '../../App/App';
import AppointmentListTable from './AppointmentListTable';

const AppointmentList = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [appointmentList, setAppointmentList] = useState([])
  const [open, setOpen] = useState(false);
  const [appointment, setAppointment] = useState([])
  const [appointmentDetails, setAppointmentDetails] = useState([])
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const userLoggedInSession = sessionStorage.getItem('email');

  useEffect(() => {
    appointmentList.map(details => {
      if (details._id === appointment) {
        setAppointmentDetails(details.details)
      }
    })
  })

  const handleOpen = (id) => {
    setOpen(true);
    setAppointment(id)
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetch('https://peaceful-lake-24732.herokuapp.com/allAppointment')
      .then(res => res.json())
      .then(data => {
        const SingleAppointment = data.filter(single => single.professional === (loggedInUser.email || userLoggedInSession) )
        setAppointmentList(SingleAppointment)
      })
  }, [])

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <div className="dashboard__container">
      <ResponsiveSidebar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <AppointmentListTable appointmentList={appointmentList} handleOpen={handleOpen} handleClose={handleClose} open={open} body={appointmentDetails} />
    </div>
  );
};

export default AppointmentList;