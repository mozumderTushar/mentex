import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserPrescription = () => {
  window.scroll(0,0);
  const { prescriptionID } = useParams()
  const [prescription, setPrescription] = useState({})

  useEffect(() => {
    fetch('https://peaceful-lake-24732.herokuapp.com/allPrescription')
      .then(response => response.json())
      .then(data => {
        const expertPrescription = data.find(data => data._id === prescriptionID)
        setPrescription(expertPrescription)
      })
  }, [prescriptionID])
  console.log("prescription",prescription);
  return (
    <div>
       <h1>hi {prescription.patientName}, {prescription.prescription} khaiya moira jaw prescribed by {prescription.PrescriptionGivenProfessional}</h1>
    </div>
  );
};

export default UserPrescription;