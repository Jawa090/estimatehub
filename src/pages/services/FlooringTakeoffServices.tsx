import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  ArrowRight,
  CheckSquare,
  Timer,
  FileSpreadsheet,
  Hammer,
  Scissors,
  TreePine,
  MapPin,
  Globe,
  FileImage,
  ThermometerSnowflake,
  Volume2,
  Square,
  Package,
  Umbrella,
  Sun,
  Cloud,
  Wind,
  FileDown,
  Grid,
  SquareStack,
  Eye
} from "lucide-react";
import { Link } from 'react-router-dom';

const FlooringTakeoffServices = () => {
  const heroStats = [
    { number: "99.9%", label: "Accuracy Rate" },
    { number: "24hr", label: "Fast Turnaround" },
    { number: "15+", label: "Years Experience" },
    { number: "1500+", label: "Projects Completed" }
  ];

  const flooringTypes = [
    {
      title: "Tile",
      description: "We account for every detail, including pattern matching, grout calculations, and substrate requirements. Our takeoffs consider every element, ensuring that you don't miss any material, regardless of the complexity of the design.",
      icon: <Square className="h-6 w-6" />
    },
    {
      title: "Wood",
      description: "With wood flooring, we calculate species-specific waste factors and installation methods. This attention to detail helps reduce unnecessary material costs and ensures the final estimate matches your project's needs.",
      icon: <TreePine className="h-6 w-6" />
    },
    {
      title: "Carpet",
      description: "Our estimates factor in seam placement, padding calculations, and the exact dimensions needed for the project. We provide accurate square footage and material requirements to ensure an efficient installation.",
      icon: <SquareStack className="h-6 w-6" />
    },
    {
      title: "LVT & Epoxy",
      description: "These materials require precise cutting and layout planning. We include calculations for waste, transitions, and edge trimming, ensuring the estimate is as precise as possible.",
      icon: <Grid className="h-6 w-6" />
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Plan Submission",
      description: "You start by uploading your project plans digitally—whether through email or our easy-to-use online platform. No need for complicated paperwork or waiting for physical copies.",
      icon: <Upload className="h-6 w-6" />
    },
    {
      step: "2",
      title: "Digital Measurement",
      description: "We use trusted software tools like Bluebeam and PlanSwift to perform digital measurements, capturing every detail of the floor layout to ensure precise quantities.",
      icon: <Calculator className="h-6 w-6" />
    },
    {
      step: "3",
      title: "Quality Verification",
      description: "Before delivery, each takeoff is reviewed by a senior estimator. This quality verification step ensures the takeoff is free from errors and reflects the most accurate material needs.",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      step: "4",
      title: "Report Delivery",
      description: "You receive your flooring takeoff report in Excel or PDF format, formatted to be project-ready. We include everything from material quantities to cost estimates, with clear and concise breakdowns for easy review.",
      icon: <FileText className="h-6 w-6" />
    }
  ];

  const benefits = [
    {
      title: "23% Reduction in Material Waste",
      description: "On average, our clients see a 23% reduction in material waste—a significant cost-saving benefit that directly impacts your bottom line.",
      icon: <TrendingDown className="h-6 w-6" />
    },
    {
      title: "99.9% Accuracy Rate",
      description: "Our detailed methodology and dual-check review system ensure the most precise estimates possible for your flooring projects.",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "24-Hour Turnaround",
      description: "Get your flooring takeoffs delivered within 24 hours, helping you meet tight deadlines and stay competitive in the market.",
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: "Callidus Integration",
      description: "Seamless integration with Callidus software ensures smooth workflow transitions and improved project accuracy.",
      icon: <Settings className="h-6 w-6" />
    }
  ];

  const reportIncludes = [
    {
      title: "Detailed Material Quantities",
      description: "Comprehensive breakdown of all materials needed for your flooring project.",
      icon: <Calculator className="h-6 w-6" />
    },
    {
      title: "Cost Estimates",
      description: "Accurate cost projections including materials, labor, and overhead costs.",
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      title: "Waste Calculations",
      description: "Precise waste factors for wood, tile, and other materials to prevent over-ordering.",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Project-Specific Details",
      description: "Custom details such as padding for carpet or grout for tile installations.",
      icon: <FileText className="h-6 w-6" />
    }
  ];

  const clientTypes = [
    {
      title: "Flooring Contractors",
      description: "Specialized contractors who need precise material quantities and cost estimates for various flooring types.",
      icon: <HardHat className="h-8 w-8" />
    },
    {
      title: "General Contractors",
      description: "GCs managing flooring subcontracts who need accurate estimates for bidding and project management.",
      icon: <Building className="h-8 w-8" />
    },
    {
      title: "Residential Contractors",
      description: "Home builders and remodelers requiring accurate flooring estimates for residential projects.",
      icon: <Home className="h-8 w-8" />
    },
    {
      title: "Commercial Contractors",
      description: "Large-scale commercial contractors managing complex flooring installations across multiple spaces.",
      icon: <Users className="h-8 w-8" />
    }
  ];

  const faqs = [
    {
      question: "How accurate are your flooring takeoffs?",
      answer: "Our flooring takeoffs are 99.9% accurate, thanks to our detailed methodology and dual-check review system. We pride ourselves on delivering the most precise estimates possible."
    },
    {
      question: "Can you handle complex patterns or custom designs?",
      answer: "Yes! We specialize in complex patterns and custom designs. Whether you need pattern matching for tile or detailed waste factors for wood, we can handle it."
    },
    {
      question: "What's included in the final report?",
      answer: "Your final report will include detailed material quantities, cost estimates, waste calculations (for wood, tile, and other materials), and project-specific details (such as padding for carpet or grout for tile). It's everything you need to get started with your flooring project, all formatted to be project-ready."
    },
    {
      question: "Do you work with small contractors?",
      answer: "Absolutely! Whether you're managing a small residential job or a large commercial project, we treat every client with the same level of care and precision. We're here to help you succeed, no matter the project size."
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
              Accurate, Fast, and Reliable Flooring Takeoffs for Contractors
            </h1>
            <p className="text-xl mb-8 opacity-90">
              As a contractor, you've likely faced the challenge of inaccurate bids, material waste, and time constraints when estimating flooring projects. At Paradise Estimating, we understand these pain points. With over 15 years of experience in the flooring industry, our team delivers 99.9% accurate flooring takeoffs in just 24 hours.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {heroStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-construction-orange mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                Comprehensive Flooring Estimation Solutions
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Whether you're working with tile, wood, carpet, LVT, or epoxy, our precision and expertise ensure you get the correct material quantities, helping you avoid costly mistakes and delays.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                By partnering with us, you gain a trusted ally who specializes in flooring estimation. We take pride in offering fast, reliable, and bid-ready takeoff reports that save you time and money. Let's get your flooring project started the right way, from the very first estimate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Callidus Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                Callidus-Specific Expertise
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Our flooring takeoff services integrate seamlessly with Callidus software, ensuring a smooth transition from initial plans to final quantities. As specialists in Callidus, we know how to generate precise material quantities and cost estimates that are fully compatible with this platform. You can rely on our detailed estimates, which make your workflow more efficient and improve your project's overall accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Material Coverage Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                Material Coverage for Every Flooring Type
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                We specialize in estimating all types of flooring materials, and we understand the unique requirements of each. Here's how we approach the most common flooring types:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {flooringTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-construction-orange group-hover:scale-110 transition-transform duration-300">
                        {type.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-construction-blue group-hover:text-construction-orange transition-colors duration-300">
                        {type.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {type.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dual-Check System Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
              Unique Methodology: Dual-Check System
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              To ensure the highest level of accuracy, we employ a dual-check system for every project. Our senior estimators perform an additional review of each takeoff before finalizing it. This additional layer of scrutiny is what ensures that you receive the most accurate flooring quantities and cost estimates.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                How Our Flooring Takeoffs Work
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Our flooring takeoff process is simple, streamlined, and designed to save you time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-construction-orange rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                      {step.step}
                    </div>
                    <div className="text-construction-orange mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-construction-blue mb-4 group-hover:text-construction-orange transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                Why Contractors Choose Us
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Results-Focused: Efficiency That Saves You Money. Contractors trust Paradise Estimating because we consistently deliver results that matter. On average, our clients see a 23% reduction in material waste—a significant cost-saving benefit. When you choose us, you're not just getting an estimate, you're getting a solution to your project's efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-construction-orange group-hover:scale-110 transition-transform duration-300">
                        {benefit.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-construction-blue group-hover:text-construction-orange transition-colors duration-300">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Report Includes Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                What's Included in Your Final Report
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {reportIncludes.map((item, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-construction-orange group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-construction-blue group-hover:text-construction-orange transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                Who We Serve
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {clientTypes.map((client, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group text-center">
                  <CardContent className="p-6">
                    <div className="text-construction-orange mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                      {client.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-construction-blue mb-3 group-hover:text-construction-orange transition-colors duration-300">
                      {client.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {client.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                Frequently Asked Questions
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-construction-blue mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
              Get Your Flooring Quantities in 24 Hours
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don't lose another bid due to inaccurate measurements. Let Paradise Estimating deliver precise flooring takeoffs that will save you time, reduce material waste, and help you stay competitive.
            </p>
            <Button className="bg-construction-orange hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold">
              <Upload className="h-5 w-5 mr-2" />
              Upload Your Plans Now
            </Button>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
              Why Choose Paradise Estimating?
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              With over 15 years of experience and a team of AACE-certified estimators, Paradise Estimating offers specialized knowledge in flooring materials and Callidus software integration. We've successfully completed over 1,500 flooring projects, delivering accurate takeoffs that help contractors like you win bids and complete projects on time and within budget.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We're transparent about our process, offering free revisions if project specifications change. You can trust us to deliver reliable, bid-ready estimates that set you up for success.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Paradise Estimating, we don't just provide estimates we provide peace of mind. Let us help you streamline your flooring projects, save on materials, and ensure your bids are as accurate as possible.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
      <BackToTop />
    </div>
  );
};

export default FlooringTakeoffServices; 