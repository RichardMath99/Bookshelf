// book/index.tsx
// Imports
import React from 'react'

// GlobalComponents
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import TopSection from '@/components/Main/TopSection';
import { Container } from '@/global';
 
// Molecules
import Title from './components/molecules/Title/index'
import Description from './components/molecules/Description';
import InfosBook from './components/molecules/Infos';
import ButtonBuy from './components/molecules/Button';
import Organisms from './components/organisms';

const Book: React.FC = () => {
    return (
        <div>
            <Header />
            <TopSection title='My Store' />
            <Container>
                <Organisms/>
            </Container>
            <Footer />
        </div>
    );
};

export default Book;
