// components/Header.tsx
import React from 'react';
import { HeroSection } from './HeroSection';
import { AuthorsBook } from './AuthorsBook';
import { About } from './AboutAuthor';

const Main: React.FC = () => {
    return (
        <>
            <HeroSection />
            <AuthorsBook />
            <About/>
        </>
    )
}

export default Main;