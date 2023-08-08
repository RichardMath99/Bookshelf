// components/Header.tsx
import React from 'react';
import HeroSection from './HeroSection';
import AuthorsBook from './AuthorsBook';
import AboutAuthorHome from './AboutAuthorHome';
import Trusted from './TrustedSection';
import GetBook from './GetBook';
import Learn from './Learn';
import Chapter from './Chapter';
import Opinions from './Opinions';
import Articles from './Articles';
import ContactH from './ContactHome';

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
            <Opinions />
            <Articles />
            <ContactH />
        </>
    )
}

export default Main;