import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  Calculator, 
  Building, 
  FileText, 
  Clock, 
  Target, 
  Shield, 
  Zap, 
  Award,
  Phone,
  Mail,
  Upload,
  TrendingUp,
  HardHat,
  Wrench,
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
  DollarSign,
  Star,
  Users,
  GanttChart,
  FileCheck,
  RefreshCw,
  Database,
  Headphones,
  ArrowRight,
  Download,
  CheckSquare,
  Timer,
  FileSpreadsheet
} from "lucide-react";

const MasonryTakeoffServices = () => {
  const benefits = [
    {
      title: "Fast Turnaround",
      description: "Receive estimates in as little as 24–48 hours so you can focus on winning bids and managing your projects.",
      icon: <Timer className="h-6 w-6" />
    },
    {
      title: "Affordable Rates",
      description: "Get professional estimating services without breaking the budget.",
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      title: "Highly Detailed Reports",
      description: "Estimates include labor, material costs, quantities, equipment, and more—ensuring nothing gets missed.",
      icon: <FileSpreadsheet className="h-6 w-6" />
    },
    {
      title: "Expert Precision",
      description: "Our seasoned estimators use leading software like Planswift and Bluebeam to ensure accuracy and reliability.",
      icon: <Target className="h-6 w-6" />
    }
  ];

  const takeoffServices = [
    {
      title: "Complete Counts for Masonry Units",
      description: "Bricks, CMUs, tiles, stones, and specialty blocks are counted precisely—factoring in bond patterns, dimensions, and openings.",
      icon: <Calculator className="h-6 w-6" />
    },
    {
      title: "Detailed Breakdowns of Materials and Labor",
      description: "Material quantities, unit pricing, and labor productivity rates are clearly itemized.",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "Scaffold and Insulation Estimating",
      description: "When required, we include cost estimates for scaffolding, insulation, flashing, and other essential components.",
      icon: <Building className="h-6 w-6" />
    },
    {
      title: "Clear, Easy-to-Understand Excel Reports",
      description: "Professionally formatted Excel files with separate tabs for labor, materials, equipment, and summary. Includes waste factors and optional markup columns.",
      icon: <FileSpreadsheet className="h-6 w-6" />
    },
    {
      title: "Custom Project Adjustments",
      description: "Each report is tailored based on project type, wall specs, and regional considerations.",
      icon: <Settings className="h-6 w-6" />
    }
  ];

  const scopeServices = [
    "Unit masonry (brick, block, tile systems)",
    "CMU (concrete masonry unit) blocks",
    "Glass unit masonry",
    "Concrete form masonry",
    "Natural stonework (granite, marble, limestone, etc.)",
    "Glazed tiles & decorative finishes",
    "Facing bricks and terra cotta",
    "Stucco and EIFS systems",
    "Mortar and plaster takeoffs",
    "Exterior brick replacement & repairs",
    "Masonry anchorage systems",
    "Flashing, weeps, and moisture control",
    "Structural and veneer stonemasonry walls",
    "Historic masonry restoration and cleaning"
  ];

  const sampleEstimates = [
    {
      title: "Accurate Material Quantities",
      description: "Bricks, blocks, mortar, grout, reinforcement, insulation, and more",
      icon: <Calculator className="h-6 w-6" />
    },
    {
      title: "Labor Cost Breakdown",
      description: "Crew productivity rates, man-hours, and labor cost projections",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Equipment Needs",
      description: "Including scaffolding and tools based on access and job size",
      icon: <Wrench className="h-6 w-6" />
    },
    {
      title: "Formatted Excel Reports",
      description: "Organized, editable spreadsheets with summaries and labeled sections",
      icon: <FileSpreadsheet className="h-6 w-6" />
    },
    {
      title: "Waste & Contingency Allowances",
      description: "Smart waste factors included to match field needs",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Custom Details",
      description: "Estimates tailored to your drawings, scope, region, and specs",
      icon: <Settings className="h-6 w-6" />
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Share Your Plans",
      description: "Upload your project's drawings or blueprints. We'll quickly assess and define the scope of work.",
      icon: <Upload className="h-6 w-6" />
    },
    {
      step: "2",
      title: "Receive Detailed Estimates",
      description: "Our experts use advanced software like Planswift and Bluebeam to prepare precise reports segmented by material, labor, and equipment.",
      icon: <Calculator className="h-6 w-6" />
    },
    {
      step: "3",
      title: "Review and Bid with Confidence",
      description: "Within 24–48 hours, you'll receive a ready-to-use masonry estimate to support your bidding and planning efforts.",
      icon: <CheckSquare className="h-6 w-6" />
    }
  ];

  const faqs = [
    {
      question: "How quickly can I get my masonry estimate?",
      answer: "We typically deliver completed estimates within 24–48 hours, depending on project size and complexity."
    },
    {
      question: "What formats do you provide the reports in?",
      answer: "All estimates are delivered in organized Excel sheets with fully customizable breakdowns."
    },
    {
      question: "Is your service affordable for smaller contractors?",
      answer: "Yes! Our competitive pricing structure is designed to support businesses of all sizes."
    },
    {
      question: "Do you include openings like windows and doors in your calculations?",
      answer: "Yes, all openings are deducted to ensure accurate material quantities and reduce waste."
    }
  ];

  return (
    <div className="antialiased">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Accurate and Fast Masonry Takeoff Services
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Get precise and comprehensive masonry estimates tailored to your project needs, delivered quickly and affordably. Maximize efficiency and reduce costs with our expert masonry takeoff services.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Calculator className="h-5 w-5 mr-2" />
                <span>Precise Calculations</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Clock className="h-5 w-5 mr-2" />
                <span>24-48hr Turnaround</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Award className="h-5 w-5 mr-2" />
                <span>ASTM Standards</span>
              </div>
            </div>
            <Button className="bg-construction-orange hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold">
              Get a Free Quote Now — Fast, No Obligation!
            </Button>
          </div>
        </div>
      </section>

      {/* Streamline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                Streamline Your Masonry Project
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Tired of spending hours on material calculations and cost estimates for your masonry projects? Our masonry estimating services are designed to make your life easier by delivering detailed, accurate, and actionable takeoff reports. Here's why we stand out:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-construction-orange flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-construction-blue mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
                Why Choose Our Masonry Estimating Services?
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-construction-blue mb-4">
                    Accuracy You Can Rely On
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We meticulously quantify every aspect of your masonry project—from bricks and CMU blocks to mortar, grout, insulation, and reinforcements. Deductions for windows and openings? Included. No detail is too small.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-construction-blue mb-4">
                    Save Time and Money
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Outsourcing your masonry takeoffs means you can focus on growing your business while we handle the complex calculations. Our estimates boost your confidence in bidding competitively and effectively.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Takeoff Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
              Comprehensive Takeoff Services Include:
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {takeoffServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-construction-orange mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-construction-blue mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scope Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
                Scope of Masonry Takeoff Services
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 mb-8">
                Our masonry takeoff services provide the foundation for accurate bids and successful project planning. We ensure no detail is overlooked, accounting for all elements of Division 04 to help you reduce waste, optimize labor, and stay on budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scopeServices.map((service, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-construction-orange flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600">
                All estimates are reviewed for accuracy and formatted to be easy to use, whether you're bidding on residential homes, commercial buildings, or complex industrial projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Estimates Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
              Sample Masonry Estimates
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our masonry takeoff reports are structured for precision, usability, and clarity—perfect for confident bidding and seamless project execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleEstimates.map((estimate, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-construction-orange mb-4 flex justify-center">
                    {estimate.icon}
                  </div>
                  <h3 className="text-lg font-bold text-construction-blue mb-3">
                    {estimate.title}
                  </h3>
                  <p className="text-gray-600">
                    {estimate.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
              How It Works
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
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

          <div className="text-center mt-12">
            <Button className="bg-construction-orange hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold">
              Request Your Estimate — Fast, Free, and No Strings Attached!
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
              Trusted by Industry Professionals
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our services support contractors, developers, architects, and construction teams across residential, commercial, and industrial sectors.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-construction-blue mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
              Get Started on Your Next Masonry Project Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don't spend more time than necessary on manual calculations. Let our expert team handle your masonry takeoffs with speed, accuracy, and affordability—so you can focus on what matters most: growing your business.
            </p>
            <Button className="bg-construction-orange hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold">
              Get a Free Quote — Delivered Within 24–48 Hours!
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
      <BackToTop />
    </div>
  );
};

export default MasonryTakeoffServices; 