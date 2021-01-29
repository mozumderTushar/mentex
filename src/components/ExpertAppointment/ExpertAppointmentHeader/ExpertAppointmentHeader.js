import React from 'react';
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
          <h2>Mental Health...is not a destination,but a process.It's about how you drive,Not where you're going.</h2>
          <h4><em>Book an Appointment with Professionals Now...</em></h4>
        </div>
      </main>
    </div>
  );
};

export default ExpertAppointmentHeader;