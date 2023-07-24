// pages/index.tsx
import React from 'react';
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Hello, Next.js!</h1>
        <p>Welcome to your basic Next.js home page.</p>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
