import React from 'react';
import BookAppointmentCard from '../BookAppointmentCard/BookAppointmentCard';
import ExpertImg from '../../assets/images/Expert.png'

const bookingData = [
  {
    _id: '5e8df50be6e8231764dc23de',
    id: 1,
    subject: 'Schizoaffective Disorder',
  },
  {
    _id: '5e8df578e6e8231764dc23df',
    id: 2,
    subject: 'Hypomania and mania',
  },
  {
    _id: '5e8df5aee6e8231764dc23e0',
    id: 3,
    subject: 'Depression',
  },
  {
    _id: '5e8df63be6e8231764dc23e1',
    id: 4,
    subject: 'Schizophrenia',
    visitingHour: '7:00 AM - 8:30 AM',
    totalSpace: 10
  },
  {
    _id: '5e8df68de6e8231764dc23e2',
    id: 5,
    subject: 'Others',
  }
]

const BookAppointment = ({ date, handleDateChange }) => {
  return (
    <section className="text-center">
      <h2 className=" text-center text-brand mb-5">Get Help From Our Experts</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {
              bookingData.map(booking => <BookAppointmentCard booking={booking} date={date} key={booking.id}></BookAppointmentCard>)
            }
          </div>
          <div className="col-md-6">
            <img src={ExpertImg} alt="Expert"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;