import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import BackToTop from '@/components/BackToTop';
import { Phone } from 'lucide-react';

const whyChoose = [
  'Certified estimating professionals',
  'Advanced digital technology integration',
  'Proven track record of accurate results',
  '24-48 hour turnaround guarantee',
];

const SpecializedEstimating = () => {
  return (
    <div className="antialiased">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">Specialized Estimating Services</h1>
          <p className="text-xl mb-8 opacity-90">Precision. Expertise. Results.</p>
          <p className="text-lg mb-4">
            When your project demands more than standard estimating, Paradise Estimating delivers specialized solutions that set industry benchmarks. Our certified professionals combine cutting-edge technology with deep construction expertise to provide unmatched accuracy for complex projects.
          </p>
        </div>
      </section>

      {/* Elite Specialized Solutions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-8 text-construction-blue text-center">Elite Specialized Solutions</h2>

          {/* CSI Trades Estimating Services */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-construction-blue mb-2">CSI Trades Estimating Services</h3>
            <p className="text-lg text-gray-700">
              Master every aspect of your construction project with our comprehensive CSI MasterFormat-compliant cost estimating. From foundation to finish, we deliver precise material takeoff and labor analysis across all 50 building divisions, ensuring accurate construction cost estimates for every trade.
            </p>
          </div>

          {/* Renovation Cost Estimating & Retrofit Projects */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-construction-blue mb-2">Renovation Cost Estimating & Retrofit Projects</h3>
            <p className="text-lg text-gray-700">
              Transform challenging remodeling projects into profitable ventures. Our renovation estimating specialists excel at navigating unknown conditions, historic building requirements, and complex construction phasing. We deliver accurate renovation cost estimates that account for every contingency.
            </p>
          </div>

          {/* Value Engineering & Cost Optimization */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-construction-blue mb-2">Value Engineering & Cost Optimization</h3>
            <p className="text-lg text-gray-700">
              Unlock hidden project value with our proven construction cost reduction strategies. Our systematic cost analysis approach consistently delivers 15-35% project cost savings while enhancing functionality and maintaining quality standards. Smart cost optimization solutions that maximize your construction investment return.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">Why Industry Leaders Choose Paradise Estimating</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left inline-block mb-6">
            {whyChoose.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-poppins font-bold mb-6 text-construction-blue">Ready to get professional construction estimating services?</h2>
          <p className="text-lg text-gray-700 mb-8">Contact our cost estimating specialists today.</p>
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-4">
            <a href="/contact" className="bg-construction-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition flex items-center justify-center"><Phone className="h-5 w-5 mr-2" />Contact Us</a>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
      <BackToTop />
    </div>
  );
};

export default SpecializedEstimating;
