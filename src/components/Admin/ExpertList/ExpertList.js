import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import ResponsiveSidebar from '../../Dashboard/ResponsiveSidebar/ResponsiveSidebar';
import { UserContext } from '../../App/App';
import ExpertListTable from './ExpertListTable';

const ExpertList = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expertList, setExpertList] = useState([])
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)

  useEffect(() => {
    fetch('https://peaceful-lake-24732.herokuapp.com/allExperts')
      .then(res => res.json())
      .then(data => setExpertList(data))
  }, [expertList])


  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <div>
      <div className="dashboard__container">
        <ResponsiveSidebar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
        <ExpertListTable expertList={expertList}/>
      </div>
    </div>
  );
};

export default ExpertList;