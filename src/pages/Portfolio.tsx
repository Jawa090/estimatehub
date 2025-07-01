
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Portfolio from '@/components/Portfolio';
import ChatWidget from '@/components/ChatWidget';
import BackToTop from '@/components/BackToTop';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-construction-blue to-construction-darkGray text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Explore our successful projects and see the quality of work we deliver.
            </p>
          </div>
        </div>
      </section>

      <Portfolio />
      
      <Footer />
      <ChatWidget />
      <BackToTop />
    </div>
  );
};

export default PortfolioPage;
