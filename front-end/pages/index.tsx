// pages/index.tsx
import React from 'react';

import { createGlobalStyle } from 'styled-components';

import Header from '../components/Header/index';
import Footer from '../components/Footer/index';

import { Container } from './style';


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cardo:wght@400;700&display=swap');

  body {
    font-family: 'Cardo', serif;
    /* Outros estilos globais para o corpo da página, se necessário */
  }
`;


const HomePage: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
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
