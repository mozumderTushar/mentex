import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UserPrescription.css';
import NavBar from '../../Shared/NavBar/NavBar'
import Footer from '../../Shared/Footer/Footer';

const UserPrescription = () => {
  window.scroll(0, 0);
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

  const handlePdf = () => {
    const html2pdf =  window.html2pdf;
    let el = document.getElementById("download")
    if (el) {
      el.addEventListener("click", () => {
        const prescription = document.getElementById("prescription");
        var opt = {
          margin: 1,
          filename: 'myPrescription.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(prescription).set(opt).save();
      })
    }
  }

  return (
    <div class="common__bg__cyan">
      <NavBar />
      <div className="prescription__container container mt-5" id="prescription">
        <div className="row ml-5">
          <div className="col-md-6 mt-5">
            <h4>Name:{prescription.patientName}</h4>
          </div>
          <div className="col-md-3 mt-5">
            <h4>Age:{prescription.patientAge}</h4>
          </div>
          <div className="col-md-3 mt-5">
            <h4>Weight:{prescription.patientWeight}</h4>
          </div>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col-md-6 mt-3">
            <h4><br></br><br></br>Details:{prescription.patientDetails}</h4>
          </div>
          <div className="col-md-6 mt-3">
            <br></br>
            <h4>Prescription:<br></br>
              {prescription.prescription}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h4><br></br><br></br>Disease Detected:<br></br>{prescription.patientServices}</h4>
          </div>
          <div className="col-md-6">
            <br></br>
            <h4><br></br>Prescribed By:<br></br>
              {prescription.PrescriptionGivenProfessional}</h4>
          </div>
        </div>
        <div className="row">
          <div class="col-md-12 text-right mb-3">
            <button class="btn btn-success" id="download" onClick={handlePdf}> Download Pdf</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserPrescription;