// Imports
import React from "react";

// Styled Components
import { Background, ErroButtonText, ErroDescription, ErroNumber, ErroText } from "./styles";

// Global Components
import Button from "@/components/Button";

// Router
import { useRouter } from "next/router";

// Functional Component
const ErrorPage: React.FC = () => {
    // Router
    const router = useRouter();

    // Rendering
    return (
        <Background>
            <ErroNumber>404</ErroNumber>
            <ErroText>Page not Found!!!</ErroText>
            <ErroDescription>The page you are looking for doesn't exist. Please try searching for some other page, or return to the website's homepage to find what you're looking for.</ErroDescription>
            <Button onClick={() => { router.push('/') }}>
                <ErroButtonText>Back to Home</ErroButtonText>
            </Button>
        </Background>
    )
}

// Export
export default ErrorPage;