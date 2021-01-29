import React from 'react';
import BookAppointmentCard from '../BookAppointmentCard/BookAppointmentCard';
import Calendar from 'react-calendar';

const bookingData = [
  {
    _id: '5e8df50be6e8231764dc23de',
    id: 1,
    subject: 'Teeth Orthodontics',
    visitingHour: '8:00 AM - 9:00 AM',
    totalSpace: 10
  },
  {
    _id: '5e8df578e6e8231764dc23df',
    id: 2,
    subject: 'Cosmetic Dentistry',
    visitingHour: '10:50 AM - 11:30 AM',
    totalSpace: 10
  },
  {
    _id: '5e8df5aee6e8231764dc23e0',
    id: 3,
    subject: 'Teeth Cleaning',
    visitingHour: '5:00 PM - 6:00 PM',
    totalSpace: 10
  },
  {
    _id: '5e8df63be6e8231764dc23e1',
    id: 4,
    subject: 'Cavity Protection',
    visitingHour: '7:00 AM - 8:30 AM',
    totalSpace: 10
  },
  {
    _id: '5e8df68de6e8231764dc23e2',
    id: 5,
    subject: 'Teeth Orthodontics',
    visitingHour: '8:00 AM - 9:00 AM',
    totalSpace: 10
  }
]

const BookAppointment = ({ date, handleDateChange }) => {
  return (
    <section className="text-center">
      <h2 className=" text-center text-brand mb-5">Available Appointments on {date.toDateString()}</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {
              bookingData.map(booking => <BookAppointmentCard booking={booking} date={date} key={booking.id}></BookAppointmentCard>)
            }
          </div>
            <div className="col-md-4 offset-md-3">
              <Calendar
                onChange={handleDateChange}
                value={new Date()}
              />
            </div>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;