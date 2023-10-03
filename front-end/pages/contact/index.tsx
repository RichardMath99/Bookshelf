// pages/index.tsx
import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TopSection from '../../components/Main/TopSection';
import Page from './components/templates';


const Store: React.FC = () => {
  return (
    <div>
      <Header />
      <TopSection title='Contact Us' />
      <Page/>
      <Footer />
    </div>
  );
};

export default Store;
