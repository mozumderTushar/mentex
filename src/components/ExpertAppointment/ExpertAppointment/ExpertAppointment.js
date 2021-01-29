import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import BookAppointment from '../BookAppointment/BookAppointment';
import ExpertAppointmentHeader from '../ExpertAppointmentHeader/ExpertAppointmentHeader';

const ExpertAppointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = date => {
    setSelectedDate(date);
  }
  return (
    <div className="common__bg__cyan">
      <NavBar />
      <ExpertAppointmentHeader />
      <BookAppointment date={selectedDate} handleDateChange={handleDateChange}/>
      <div className={`${window.location.pathname === '/connectExpert' ? 'common__bg__dark__blue' : 'common__bg__cyan '}`}>
        <Footer />
      </div>
    </div>
  );
};

export default ExpertAppointment;