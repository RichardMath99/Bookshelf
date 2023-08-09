import React, { useState } from 'react';

// Global Components
import { Container } from "@/global";

// Styled Components
import { YellowBox, Content, Text, Description, Forms, InputS, ButtonS, TextButtonS } from "./styles";

const Newsletter: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Subscribed with email:', email);
    };

    return (
        <Container style={{ paddingBottom: 150 }}>
            <YellowBox>
                <Content>
                    <Text>Read a free chapter</Text>
                    <Description>Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.</Description>
                </Content>
                <Forms onSubmit={handleSubmit}>
                    <InputS type="email" placeholder="Your Email id..." />
                    <ButtonS type="submit">
                        <TextButtonS>
                            Subscribe
                        </TextButtonS>
                    </ButtonS>
                </Forms>
            </YellowBox>
        </Container>
    );
}

export default Newsletter;
