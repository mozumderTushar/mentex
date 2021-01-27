import React from 'react';
import './Header.css'
import headerImg from '../../assets/images/header.png';


const Header = () => {
  return (
    <div className="container my-4">
      <main className="row d-flex align-items-center">
        <div className="col-md-6 ">
          <img className="img-fluid" src={headerImg} alt="" />
        </div>
        <div className="col-md-4 offset-md-1">
          <h1>You don't have to<br />struggle in silence</h1>
          <div className="text-secondary">If you are broken, you don not have to stay broken. Sometimes the people around you won't understand your journey. They don't need to, it's not for them.</div>
          <button className="btn btn-brand my-3 header__btn">EXPLORE</button>
        </div>
      </main>
    </div>
  );
};

export default Header;