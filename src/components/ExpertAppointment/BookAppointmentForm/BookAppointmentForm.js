import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import FormMaterialUi from '../../FormMaterialUi/FormMaterialUi';
import './BookAppointmentForm.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
  
};

Modal.setAppElement('#root')

const BookAppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
  const [professional, setProfessional] = useState([]);
  useEffect(() => {
    fetch('https://peaceful-lake-24732.herokuapp.com/allExperts')
      .then(res => res.json())
      .then(data => setProfessional(data))
  }, [])

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-center text-brand">{appointmentOn}</h2>
        <FormMaterialUi appointmentOn={appointmentOn} date={date} closeModal={closeModal} professional={professional}/>
      </Modal>
    </div>
  );
};

export default BookAppointmentForm;