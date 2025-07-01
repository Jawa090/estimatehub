import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  BarChart3,
  DollarSign,
  FileText,
  Award,
  Clock,
  Settings,
  Phone,
  Mail
} from "lucide-react";

const estimateTypes = [
  { name: "Rough Order of Magnitude (ROM)", accuracy: "-50% to +50%", use: "Initial feasibility and screening" },
  { name: "Ballpark Estimate", accuracy: "-30% to +30%", use: "Internal budgeting and early discussions" },
  { name: "Budget Estimate", accuracy: "-10% to +25%", use: "Pre-design validation and planning" },
  { name: "Definitive Estimate", accuracy: "-5% to +15%", use: "Construction-ready funding decisions" },
];

const processSteps = [
  { step: 1, title: "Upload Your Plans", description: "Submit architectural drawings, sketches, or area schedules via email or our upload portal.", icon: <FileText className="h-6 w-6" /> },
  { step: 2, title: "Cost Model Development", description: "We match your project with comparable historical data from similar completed jobs.", icon: <BarChart3 className="h-6 w-6" /> },
  { step: 3, title: "Adjust for Location and Time", description: "We apply cost modifiers for regional labor, material pricing, inflation, and project timing.", icon: <DollarSign className="h-6 w-6" /> },
  { step: 4, title: "Deliver Itemized Report", description: "A detailed Excel and PDF estimate is delivered within 24 hours.", icon: <CheckCircle className="h-6 w-6" /> },
];

const inclusions = [
  "Square footage pricing by major divisions",
  "Quantity takeoffs for structural, architectural, and MEP systems",
  "Labor, materials, and equipment costs",
  "Linear and area measurements for rooms and components",
  "Recommended contingency allocations",
  "Estimated schedule duration and labor hours",
  "Delivered in Excel and PDF formats (our template or yours)",
];

const benefits = [
  "Securing bank loans or internal funding",
  "Communicating cost constraints with design teams",
  "Managing owner expectations early",
  "Avoiding future cost overruns or scope creep",
  "Comparing alternate design or construction methods",
];

const PreliminaryEstimates = () => {
  return (
    <div className="antialiased">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">Accurate Preliminary / Budget Estimates</h1>
          <p className="text-xl mb-8 opacity-90">
            Preliminary Estimates for 30%, 60%, or 90% Drawings? We Deliver Fast, Reliable Solutions.<br />
            If you're working with incomplete plans, need a quick feasibility check, or are facing supplier delays, Paradise Estimating can help. Our preliminary estimates provide cost insights based on square footage pricing and historical data—empowering you to make informed decisions early in the design phase.
          </p>
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
                  <span className="text-lg text-gray-700"><b>15+ Years of Experience:</b> Specialists in early-stage cost estimates using advanced cost databases, proprietary models, and location-based adjustments.</span>
                </div>
                <div className="flex items-start space-x-4 mb-4">
                  <CheckCircle className="h-6 w-6 text-construction-orange flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700"><b>Certified Estimators:</b> AACE and AIQS credentials, serving contractors, developers, architects, and managers nationwide.</span>
                </div>
                <div className="flex items-start space-x-4 mb-4">
                  <Clock className="h-6 w-6 text-construction-orange flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700"><b>Fast Turnaround:</b> Estimates delivered within 24 hours. 30% off your first estimate + monthly subscription discounts.</span>
                </div>
                <div className="flex items-start space-x-4">
                  <Settings className="h-6 w-6 text-construction-orange flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700"><b>Location-Specific Pricing:</b> Using RSMeans, Craftsman, and proprietary data for regional accuracy.</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What is a Preliminary Estimate Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">What Is a Preliminary Estimate and Why Is It Important?</h2>
          <p className="text-lg text-gray-700 mb-6 text-center">
            A preliminary estimate—also called a feasibility or conceptual estimate—is a high-level cost analysis used in the early stages of a project before detailed designs are complete. These estimates help assess economic feasibility, inform design decisions, and allocate funding effectively. They are typically based on historical project data, adjusted for factors such as time, location, size, and scope.
          </p>
        </div>
      </section>

      {/* Estimate Types Table Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-2xl font-bold mb-4 text-construction-blue text-center">Comparison of Estimate Types and Accuracy</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-left">Estimate Type</th>
                  <th className="py-2 px-4 border-b text-left">Accuracy Range</th>
                  <th className="py-2 px-4 border-b text-left">Primary Use Case</th>
                </tr>
              </thead>
              <tbody>
                {estimateTypes.map((type, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="py-2 px-4">{type.name}</td>
                    <td className="py-2 px-4">{type.accuracy}</td>
                    <td className="py-2 px-4">{type.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-700 mt-4">Paradise Estimating specializes in ROM, Ballpark, and Budget Estimates, ideal for conceptual and schematic phases.</p>
        </div>
      </section>

      {/* Our Estimating Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Our Estimating Process</h2>
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

      {/* What's Included Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">What's Included in Our Preliminary Estimate?</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            {inclusions.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* How Our Estimates Help Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">How Our Estimates Help You</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            {benefits.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p className="text-lg text-gray-700 mt-8 text-center">We make it easier to answer key questions before full designs are complete.</p>
        </div>
      </section>

      {/* Trusted by Industry Professionals Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">Trusted by Industry Professionals Nationwide</h2>
          <p className="text-lg text-gray-700 mb-4">With over 500 preliminary estimates completed across commercial, residential, retail, and institutional projects, Paradise Estimating supports clients across all 50 states. We bring proven methodologies and trusted data to every project.</p>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left inline-block">
            <li>Over 15 years in the construction and design industry</li>
            <li>Certified by AACE (Association for the Advancement of Cost Engineering) and AIQS</li>
            <li>Regionalized pricing available in all major U.S. markets</li>
            <li>Local insights for projects in Los Angeles, New York City, Atlanta, Dallas, and more</li>
          </ul>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">Call Now and Claim Your Discount</h2>
          <p className="text-lg text-gray-700 mb-4">Get 30% off your first estimate and access monthly subscription discounts. Ready to get started? Request a quote or contact us today!</p>
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
            <a href="/contact" className="bg-construction-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition flex items-center justify-center"><Phone className="h-5 w-5 mr-2" />Request a Quote</a>
            <a href="/contact" className="bg-construction-blue hover:bg-blue-800 text-white font-bold py-3 px-8 rounded transition flex items-center justify-center"><Mail className="h-5 w-5 mr-2" />Contact Us</a>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
      <BackToTop />
    </div>
  );
};

export default PreliminaryEstimates; 