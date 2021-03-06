import React, { useState } from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';
import FormMaterialUi from '../../FormMaterialUi/FormMaterialUi';
import BookAppointmentForm from '../BookAppointmentForm/BookAppointmentForm';
import './BookAppointmentCard.css'


const BookAppointmentCard = ({ booking, date, handleDateChange }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <Accordion>
      <Card className="appointment__card">
        <Card.Header className="appointment__card__header">
          <Accordion.Toggle as={Button} variant="link" eventKey="0" className="appointment__card__btn">
            {booking.subject}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="appointment__card__body">
            <h5 className="card-title text-brand">{booking.subject}</h5>
            <button onClick={openModal} className="btn common__btn text-uppercase mt-2 appointment__btn">Post Your Problem</button>
            <BookAppointmentForm modalIsOpen={modalIsOpen} appointmentOn={booking.subject} closeModal={closeModal} date={date}></BookAppointmentForm>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>

  );
};

export default BookAppointmentCard;