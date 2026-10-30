import './App.css';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import BestSellers from './components/BestSellers';
import Hero from './components/Hero';
import Category from './components/Category';
import HeroSection from './components/HeroSection';
import SpecialOffers from './components/SpecialOffers';
import Features from './components/Features';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Hero />
            <HeroSection />
            <Category />
            <SpecialOffers />
            <Features />
            <Products />
            <BestSellers />
            <Testimonials />
            <Newsletter />
            <Footer />
        </>
    );
}

export default App;