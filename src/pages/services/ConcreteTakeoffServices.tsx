import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import BackToTop from '@/components/BackToTop';
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

const ConcreteTakeoffServices = () => {
  return (
    <div className="antialiased">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Concrete Estimating for Residential & Commercial Projects
            </h1>
            <p className="text-xl mb-8 opacity-90">
              EstimatingHub delivers precise concrete takeoff services that eliminate costly errors and accelerate your project success. Our certified estimators utilize advanced software and industry expertise to provide accurate material quantification and labor analysis for foundations, slabs, driveways, and complex commercial structures.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-construction-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
            >
              Get Your Free Quote Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Accurate Concrete Takeoffs Matter */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
              Why Accurate Concrete Takeoffs Matter
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="font-bold mb-2">Cost Control & Budget Protection</h3>
              <p>Inaccurate estimates lead to material waste, budget overruns, and reduced profitability. Our precision takeoffs ensure you order the right quantities while maintaining competitive pricing.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="font-bold mb-2">Competitive Bidding Advantage</h3>
              <p>Win more projects with reliable estimates that reflect true project costs. Our detailed analysis helps you submit confident bids that secure profitable contracts.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="font-bold mb-2">Project Timeline Efficiency</h3>
              <p>Eliminate delays caused by material shortages or excess inventory. Our accurate takeoffs support smooth project execution from start to finish.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Concrete Takeoff Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
              Comprehensive Concrete Takeoff Services
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-construction-blue mb-2">Material Quantity Analysis</h3>
              <ul className="list-disc ml-5 text-gray-700">
                <li>Precise concrete volume calculations for all structural elements</li>
                <li>Reinforcement steel quantification and placement details</li>
                <li>Formwork and finishing material requirements</li>
                <li>Waste factor calculations for accurate ordering</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-construction-blue mb-2">Labor Cost Estimation</h3>
              <ul className="list-disc ml-5 text-gray-700">
                <li>Detailed labor hour analysis based on project complexity</li>
                <li>Equipment requirements and operational costs</li>
                <li>Skilled trade coordination and scheduling support</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-construction-blue mb-2">Bid-Ready Documentation</h3>
              <ul className="list-disc ml-5 text-gray-700">
                <li>Professional takeoff reports with itemized breakdowns</li>
                <li>Marked-up plans highlighting all concrete elements</li>
                <li>Competitive pricing analysis for strategic bidding</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-construction-blue mb-2">Advanced Technology & Expertise</h3>
              <ul className="list-disc ml-5 text-gray-700">
                <li>Our concrete estimating process combines cutting-edge software including PlanSwift, Bluebeam Revu, and STACK with deep industry knowledge. This integration ensures consistent accuracy while delivering results in as little as 24 hours.</li>
                <li>Our certified estimators bring over 15 years of specialized concrete experience, understanding the unique requirements of residential foundations, commercial slabs, and complex structural elements.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Specific Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
              Industry-Specific Solutions
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="font-bold text-construction-blue mb-2">General Contractors</h3>
              <p>Comprehensive concrete estimates covering all project phases, from site preparation through final finishing, ensuring complete budget control and project coordination.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="font-bold text-construction-blue mb-2">Concrete Subcontractors</h3>
              <p>Specialized takeoffs focused on concrete-specific scope, including detailed material calculations, labor requirements, and equipment specifications for competitive bidding.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="font-bold text-construction-blue mb-2">Architects & Engineers</h3>
              <p>Design-phase cost analysis supporting feasibility studies and value engineering decisions, ensuring structural designs align with budget constraints.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="font-bold text-construction-blue mb-2">Property Developers</h3>
              <p>Early-stage cost projections for development planning, including foundation systems, parking structures, and site concrete requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Results & Client Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
              Proven Results & Client Benefits
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-6 rounded-lg shadow">
              <ul className="list-disc ml-5 text-gray-700">
                <li>Reduce material waste by 15% through precision quantification</li>
                <li>Increase bid success rates by 30% with competitive, accurate pricing</li>
                <li>24-hour turnaround for urgent project deadlines</li>
                <li>100% accuracy guarantee backed by certified estimators</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="font-bold mb-2">How accurate are your concrete takeoffs?</h3>
              <p>Our digital takeoff process eliminates manual errors, providing 100% accurate material quantities and comprehensive cost breakdowns.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="font-bold mb-2">Do you include labor costs?</h3>
              <p>Yes, our concrete estimates include detailed labor analysis, equipment requirements, and all associated costs for complete project budgeting.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="font-bold mb-2">Can you handle rush projects?</h3>
              <p>Absolutely. We offer expedited services for urgent deadlines while maintaining our quality standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
              Get Started Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Transform your concrete estimating process with EstimatingHub's professional services. Upload your plans today and receive a detailed quote within 24 hours.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-construction-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
            >
              Submit Your Plans Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
      <ChatWidget />
      <BackToTop />
    </div>
  );
};

export default ConcreteTakeoffServices; 