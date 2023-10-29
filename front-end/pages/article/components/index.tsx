// pages/index.tsx

// Imports
import React, { useState } from 'react';

// Imports Next
import { useRouter } from 'next/router';

// Global Components
import { } from '@/global';

// Styled Components
import { Author, Banner, Description, Container, Title } from './styles';


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
                <Author>October 6,2021 / Classic</Author>
                <Description>There are many variations of passages of Lorem Ipsum available, but the majorithave suffered alteration in some form, by injected humour, or randomised words whicdon't look even slightly believable. If you are going to use a passage of Lorem Ipsum, need to be sure there isn't anything embarrassing hidden in the middle of text. All thLorem Ipsum generators on the Internet tend.</Description>
                <Title>
                    The perfect book for all
                </Title>
                <Description>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has less normal distribution of letters, as opposed.</Description>
                <ul>
                    <li>It has roots in a piece of classical Latin literature from 45 BC,</li>
                    <li>To generate Lorem Ipsum which looks reasonable</li>
                    <li>The first line of Lorem Ipsum, "Lorem ipsum” dolor sit amet</li>
                </ul>
            </Container>
        );
    } else {
        return <div>Artigo não encontrado</div>;
    }
};

export default Infos;