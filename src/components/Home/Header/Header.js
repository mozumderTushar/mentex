import React from 'react';
import chair from '../../assets/images/chair.png'

const Header = () => {
  return (
    <div>
      <main className="row d-flex align-items-center" style={{ height: '600px' }}>
        <div className="col-md-4 offset-md-1">
          <h1 style={{ color: '#3a4256' }}>You don't have to<br />struggle in scilence</h1>
          <div className="text-secondary">If you are broken, you don not have to stay broken. Sometimes the people around you won't understand your journey. They don't need to, it's not for them.</div>
          <button className="btn btn-brand my-3">EXPLORE</button>
        </div>
        <div className="col-md-6">
          <img className="img-fluid" src={chair} alt="" />
        </div>
      </main>
    </div>
  );
};

export default Header;