import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Phone, Award, CheckCircle, FileText, Building, Users, Settings, Clock } from "lucide-react";
import { Link } from 'react-router-dom';

const services = [
  "Budget Estimates Aligned with Government Cost Limits",
  "Multi-Stage Cost Planning (SD, DD, CD, Pre-Tender)",
  "Bills of Quantities (BOQ) & Tender Documentation",
  "Variation Estimates & Valuations for Audit Compliance",
  "Life Cycle Cost Analysis (CAPEX + OPEX Focus)",
  "Schedule of Rates (SOR) for Framework Contracts"
];

const projectExpertise = [
  {
    title: "School Construction Estimating",
    description: "We deliver education-sector estimates that support smart capital planning and regulatory compliance. From schools to universities, our takeoffs account for multi-use spaces, accessibility, and safety systems—all within tight public budgets."
  },
  {
    title: "Hospital & Healthcare Facility Estimating",
    description: "Healthcare projects require highly detailed estimating due to their complex systems and code requirements. Our estimates cover everything from medical gas lines to infection control zones, ensuring cost clarity from schematic design to bid."
  },
  {
    title: "Municipal & Government Building Estimating",
    description: "Whether it's a city hall, fire station, or courthouse, we provide precise cost data for public-use buildings. Our estimates meet procurement transparency standards and are backed by complete documentation ready for public review or audit."
  },
  {
    title: "Infrastructure & Civil Works Estimating",
    description: "We prepare reliable, detailed estimates for infrastructure projects, including roads, bridges, transit systems, and utilities. Our civil estimates include traffic control, excavation, paving, and drainage, all grounded in current DOT pricing and construction practices."
  }
];

const Government = () => {
  return (
    <div className="antialiased">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">Government Construction Estimating Services</h1>
          <p className="text-xl mb-8 opacity-90">
            At Paradise Estimating, we specialize in precise and compliant estimating services for public sector construction projects. With deep experience in government-funded initiatives, we understand the strict protocols, budgetary constraints, and transparency standards required for successful delivery of schools, hospitals, municipal buildings, and infrastructure developments.
          </p>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Our Government Estimating Services</h2>
          <p className="text-lg text-gray-700 mb-8">We offer a full range of services designed specifically for the public sector, ensuring compliance, accuracy, and long-term value.</p>

          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-construction-blue mb-2">Budget Estimates Aligned with Government Cost Limits</h3>
              <p className="text-gray-700">We develop reliable budget estimates that align with funding ceilings set by public agencies. This ensures financial feasibility and helps secure approvals in the early planning stages.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-construction-blue mb-2">Multi-Stage Cost Planning (SD, DD, CD, Pre-Tender)</h3>
              <p className="text-gray-700">From Schematic Design (SD) through to Construction Documents (CD), we prepare detailed cost plans for each design stage. Our progressive estimates allow for controlled design development, risk identification, and strategic budget allocation.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-construction-blue mb-2">Bills of Quantities (BOQ) & Tender Documentation</h3>
              <p className="text-gray-700">Our BOQs and tender documentation comply fully with public procurement standards. We produce structured, transparent documents to support competitive tendering, evaluation fairness, and contractor accountability.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-construction-blue mb-2">Variation Estimates & Valuations for Audit Compliance</h3>
              <p className="text-gray-700">Change is inevitable in construction. We provide clear, justified variation estimates and interim valuations that meet audit trails and reporting standards required by government oversight bodies.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-construction-blue mb-2">Life Cycle Cost Analysis (CAPEX + OPEX Focus)</h3>
              <p className="text-gray-700">Beyond initial construction costs, we offer comprehensive lifecycle cost analysis, accounting for both capital expenditures (CAPEX) and long-term operating costs (OPEX). This ensures public assets are not just affordable to build, but also economical to maintain.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-construction-blue mb-2">Schedule of Rates (SOR) for Framework Contracts</h3>
              <p className="text-gray-700">We prepare custom Schedules of Rates (SOR) tailored to framework and term contracts, enabling standardized pricing, faster procurement, and consistent cost control across long-term public projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project-Specific Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Project-Specific Estimating Expertise</h2>
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-semibold text-construction-blue mb-2">School Construction Estimating</h3>
              <p className="text-gray-700">We deliver education-sector estimates that support smart capital planning and regulatory compliance. From schools to universities, our takeoffs account for multi-use spaces, accessibility, and safety systems—all within tight public budgets.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-construction-blue mb-2">Hospital & Healthcare Facility Estimating</h3>
              <p className="text-gray-700">Healthcare projects require highly detailed estimating due to their complex systems and code requirements. Our estimates cover everything from medical gas lines to infection control zones, ensuring cost clarity from schematic design to bid.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-construction-blue mb-2">Municipal & Government Building Estimating</h3>
              <p className="text-gray-700">Whether it's a city hall, fire station, or courthouse, we provide precise cost data for public-use buildings. Our estimates meet procurement transparency standards and are backed by complete documentation ready for public review or audit.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-construction-blue mb-2">Infrastructure & Civil Works Estimating</h3>
              <p className="text-gray-700">We prepare reliable, detailed estimates for infrastructure projects, including roads, bridges, transit systems, and utilities. Our civil estimates include traffic control, excavation, paving, and drainage, all grounded in current DOT pricing and construction practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">Why Contractors & Agencies Trust Paradise Estimating</h2>
          <p className="text-lg text-gray-700 mb-4">Paradise Estimating offers deep public-sector expertise with accurate, data-driven estimates and fast turnarounds. We ensure full confidentiality through secure file handling and NDAs, providing end-to-end support from design to post-award adjustments.</p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">Ready to Deliver on Your Next Public Project?</h2>
          <p className="text-lg text-gray-700 mb-4">Whether you're bidding on a new school, managing costs on a hospital renovation, or overseeing infrastructure upgrades, Paradise Estimating provides the dependable estimating support you need. Our government construction estimating services ensure compliance, transparency, and cost certainty from concept to completion.</p>
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
            <a href="/contact" className="bg-construction-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition flex items-center justify-center"><Phone className="h-5 w-5 mr-2" />Contact Us Today</a>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
      <BackToTop />
    </div>
  );
};

export default Government; 