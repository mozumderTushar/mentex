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
        <div className="col-md-4 offset-md-2">
          <h2>Yor are never alone</h2>
          <div className="text-secondary">Mental Health is not a destination,but a process.It's about how you drive,Not where you're going.</div>
          <h6 className="mt-2">Get in touch with our Experts Now...</h6>
        </div>
      </main>
    </div>
  );
};

export default ExpertAppointmentHeader;