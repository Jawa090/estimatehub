
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import ChatWidget from '@/components/ChatWidget';
import BackToTop from '@/components/BackToTop';

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-construction-blue to-construction-darkGray text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Hear what our satisfied clients have to say about our services.
            </p>
          </div>
        </div>
      </section>

      <Testimonials />
      
      <Footer />
      <ChatWidget />
      <BackToTop />
    </div>
  );
};

export default TestimonialsPage;
