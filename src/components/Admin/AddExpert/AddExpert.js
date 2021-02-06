import React, { useContext, useState } from 'react';
import { UserContext } from '../../App/App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import ResponsiveSidebar from '../../Dashboard/ResponsiveSidebar/ResponsiveSidebar';


const AddExpert = () => {
  const [admin, setAdmin] = useState({})
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleBlur = e => {
    const newAdmin = { ...admin }
    newAdmin[e.target.name] = e.target.value
    setAdmin(newAdmin)
  }

  const handleSubmit = e => {
    e.preventDefault();

    fetch('https://peaceful-lake-24732.herokuapp.com/addExpert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(admin)
    })
      .then(response => response.json())
      .then(data => {
        if (data) {
          alert('Expert Added Successfully')
          document.getElementById('email').value = '';
        }
      })

  }
  return (
    <div className="dashboard__container">
      <div className='addAdmin__container' >
        <form onSubmit={handleSubmit} className="form-inline" style={{ padding: '50px' }}>
          <label className="sr-only">Email</label>
          <input id="email" type="email" name="email" onBlur={handleBlur} className="form-control mb-2 mr-sm-2" style={{ width: "450px" }} placeholder="jon@gamil.com" required />
          <button type="submit" className="btn mb-2" style={{ backgroundColor: '#009444', color: '#fff' }}>Submit</button>
        </form>
      </div>
      <ResponsiveSidebar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default AddExpert;