import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle, 
  Calculator, 
  Building, 
  FileText, 
  Users, 
  Clock, 
  Target, 
  Shield, 
  Zap, 
  Award,
  Phone,
  Mail,
  ArrowRight,
  Hammer,
  Wrench,
  HardHat,
  Ruler,
  Settings,
  Home,
  Palette,
  Truck,
  Lightbulb,
  Droplets,
  Thermometer,
  Paintbrush,
  Layers,
  GanttChart,
  DollarSign,
  TrendingUp,
  Star
} from "lucide-react";

const QuantityTakeoffServices = () => {
  const csiDivisions = [
    { name: "Structural Trades", icon: <Building className="h-6 w-6" /> },
    { name: "Enclosure Systems", icon: <Shield className="h-6 w-6" /> },
    { name: "MEP Specialties", icon: <Settings className="h-6 w-6" /> },
    { name: "Site Work Takeoff", icon: <Truck className="h-6 w-6" /> },
    { name: "Roofing Takeoff", icon: <Layers className="h-6 w-6" /> },
    { name: "HVAC Takeoff", icon: <Thermometer className="h-6 w-6" /> },
    { name: "Masonry Takeoff", icon: <Hammer className="h-6 w-6" /> },
    { name: "Lumber Takeoff", icon: <Ruler className="h-6 w-6" /> },
    { name: "Plumbing Takeoff", icon: <Droplets className="h-6 w-6" /> },
    { name: "Concrete Takeoff", icon: <Building className="h-6 w-6" /> },
    { name: "Millwork Takeoff", icon: <Wrench className="h-6 w-6" /> },
    { name: "Electrical Takeoff", icon: <Lightbulb className="h-6 w-6" /> },
    { name: "Drywall Takeoff", icon: <Layers className="h-6 w-6" /> },
    { name: "Cabinet Takeoff", icon: <HardHat className="h-6 w-6" /> },
    { name: "Mechanical Takeoff", icon: <Settings className="h-6 w-6" /> },
    { name: "Painting Takeoff", icon: <Paintbrush className="h-6 w-6" /> },
    { name: "Insulation Takeoff", icon: <Layers className="h-6 w-6" /> },
    { name: "Structural Steel Takeoff", icon: <Building className="h-6 w-6" /> },
    { name: "Door/Window Takeoff", icon: <Home className="h-6 w-6" /> }
  ];

  const clientSolutions = [
    {
      title: "Developers",
      subtitle: "Minimize Financial Risk & Maximize Project Viability",
      icon: <TrendingUp className="h-8 w-8" />,
      features: [
        "Accurate cost breakdowns for material and labor to evaluate project viability",
        "Square footage-based estimates to project costs and stay on budget",
        "Risk-free preliminary estimates that help secure financing and prevent unexpected expenses"
      ]
    },
    {
      title: "General Contractors",
      subtitle: "Eliminate Bid Uncertainty & Lock in Profits",
      icon: <HardHat className="h-8 w-8" />,
      features: [
        "Precise, trade-specific takeoffs for a variety of trades (site work, concrete, finishes, etc.)",
        "Bid-ready reports delivered quickly, meeting your deadlines and presenting accurate data",
        "Sourcing support to ensure you get the best material pricing and avoid over-budgeting"
      ]
    },
    {
      title: "Subcontractors",
      subtitle: "Bid Faster & Win More",
      icon: <Zap className="h-8 w-8" />,
      features: [
        "Trade-specific takeoffs delivered in 24hrs, including HVAC, electrical, plumbing, etc.",
        "Material waste calculations to help you order precisely what you need, preventing overstocking",
        "Bid-ready packaging with organized QTO reports that make your proposals stand out"
      ]
    },
    {
      title: "Homeowners",
      subtitle: "No More Contractor Markup Surprises",
      icon: <Home className="h-8 w-8" />,
      features: [
        "Owner-direct takeoffs with clear, transparent breakdowns of material and labor costs",
        "Realistic project estimates that fit your budget and prevent surprises",
        "Plain-English cost reports that break down every detail of your project"
      ]
    },
    {
      title: "Architects",
      subtitle: "Design Confidently Within Budget",
      icon: <Palette className="h-8 w-8" />,
      features: [
        "Accurate material quantification during schematic design to align costs with your vision",
        "Cost-efficient solutions that help prevent over-specifications before the construction drawings",
        "Feasibility reports to present to clients, ensuring that design goals align with budget constraints"
      ]
    },
    {
      title: "Vendors",
      subtitle: "Maximize Sales with Precise Material Quantities",
      icon: <Truck className="h-8 w-8" />,
      features: [
        "Providing precise material quantities to clients, reducing waste and ensuring efficiency",
        "Optimizing purchasing decisions with accurate cost data for clients to minimize over-ordering",
        "Building strong vendor-client relationships through reliable and transparent takeoffs"
      ]
    }
  ];

  const benefits = [
    { title: "Cost-Effective Solutions", description: "We offer high-quality, tailored services to fit every project budget.", icon: <DollarSign className="h-6 w-6" /> },
    { title: "Accuracy Guaranteed", description: "We use the latest software and industry knowledge to ensure precise estimates.", icon: <Target className="h-6 w-6" /> },
    { title: "Quick Turnaround", description: "Get your takeoffs in as little as 24 hours for fast-moving projects.", icon: <Clock className="h-6 w-6" /> },
    { title: "Precise Cost Database", description: "Our estimates are based on a comprehensive, location-specific cost database for materials and labor.", icon: <FileText className="h-6 w-6" /> },
    { title: "Proven Expertise", description: "Our team of CSI-certified estimators ensures that every estimate is double-checked for accuracy and reliability.", icon: <Award className="h-6 w-6" /> }
  ];

  const processSteps = [
    { step: "1", title: "Submit Your Drawing Plans", description: "Send your plans via email or through our dedicated portal.", icon: <FileText className="h-6 w-6" /> },
    { step: "2", title: "Receive a Personalized Quote", description: "We'll review your plans and provide a detailed quote based on project scope.", icon: <Calculator className="h-6 w-6" /> },
    { step: "3", title: "Receive Your Detailed Estimate", description: "After payment, you'll receive a fully organized estimate in Excel format.", icon: <CheckCircle className="h-6 w-6" /> }
  ];

  return (
    <div className="antialiased">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Comprehensive Quantity Takeoff Services
            </h1>
            <p className="text-xl mb-8 opacity-90">
              At Paradise Estimating, we offer precise and reliable quantity takeoff services for contractors, developers, architects, and homeowners. Our skilled estimators leverage cutting-edge software and industry expertise to provide quick and accurate material takeoffs and labor estimates.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Calculator className="h-5 w-5 mr-2" />
                <span>Precise Calculations</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Clock className="h-5 w-5 mr-2" />
                <span>24hr Turnaround</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Award className="h-5 w-5 mr-2" />
                <span>10+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
              Unmatched Industry Experience and Expertise
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              With over 10 years of experience in the estimating industry, Paradise Estimating has successfully assisted a wide range of clients in various sectors. Whether you are managing a large-scale commercial project or a custom residential build, we have the expertise and resources to handle every aspect of your project. Our team understands the unique needs of each client and tailors our services accordingly.
            </p>
          </div>
        </div>
      </section>

      {/* CSI Divisions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
              Expert Quantity Takeoff Solutions Across Every CSI Division
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              At Paradise Estimating, we cover all CSI divisions to ensure every aspect of your project is precisely estimated. Whether it's structural trades, enclosure systems, or MEP specialties, our team is equipped to handle the complexities of each division.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {csiDivisions.map((division, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="text-construction-orange mb-4 flex justify-center">
                    {division.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-construction-darkGray">
                    {division.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              We ensure that every project phase, from site work to advanced MEP systems, is covered with precision. Whether you're dealing with complex structural steel or cutting-edge HVAC installations, our expertise guarantees that your takeoffs are comprehensive and accurate.
            </p>
          </div>
        </div>
      </section>

      {/* Client Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
              Client-Centric Solutions Tailored to Your Needs
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              At Paradise Estimating, we understand that each client and project is unique. That's why we provide tailored solutions to address the specific challenges faced by different professionals within the construction industry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {clientSolutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="text-construction-orange flex-shrink-0">
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-construction-blue mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-lg font-semibold text-construction-orange mb-4">
                        {solution.subtitle}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-construction-orange flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
              Why Choose Paradise Estimating for Quantity Takeoff Services?
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Outsourcing your quantity takeoff services to Paradise Estimating offers a variety of benefits:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="text-construction-orange mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-construction-blue mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
              Streamlined Process for Quick and Accurate Estimates
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our process is designed to get you the accurate estimates you need as quickly as possible:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-construction-orange text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <div className="text-construction-orange mb-4 flex justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-construction-blue mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
              Get Started Today with Paradise Estimating
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Ready to streamline your estimating process and get the most accurate takeoffs? Contact us today to get started and receive 30% off your first estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-construction-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                Contact Us Today
              </a>
              <a 
                href="mailto:contact@constructionoutsourcing.com" 
                className="bg-white text-construction-blue hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center"
              >
                <Mail className="h-5 w-5 mr-2" />
                Send Plans
              </a>
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
