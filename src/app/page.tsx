import React from 'react'
import Header from '@/components/header/Header';
import Herosection from '@/components/hero-section/HeroSection';
import AboutSection from '@/components/about-section/AboutSection';
import ContactUs from '@/components/contact-us/ContactUs';
import AboutBottomImage from '@/components/about-bottom-image/AboutBottomImage';
import Portfolio from '@/components/portfolio/Portfolio';
import Services from '@/components/services-section/Services';
import Testimoials from '@/components/testimonials/Testimonials';
import Footer from '@/components/footer/Footer';

const Home = () => {
  return (
    <>
     <Header />
    <Herosection />
      <AboutSection />
     <AboutBottomImage />
     <Portfolio />
      <Services />
     <Testimoials />
     <ContactUs />
     <Footer />
    </>
  )
}

export default Home