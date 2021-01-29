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
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, velit?</h3>
        </div>
      </main>
    </div>
  );
};

export default ExpertAppointmentHeader;