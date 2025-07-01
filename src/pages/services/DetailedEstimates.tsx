import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, Users, Building, Calculator, Settings, Phone, Mail, ArrowRight, Award, Clock } from "lucide-react";
import { Link } from 'react-router-dom';

const inclusions = [
  "Itemized Material Takeoffs (with quantity, unit price & total cost)",
  "Labor Hours and Rates by Trade",
  "Equipment Costs (owned or rented)",
  "Subcontractor Allowances (if applicable)",
  "Markups for Overhead & Profit",
  "Contingency & Escalation Calculations",
  "Cost Codes (CSI MasterFormat or client-specific)",
  "Trade-by-Trade Cost Breakdown",
  "Scope Clarifications & Assumptions",
  "Delivery Timeline Based on Project Schedule"
];

const benefits = [
  "Avoid budget overruns and change orders",
  "Improve bid accuracy and win rates",
  "Strengthen client trust with documented costs",
  "Ensure proper funding and resource planning",
  "Reduce disputes during construction"
];

const whoWeServe = [
  "General Contractors & Construction Managers – Bid-ready cost breakdowns for competitive tenders",
  "Subcontractors & Trades – Trade-specific cost visibility to secure more jobs",
  "Developers & Owners – Full budget forecasts to validate contractor quotes",
  "Architects & Engineers – Pre-design cost validation to inform design decisions",
  "Cost Consultants – Outsource detailed takeoffs and pricing with accuracy assurance"
];

const projectTypes = [
  "Residential (custom homes, multifamily, townhouses)",
  "Commercial (office buildings, retail, hotels, warehouses)",
  "Industrial (plants, distribution centers, infrastructure)",
  "Institutional (schools, healthcare, public works)",
  "Renovations & Remodels (interior and structural upgrades)"
];

const processSteps = [
  { step: 1, title: "Submit Drawings & Scope", description: "Upload your architectural/engineering plans and scope of work.", icon: <FileText className="h-6 w-6" /> },
  { step: 2, title: "Receive Quote & Timeline", description: "We'll provide a quote and estimated delivery time.", icon: <Clock className="h-6 w-6" /> },
  { step: 3, title: "Estimate Development", description: "Our team prepares and reviews a full itemized estimate.", icon: <Calculator className="h-6 w-6" /> },
  { step: 4, title: "Client Review & Revisions", description: "We revise as needed based on your feedback.", icon: <Settings className="h-6 w-6" /> },
  { step: 5, title: "Final Delivery", description: "You receive your detailed estimate in Excel, PDF, or your preferred format.", icon: <CheckCircle className="h-6 w-6" /> },
];

const DetailedEstimates = () => {
  return (
    <div className="antialiased">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">Detailed Construction Estimate Services</h1>
          <p className="text-xl mb-8 opacity-90">
            Accurate, Itemized Estimates That Drive Project Success<br />
            At Paradise Estimating, we specialize in delivering detailed construction estimates that provide complete cost transparency and precision across every project phase. Whether you're a general contractor, subcontractor, developer, or architect, our itemized cost breakdowns help you plan smarter, bid with confidence, and avoid costly surprises.
          </p>
          <Link to="/contact" className="inline-block mt-4 bg-construction-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition flex items-center justify-center">
            Request a Free Quote Today <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* What is a Detailed Estimate Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">What Is a Detailed Construction Estimate?</h2>
          <p className="text-lg text-gray-700 mb-6">
            A detailed estimate is a comprehensive cost analysis that breaks down each component of a construction project. From materials and labor to equipment and overhead, we quantify and price every line item based on real-time data, industry standards, and project scope.<br />
            <b>Stop guessing and start building with confidence.</b>
          </p>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">What's Included in Our Detailed Estimate Reports?</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left inline-block">
            {inclusions.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <div className="text-center mt-8">
            <Link to="/contact" className="inline-block bg-construction-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition flex items-center justify-center">
              Get a Line-by-Line Estimate <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Why Choose Paradise Estimating for Detailed Estimates?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <Award className="h-6 w-6 text-construction-orange flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700"><b>98% Accuracy Rate:</b> Backed by a proven estimation process and 12,000+ completed takeoffs</span>
                </div>
                <div className="flex items-start space-x-4 mb-4">
                  <Clock className="h-6 w-6 text-construction-orange flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700"><b>Fast Turnaround:</b> Receive your detailed estimate within 24–48 hours (depending on scope)</span>
                </div>
                <div className="flex items-start space-x-4 mb-4">
                  <CheckCircle className="h-6 w-6 text-construction-orange flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700"><b>ASTM-Compliant Estimates:</b> We follow industry-standard practices for consistency and reliability</span>
                </div>
                <div className="flex items-start space-x-4 mb-4">
                  <Settings className="h-6 w-6 text-construction-orange flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700"><b>Tailored to Your Needs:</b> Estimates built specifically for bidding, budgeting, value engineering, or change orders</span>
                </div>
                <div className="flex items-start space-x-4 mb-4">
                  <Calculator className="h-6 w-6 text-construction-orange flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700"><b>Software-Driven Precision:</b> We use Bluebeam, Planswift, RSMeans, CostWorks, and Excel for efficient estimating</span>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="h-6 w-6 text-construction-orange flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700"><b>National Coverage:</b> Serving contractors and developers across the USA</span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Link to="/contact" className="inline-block bg-construction-blue hover:bg-blue-800 text-white font-bold py-3 px-8 rounded transition flex items-center justify-center">
              Schedule Your Free Consultation <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Who We Serve</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left inline-block">
            {whoWeServe.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p className="text-lg text-gray-700 mt-8 text-center">No matter your role, we have the estimate you need.</p>
          <div className="text-center mt-8">
            <Link to="/contact" className="inline-block bg-construction-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition flex items-center justify-center">
              Talk to an Expert Estimator Now <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Types of Projects We Estimate</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left inline-block">
            {projectTypes.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p className="text-lg text-gray-700 mt-8 text-center">From ground-up builds to interior upgrades—get an estimate that works.</p>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Our Process: How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="bg-construction-orange text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">{step.step}</div>
                  <div className="text-construction-orange mb-2 flex justify-center">{step.icon}</div>
                  <h3 className="text-lg font-semibold text-construction-darkGray mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/contact" className="inline-block bg-construction-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition flex items-center justify-center">
              Upload Your Plans <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Benefits of a Detailed Estimate</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left inline-block">
            {benefits.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">Get Started with Paradise Estimating</h2>
          <p className="text-lg text-gray-700 mb-4">Whether you're preparing for a project bid, assessing feasibility, or controlling costs, our detailed estimating services give you the data-driven insights to move forward with confidence.</p>
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
            <a href="/contact" className="bg-construction-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition flex items-center justify-center"><Phone className="h-5 w-5 mr-2" />Contact Paradise Estimating Today</a>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
      <BackToTop />
    </div>
  );
};

export default DetailedEstimates; 