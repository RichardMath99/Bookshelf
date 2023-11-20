// Imports
import React from "react";

// Styled Components
import { Content, Description, Title } from "./styles";

// Global Components
import { Container, LineYellow } from "@/global";
import InputS from "@/components/Input/index";

const Page: React.FC = () => {
    return (
        <Container>
            <Content>
                <Title>Password Protected</Title>
                <LineYellow></LineYellow>
                <Description>This page is password protected. If you are the website admin, or have access to this page, please type your password below.</Description>
                <InputS 
                    placeholder="Enter your password"
                    type="password"
                />
            </Content>
        </Container>
    )
}

export default Page;