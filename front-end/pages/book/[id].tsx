// book/index.tsx
// Imports
import React, {useState} from 'react'

// GlobalComponents
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import TopSection from '@/components/Main/TopSection';
import { Container } from '@/global';
 
// Molecules
import Organisms from './components/organisms';
import { useRouter } from 'next/router';


const Book: React.FC = () => {
    const router = useRouter();
    const [id] = useState(router.query.id)

    // Redering
    return (
        <div>
            <Header />
            <TopSection title={`Nome do livro dinâmico ${id}`} />
            <Organisms/>
            <Footer />
        </div>
    );
};

export default Book;
