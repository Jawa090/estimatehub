import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from 'react-router-dom';

const whyChoose = [
  "Unmatched Accuracy & Detail: Meticulous analysis of every project aspect using advanced takeoff software and databases.",
  "Industry Expertise Across All Sectors: 15+ years of experience with projects from retail buildouts to large commercial complexes.",
  "Technology-Driven Solutions: Latest estimating software and digital tools for accuracy and efficiency.",
  "Competitive Turnaround Times: Fast, detailed estimates so you can refine bids and pursue more opportunities."
];

const projectExpertise = [
  {
    title: "Retail & Shopping Centers",
    items: [
      "Shopping malls and plazas",
      "Standalone retail stores",
      "Restaurants and food service facilities",
      "Convenience stores and gas stations"
    ]
  },
  {
    title: "Healthcare Facilities",
    items: [
      "Hospitals and medical centers",
      "Outpatient clinics",
      "Senior living facilities",
      "Specialized medical facilities"
    ]
  },
  {
    title: "Educational Institutions",
    items: [
      "Schools and universities",
      "Training centers",
      "Libraries and research facilities",
      "Student housing complexes"
    ]
  },
  {
    title: "Commercial / Office Projects",
    items: [
      "Office buildings and corporate headquarters",
      "Mixed-use towers and developments",
      "Technology parks and innovation centers",
      "Business complexes and coworking spaces"
    ]
  },
  {
    title: "Industrial & Warehouse",
    items: [
      "Manufacturing facilities",
      "Distribution centers",
      "Cold storage facilities",
      "Logistics hubs"
    ]
  },
  {
    title: "Hospitality & Entertainment",
    items: [
      "Hotels and resorts",
      "Entertainment venues",
      "Convention centers",
      "Sports facilities"
    ]
  },
  {
    title: "Specialized Commercial",
    items: [
      "Data centers",
      "Financial institutions",
      "Religious buildings",
      "Automotive facilities"
    ]
  }
];

const comprehensiveServices = [
  {
    title: "Bid Preparation & Competitive Analysis",
    description: "Transform your bidding strategy with our detailed bid estimates. We analyze project specifications, local market conditions, and competitor positioning to help you submit winning bids that maintain healthy profit margins.",
    items: [
      "Complete material takeoffs",
      "Labor cost analysis",
      "Equipment and subcontractor pricing",
      "Overhead and profit calculations",
      "Risk assessment and contingency planning"
    ]
  },
  {
    title: "Specialized Commercial / Office Project Services",
    description: "Shell & Core and Fit-Out Estimating Separations: Distinct estimates for shell & core construction and tenant fit-out work. Trade Package Breakdown & Coordination: Detailed analysis for all essential commercial office components.",
    items: [
      "Partition systems and demising walls",
      "HVAC systems and controls",
      "Glazing and curtain wall systems",
      "Electrical and low-voltage systems",
      "Flooring and ceiling installations",
      "Security and access control systems"
    ]
  },
  {
    title: "Investment Planning & Financial Analysis",
    description: "Support your investment decisions with comprehensive preliminary and detailed cost estimates. Accurate financial projections for multi-phase development, mixed-use, technology parks, and repositioning projects."
  },
  {
    title: "Change Order Management for Phased Builds",
    description: "Track cost impacts across different project phases, ensuring accurate financial control throughout your development timeline."
  },
  {
    title: "Value Engineering Session Support",
    description: "Collaborative value engineering expertise to identify cost optimization opportunities while maintaining function and aesthetics."
  },
  {
    title: "Historical Data Benchmarking",
    description: "Leverage our extensive database of commercial project costs for accurate benchmarking and budget validation."
  },
  {
    title: "Preliminary & Feasibility Studies",
    description: "Get accurate project cost projections early in the development process to evaluate viability and secure financing."
  },
  {
    title: "Value Engineering Solutions",
    description: "Maximize value while controlling costs through comprehensive value engineering analysis."
  },
  {
    title: "Change Order Estimation",
    description: "Navigate project changes efficiently with rapid, accurate pricing for modifications."
  }
];

const technology = [
  {
    title: "Digital Takeoff Tools",
    items: [
      "Planswift for comprehensive quantity takeoffs",
      "Bluebeam for collaborative document management",
      "On-Screen Takeoff for precise measurements"
    ]
  },
  {
    title: "Cost Databases",
    items: [
      "RS Means for reliable pricing data",
      "Regional cost databases for local accuracy",
      "Historical project data for trend analysis"
    ]
  },
  {
    title: "Project Management",
    items: [
      "Cloud-based collaboration platforms",
      "Real-time project tracking",
      "Automated reporting systems"
    ]
  }
];

const csiDivisions = [
  "Division 00: Procurement and Contracting Requirements",
  "Division 01: General Requirements",
  "Division 02: Existing Conditions",
  "Division 03: Concrete",
  "Division 04: Masonry",
  "Division 05: Metals",
  "Division 06: Wood, Plastics, and Composites",
  "Division 07: Thermal and Moisture Protection",
  "Division 08: Openings",
  "Division 09: Finishes",
  "Division 10: Specialties",
  "Division 11: Equipment",
  "Division 12: Furnishings",
  "Division 13: Special Construction",
  "Division 14: Conveying Equipment",
  "Division 21-28: Fire Suppression, Plumbing, HVAC, Electrical, Electronic Safety & Security, Earthwork, Utilities, Transportation"
];

const Commercial = () => {
  return (
    <div className="antialiased">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">Commercial Construction Estimating Services</h1>
          <p className="text-xl mb-8 opacity-90">
            Expert Commercial Estimating Solutions<br />
            At Paradise Estimating, we understand that accurate commercial construction estimates are the foundation of profitable projects. Our team of certified estimators combines decades of industry experience with cutting-edge technology to deliver precise, comprehensive estimates that help you win more bids and maximize profitability.
          </p>
          <Link to="/contact" className="inline-block mt-4 bg-construction-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition flex items-center justify-center">
            Contact us today for a free consultation <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">Why Choose Paradise Estimating for Commercial Construction?</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left inline-block mb-6">
            {whyChoose.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Project Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Our Commercial Project Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectExpertise.map((sector, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-construction-blue mb-2">{sector.title}</h3>
                  <ul className="list-disc list-inside text-gray-700 text-base space-y-1">
                    {sector.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Comprehensive Commercial Estimating Services</h2>
          <div className="space-y-10">
            {comprehensiveServices.map((service, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-semibold text-construction-blue mb-2">{service.title}</h3>
                <p className="text-gray-700 mb-2">{service.description}</p>
                {service.items && (
                  <ul className="list-disc list-inside text-gray-700 text-base space-y-1 mb-4">
                    {service.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Technology & Software Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Advanced Technology & Software</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technology.map((tech, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-construction-blue mb-2">{tech.title}</h3>
                  <ul className="list-disc list-inside text-gray-700 text-base space-y-1">
                    {tech.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CSI Division Coverage Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">Complete CSI Division Coverage</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left inline-block mb-6">
            {csiDivisions.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">Ready to Win More Commercial Bids?</h2>
          <p className="text-lg text-gray-700 mb-4">Don't let inaccurate estimates cost you profitable projects. Partner with Paradise Estimating and experience the difference that professional, precise commercial construction estimating makes.</p>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left inline-block mb-6">
            <li>Free Initial Consultation: Discuss your project needs with our experts</li>
            <li>Quick Turnaround: Most estimates delivered within 24-48 hours</li>
            <li>Competitive Pricing: Transparent, value-based pricing structure</li>
            <li>Satisfaction Guarantee: We stand behind every estimate we provide</li>
          </ul>
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
            <a href="/contact" className="bg-construction-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition flex items-center justify-center"><Phone className="h-5 w-5 mr-2" />Get Started Today</a>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
      <BackToTop />
    </div>
  );
};

export default Commercial; 