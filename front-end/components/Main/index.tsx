// components/Header.tsx
import React from 'react';
import { HeroSection } from './HeroSection';
import { AuthorsBook } from './AuthorsBook';
import { AboutAuthorHome } from './AboutAuthorHome';

const Main: React.FC = () => {
    return (
        <>
            <HeroSection />
            <AuthorsBook />
            <AboutAuthorHome/>
        </>
    )
}

export default Main;