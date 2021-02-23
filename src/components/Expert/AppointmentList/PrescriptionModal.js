import React from 'react';
import Modal from 'react-modal';
import PrescriptionForm from './PrescriptionForm';

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

const PrescriptionModal = ({ modalIsOpen, closeModal, prescriptionID }) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <PrescriptionForm closeModal={closeModal} prescriptionID={prescriptionID}/>
      </Modal>
    </div>
  );
};

export default PrescriptionModal;