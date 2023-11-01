
// Global Components
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ErrorPage from "@/components/Main/ErrorPage";
import TopSection from "@/components/Main/TopSection";

// Functional Component
export default function Custom404() {
    // Rendering
    return (
        <>
            <Header />
            <TopSection title='Page Error' />
            <ErrorPage/>
            <Footer />
        </>
    )
}