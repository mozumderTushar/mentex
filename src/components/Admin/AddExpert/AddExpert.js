import React, { useContext, useState } from 'react';
import { UserContext } from '../../App/App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import ResponsiveSidebar from '../../Dashboard/ResponsiveSidebar/ResponsiveSidebar';
import { useHistory } from 'react-router-dom';
import ConfirmDialog from '../../Alert/ConfirmDialog/ConfirmDialog';
import Notification from '../../Alert/Notification/Notification';


const AddExpert = () => {
  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: '',
  })
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    subTitle: '',
  })
  const [admin, setAdmin] = useState({})
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [sidebarOpen, setSidebarOpen] = useState(false);
  let history = useHistory();

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
          // alert('Expert Added Successfully')
          setNotify({
            isOpen: true,
            message: 'Expert Added Successfully',
            type: 'success'
          })
          // document.getElementById('email').value = '';
            setConfirmDialog({
              isOpen: true,
              title: 'Do You Want To See The Expert List?',
              subTitle: "You can't undo this operation",
              onConfirm: () => {  history.push('/expertList') }
            })
          // history.push('/expertList')
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
      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
    </div>
  );
};

export default AddExpert;