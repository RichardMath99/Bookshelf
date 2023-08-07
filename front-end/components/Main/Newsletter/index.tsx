import React, { useState } from 'react';

//Styled Components
import { NewsletterSection, NewsletterForm, NewsletterInput, NewsletterButton, BoxTitle, Title, Description } from "./styles";
import { Container } from '../../../global';
import { LineYellow } from '../../../global';


const Newsletter: React.FC = ({ }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
  };

  return (
    <NewsletterSection>
      <Container >
          <BoxTitle>
              <Title>Read a free chapter</Title>
              <LineYellow />
              <Description>Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.</Description>
          </BoxTitle>
          <NewsletterForm onSubmit={handleSubmit}>
              <NewsletterInput
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              />
              <NewsletterButton type="submit">Subscribe</NewsletterButton>
          </NewsletterForm>
      </Container>
    </NewsletterSection>
    
  );
};

export default Newsletter;