import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import BackToTop from '@/components/BackToTop';
import { Phone } from 'lucide-react';

const turnkeyProjects = [
  'End-to-end construction contracts',
  'Integrated design-build solutions',
  'EPCM projects involving complex, multi-disciplinary coordination',
];

const turnkeyEstimatingServices = [
  'All-Stage Estimating (Concept → CD → Handover): We deliver cost estimates at every project stage, from conceptual design to the final handover of the completed project.',
  'Lump Sum Pricing Support with Risk Provisions: We offer lump sum pricing estimates with built-in risk provisions, ensuring that all potential risks are accounted for.',
  'Cost Breakdown Structure (CBS) Development: We provide a detailed Cost Breakdown Structure (CBS) to give you a clear, organized view of your project\'s cost allocations.',
  'Integrated Design & Cost Review: Our team works closely with your design team to ensure cost optimization throughout the design process, helping to identify cost-saving opportunities.',
  'Subcontractor Scope Splits & Package Budgets: We create detailed scope splits for subcontractors and establish package budgets, enabling precise project cost management.',
  'Cash Flow & Milestone-Based Payment Valuations: We track milestones and manage cash flow, ensuring that payments are aligned with the completion of project phases.',
];

const turnkeyWhyChoose = [
  'Full Project Lifecycle Support: We offer estimating services from early design stages to final project delivery, providing comprehensive support throughout the lifecycle of your project.',
  'Proven Risk Management: Our team identifies and mitigates potential risks early in the project, incorporating appropriate contingency plans.',
  'Collaborative Approach: We collaborate closely with design and construction teams to ensure that costs are optimized and the project is delivered on time and within budget.',
];

const Turnkey = () => {
  return (
    <div className="antialiased">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">Turnkey / Design-Build / EPCM Construction Estimating Services</h1>
          <p className="text-xl mb-8 opacity-90">
            End-to-End Estimating for Turnkey, Design-Build & EPCM Projects
          </p>
          <p className="text-lg mb-4">
            Paradise Estimating provides full lifecycle estimating for Turnkey, Design-Build, and EPCM (Engineering, Procurement, and Construction Management) projects. From concept to completion, our expert team delivers accurate, detailed estimates to ensure financial control, optimize costs, and mitigate risks throughout the entire project.
          </p>
        </div>
      </section>

      {/* Projects & Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Projects & Services</h2>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-construction-blue mb-2">Turnkey / Design-Build Projects:</h3>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              {turnkeyProjects.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-construction-blue mb-2">Estimating Services:</h3>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              {turnkeyEstimatingServices.map((item, idx) => (
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
            {turnkeyWhyChoose.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Risk Mitigation and Contingency Planning Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">Risk Mitigation and Contingency Planning</h2>
          <p className="text-lg text-gray-700 mb-6">
            We emphasize proactive risk assessment and contingency planning in all our estimating services. By identifying potential risks early in the process, we help you prepare for unforeseen challenges, allowing for more accurate budgeting and minimizing the likelihood of cost overruns. Our goal is to safeguard your project against unexpected costs and ensure a smooth project delivery.
          </p>
          <p className="text-lg text-gray-700 mt-8 font-semibold">Get Started Today:</p>
          <p className="text-lg text-gray-700 mb-8">Contact us today to discuss how our turnkey, design-build, and EPCM estimating services can provide clarity, control, and efficiency for your project.</p>
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

export default Turnkey; 