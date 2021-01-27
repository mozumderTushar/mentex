import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import headerImg from '../../assets/images/header.png';

const ExpertAppointmentHeader = ({handleDateChange}) => {
  return (
    <div className="container my-4">
      <main className="row d-flex align-items-center">
        <div className="col-md-6 ">
          <img className="img-fluid" src={headerImg} alt="" />
        </div>
        <div className="col-md-4 offset-md-1">
          <h1 style={{ color: '#3A4256' }}>Appointment</h1>
          <Calendar
            onChange={handleDateChange}
            value={new Date()}
          />
        </div>
      </main>
    </div>
  );
};

export default ExpertAppointmentHeader;