import React from 'react';
import Blog from '../Blog/Blog';
import ConnectWithExperts from '../ConnectWithExperts/ConnectWithExperts';
import HeaderContainer from '../HeaderContainer/HeaderContainer';

const Home = () => {
  return (
    <div>
      <HeaderContainer />
      <ConnectWithExperts />
      <Blog />
    </div>
  );
};

export default Home;