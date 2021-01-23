import React from 'react';
import './HeaderContainer.css'
import NavBar from '../../Shared/NavBar/NavBar';
import Header from '../Header/Header';

const HeaderContainer = () => {
  return (
    <div className="header-container">
     <NavBar />
     <Header />
    </div>
  );
};

export default HeaderContainer;

