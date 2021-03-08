import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from '../../Shared/NavBar/NavBar';
import Footer from '../../Shared/Footer/Footer';

const ExpertDetails = () => {
  window.scroll(0,0);
  const { DetailsID } = useParams()
  const [expertDetails, setExpertDetails] = useState({})

  useEffect(() => {
    fetch('https://peaceful-lake-24732.herokuapp.com/allExperts')
      .then(response => response.json())
      .then(data => {
        const expert = data.find(data => data._id === DetailsID)
        setExpertDetails(expert)
      })
  }, [DetailsID])

  return (
    <div className="common__bg__cyan">
      <div className="expert_details_container">
        <NavBar />
        <div className="row">
          <div className="col-md-6 text-center">
            <img className="img-fluid mt-5 pt-5" style={{ width: "50%" }} src={expertDetails.img} alt="" />
          </div>
          <div className="col-md-6 align-self-center">
            <h1 className="about-title">Name:{expertDetails.fullName}</h1>
            <h2 className="lead mt-2">Email:{expertDetails.email}</h2>
            <h2 className="lead">Occupation:{expertDetails.occupation}</h2>
            <h2 className="lead">Gender:{expertDetails.gender}</h2>
            <h2 className="lead">Mobile:{expertDetails.mobile}</h2>
            <h2 className="lead">Details:{expertDetails.details}</h2>
            <Link to="/connectExpert"><button className="btn btn-brand my-3 common__btn">GET ADVICE</button></Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ExpertDetails;