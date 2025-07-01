import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, Users, Calculator, Settings, Phone, Mail, ArrowRight, Award, Clock } from "lucide-react";
import { Link } from 'react-router-dom';

const whyHire = [
  "One-on-One Cost Planning: Your dedicated estimator works closely with your team, understanding project nuances and scope changes in real time.",
  "Accurate Takeoffs & Quantity Surveys: Get precise material and labor takeoffs using the latest software and cost databases.",
  "Timely Bid Support: We provide fast turnaround on estimates to help you meet tight deadlines and win competitive bids.",
  "Cost Control Throughout the Lifecycle: From conceptual budgeting to final bidding, our estimators ensure consistent construction budget analysis."
];

const benefits = [
  "Industry-standard accuracy (98%+ on average)",
  "ASTM & AACE compliant estimates",
  "Access to national pricing databases (RSMeans, Craftsman, etc.)",
  "Scalable support for large and complex projects",
  "Full integration with project management and accounting workflows"
];

const strategicAnalysis = [
  "Identify cost-saving opportunities",
  "Evaluate alternative materials or methods (value engineering)",
  "Forecast cash flow and project phasing",
  "Avoid budget overruns and delays"
];

const DedicatedEstimator = () => {
  return (
    <div className="antialiased">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">Dedicated Construction Estimator Services</h1>
          <p className="text-xl mb-8 opacity-90">
            Accurate. Reliable. Project-Ready.<br />
            At Paradise Estimating, our dedicated construction estimator services are designed to give contractors, developers, and architects a competitive edge with precision-focused cost planning. Whether you're in the early concept stage or finalizing your bid, our professional estimators provide detailed, accurate, and timely building cost estimation to help you win more projects and control budgets efficiently.
          </p>
          <Link to="/contact" className="inline-block mt-4 bg-construction-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition flex items-center justify-center">
            Schedule a Free Consultation <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* What is a Dedicated Estimator Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">What is a Dedicated Construction Estimator?</h2>
          <p className="text-lg text-gray-700 mb-6">
            A dedicated construction estimator is a project-focused professional solely committed to delivering detailed cost estimates tailored to your specific project. Unlike generic estimating services, our dedicated model ensures that an estimator is assigned exclusively to your job—understanding your scope, timelines, materials, and cost drivers in depth.
          </p>
        </div>
      </section>

      {/* Why Hire Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Why Hire a Dedicated Construction Estimator from ParadiseEstimating?</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left inline-block">
            {whyHire.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Benefits of Working With a Professional Cost Estimator</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left inline-block">
            {benefits.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Strategic Analysis Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Strategic Construction Budget Analysis</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left inline-block">
            {strategicAnalysis.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Trusted Project Cost Consultant Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">Your Trusted Project Cost Consultant</h2>
          <p className="text-lg text-gray-700 mb-6">
            As your project cost consultant, ParadiseEstimating supports smarter decision-making at every phase of construction. From design development to final procurement, we ensure your financial plan aligns with your construction goals—reducing risk and maximizing return on investment.
          </p>
        </div>
      </section>

      {/* Full-Time Estimating Partner Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">Need a Full-Time Estimating Partner?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Whether you need short-term help or ongoing estimating support, our dedicated construction estimator can step in as your full-time estimating partner—remotely or integrated into your workflow. You get consistent quality, availability, and accountability without the cost of hiring in-house.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">Contact Us Today</h2>
          <p className="text-lg text-gray-700 mb-4">Contact us today to schedule a free consultation with a professional cost estimator.</p>
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
            <a href="/contact" className="bg-construction-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition flex items-center justify-center"><Phone className="h-5 w-5 mr-2" />Schedule a Free Consultation</a>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
      <BackToTop />
    </div>
  );
};

export default DedicatedEstimator; 