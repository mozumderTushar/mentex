import React from 'react';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link mr-5" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-5" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-5" href="/dashboard/appointment">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link mr-5 ${window.location.pathname === '/appointment' ? 'text-secondary' : 'text-white'} text-white`} href="/post">Post</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link mr-5 ${window.location.pathname === '/appointment' ? 'text-secondary' : 'text-white'} text-white`} href="/stories">Stories</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link mr-5 ${window.location.pathname === '/appointment' ? 'text-secondary' : 'text-white'} text-white`} href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;