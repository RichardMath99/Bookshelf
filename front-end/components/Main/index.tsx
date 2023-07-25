// components/Header.tsx
import React from 'react';
import { HeroSection } from './HeroSection';
import { AuthorsBook } from './AuthorsBook';

const Main: React.FC = () => {
    return (
        <>
            <HeroSection />
            <AuthorsBook />
        </>
    )
}

export default Main;