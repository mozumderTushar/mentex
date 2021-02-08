import React, { useContext, useEffect, useState } from 'react';
import './AdminList.css';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import ResponsiveSidebar from '../../Dashboard/ResponsiveSidebar/ResponsiveSidebar';
import { UserContext } from '../../App/App';
import AdminListTable from './AdminListTable';

const AdminList = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [adminList, setAdminList] = useState([])
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)

  useEffect(() => {
    fetch('https://peaceful-lake-24732.herokuapp.com/allAdmins')
        .then(res => res.json())
        .then(data => setAdminList(data))
}, [adminList])

console.log('adminList:',adminList);

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
      <AdminListTable adminList={adminList}/>
    </div>
  );
};

export default AdminList;