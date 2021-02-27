import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Blog from '../Blog/Blog';
import ConnectWithExperts from '../ConnectWithExperts/ConnectWithExperts';
import Contact from '../Contact/Contact';
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import OurExpert from '../OurExpert/OurExpert';

const Home = () => {
  return (
    <div>
      <HeaderContainer />
      <OurExpert />
      <ConnectWithExperts />
      {/* <Blog /> */}
      <Contact />
      <div className={`${window.location.pathname === '/' ? 'common__bg__cyan' : 'common__bg__dark__blue '}`}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;