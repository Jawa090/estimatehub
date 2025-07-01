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
  Download,
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
  Package
} from "lucide-react";
import { Link } from 'react-router-dom';

const DrywallInsulationServices = () => {
  const whyChooseUs = [
    {
      title: "Fast Turnaround",
      description: "Most projects are completed within 24–48 hours, ensuring you meet tight deadlines and keep your projects moving forward.",
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: "Cost-Saving Accuracy",
      description: "Our precise estimates help avoid over-ordering and shortages, saving you money and reducing waste on every project.",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Software Compatibility",
      description: "Our reports are fully compatible with popular estimating software like Planswift, Bluebeam, and AutoCAD for seamless integration.",
      icon: <Settings className="h-6 w-6" />
    },
    {
      title: "Detailed Reports",
      description: "Receive comprehensive reports, including square footage, material counts, and labor estimates for complete project planning.",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "Industry Experience",
      description: "We serve a wide range of industries, including residential, commercial, and industrial projects with proven expertise.",
      icon: <Award className="h-6 w-6" />
    }
  ];

  const drywallServices = [
    {
      title: "Gypsum Board",
      description: "Estimates for various types of drywall, including standard, fire-rated, moisture-resistant, and specialty boards.",
      icon: <Square className="h-6 w-6" />
    },
    {
      title: "Framing Materials",
      description: "Metal studs, drywall screws, joint compound, tape, and finishing materials are all covered in our estimates.",
      icon: <Hammer className="h-6 w-6" />
    },
    {
      title: "Ceiling Systems",
      description: "Accurate takeoffs for lay-in and suspended ceiling systems for both commercial and residential projects.",
      icon: <Layers className="h-6 w-6" />
    }
  ];

  const drywallApplications = [
    {
      title: "New Construction",
      description: "Reliable material calculations for new build projects with comprehensive coverage of all drywall requirements.",
      icon: <Building className="h-6 w-6" />
    },
    {
      title: "Renovations & Remodels",
      description: "Quick estimates for any renovation or remodel, including tenant improvements and retrofit projects.",
      icon: <RefreshCw className="h-6 w-6" />
    },
    {
      title: "Multi-Family Housing",
      description: "Efficient estimates for large-scale residential projects like apartments and condominiums.",
      icon: <Home className="h-6 w-6" />
    }
  ];

  const insulationTypes = [
    {
      title: "Fiberglass Batts",
      description: "Available in R-13 to R-38, suitable for both residential and commercial applications with precise R-value calculations.",
      icon: <Package className="h-6 w-6" />
    },
    {
      title: "Spray Foam",
      description: "Open and closed-cell foam for superior thermal performance and air sealing with accurate coverage estimates.",
      icon: <Droplets className="h-6 w-6" />
    },
    {
      title: "Rigid Foam Boards",
      description: "XPS, EPS, and polyiso boards for exterior walls, foundations, and other applications requiring high R-values.",
      icon: <Square className="h-6 w-6" />
    },
    {
      title: "Mineral Wool & Acoustic",
      description: "For soundproofing and thermal insulation needs in both commercial and residential spaces.",
      icon: <Volume2 className="h-6 w-6" />
    }
  ];

  const insulationApplications = [
    {
      title: "Exterior Walls, Attics, Basements",
      description: "Efficient insulation for temperature control and energy savings with precise material calculations.",
      icon: <ThermometerSnowflake className="h-6 w-6" />
    },
    {
      title: "Soundproofing & Thermal Barriers",
      description: "Ideal for areas where noise reduction or enhanced thermal insulation is required for optimal performance.",
      icon: <Shield className="h-6 w-6" />
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Upload Your Plans",
      description: "Submit your project plans in formats like PDF, DWG, or Revit for comprehensive analysis.",
      icon: <Upload className="h-6 w-6" />
    },
    {
      step: "2",
      title: "We Analyze & Measure",
      description: "Our experts carefully analyze your plans, measuring square footage, linear feet, and materials.",
      icon: <Calculator className="h-6 w-6" />
    },
    {
      step: "3",
      title: "Receive Your Report",
      description: "We provide a detailed takeoff report in your preferred format, whether it's Excel, CSV, or another format.",
      icon: <FileCheck className="h-6 w-6" />
    }
  ];

  const industries = [
    {
      title: "Residential Contractors",
      description: "Custom homes, renovations, and multi-family housing projects with precise material estimates.",
      icon: <Home className="h-8 w-8" />
    },
    {
      title: "Commercial Builders",
      description: "Office buildings, retail spaces, and other commercial developments with comprehensive takeoffs.",
      icon: <Building className="h-8 w-8" />
    },
    {
      title: "Insulation Subcontractors",
      description: "Reliable estimates for all insulation types to support competitive bidding and project planning.",
      icon: <Wrench className="h-8 w-8" />
    },
    {
      title: "Drywall Suppliers",
      description: "Precise takeoffs to support large material orders and bulk supply for major projects.",
      icon: <Truck className="h-8 w-8" />
    }
  ];

  const faqs = [
    {
      question: "What's included in a drywall takeoff report?",
      answer: "Our drywall takeoff reports include material quantities (e.g., gypsum board, framing materials, joint compound), detailed square footage, and labor estimates for each task."
    },
    {
      question: "How do you calculate insulation material requirements?",
      answer: "We calculate insulation needs based on the layout of your project, the required R-values for different areas, and the insulation type selected (e.g., fiberglass, spray foam)."
    },
    {
      question: "Can you work with my estimating software?",
      answer: "Yes, we provide takeoff reports in formats compatible with leading estimating software like Planswift, Bluebeam, AutoCAD, and more."
    },
    {
      question: "Do you offer rush pricing?",
      answer: "Yes, we offer expedited services for projects with tight deadlines. Contact us for more information on our rush pricing options."
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
              Expert Drywall & Insulation Takeoffs Services
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Minimize waste and boost bid accuracy with professional estimating services for contractors, builders, and suppliers.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Calculator className="h-5 w-5 mr-2" />
                <span>Precision Estimates</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Clock className="h-5 w-5 mr-2" />
                <span>24-48hr Turnaround</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Globe className="h-5 w-5 mr-2" />
                <span>Nationwide Service</span>
              </div>
            </div>
            <Button className="bg-construction-orange hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold">
              Request a Quote Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                Why Choose Our Takeoff Services?
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Our drywall and insulation estimating services are designed to streamline your project planning, save you time, and enhance your bid accuracy. With years of experience serving residential, commercial, and industrial projects, we provide you with precise takeoffs that minimize material waste and ensure you have exactly what you need for the job.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Drywall Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                Drywall Takeoff Services
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Our drywall takeoff services are designed to provide you with accurate, detailed material estimates for every aspect of your drywall installation. Whether you are working on new construction, a renovation, or a multi-family housing project, we ensure you have the materials needed for a successful build.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {drywallServices.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-construction-orange group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-construction-blue group-hover:text-construction-orange transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-poppins font-bold mb-6 text-construction-blue text-center">
                Common Applications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {drywallApplications.map((app, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-construction-orange mt-1">
                      {app.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-construction-blue mb-2">{app.title}</h4>
                      <p className="text-gray-600 text-sm">{app.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insulation Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                Insulation Takeoff Services
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Accurate insulation estimates are essential for achieving energy efficiency and cost-effectiveness in any building. Whether you are working on a residential or commercial project, our insulation takeoff services ensure that you only order the amount of material needed to meet performance specifications, reducing waste and cost.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {insulationTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-construction-orange group-hover:scale-110 transition-transform duration-300">
                        {type.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-construction-blue group-hover:text-construction-orange transition-colors duration-300">
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

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-poppins font-bold mb-6 text-construction-blue text-center">
                Common Applications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {insulationApplications.map((app, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-construction-orange mt-1">
                      {app.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-construction-blue mb-2">{app.title}</h4>
                      <p className="text-gray-600 text-sm">{app.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                How Our Process Works
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Our process is simple and straightforward to ensure a smooth experience. We help you get the most accurate estimates with minimal hassle, so you can focus on other aspects of your project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                Industries We Serve
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Our services are trusted by a diverse range of professionals across various industries, including:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group text-center">
                  <CardContent className="p-6">
                    <div className="text-construction-orange mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                      {industry.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-construction-blue mb-3 group-hover:text-construction-orange transition-colors duration-300">
                      {industry.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {industry.description}
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
              <p className="text-lg text-gray-600 leading-relaxed">
                Here are some frequently asked questions about our drywall and insulation takeoff services:
              </p>
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
              Get Started Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Take the next step in simplifying your estimating process. Get precise drywall and insulation takeoffs tailored to your project needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-construction-orange hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold">
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </Button>
              <Button className="bg-white text-construction-blue hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                <Mail className="h-5 w-5 mr-2" />
                Request Quote
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

export default DrywallInsulationServices; 