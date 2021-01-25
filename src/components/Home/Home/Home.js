import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Blog from '../Blog/Blog';
import ConnectWithExperts from '../ConnectWithExperts/ConnectWithExperts';
import Contact from '../Contact/Contact';
import HeaderContainer from '../HeaderContainer/HeaderContainer';

const Home = () => {
  return (
    <div>
      <HeaderContainer />
      <ConnectWithExperts />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;