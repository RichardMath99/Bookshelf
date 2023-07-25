// pages/index.tsx
import React from 'react';
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';
import Main from '../components/Main/index';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <Main/>
      <Footer />
    </div>
  );
};

export default HomePage;
