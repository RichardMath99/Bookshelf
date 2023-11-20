// pages/index.tsx
import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TopSection from '../../components/Main/TopSection';
import Page from './components';


const Protected: React.FC = () => {
  return (
    <div>
      <Header />
      <TopSection title='Protected Page' />
      <Page/>
      <Footer />
    </div>
  );
};

export default Protected;