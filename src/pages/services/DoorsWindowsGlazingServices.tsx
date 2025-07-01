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
  Eye,
  DoorOpen
} from "lucide-react";
import { Link } from 'react-router-dom';

const DoorsWindowsGlazingServices = () => {
  const heroStats = [
    { number: "15+", label: "Years Experience" },
    { number: "99.9%", label: "Accuracy Rate" },
    { number: "24hr", label: "Fast Turnaround" },
    { number: "1000+", label: "Projects Completed" }
  ];

  const hiddenCosts = [
    {
      title: "Material Waste",
      description: "Underestimating the quantity of glazing or door hardware leads to last-minute ordering or overbuying, both of which add unnecessary costs.",
      example: "On a recent office building project, inaccurate glass quantity estimates led to a 15% material overage, costing the contractor an additional $10K.",
      icon: <Package className="h-6 w-6" />
    },
    {
      title: "Hardware Miscalculations",
      description: "Misjudging hardware needs, like anchors, locks, or seals, causes project delays and increases costs when parts are sourced late or incorrectly.",
      example: "Underestimating curtain wall anchors caused a $28K loss on a hospital renovation, slowing down the entire installation process.",
      icon: <Wrench className="h-6 w-6" />
    },
    {
      title: "Installation Delays",
      description: "Lack of accurate measurements or missing components can create delays on-site. The longer it takes to install fenestration systems, the higher your labor costs and the greater the risk of project delays.",
      example: "A miscalculation of window framing sizes delayed a retail storefront's installation by 12 days, pushing the grand opening date back by weeks.",
      icon: <Clock className="h-6 w-6" />
    }
  ];

  const phases = [
    {
      phase: "1",
      title: "Digital Blueprint Analysis",
      description: "We begin with a deep dive into your project's digital blueprints. By isolating layers for frames and glass, we ensure we're measuring precisely, avoiding human error and getting it right from the start.",
      icon: <FileText className="h-6 w-6" />
    },
    {
      phase: "2",
      title: "Material Intelligence Database Integration",
      description: "Our proprietary material database integrates real-time data to optimize material use, reducing waste and ensuring accuracy. We also track volatility in material prices, locking in competitive rates before market shifts.",
      icon: <Database className="h-6 w-6" />
    },
    {
      phase: "3",
      title: "Triple-Check QA System",
      description: "Every estimate undergoes a rigorous triple-check process, ensuring that we catch any discrepancies and refine details that could lead to overages or delays. Our system reduces risk and guarantees quality.",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      phase: "4",
      title: "Contractor-Ready Reports",
      description: "Once our analysis is complete, we deliver contractor-ready reports that are both comprehensive and clear. You'll have everything you need to confidently move forward with your project, including precise material quantities and installation requirements.",
      icon: <FileCheck className="h-6 w-6" />
    }
  ];

  const expertiseAreas = [
    {
      serviceType: "Commercial Storefronts",
      challenge: "Structural load miscalculations",
      solution: "Laser-calibrated measurements ensure precision.",
      icon: <Building className="h-6 w-6" />
    },
    {
      serviceType: "High-Rise Windows",
      challenge: "Wind-load miscalculations",
      solution: "ASTM-compliant calculations keep you in code.",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      serviceType: "Specialty Glazing",
      challenge: "Custom shape waste",
      solution: "CAD-based pattern optimization reduces waste.",
      icon: <Palette className="h-6 w-6" />
    }
  ];

  const whyChooseUs = [
    {
      title: "15+ Years of Experience",
      description: "Predict installation bottlenecks before bid day, helping you avoid costly delays.",
      icon: <Award className="h-6 w-6" />
    },
    {
      title: "BIM Integration",
      description: "Our integration with Building Information Modeling (BIM) helps detect clashes early, preventing change orders that would otherwise drive up costs.",
      icon: <Database className="h-6 w-6" />
    },
    {
      title: "Material Volatility Monitoring",
      description: "We keep an eye on material price fluctuations, locking in competitive prices to protect your budget from unexpected shifts.",
      icon: <TrendingUp className="h-6 w-6" />
    }
  ];

  const faqs = [
    {
      question: "How do you handle last-minute plan revisions?",
      answer: "We understand that plans often change, and we're ready to adapt. Our team is skilled at incorporating last-minute revisions quickly and accurately without compromising the integrity of the estimate. We'll get updated reports to you fast, keeping your project on track."
    },
    {
      question: "Can you quantify hardware for security doors?",
      answer: "Absolutely! We can provide detailed takeoffs for all types of hardware, including those for high-security doors. From locks to hinges to specialized components, we ensure every detail is accounted for."
    },
    {
      question: "What makes glazing estimates different from standard windows?",
      answer: "Glazing systems are more complex than standard windows, with considerations for thermal performance, custom shapes, and special framing. Our experience with specialty glazing ensures accurate estimates that meet the unique demands of your project."
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
              Accurate Doors, Windows & Glazing Takeoff Service
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Bid anxiety is real, and it can cost you more than just time—it can eat away at your bottom line. With Paradise Estimating, you can be confident that your window, door, and glazing estimates are accurate from the start. That means no costly rework and more time to focus on what matters: delivering a successful project.
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

      {/* Hidden Costs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                The Hidden Costs of Inaccurate Takeoffs
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Accurate takeoffs are crucial for a successful project. When done poorly, they lead to more than just minor headaches. These mistakes can snowball, affecting your budget, timeline, and overall project quality. Here's how:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {hiddenCosts.map((cost, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-construction-orange group-hover:scale-110 transition-transform duration-300">
                        {cost.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-construction-blue group-hover:text-construction-orange transition-colors duration-300">
                        {cost.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {cost.description}
                    </p>
                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-construction-orange">
                      <p className="text-sm text-gray-700 font-medium">
                        <strong>Example:</strong> {cost.example}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                Our Specialized Approach
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                At Paradise Estimating, we've developed a proven, four-phase approach to takeoffs that eliminates costly errors and maximizes your project's profitability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {phases.map((phase, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-construction-orange rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                      {phase.phase}
                    </div>
                    <div className="text-construction-orange mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                      {phase.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-construction-blue mb-4 group-hover:text-construction-orange transition-colors duration-300">
                      {phase.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {phase.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                Fenestration Expertise Areas
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                We know fenestration is a specialized field. That's why we focus on solving the unique challenges that come with different types of glazing and framing systems. Here's how we approach three of the most common areas:
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-construction-blue text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Service Type</th>
                    <th className="px-6 py-4 text-left font-semibold">Unique Challenges</th>
                    <th className="px-6 py-4 text-left font-semibold">Our Solution</th>
                  </tr>
                </thead>
                <tbody>
                  {expertiseAreas.map((area, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-construction-orange">
                            {area.icon}
                          </div>
                          <span className="font-medium text-construction-blue">{area.serviceType}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{area.challenge}</td>
                      <td className="px-6 py-4 text-gray-600">{area.solution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                Why Contractors Choose Us
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                We offer more than just estimates—we provide the peace of mind that comes with knowing your project is in expert hands. Here's what sets us apart:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
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
              Get Accurate Doors, Windows & Glazing Takeoffs
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don't let bid anxiety cost you time and money. Get precise estimates that eliminate costly rework and keep your projects on track.
            </p>
            <Button className="bg-construction-orange hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold">
              <Upload className="h-5 w-5 mr-2" />
              Upload Your Plans Now
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

export default DoorsWindowsGlazingServices; 