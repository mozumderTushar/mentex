import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import ResponsiveSidebar from '../../Dashboard/ResponsiveSidebar/ResponsiveSidebar';
import { UserContext } from '../../App/App';
import AppointmentListTable from './AppointmentListTable';

const AppointmentList = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [appointmentList, setAppointmentList] = useState([])

  useEffect(() => {
    fetch('https://peaceful-lake-24732.herokuapp.com/allAppointment')
      .then(res => res.json())
      .then(data => setAppointmentList(data))
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
      <AppointmentListTable appointmentList={appointmentList}/>
    </div>
  );
};

export default AppointmentList;