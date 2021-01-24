import React from 'react';
import expartImg from '../../assets/images/exparts.png';

const ConnectWithExperts = () => {
  return (
    <div className="container my-5">
      <main className="row d-flex align-items-center">
      <div className="col-md-5 ">
          <h1>Connect with Experts</h1>
          <div className="text-secondary"><strong>MENTEX</strong> is a platform that can connect your need with the experts who will help you reach your goal. </div>
          <button className="btn btn-brand my-3 header__btn">CONNECT</button>
        </div>
        <div className="col-md-6 offset-md-1">
          <img className="img-fluid" src={expartImg} alt="" style={{height:'10%'}}/>
        </div>
      </main>
    </div>
  );
};

export default ConnectWithExperts;