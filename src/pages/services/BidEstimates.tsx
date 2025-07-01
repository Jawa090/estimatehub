import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, Users, Building, Calculator, Settings, Phone, Mail, ArrowRight, Award, Clock } from "lucide-react";
import { Link } from 'react-router-dom';

const whoWeServe = [
  "General Contractors",
  "Subcontractors",
  "Home Builders",
  "Remodeling Companies",
  "Developers",
  "Architects & Engineers",
  "Construction Managers"
];

const servicesIncluded = [
  "Material Quantity Takeoffs",
  "Labor & Equipment Costing",
  "Subcontractor Scope Analysis",
  "Preliminary & Final Bid Estimates",
  "CSI Division Format Estimates",
  "Budget Preparation & Cost Control",
  "Value Engineering Options",
  "Bid Review and Comparison Reports"
];

const projectTypes = [
  "Residential Projects",
  "Commercial Construction",
  "Industrial Projects",
  "Institutional Construction",
  "Renovations & Remodels"
];

const whyChooseUs = [
  "98% Accuracy Rate – Trusted by contractors across the U.S. for precise and reliable estimating",
  "12,000+ Projects Estimated – Proven track record across all construction sectors",
  "ASTM Standard Compliance – We adhere to industry-standard estimating protocols",
  "Fast Turnaround Time – Estimates delivered within 24–72 hours based on project size",
  "Affordable Pricing – Flexible packages that fit your budget, without compromising on quality",
  "Confidential & Secure – NDAs and data protection protocols in place for every project"
];

const toolsFormats = [
  "Software: PlanSwift, Bluebeam, RSMeans, Sage Estimating, OST",
  "Deliverables: Excel spreadsheets, PDF reports, CSI MasterFormat estimates",
  "Integration: Estimates tailored to match your internal formats or bid submission requirements"
];

const processSteps = [
  { step: 1, title: "Share Drawings/Specs", description: "Upload your project plans, scope, and bid instructions.", icon: <FileText className="h-6 w-6" /> },
  { step: 2, title: "Get a Quote", description: "We evaluate your requirements and provide a proposal with turnaround time.", icon: <Clock className="h-6 w-6" /> },
  { step: 3, title: "Receive the Estimate", description: "Detailed, well-organized bid estimate ready for submission.", icon: <Calculator className="h-6 w-6" /> },
  { step: 4, title: "Ongoing Support", description: "We assist with revisions, clarifications, and post-bid reviews as needed.", icon: <Settings className="h-6 w-6" /> },
];

const BidEstimates = () => {
  return (
    <div className="antialiased">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">Construction Bid Estimating Services</h1>
          <p className="text-xl mb-8 opacity-90">
            Accurate Bid Estimates That Win Projects<br />
            At Paradise Estimating, we specialize in delivering precise and competitive construction bid estimates that empower contractors, developers, and builders to win profitable projects. Whether you're preparing for a lump sum bid, unit price proposal, or a design-build tender, our detailed estimates are designed to give you a competitive edge while maintaining accuracy, transparency, and cost control.
          </p>
          <Link to="/contact" className="inline-block mt-4 bg-construction-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition flex items-center justify-center">
            Get a Fast, Reliable Bid Estimate <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Who We Serve</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left inline-block">
            {whoWeServe.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p className="text-lg text-gray-700 mt-8 text-center">No matter your role in the construction process, we provide you with the data-driven insights you need to bid smarter and build profitably.</p>
          <div className="text-center mt-8">
            <Link to="/contact" className="inline-block bg-construction-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition flex items-center justify-center">
              Ready to Win More Bids? <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Included Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Our Bid Estimating Services Include</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left inline-block">
            {servicesIncluded.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
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
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Why Choose Paradise Estimating for Bid Estimates?</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left inline-block">
            {whyChooseUs.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tools & Formats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Tools & Formats We Use</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left inline-block">
            {toolsFormats.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">The Process: From Drawings to Winning Bids</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">Get Started with Paradise Estimating Today</h2>
          <p className="text-lg text-gray-700 mb-4">Let Paradise Estimating be your trusted partner in pre-construction success. Our accurate bid estimates help you compete confidently and land more profitable jobs.</p>
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
            <a href="/contact" className="bg-construction-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition flex items-center justify-center"><Phone className="h-5 w-5 mr-2" />Contact Us</a>
            <a href="/contact" className="bg-construction-blue hover:bg-blue-800 text-white font-bold py-3 px-8 rounded transition flex items-center justify-center"><Mail className="h-5 w-5 mr-2" />Upload Your Project Plans</a>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
      <BackToTop />
    </div>
  );
};

export default BidEstimates; 