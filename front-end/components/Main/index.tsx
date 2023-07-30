// components/Header.tsx
import React from 'react';
import { HeroSection } from './HeroSection';
import { AuthorsBook } from './AuthorsBook';
import { AboutAuthorHome } from './AboutAuthorHome';
import { Trusted } from './TrustedSection';
import { GetBook } from './GetBook';
import Learn from './Learn';
import Chapter from './Chapter';

const Main: React.FC = () => {
    return (
        <>
            <HeroSection />
            <AuthorsBook />
            <AboutAuthorHome />
            <Trusted />
            <GetBook />
            <Learn />
            <Chapter />
        </>
    )
}

export default Main;