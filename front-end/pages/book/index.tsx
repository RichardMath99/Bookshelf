// book/index.tsx
// Imports
import React from 'react'

// GlobalComponents
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import TopSection from '@/components/Main/TopSection';
import { Container } from '@/global';
 
// Molecules
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
