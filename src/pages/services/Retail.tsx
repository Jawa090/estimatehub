import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import BackToTop from '@/components/BackToTop';
import { Phone } from 'lucide-react';

const retailProjects = [
  'Flagship stores and high-end retail outlets',
  'Multi-location franchise rollouts',
  'Restaurant and food service construction',
  'Concept stores, showrooms, and experiential spaces',
];

const retailEstimatingServices = [
  'Fast-Track Estimating for Rollouts & Refreshes: Our fast-track estimating process ensures that your retail store rollouts and refreshes are completed within tight timelines while maintaining accuracy.',
  'Joinery, Fixtures & Signage Quantification: We specialize in quantifying all fixtures, joinery, and signage, ensuring accurate cost assessments for every element.',
  'Vendor Comparison & Rate Analysis: We conduct detailed vendor comparisons and rate analysis, enabling you to make informed decisions on materials and services.',
  'Fit-Out BOQ Aligned to Branding Standards: We prepare comprehensive Bills of Quantities (BOQ) that align with your specific branding and design guidelines.',
  'Unit Pricing for Replicated Store Formats: For large-scale store rollouts, we provide unit pricing models that allow for predictable costs across multiple locations.',
  'Cost Summary by Location for Regional Rollouts: We provide a thorough cost breakdown for each location, taking regional variations into account to optimize budgets.',
];

const retailWhyChoose = [
  'Extensive Retail Experience: We understand the unique challenges of retail construction, from fast timelines to maintaining brand consistency.',
  'Accurate and Fast Estimates: Our technology-driven approach ensures that estimates are both precise and delivered promptly.',
  'Tailored Solutions for Each Project: Each project is unique, and our services are tailored to your specific needs, ensuring the best results.',
];

const Retail = () => {
  return (
    <div className="antialiased">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">Retail Construction Estimating Services</h1>
          <p className="text-xl mb-8 opacity-90">
            Expert Estimating for Retail Rollouts and Merchandise Projects
          </p>
          <p className="text-lg mb-4">
            At Paradise Estimating, we specialize in delivering accurate, fast, and comprehensive estimating services for retail and merchandise construction projects. Whether you're opening flagship stores, franchising, or updating existing locations, our expert team ensures your projects are cost-effective, completed on schedule, and in full compliance with your brand's standards.
          </p>
        </div>
      </section>

      {/* Projects & Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Projects & Services</h2>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-construction-blue mb-2">Retail Projects:</h3>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              {retailProjects.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-construction-blue mb-2">Estimating Services:</h3>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              {retailEstimatingServices.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">Why Choose Paradise Estimating?</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left inline-block mb-6">
            {retailWhyChoose.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Technology-Driven Solutions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">Technology-Driven Estimating Solutions</h2>
          <p className="text-lg text-gray-700 mb-6">
            We leverage the latest estimating software and digital tools to improve the speed, accuracy, and reliability of our cost predictions. Our use of 3D modeling, BIM (Building Information Modeling), and project management software ensures a seamless integration of all project aspects, helping us deliver precision estimates and enhance the overall project experience.
          </p>
          <p className="text-lg text-gray-700 mt-8 font-semibold">Get Started Today:</p>
          <p className="text-lg text-gray-700 mb-8">Contact us today to discuss your next retail construction project, and see how our expertise can help you achieve successful, cost-effective results.</p>
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

export default Retail; 