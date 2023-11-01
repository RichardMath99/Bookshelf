// pages/index.tsx

// Imports
import React, { useState } from 'react';

// Imports Next
import { useRouter } from 'next/router';

// Global Components
import { } from '@/global';

// Styled Components
import { Banner, Container } from './styles';
import { Description } from './molecules/AuthorDescription/styles';

// Molecules
import AuthorDescription from './molecules/AuthorDescription';
import TitleS from './molecules/Title';
import List from './molecules/List';
import Highlight from './molecules/Highlight';


const Infos: React.FC = () => {
    // Params Url
    const router = useRouter()
    const { paramns } = router.query;

    // Redering
    if (paramns && Array.isArray(paramns)) {
        const image = paramns[1]; // Imagem

        return (
            <Container>
                <Banner
                    width={1299}
                    height={700}
                    src={image}
                    alt="Imagem do artigo" />
                <AuthorDescription />
                <List title='The perfect book for all' />
                <Highlight text='“Crowdsource term sheet freemium beta stealth responsive web design niche market rock star channels.”' />
                <List title='The perfect book for all' numeric/>
            </Container>
        );
    } else {
        return <div>Artigo não encontrado</div>;
    }
};

export default Infos;