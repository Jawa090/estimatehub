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
  FileSpreadsheet,
  Hammer,
  Scissors,
  TreePine,
  MapPin,
  Globe,
  FileImage
} from "lucide-react";

const CarpentryMillworkServices = () => {
  const whyChooseUs = [
    {
      title: "Trusted by Builders, Millwork Shops & Architects",
      description: "At Paradise Estimating, we've built a strong reputation for reliable and precise takeoff services. Builders, millwork shops, and architects across the country trust us to provide accurate estimates that help them plan, bid, and execute projects efficiently.",
      icon: <Award className="h-6 w-6" />
    },
    {
      title: "Accurate Material Quantification and Bid Preparation",
      description: "We deliver highly accurate material quantities and detailed bid preparation reports that you can depend on to win bids and ensure smooth project execution. Our estimates are built to scale, whether you're managing a single job or multiple projects simultaneously.",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Powered by Industry-Leading Takeoff Tools",
      description: "Our takeoff services are powered by industry-leading software like PlanSwift, Bluebeam, and Excel. These tools allow us to create detailed, precise estimates based on your project plans, whether in PDF, DWG, or CAD format.",
      icon: <Settings className="h-6 w-6" />
    }
  ];

  const services = [
    {
      title: "Custom Millwork Takeoffs & Architectural Woodwork Quantities",
      description: "We provide precise custom millwork takeoffs, from trim and moldings to custom-built cabinetry and architectural woodwork. Our experts help you capture every detail of your woodwork requirements.",
      icon: <TreePine className="h-6 w-6" />
    },
    {
      title: "Cabinetry Estimating – Kitchens, Casework, Storage",
      description: "Whether you're estimating for kitchen cabinetry, custom casework, or storage solutions, we deliver accurate, detailed takeoffs that streamline the estimating process and reduce costly mistakes.",
      icon: <Building className="h-6 w-6" />
    },
    {
      title: "Trim, Molding & Paneling Takeoffs",
      description: "We offer precise trim, molding, and paneling takeoffs that ensure you have the right amount of materials for a perfect finish. Our estimates account for all material requirements, including labor counts and cost integration.",
      icon: <Ruler className="h-6 w-6" />
    },
    {
      title: "Door & Window Casing, Baseboards, and Wainscoting",
      description: "Our team can handle all your door & window casing needs, along with baseboards and wainscoting estimates, providing accurate numbers to support your projects' materials and labor.",
      icon: <Home className="h-6 w-6" />
    },
    {
      title: "Shop Drawing Support for Fabricators",
      description: "We support millwork fabricators with detailed shop drawings that ensure accuracy in production. Our drawings help you visualize the work before it's created, reducing errors and saving time.",
      icon: <FileImage className="h-6 w-6" />
    }
  ];

  const clientTypes = [
    {
      title: "General Contractors & Builders",
      description: "We provide comprehensive millwork estimating services for general contractors and builders managing projects of all sizes.",
      icon: <HardHat className="h-8 w-8" />
    },
    {
      title: "Millwork & Cabinetry Fabricators",
      description: "For millwork fabricators, we deliver precise takeoff services that help you plan, produce, and deliver custom products on time.",
      icon: <Scissors className="h-8 w-8" />
    },
    {
      title: "Interior Designers & Remodelers",
      description: "Interior designers and remodelers rely on our accurate estimates for cabinetry, woodwork, and trim work that align with their creative vision.",
      icon: <Palette className="h-8 w-8" />
    },
    {
      title: "Residential & Commercial Developers",
      description: "Our services cater to residential and commercial developers, delivering the material quantities and labor estimates needed to execute successful projects.",
      icon: <Building className="h-8 w-8" />
    }
  ];

  const toolsStandards = [
    {
      title: "CSI Division 6 – Wood & Composites",
      description: "Our estimates are built in line with CSI Division 6 for wood and composite materials, ensuring all components are covered and aligned with industry standards.",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "Digital Plan Takeoffs from PDF, DWG & CAD",
      description: "We accept a variety of digital plan formats, including PDF, DWG, and CAD files, to deliver the most accurate and up-to-date estimates.",
      icon: <FileCheck className="h-6 w-6" />
    },
    {
      title: "Material Lists, Labor Counts & Cost Integration",
      description: "Our team provides detailed material lists, labor counts, and cost integration to ensure you have a comprehensive overview of your project costs.",
      icon: <Calculator className="h-6 w-6" />
    }
  ];

  const valueBenefits = [
    {
      title: "Avoid Waste and Overages",
      description: "Precision in estimating helps you avoid waste and overages, ensuring your project stays within budget and timeline.",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Improve Fabrication Accuracy and Installation Workflow",
      description: "Our estimates improve fabrication accuracy and streamline the installation workflow, making your process more efficient and error-free.",
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "Win More Bids with Better Takeoff Support",
      description: "With our reliable takeoff services, you'll increase your chances of winning bids by providing accurate estimates that stand out from the competition.",
      icon: <TrendingUp className="h-6 w-6" />
    }
  ];

  const faqs = [
    {
      question: "How much does a millwork takeoff cost?",
      answer: "Our prices are transparent, with customizable pricing models based on your project's scope. Contact us for a personalized quote."
    },
    {
      question: "What types of plans can you work with?",
      answer: "We work with PDF, DWG, and CAD files to create accurate and efficient takeoffs."
    },
    {
      question: "Can you provide estimates for both materials and labor?",
      answer: "Yes! We provide material and labor estimates for all types of millwork and cabinetry projects."
    },
    {
      question: "Do you offer takeoff services for Florida, Texas, and California projects?",
      answer: "Yes, we specialize in Florida, Texas, California, and other high-demand areas."
    },
    {
      question: "How long does it take to get a takeoff report?",
      answer: "We provide most takeoffs within 24-48 hours, ensuring quick turnaround times for your projects."
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
              Carpentry, Millwork & Cabinetry Takeoffs Services
            </h1>
            <p className="text-xl mb-8 opacity-90">
              At Paradise Estimating, we understand the importance of delivering precision millwork and cabinetry takeoffs that keep your projects on schedule and within budget. Our expert team provides fast, reliable, and accurate takeoff services for contractors and builders across the United States.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <TreePine className="h-5 w-5 mr-2" />
                <span>Precision Millwork</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Clock className="h-5 w-5 mr-2" />
                <span>24-48hr Turnaround</span>
              </div>
              <div className="flex items-center bg-white/5 mr-2" />
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Globe className="h-5 w-5 mr-2" />
                <span>Nationwide Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                Carpentry & Millwork Takeoff Services for Residential and Commercial Projects
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Whether you're working on residential or commercial projects, we specialize in delivering precise and reliable millwork takeoffs. From custom cabinetry to intricate architectural woodwork, we help contractors, architects, and fabricators streamline their estimating process, saving time and reducing errors.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team uses state-of-the-art tools and technologies to provide accurate material quantification and bid preparation, ensuring you're prepared to meet project deadlines and budgets. Whether it's a kitchen remodel or a large-scale commercial development, we've got you covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
              Why Contractors Nationwide Rely on Paradise Estimating
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="text-construction-orange mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-construction-blue mb-4 text-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
              Our Millwork Estimating Services Include
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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

      {/* Localized Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
              Localized Support for Contractors
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              We understand the unique demands of projects in high-demand areas like Florida, Texas, New York, and beyond. Our localized support ensures we're up to date with the building codes and requirements specific to each region, providing you with tailored, fast, and accurate estimates that match local needs.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
              Who We Serve
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {clientTypes.map((client, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="text-construction-orange flex-shrink-0">
                      {client.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-construction-blue mb-3">
                        {client.title}
                      </h3>
                      <p className="text-gray-600">
                        {client.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Estimates Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
              Take a Look at Our Estimating Samples
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              See for yourself how Paradise Estimating can help you win bids and plan projects. Download a real millwork estimate sample to understand the level of detail we provide.
            </p>
          </div>

          <div className="text-center">
            <Button className="bg-construction-orange hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold">
              <Download className="h-5 w-5 mr-2" />
              View or Download a Real Millwork Estimate
            </Button>
          </div>
        </div>
      </section>

      {/* Tools & Standards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
              Tools & Standards We Use in Cabinetry Estimating
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {toolsStandards.map((tool, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-construction-orange mb-4 flex justify-center">
                    {tool.icon}
                  </div>
                  <h3 className="text-lg font-bold text-construction-blue mb-3">
                    {tool.title}
                  </h3>
                  <p className="text-gray-600">
                    {tool.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
                Transparent Pricing & Fast Turnaround Times
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-construction-blue mb-4">
                    Simple Per-Sheet or Per-Project Pricing
                  </h3>
                  <p className="text-gray-600">
                    We offer transparent pricing for millwork estimating services, whether you need a per-sheet or per-project estimate.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-construction-blue mb-4">
                    24–48 Hour Turnaround for Most Projects
                  </h3>
                  <p className="text-gray-600">
                    We deliver most estimates in 24–48 hours, ensuring you have the information you need to move forward with your projects quickly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
              The Value of Precision in Millwork & Cabinet Estimating
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueBenefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-construction-orange mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-construction-blue mb-3">
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
              Start Your Estimate Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Fast, Reliable Service from a Dedicated Estimating Partner
            </p>
            <p className="text-lg mb-8 opacity-90">
              Ready to get started? Upload your plans or request a free estimate today and see how Paradise Estimating can help your projects succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-construction-orange hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold">
                <Upload className="h-5 w-5 mr-2" />
                Upload Plans
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-construction-blue px-8 py-4 text-lg font-semibold">
                <Phone className="h-5 w-5 mr-2" />
                Request Free Estimate
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Nationwide Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
              Nationwide Millwork & Cabinet Estimating Services Tailored to Your Region
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're a contractor in Florida, a cabinet shop in California, or a builder in Texas, New York, Georgia, Illinois, or Arizona, Paradise Estimating delivers expert millwork, cabinetry, and carpentry takeoff services tailored to your needs. Our team supports clients across the U.S. with accurate, fast, and cost-effective estimates that help you build smarter and bid better—no matter where your projects are located.
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

export default CarpentryMillworkServices; 