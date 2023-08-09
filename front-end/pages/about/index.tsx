// pages/index.tsx
import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TopSection from '../../components/Main/TopSection';
import AboutAuthor from '../../components/Main/AboutAuthor';
import MyStory from '../../components/Main/MyStory';
import AuthorsBook from '../../components/Main/AuthorsBook';
import TrustedSection from '../../components/Main/TrustedSection';
import Newsletter from '../../components/Main/Newsletter';
import Newsletter from '../../components/Main/ContactHome';


const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <TopSection title='About the Author'/> 
      <AboutAuthor />
      <MyStory />
      <AuthorsBook />
      <TrustedSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomePage;
