import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, Users, Building, Calculator, Settings, Phone, Mail, ArrowRight, Award, Clock } from "lucide-react";
import { Link } from 'react-router-dom';

const benefits = [
  "Establish realistic preliminary budgets",
  "Assess project feasibility and secure financing",
  "Make go/no-go decisions with confidence",
  "Evaluate design alternatives from a cost perspective",
  "Plan proactively for contingencies and cost control"
];

const servicesOffered = [
  "Pre-Design Cost Analysis",
  "Feasibility Studies",
  "Budget Development",
  "Design Option Cost Comparisons",
  "Cost Risk Analysis",
  "Value Engineering Support"
];

const industriesServed = [
  "Commercial Construction (offices, retail, warehouses, hospitals, education, hotels, entertainment)",
  "Residential Development (single-family, multi-family, luxury, renovations)",
  "Infrastructure & Civil Projects (transportation, utilities, public works, site development)",
  "Specialized & Emerging Sectors (historic preservation, sustainable/LEED, labs, data centers)"
];

const processSteps = [
  { step: 1, title: "Project Discovery", description: "We begin with a detailed consultation to understand your goals, vision, scope, and constraints.", icon: <Users className="h-6 w-6" /> },
  { step: 2, title: "Data Collection", description: "Our team gathers available design inputs, programmatic requirements, and site-specific details.", icon: <FileText className="h-6 w-6" /> },
  { step: 3, title: "Market Analysis", description: "We assess current material prices, labor rates, and regional cost fluctuations relevant to your location.", icon: <Calculator className="h-6 w-6" /> },
  { step: 4, title: "Estimate Development", description: "Using industry-standard tools and cost databases, we build a detailed and structured conceptual estimate.", icon: <Settings className="h-6 w-6" /> },
  { step: 5, title: "Review & Refinement", description: "We walk you through the estimate, validate assumptions, and incorporate feedback as designs evolve.", icon: <CheckCircle className="h-6 w-6" /> },
  { step: 6, title: "Comprehensive Reporting", description: "Final deliverables include detailed line-item breakdowns, assumptions, exclusions, escalation projections, and risk considerations.", icon: <FileText className="h-6 w-6" /> },
];

const accuracyClasses = [
  { className: "Class 5 (±50%)", description: "Early concept; used for high-level feasibility and rough budgeting" },
  { className: "Class 4 (±30%)", description: "Based on schematic designs; suitable for early funding and design direction" },
  { className: "Class 3 (±20%)", description: "Derived from design development documents; ideal for refining project scope and cost validation" }
];

const ConceptualEstimating = () => {
  return (
    <div className="antialiased">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">Conceptual Estimating Services</h1>
          <p className="text-xl mb-8 opacity-90">
            Accurate Cost Forecasting from Vision to Reality<br />
            At Paradise Estimating, we specialize in delivering reliable conceptual estimating services that empower owners, developers, architects, and contractors to make sound financial decisions early in the project lifecycle. Our expert team converts your initial ideas into data-backed cost forecasts enabling you to move forward confidently with realistic budgets and well-informed planning.
          </p>
          <Link to="/contact" className="inline-block mt-4 bg-construction-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition flex items-center justify-center">
            Contact us now for a free consultation <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* What is Conceptual Estimating Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">What is Conceptual Estimating?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Conceptual estimating is the process of generating preliminary cost assessments based on limited design information during the early planning or pre-design phases. These estimates are essential for guiding high-level decisions and ensuring financial alignment before detailed drawings or specifications are developed.
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left inline-block">
            {benefits.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Our Conceptual Estimating Services</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left inline-block">
            {servicesOffered.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Industries We Serve</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left inline-block">
            {industriesServed.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Our Estimating Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Our Estimating Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Why Choose Paradise Estimating?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <Award className="h-6 w-6 text-construction-orange flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700"><b>Proven Experience:</b> Decades of combined industry knowledge and deep understanding of cost modeling across project types and markets.</span>
                </div>
                <div className="flex items-start space-x-4 mb-4">
                  <CheckCircle className="h-6 w-6 text-construction-orange flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700"><b>Methodological Precision:</b> Proven estimation techniques, leading software tools, and current cost databases for accuracy.</span>
                </div>
                <div className="flex items-start space-x-4 mb-4">
                  <Calculator className="h-6 w-6 text-construction-orange flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700"><b>Real-World Cost Awareness:</b> Estimates reflect real market conditions, labor, material trends, code implications, and regional cost drivers.</span>
                </div>
                <div className="flex items-start space-x-4 mb-4">
                  <Users className="h-6 w-6 text-construction-orange flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700"><b>Collaborative Approach:</b> We integrate closely with owners, architects, and engineers to align estimates with design intent and financial constraints.</span>
                </div>
                <div className="flex items-start space-x-4 mb-4">
                  <FileText className="h-6 w-6 text-construction-orange flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700"><b>Full Transparency:</b> Estimates backed by clear logic, documented assumptions, and open communication every step of the way.</span>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-construction-orange flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700"><b>Reliable Turnaround:</b> Streamlined process and dedicated team ensure timely delivery.</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Estimate Accuracy Classifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Estimate Accuracy Classifications</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left inline-block">
            {accuracyClasses.map((item, idx) => (
              <li key={idx}><b>{item.className}:</b> {item.description}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">Start with Confidence</h2>
          <p className="text-lg text-gray-700 mb-4">Turn uncertainty into clarity with our professional conceptual estimating services. Whether you're planning a new development or evaluating a potential investment, Paradise Estimating delivers the financial insight you need to proceed with confidence.</p>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left inline-block mb-6">
            <li>Free initial project consultation</li>
            <li>Customized service proposals</li>
            <li>Flexible engagement options (one-time estimates or ongoing consulting)</li>
          </ul>
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
            <a href="/contact" className="bg-construction-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition flex items-center justify-center"><Phone className="h-5 w-5 mr-2" />Start Your Free Consultation</a>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
      <BackToTop />
    </div>
  );
};

export default ConceptualEstimating; 