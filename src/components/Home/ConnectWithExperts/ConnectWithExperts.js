import React from 'react';
import { Link } from 'react-router-dom';
import expartImg from '../../assets/images/exparts.png';

const ConnectWithExperts = () => {
  return (
    <div className="common__bg__cyan" >
      <div className="container p-5 ">
        <main className="row d-flex align-items-center">
          <div className="col-md-5 ">
            <h1>Connect with Experts</h1>
            <div className="text-secondary"><strong>MENTEX</strong> is a platform that can connect your need with the experts who will help you reach your goal. </div>
            <Link to="/connectExpert"><button className="my-3 btn btn-brand connect"><span></span>
              <span></span>
              <span></span>
              <span></span>CONNECT</button></Link>
          </div>
          <div className="col-md-6 offset-md-1">
            <img className="img-fluid" src={expartImg} alt="" style={{ height: '10%' }} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ConnectWithExperts;