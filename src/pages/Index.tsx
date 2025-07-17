import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StatsCounter from '@/components/StatsCounter';
import CallToAction from '@/components/CallToAction';
import ServicesOverviewHome from '@/components/ServicesOverviewHome';
import Clients from '@/components/Clients';
import Testimonials from '@/components/Testimonials';
import ChatWidget from '@/components/ChatWidget';
import BackToTop from '@/components/BackToTop';
import Footer from '@/components/Footer';
import WhyChooseUs from '@/components/WhyChooseUs';

const Index = () => {
  useEffect(() => {
    // Initialize AOS library if it's in window object
    if (typeof window !== 'undefined' && (window as any).AOS) {
      (window as any).AOS.refresh();
    }
    
    // Handle anchor link navigation
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            window.scrollTo({
              top: element.getBoundingClientRect().top + window.pageYOffset - 100,
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    };
    
    // Run on initial load and when hash changes
    window.addEventListener('hashchange', handleHashChange);
    if (window.location.hash) {
      handleHashChange();
    }
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="antialiased">
      <Header />
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <ServicesOverviewHome />
      </div>
      <StatsCounter />
      <WhyChooseUs />
      <div id="clients">
        <Clients />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <CallToAction />
      <Footer />
      <ChatWidget />
      <BackToTop />
    </div>
  );
};

export default Index;
