import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import BackToTop from '@/components/BackToTop';
import { ArrowRight, Calculator, Target, Clock, Database, CheckCircle, Building, Wrench, HardHat } from "lucide-react";
import { Link } from 'react-router-dom';

const QuantityTakeoffServices = () => {
  return (
    <div className="antialiased">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Professional Quantity Takeoff Services - The Cornerstone of Construction Excellence
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Quantity takeoffs are the cornerstone of effective construction project management. As the foundation for accurate cost estimates, they are essential for proper planning and resource allocation. Our quantity takeoff services are designed to give contractors, subcontractors, and developers the tools they need to create precise cost estimates, set realistic timelines, and win more bids.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-construction-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
            >
              Get a Free Quote Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                  What Are Quantity Takeoffs?
                </h2>
                <div className="w-24 h-1 bg-construction-orange mb-6"></div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  A construction takeoff provides a detailed list of the materials, labor, and equipment needed for a project, ensuring every resource is accounted for and appropriately budgeted. We use a wide range of advanced tools to deliver reliable results with a standard 48-hour turnaround time.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-construction-blue mb-4">The Purpose of a Quantity Takeoff</h3>
                  <p className="text-gray-700 mb-4">
                    A quantity takeoff is a detailed breakdown of a project's required materials, measured by:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Count:</strong> The exact number of items (e.g., light fixtures, doors)</li>
                    <li><strong>Length:</strong> Measurements for linear materials like cables, pipes, and lumber</li>
                    <li><strong>Area:</strong> The surface coverage of materials such as flooring or roofing</li>
                    <li><strong>Volume:</strong> Crucial for materials like concrete or asphalt, representing the space they occupy</li>
                  </ul>
                  <p className="text-gray-700 mt-4 italic">
                    This meticulous approach ensures a solid foundation for your project's financial planning.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-construction-blue to-construction-lightBlue rounded-lg p-8 text-white">
                <div className="text-center">
                  <div className="bg-white/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-7H3v2h16V4zm0 14H3v2h16v-2z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">48-Hour Standard Turnaround</h3>
                  <p className="text-lg opacity-90">
                    We pride ourselves on being a market leader in turnaround times. While complexity can vary, most takeoffs are delivered in less than 48 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="bg-gradient-to-br from-construction-blue to-construction-lightBlue text-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-lg opacity-90">Projects Completed</div>
              </div>
              <div className="bg-gradient-to-br from-construction-orange to-orange-600 text-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl font-bold mb-2">48hr</div>
                <div className="text-lg opacity-90">Standard Turnaround</div>
              </div>
              <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl font-bold mb-2">99%</div>
                <div className="text-lg opacity-90">Accuracy Rate</div>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-lg opacity-90">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Quantity Takeoff Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                Why Choose Our Quantity Takeoff Services?
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                When you partner with us, you're not just getting a service—you're getting a commitment to quality and accuracy. We have helped countless clients with both commercial and residential projects, allowing them to focus on their business and add value to their projects.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-construction-orange rounded-full p-3 mr-4">
                    <Calculator className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-construction-blue">Cost-Effective Solutions</h3>
                </div>
                <p className="text-gray-700">
                  Our services help you reduce overhead costs and boost your profit margins by providing meticulous estimates tailored to your project's complexity.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-construction-orange rounded-full p-3 mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-construction-blue">Unmatched Accuracy</h3>
                </div>
                <p className="text-gray-700">
                  Our extensive database of completed projects and commitment to detail ensure highly accurate takeoffs, giving you the confidence to secure bids.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-construction-orange rounded-full p-3 mr-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-construction-blue">Fast Turnaround</h3>
                </div>
                <p className="text-gray-700">
                  We pride ourselves on being a market leader in turnaround times. While complexity can vary, most takeoffs are delivered in less than 48 hours.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-construction-orange rounded-full p-3 mr-4">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-construction-blue">Comprehensive Cost Database</h3>
                </div>
                <p className="text-gray-700">
                  By leveraging pricing data from previously completed projects, we can extrapolate costs with high precision, ensuring your estimates are as accurate as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Range of Quantity Takeoff Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
              Our Range of Quantity Takeoff Services
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              We offer a full suite of quantity takeoff services for a wide variety of trades, ensuring we can meet the unique needs of your project.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-construction-blue to-construction-lightBlue text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <HardHat className="w-8 h-8 mr-3" />
                  <h3 className="text-xl font-bold">Site Work</h3>
                </div>
                <p className="opacity-90">Earthwork, excavation, grading, and site preparation takeoffs</p>
              </div>

              <div className="bg-gradient-to-br from-construction-orange to-orange-600 text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Building className="w-8 h-8 mr-3" />
                  <h3 className="text-xl font-bold">Concrete & Masonry</h3>
                </div>
                <p className="opacity-90">Concrete, masonry, stonework, and structural takeoffs</p>
              </div>

              <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Wrench className="w-8 h-8 mr-3" />
                  <h3 className="text-xl font-bold">Lumber & Framing</h3>
                </div>
                <p className="opacity-90">Structural framing, lumber, and wood construction takeoffs</p>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Wrench className="w-8 h-8 mr-3" />
                  <h3 className="text-xl font-bold">Plumbing & Electrical</h3>
                </div>
                <p className="opacity-90">MEP systems, plumbing, electrical, and utility takeoffs</p>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Wrench className="w-8 h-8 mr-3" />
                  <h3 className="text-xl font-bold">HVAC (Mechanical)</h3>
                </div>
                <p className="opacity-90">Heating, ventilation, air conditioning, and mechanical takeoffs</p>
              </div>

              <div className="bg-gradient-to-br from-red-600 to-red-700 text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Building className="w-8 h-8 mr-3" />
                  <h3 className="text-xl font-bold">Roofing</h3>
                </div>
                <p className="opacity-90">Roofing systems, waterproofing, and roofing material takeoffs</p>
              </div>

              <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Building className="w-8 h-8 mr-3" />
                  <h3 className="text-xl font-bold">Doors, Windows & Millwork</h3>
                </div>
                <p className="opacity-90">Doors, windows, millwork, and architectural elements takeoffs</p>
              </div>

              <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Wrench className="w-8 h-8 mr-3" />
                  <h3 className="text-xl font-bold">Finishing</h3>
                </div>
                <p className="opacity-90">Painting, drywall, insulation, and interior finishing takeoffs</p>
              </div>

              <div className="bg-gradient-to-br from-gray-600 to-gray-700 text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-8 h-8 mr-3" />
                  <h3 className="text-xl font-bold">And More!</h3>
                </div>
                <p className="opacity-90">Specialty trades and custom takeoff services as needed</p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
                Our comprehensive range of quantity takeoff services ensures that every aspect of your construction project is accurately measured and costed. From initial site preparation to final finishing touches, we provide the detailed analysis you need for successful project execution.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-construction-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
              >
                Get a Free Quote Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
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
              Ready to Get a Precise Material Takeoff for Your Next Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Transform your construction estimating process with EstimatingHub's professional quantity takeoff services. Our 48-hour standard turnaround and comprehensive cost database ensure you get the accuracy and speed you need to win more bids.
            </p>
            <div className="mb-8">
              <Link
                to="/contact"
                className="bg-construction-orange hover:bg-orange-600 text-white px-12 py-6 rounded-lg font-semibold text-xl transition-colors duration-300 flex items-center justify-center mx-auto max-w-sm"
              >
                Get a Free Quote Now <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-2xl font-bold mb-2">48-Hour</div>
                <div className="text-lg opacity-90">Standard Turnaround</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-2xl font-bold mb-2">100%</div>
                <div className="text-lg opacity-90">Accuracy Guarantee</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-2xl font-bold mb-2">Free</div>
                <div className="text-lg opacity-90">Initial Quote</div>
              </div>
            </div>
            <div className="mt-8 text-lg text-white/80">
              <p className="font-bold mb-4">Why Choose Our Quantity Takeoff Services?</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
                <div>✓ Cost-effective solutions that boost profit margins</div>
                <div>✓ Unmatched accuracy with extensive project database</div>
                <div>✓ Fast turnaround - market leader in delivery times</div>
                <div>✓ Comprehensive coverage of all construction trades</div>
              </div>
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
