// pages/index.tsx
import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TopSection from '../../components/Main/TopSection';
import AboutAuthor from '../../components/Main/AboutAuthor';
import MyStory from '../../components/Main/MyStory';


const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <TopSection />
      <AboutAuthor />
      <MyStory />
      <Footer />
    </div>
  );
};

export default HomePage;
