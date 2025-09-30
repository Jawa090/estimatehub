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
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">Professional Commercial Construction Estimating Services</h1>
          <p className="text-xl mb-4 opacity-90">
            The commercial and residential sectors of the construction industry each require precise estimating services to ensure project viability and success. For commercial projects, this is especially critical due to the significant capital investment involved. Accurate commercial estimating services not only provide a clear financial outlook but also offer crucial timelines for project completion, helping general contractors and cost estimators stay on track.
          </p>
          <p className="text-xl mb-8 opacity-90">
            At Estimating Hub Platform, we understand the complexities of commercial projects. Our services are designed to help you mitigate risks and significantly reduce expenses.
          </p>
          <Link to="/contact" className="inline-block mt-2 bg-construction-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition flex items-center justify-center">
            Contact us today for a free consultation <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-12 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
              <img src="/4.jpg" alt="Commercial estimating image 1" className="w-full h-64 object-cover rounded-md ring-1 ring-white/30" />
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
              <img src="/5.jpg" alt="Commercial estimating image 2" className="w-full h-64 object-cover rounded-md ring-1 ring-white/30" />
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
              <img src="/6.jpg" alt="Commercial estimating image 3" className="w-full h-64 object-cover rounded-md ring-1 ring-white/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Commercial Estimating Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">Why Choose Our Commercial Estimating Services?</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left inline-block mb-6">
            <li>Experienced Team: Our team of seasoned professionals is highly skilled in handling complex commercial projects.</li>
            <li>Latest Technology: We use cutting-edge software and technology to create highly accurate and detailed estimates.</li>
            <li>Comprehensive Service: We provide a full-scope service, ensuring every aspect of your project is meticulously planned.</li>
            <li>Affordable Pricing: Our competitive pricing ensures you receive top-tier service without breaking your budget.</li>
            <li>Client Commitment: We are dedicated to ensuring our clients are completely satisfied with our work.</li>
          </ul>
        </div>
      </section>

      {/* Project Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Key Benefits of Our Commercial Estimating Services</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-2 max-w-3xl mx-auto">
            <li>Accurate Budgets & Bid Accuracy: Our precise estimates help you secure bids and maintain financial control.</li>
            <li>Time & Cost Savings: We help you identify and eliminate unnecessary overheads, improving your profit margins.</li>
            <li>Feasibility & Financial Planning: We provide the data you need for sound financial planning and risk management.</li>
            <li>Enhanced Focus & Efficiency: Our detailed reports allow you to focus on the project itself, confident in your budget and timelines.</li>
            <li>Transparency & Flexibility: Our clear, detailed breakdowns provide full cost transparency and the flexibility to negotiate effectively.</li>
          </ul>
        </div>
      </section>

      {/* Commercial Estimation Portfolio */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">Our Commercial Estimation Portfolio</h2>
          <p className="text-lg text-gray-700 mb-6">Our commercial estimating services involve gathering data, analyzing project requirements, and creating detailed cost breakdowns. We use our expertise to foresee potential challenges and ensure all resources are appropriately allocated. We provide comprehensive estimates for a wide range of commercial projects, including:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Office Buildings</li>
              <li>Retail Spaces</li>
              <li>Hotels & Motels</li>
              <li>Multi-use Developments</li>
            </ul>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Healthcare Facilities</li>
              <li>Educational Buildings</li>
              <li>Restaurants & Entertainment Venues</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">Ready to get a precise estimate for your next commercial project?</h2>
          <p className="text-lg text-gray-700 mb-6">Get a free quote now!</p>
          <div className="flex justify-center">
            <a href="/contact" className="bg-construction-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition flex items-center justify-center"><Phone className="h-5 w-5 mr-2" />Get Free Quote</a>
          </div>
        </div>
      </section>

      {/* (Optional) Additional coverage sections can be reintroduced as needed */}

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