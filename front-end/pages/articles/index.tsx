// pages/index.tsx
import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TopSection from '../../components/Main/TopSection';
import GalleryArticles from './components/articles';



const Articles: React.FC = () => {
  return (
    <div>
      <Header />
      <TopSection title='Articles' />
      <GalleryArticles/>
      <Footer />
    </div>
  );
};

export default Articles;
