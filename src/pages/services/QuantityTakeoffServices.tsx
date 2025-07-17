import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import BackToTop from '@/components/BackToTop';
import { ArrowRight } from "lucide-react";

const QuantityTakeoffServices = () => {
  return (
    <div className="antialiased">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Professional Quantity Takeoff Services for Construction Excellence
            </h1>
            <p className="text-xl mb-8 opacity-90">
              At EstimatingHub, we deliver precision-driven quantity takeoff services that empower contractors, developers, architects, and property owners to make confident project decisions. Our certified estimators combine advanced technology with deep industry knowledge to provide comprehensive material quantification and labor analysis that drives project success.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-construction-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
            >
              Get Your Professional Takeoff Quote <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
              Decades of Industry Leadership and Technical Excellence
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              With extensive experience across diverse construction sectors, EstimatingHub has established itself as the premier provider of quantity takeoff services. Our team of licensed professionals brings unparalleled expertise to every project, from high-rise commercial developments to specialized industrial facilities. We understand that accurate takeoffs are the foundation of successful construction projects, and we deliver the precision you need to stay competitive and profitable.
            </p>
          </div>
        </div>
      </section>

      {/* CSI Divisions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
              Complete CSI Division Coverage for Every Project Phase
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              EstimatingHub provides comprehensive quantity takeoff services across all CSI divisions, ensuring no aspect of your project is overlooked. Our systematic approach covers every construction element with meticulous attention to detail:
            </p>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="font-bold mb-2">Structural Systems</h3>
                <ul className="list-disc ml-5">
                  <li>Concrete Takeoff</li>
                  <li>Structural Steel Takeoff</li>
                  <li>Masonry Takeoff</li>
                  <li>Lumber Takeoff</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Building Enclosure</h3>
                <ul className="list-disc ml-5">
                  <li>Roofing Takeoff</li>
                  <li>Door/Window Takeoff</li>
                  <li>Insulation Takeoff</li>
                  <li>Drywall Takeoff</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">MEP Systems</h3>
                <ul className="list-disc ml-5">
                  <li>HVAC Takeoff</li>
                  <li>Plumbing Takeoff</li>
                  <li>Electrical Takeoff</li>
                  <li>Mechanical Takeoff</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Specialty Trades</h3>
                <ul className="list-disc ml-5">
                  <li>Site Work Takeoff</li>
                  <li>Millwork Takeoff</li>
                  <li>Cabinet Takeoff</li>
                  <li>Painting Takeoff</li>
                </ul>
              </div>
            </div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-8">
              Our multi-disciplinary expertise ensures that every project component, from foundational elements to complex building systems, receives accurate quantification and cost analysis. Whether you're managing intricate MEP installations or coordinating multiple trade packages, our comprehensive approach delivers the detailed information you need.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center mt-8 bg-construction-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
            >
              Schedule Your Expert Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Industry-Specific Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
              Industry-Specific Solutions Designed for Your Success
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="font-bold text-construction-blue mb-2">Developers: Strategic Cost Management</h3>
              <ul className="list-disc ml-5 text-gray-700">
                <li>Detailed cost breakdowns for project feasibility analysis</li>
                <li>Square footage-based estimates for budget planning</li>
                <li>Risk mitigation strategies to secure financing</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="font-bold text-construction-blue mb-2">General Contractors: Competitive Bidding & Profit Protection</h3>
              <ul className="list-disc ml-5 text-gray-700">
                <li>Comprehensive takeoffs for all construction disciplines</li>
                <li>Bid-ready documentation that meets project deadlines</li>
                <li>Strategic sourcing support for competitive pricing</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="font-bold text-construction-blue mb-2">Subcontractors: Rapid Response & Winning Proposals</h3>
              <ul className="list-disc ml-5 text-gray-700">
                <li>24-hour turnaround for urgent project deadlines</li>
                <li>Trade-specific takeoffs for specialized contractors</li>
                <li>Professional presentation formats that enhance proposals</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="font-bold text-construction-blue mb-2">Property Owners: Transparent Cost Control</h3>
              <ul className="list-disc ml-5 text-gray-700">
                <li>Clear cost breakdowns without contractor markup</li>
                <li>Plain-language reports explaining every project element</li>
                <li>Independent verification of contractor proposals</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="font-bold text-construction-blue mb-2">Architects: Design Integration & Budget Alignment</h3>
              <ul className="list-disc ml-5 text-gray-700">
                <li>Real-time cost feedback during design development</li>
                <li>Material specification optimization for cost-effective solutions</li>
                <li>Professional cost reports for client presentations</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="font-bold text-construction-blue mb-2">Vendors: Strategic Sales Support</h3>
              <ul className="list-disc ml-5 text-gray-700">
                <li>Precise material quantities for accurate customer proposals</li>
                <li>Competitive analysis to support pricing strategies</li>
                <li>Transparent quantity documentation that builds trust</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advantage Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
              The EstimatingHub Advantage
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our precision-driven methodology combines advanced software with human expertise to deliver unmatched accuracy. We utilize industry-leading platforms including Bluebeam Revu, PlanSwift, ConEst, and Trimble solutions for consistent results. Our efficient processes deliver detailed takeoffs in as little as 24 hours without compromising quality. All estimates are based on current, location-specific cost databases that reflect real market conditions, backed by our team of CSI-certified estimators who bring institutional knowledge to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
              Streamlined Process for Maximum Efficiency
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="font-bold mb-2">Step 1: Project Submission</h3>
              <p>Submit drawings and specifications through our secure online portal</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="font-bold mb-2">Step 2: Scope Review & Quotation</h3>
              <p>Receive detailed service quote with delivery timeline</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="font-bold mb-2">Step 3: Professional Takeoff Execution</h3>
              <p>Certified estimators perform comprehensive quantity analysis</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="font-bold mb-2">Step 4: Quality Assurance & Delivery</h3>
              <p>Rigorous quality control before delivery in your preferred format</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
              Begin Your Project Success Journey Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Transform your construction estimating process with EstimatingHub's professional quantity takeoff services. Contact our experts to achieve greater accuracy, efficiency, and profitability.
            </p>
            <div className="mb-4 text-lg font-semibold">New Client Special: 25% Off Your First Takeoff Service</div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-construction-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center"
              >
                Submit Your Project Plans <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="mt-8 text-lg text-white/80">
              <div>Submit Your Project Plans - Upload drawings through our secure portal for immediate processing</div>
              <div>Receive Your Custom Quote - Get detailed service proposal within 2 hours</div>
              <div>Get Your Professional Takeoff - Receive comprehensive takeoff in Excel format within agreed timeframe</div>
              <div className="mt-2 font-bold">Start your next project with confidence – partner with EstimatingHub today.</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ChatWidget />
      <BackToTop />
    </div>
  );
};

export default QuantityTakeoffServices;
