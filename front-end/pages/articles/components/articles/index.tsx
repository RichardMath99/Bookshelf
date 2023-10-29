// Imports
import React from 'react'

// GLobal Components
import { Container } from '@/global'

// Styled Components
import { Article, ContentArticle, DateArticle, DescriptionArticle, DivS, Grid, ImageArticle, LinkS, TitleArticle } from './styles'

// Image
import image from '../assets/image_1.png'

// Interface
interface ArticlesProps {
    image: string,
    banner ?: string | undefined,
    title: string,
    description: string,
    author: string,
}

// Data
const articles: ArticlesProps[] = [
    {
        image: '/imagens/article_01.png',
        banner: '/imagens/banner_01.png',
        title: 'Significant reading has more info number',
        description: 'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.',
        author: 'Author - 23.05.2022'
    },
    {
        image: '/imagens/article_02.png',
        title: 'Release of Letraset sheets tools containing  passages',
        description: 'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.',
        author: 'Author - 23.05.2022'
    },
    {
        image: '/imagens/article_03.png',
        title: 'The energy efficiency offers hydrotherapy or swim',
        description: 'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.',
        author: 'Author - 23.05.2022'
    },
    {
        image: '/imagens/article_04.png',
        title: 'The energy efficiency offers hydrotherapy or swim',
        description: 'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.',
        author: 'Author - 23.05.2022'
    },
    {
        image: '/imagens/article_05.png',
        title: 'Release of Letraset sheets tools containing  passages',
        description: 'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.',
        author: 'Author - 23.05.2022'
    },
    {
        image: '/imagens/article_06.png',
        title: 'The energy efficiency offers hydrotherapy or swim',
        description: 'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.',
        author: 'Author - 23.05.2022'
    },
    {
        image: '/imagens/article_07.png',
        title: 'The energy efficiency offers hydrotherapy or swim',
        description: 'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.',
        author: 'Author - 23.05.2022'
    },
    {
        image: '/imagens/article_08.png',
        title: 'Release of Letraset sheets tools containing  passages',
        description: 'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.',
        author: 'Author - 23.05.2022'
    },
    {
        image: '/imagens/article_09.png',
        title: 'The energy efficiency offers hydrotherapy or swim',
        description: 'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.',
        author: 'Author - 23.05.2022'
    },
]

// Functional Component
const GalleryArticles: React.FC = () => {

    // Redering
    return (
        <Container>
            <Grid>
                {articles.map((item, index) => {
                    return (
                        <Article>
                            <ImageArticle
                                src={item.image}
                                width={410}
                                height={326}
                                alt='Image article'
                            />
                            <ContentArticle>
                                <TitleArticle>{item.title}</TitleArticle>
                                <DescriptionArticle>{item.description}</DescriptionArticle>
                                <DivS>
                                    <LinkS href={{
                                        pathname: '/article/[...paramns]',
                                        query: {
                                            paramns: [item.title, item.banner || item.image]
                                        },
                                    }}
                                    >Read more</LinkS>
                                    <DateArticle>{item.author}</DateArticle>
                                </DivS>
                            </ContentArticle>
                        </Article>
                    )
                })}
            </Grid>
        </Container>
    )
}

// Export
export default GalleryArticles