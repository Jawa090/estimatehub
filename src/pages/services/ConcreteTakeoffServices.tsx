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
  AlertTriangle,
  TrendingDown,
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
  ArrowRight
} from "lucide-react";

const ConcreteTakeoffServices = () => {
  const problems = [
    {
      title: "Concrete Cost Overruns",
      description: "Underestimating materials or labor costs can cause unexpected budget blowouts, affecting your project's bottom line.",
      icon: <TrendingDown className="h-8 w-8" />
    },
    {
      title: "Manual Concrete Takeoff Errors",
      description: "Traditional takeoff methods often miss important details or result in mistakes, causing delays and mistakes in the project.",
      icon: <AlertTriangle className="h-8 w-8" />
    },
    {
      title: "Concrete Bid Losses",
      description: "Inaccurate bids can mean losing out on profitable contracts to competitors with more precise estimates.",
      icon: <TrendingDown className="h-8 w-8" />
    }
  ];

  const solutions = [
    "Eliminate manual errors and inefficiencies",
    "Speed up your estimating process",
    "Improve bid accuracy and win more projects"
  ];

  const services = [
    {
      title: "Concrete Quantity Takeoffs",
      description: "Accurate and detailed takeoffs to ensure you don't over- or under-order materials.",
      icon: <Calculator className="h-6 w-6" />
    },
    {
      title: "Concrete Bid-Ready Proposals",
      description: "Receive professional, polished proposals that you can submit directly to clients.",
      icon: <FileCheck className="h-6 w-6" />
    },
    {
      title: "Concrete Change Order Estimates",
      description: "Updated estimates when there are project changes, ensuring accuracy throughout.",
      icon: <RefreshCw className="h-6 w-6" />
    },
    {
      title: "BIM Integration for Concrete Estimating",
      description: "Seamless integration with Building Information Modeling (BIM) to provide precise estimates from your digital models.",
      icon: <Database className="h-6 w-6" />
    }
  ];

  const benefits = [
    {
      title: "Accuracy in Concrete Estimating",
      description: "Reduce concrete material waste by 15% or more with precise concrete cost breakdowns. Our advanced software ensures zero errors in concrete quantity takeoffs.",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Fast Concrete Takeoffs",
      description: "Get fast concrete takeoffs in 24 hours. We understand the urgency, and we deliver quick results without sacrificing quality.",
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: "Increased Profitability",
      description: "Win 30% more bids with competitive pricing. Our estimates help you stay competitive by offering accurate and well-priced bids.",
      icon: <TrendingUp className="h-6 w-6" />
    }
  ];

  const differentiators = [
    {
      title: "Experience in Concrete Estimating Services",
      description: "With over 15 years in construction estimating services, we understand the intricacies of concrete estimating like no one else.",
      icon: <Award className="h-6 w-6" />
    },
    {
      title: "Certified Concrete Estimators",
      description: "Our team includes industry-certified estimators, ensuring the highest quality estimates and best practices.",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "24/7 Project Support",
      description: "We're always here when you need us—whether you have questions during business hours or need urgent assistance after hours.",
      icon: <Headphones className="h-6 w-6" />
    }
  ];

  const clientTypes = [
    {
      title: "General Contractors",
      description: "We assist general contractors by providing precise concrete estimates that account for all aspects of the construction process. From material costs to labor hours, our detailed estimates help general contractors plan and manage the financial aspects of the project, ensuring they stay on budget and avoid unexpected overruns.",
      keywords: "accurate estimates, cost management, project planning, budget control",
      icon: <HardHat className="h-8 w-8" />
    },
    {
      title: "Concrete Subcontractors",
      description: "For concrete subcontractors, we deliver highly focused estimates that concentrate on the specific concrete work involved. This includes accurate calculations for materials, labor, and equipment, allowing subcontractors to bid competitively while managing costs efficiently. Our estimates help subcontractors stay within scope and complete projects on time.",
      keywords: "specialized estimates, material calculations, labor costs, efficient bidding",
      icon: <Wrench className="h-8 w-8" />
    },
    {
      title: "Architects",
      description: "Architects rely on our precise concrete estimating to bring their design visions to life while staying within budget constraints. We provide cost-effective concrete solutions that align with architectural plans, helping architects make informed decisions about materials and overall project feasibility.",
      keywords: "feasible designs, budget-friendly solutions, architectural accuracy, material selection",
      icon: <Palette className="h-8 w-8" />
    },
    {
      title: "Home Builders",
      description: "For home builders, we offer clear and accurate concrete estimates for everything from foundations to driveways and patios. Our estimates help home builders stay within their budget, ensuring that concrete work meets both quality standards and homeowner expectations.",
      keywords: "residential construction, cost-efficient, quality assurance, budget management",
      icon: <Home className="h-8 w-8" />
    }
  ];

  const faqs = [
    {
      question: "How Accurate Are Your Concrete Estimating Services?",
      answer: "Our digital concrete takeoffs eliminate manual errors and ensure your estimates are 100% accurate, giving you a reliable foundation for your projects."
    },
    {
      question: "Do You Include Labor Costs in Your Concrete Estimates?",
      answer: "Yes! Our concrete bid estimation includes comprehensive labor costs, allowing for an all-inclusive bid for your project."
    },
    {
      question: "Can You Handle Urgent Concrete Estimating Requests?",
      answer: "Absolutely! We understand that some projects have tight deadlines, and we offer rush concrete estimate services to help you meet those critical timelines."
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
              Accurate Concrete Estimating Services for Residential & Commercial Projects
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Stop costly concrete estimate errors. Get fast, accurate takeoffs and bids to win more residential and commercial projects. We specialize in providing contractors, builders, and developers with reliable, precise concrete estimates.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Calculator className="h-5 w-5 mr-2" />
                <span>Accurate Estimates</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Clock className="h-5 w-5 mr-2" />
                <span>24hr Turnaround</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Award className="h-5 w-5 mr-2" />
                <span>15+ Years Experience</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-construction-orange hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold">
                Get a Free Estimate Today
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-construction-blue px-8 py-4 text-lg font-semibold">
                <Upload className="h-5 w-5 mr-2" />
                Upload Plans for a Free Estimate
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-80">
              Get your custom quote in 24 hours—simply upload your plans today.
            </p>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
              How Inaccurate Estimates Wreak Havoc on Timelines & Budgets
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-red-200">
                <CardContent className="p-8 text-center">
                  <div className="text-red-500 mb-4 flex justify-center">
                    {problem.icon}
                  </div>
                  <h3 className="text-xl font-bold text-construction-blue mb-4">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
                Our Concrete Estimating Solution: Accurate, Fast, and Reliable
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 mb-8">
                We use advanced technology to provide digital concrete takeoffs and software-based concrete estimates using tools like PlanSwift and STACK. Our solutions help you:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="h-6 w-6 text-construction-orange flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{solution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
              Concrete Estimating Services We Offer
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              We offer a full range of concrete estimating services to meet the needs of contractors, builders, and developers:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="text-construction-orange flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-construction-blue mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
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
              Why Choose Our Concrete Estimating Services?
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our service offers unmatched benefits for contractors, builders, and developers:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="text-construction-orange mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-construction-blue mb-4">
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

      {/* Differentiators Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
              What Sets Us Apart in Concrete Estimating?
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((diff, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-construction-orange mb-4 flex justify-center">
                    {diff.icon}
                  </div>
                  <h3 className="text-xl font-bold text-construction-blue mb-4">
                    {diff.title}
                  </h3>
                  <p className="text-gray-600">
                    {diff.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
              Concrete Estimating for Contractors and Builders
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              We provide comprehensive concrete estimating for contractors and professionals in various industries:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {clientTypes.map((client, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="text-construction-orange flex-shrink-0">
                      {client.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-construction-blue mb-3">
                        {client.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {client.description}
                  </p>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Keywords:</strong> {client.keywords}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
              Frequently Asked Questions About Concrete Estimating
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
              Ready to Get Accurate Concrete Estimates?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Stop losing money on inaccurate estimates. Get your free concrete estimate today and start winning more projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-construction-orange hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold">
                <Phone className="h-5 w-5 mr-2" />
                Get Free Estimate
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-construction-blue px-8 py-4 text-lg font-semibold">
                <Upload className="h-5 w-5 mr-2" />
                Upload Plans Now
              </Button>
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

export default ConcreteTakeoffServices; 