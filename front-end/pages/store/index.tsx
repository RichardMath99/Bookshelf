// pages/index.tsx
import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TopSection from '../../components/Main/TopSection';
import AboutAuthor from '../../components/Main/AboutAuthor';
import MyStory from '../../components/Main/MyStory';
import AuthorsBook from '../../components/Main/AuthorsBook';
import TrustedSection from '../../components/Main/TrustedSection';
import ContactH from '@/components/Main/ContactHome';
import Book from './components/templates';


const Store: React.FC = () => {
  return (
    <div>
      <Header />
      <TopSection title='My Store' />
      <Book />
      <ContactH />
      <Footer />
    </div>
  );
};

export default Store;
