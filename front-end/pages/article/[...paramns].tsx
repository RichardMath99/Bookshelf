// Imports
import React from 'react';

// Global Components
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import TopSection from '@/components/Main/TopSection';

// Imports Next
import { useRouter } from 'next/router';
import Infos from './components';

// Functional Components
const Article: React.FC = () => {
    // Params Url
    const router = useRouter()
    const { paramns } = router.query;

    // Redering
    if (paramns && Array.isArray(paramns) && paramns.length >= 2) {
        const title = paramns[0]; // Título

        return (
            <>
                <Header />
                <TopSection title={title} />
                <Infos />
                <Footer />
            </>
        );
    } else {
        // Trate o caso em que `slug` não tenha os valores esperados ou seja indefinido
        return <div>Artigo não encontrado</div>;
    }
}

export default Article;