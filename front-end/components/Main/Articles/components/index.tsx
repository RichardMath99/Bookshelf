
// Styled Components
import { ArticlesContent, Container, ImageContainer, ImageS, Description, LinkS, BottomDiv, AuthorDate, Span, DivS } from "./style";

// Images
import energy from '../../../../public/img-articles-1.png'
import { Title } from "../../Chapter/components/style";
import Link from "next/link";

interface ArticleProps {
    title ?: string;
    description ?: string;
    link : string;
    author ?: string;
    date ?: string;
}

const articles: ArticleProps[] = [
    {
        title: 'The energy efficiency offers hydrotherapy or swim',
        description: 'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.',
        link: '/',
        author: 'Gabriel',
        date: '23.05.2022'
    },
    {
        title: 'Release of Letraset sheets tools containing  passages',
        description: 'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.',
        link: '/',
        author: 'Gabriel',
        date: '23.05.2022'
    },
    {
        title: 'The energy efficiency offers hydrotherapy or swim',
        description: 'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.',
        link: '/',
        author: 'Gabriel',
        date: '23.05.2022'
    }
]


const ArticlesComponent = (props: ArticleProps) => {
    return (
        <DivS>
            {articles.map((article, index) => {
                return (
                    <Container>
                        <ImageContainer>
                            <ImageS
                                src={energy}
                                alt="image article"
                            />
                        </ImageContainer>
                        <ArticlesContent>
                            <Title>{article.title}</Title>
                            <Description>{article.description}</Description>
                            <BottomDiv>
                                <LinkS href={article.link}>Read more</LinkS>
                                <AuthorDate>{article.author} - <Span>{article.date}</Span></AuthorDate>
                            </BottomDiv>
                        </ArticlesContent>
                    </Container>
                )
            })}

        </DivS>
    )
}

export default ArticlesComponent;