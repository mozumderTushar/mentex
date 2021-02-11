import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import ResponsiveSidebar from '../../Dashboard/ResponsiveSidebar/ResponsiveSidebar';
import { UserContext } from '../../App/App';
import AppointmentListTable from './AppointmentListTable';
import { makeStyles } from '@material-ui/core/styles';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const AppointmentList = () => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [appointmentList, setAppointmentList] = useState([])
  const [open, setOpen] = useState(false);
  const [appointment, setAppointment] = useState([])
  const [appointmentDetails, setAppointmentDetails] = useState([])

  useEffect(() => {
    appointmentList.map(details => {
      if (details._id === appointment) {
        setAppointmentDetails(details.details)
      }
    })
  })

  const handleOpen = (id) => {
    setOpen(true);
    console.log(id);
    setAppointment(id)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <p id="simple-modal-description">
        {appointmentDetails}
      </p>

    </div>
  );

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
      <AppointmentListTable appointmentList={appointmentList} handleOpen={handleOpen} handleClose={handleClose} open={open} body={body} />
    </div>
  );
};

export default AppointmentList;