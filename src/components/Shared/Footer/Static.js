import React from 'react';
import StaticImg from '../../assets/images/mlogo.png';
import './Static.css';

const Static = () => {
  return (
    <div className="static-area">

      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <img src={StaticImg} className="static-img" alt="Static" />
          </div>
          <div className="col-lg-8">
            <div className="static-text">
            <h2>Mentex</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            <a href="#">Learn More</a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Static;