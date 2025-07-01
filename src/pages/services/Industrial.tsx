import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import BackToTop from '@/components/BackToTop';
import { Phone } from 'lucide-react';

const industrialProjects = [
  'Manufacturing plants and production facilities',
  'Distribution centers and logistics hubs',
  'Cold storage, dry warehouses, and automated facilities',
  'Specialized equipment integration, including racking and MEP systems',
];

const industrialEstimatingServices = [
  'Structural Steel, Concrete & Cladding Take-Offs: Our team provides precise structural take-offs, ensuring accuracy in material and labor estimates for steel, concrete, and cladding.',
  'Trade Package Estimates (Dock Equipment, Racking, MEP): We prepare detailed estimates for complex trade packages, including dock equipment, racking systems, and MEP installations.',
  'Cost Modelling by Warehouse Type: Tailored cost models that account for the specific needs of different warehouse types, including cold storage, dry warehouses, and automated facilities.',
  'Plant, Labor & Equipment Rate Analysis: We analyze plant, labor, and equipment rates, ensuring that your project is executed efficiently, within budget, and on schedule.',
  'External Works & Site Services Estimation: We provide comprehensive site services estimations, including grading, utilities, and preparation, ensuring that external works are accurately forecasted.',
  'Procurement-Ready BOQs: Our procurement-ready Bills of Quantities (BOQs) facilitate competitive bidding, ensuring that your project gets the best value.',
];

const industrialWhyChoose = [
  'Industry Expertise: Our team has a deep understanding of the complexities involved in industrial construction, from heavy infrastructure to equipment integration.',
  'Customized Cost Models: We tailor our cost models to meet the specific needs of each project, ensuring the most accurate cost predictions.',
  'Comprehensive Service: From site preparation to final handover, we provide estimating services for every stage of your industrial project.',
];

const Industrial = () => {
  return (
    <div className="antialiased">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">Industrial & Warehousing Construction Estimating Services</h1>
          <p className="text-xl mb-8 opacity-90">
            Comprehensive Estimating for Industrial and Warehousing Projects
          </p>
          <p className="text-lg mb-4">
            At Paradise Estimating, we bring decades of experience in industrial and warehousing construction estimating. From manufacturing plants to distribution centers, our team ensures your project is meticulously costed, optimizing every aspect of the build, from structural systems to specialized equipment integration.
          </p>
        </div>
      </section>

      {/* Projects & Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Projects & Services</h2>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-construction-blue mb-2">Industrial Projects:</h3>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              {industrialProjects.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-construction-blue mb-2">Estimating Services:</h3>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              {industrialEstimatingServices.map((item, idx) => (
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
            {industrialWhyChoose.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Advanced Project Management Integration Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">Advanced Project Management Integration</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our estimating services are closely integrated with project management tools, offering real-time cost tracking and updates. By utilizing advanced technology, we enable better communication, cost monitoring, and tracking of project milestones. This integration helps prevent cost overruns, ensures timelines are met, and increases overall project efficiency.
          </p>
          <p className="text-lg text-gray-700 mt-8 font-semibold">Get Started Today:</p>
          <p className="text-lg text-gray-700 mb-8">Let us assist in your next industrial or warehousing project by delivering precise, tailored estimating services. Contact us for more information.</p>
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

export default Industrial; 