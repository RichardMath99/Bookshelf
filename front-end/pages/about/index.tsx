// pages/index.tsx
import React from 'react';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import TopSection from '../../components/Main/TopSection/index';
import AboutAuthor from '../../components/Main/AboutAuthor/index';


const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <TopSection />
      <AboutAuthor />
      <Footer />
    </div>
  );
};

export default HomePage;
