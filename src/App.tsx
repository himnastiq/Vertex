import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import TrustBenefits from "./components/TrustBenefits";
import ProductProof from "./components/ProductProof";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <TrustBenefits />
                <ProductProof />
                <Pricing />
                <FAQ />
                <CTA />
            </main>
            <Footer />
        </>
    );
}

export default App;
