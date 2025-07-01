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
  DoorOpen,
  Anchor,
  Factory
} from "lucide-react";
import { Link } from 'react-router-dom';

const StructuralSteelServices = () => {
  const heroStats = [
    { number: "20+", label: "Years Experience" },
    { number: "24hr", label: "Pilot Takeoff" },
    { number: "100%", label: "Bid-Win Guarantee" },
    { number: "1000+", label: "Projects Completed" }
  ];

  const serviceCapabilities = [
    {
      title: "Structural Framing Systems",
      description: "We provide precise takeoffs for all major framing components, such as beams, columns, and connections. Our team ensures each element is accurately measured and quantified, preventing costly errors and reworks during the fabrication and erection phases.",
      icon: <Building className="h-6 w-6" />
    },
    {
      title: "Light Gauge & Secondary Elements",
      description: "Our estimates also include secondary elements like decking, joists, studs, and other light-gauge components. We optimize material use and help you get the most out of your steel supply, reducing waste and improving overall project efficiency.",
      icon: <Layers className="h-6 w-6" />
    },
    {
      title: "Specialty Components",
      description: "For more complex components like anchor bolts, staircases, and custom fabrications, our team provides specialized takeoff services to ensure every detail is accounted for. This level of precision allows for smooth fabrication and erection.",
      icon: <Anchor className="h-6 w-6" />
    },
    {
      title: "Material and Labor Reporting",
      description: "Our material schedules, waste analysis, and erection labor estimates give you clear insights into what your project will require. These detailed reports help streamline your project's execution and ensure optimal use of resources.",
      icon: <FileText className="h-6 w-6" />
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Digital Plan Processing",
      description: "We accept all major digital formats, including DWG, RVT, and PDF, ensuring we can work seamlessly with your existing project plans. Whether you're using traditional blueprints or advanced BIM models, we process everything quickly and accurately.",
      icon: <Upload className="h-6 w-6" />
    },
    {
      step: "2",
      title: "Accurate Measurement + Expert Validation",
      description: "Our team performs a meticulous review of the plans, ensuring every measurement is spot-on. We cross-check the quantities and validate each takeoff to ensure no details are overlooked, providing you with reliable and accurate estimates.",
      icon: <Calculator className="h-6 w-6" />
    },
    {
      step: "3",
      title: "Compliance Checks",
      description: "Every estimate is checked to ensure compliance with AISC and IBC standards, which are essential for regulatory approval. Our thorough process guarantees that your project meets industry codes and safety standards, reducing risk and avoiding costly revisions.",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      step: "4",
      title: "Report Delivery",
      description: "We deliver detailed takeoff reports in Excel, XML, or customized formats, making them easy to integrate into your workflow. Along with these reports, we provide visual markups to help you clearly understand the material quantities and where they will be used.",
      icon: <FileCheck className="h-6 w-6" />
    },
    {
      step: "5",
      title: "Post-Bid Support",
      description: "We're here to assist even after the bid is submitted. Our RFI support ensures that any questions or clarifications are handled promptly, reducing the chances of delays and ensuring your project moves forward smoothly.",
      icon: <Headphones className="h-6 w-6" />
    }
  ];

  const technologyFeatures = [
    {
      title: "Error-Detection",
      description: "Our team uses specialized tools and software to detect errors early in the process, ensuring your estimate is as accurate as possible. This helps you avoid costly rework or material wastage during construction.",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "3-Tier QA Process",
      description: "Every estimate undergoes a multi-step quality assurance process that includes error detection, review by senior estimators, and final BIM validation to ensure all quantities align with your project's design and specifications.",
      icon: <CheckSquare className="h-6 w-6" />
    },
    {
      title: "Software Integrations",
      description: "We leverage industry-leading software solutions such as Tekla, SDS/2, and FabSuite, making it easier to integrate your steel takeoff directly into your construction process, from procurement to fabrication and erection.",
      icon: <Settings className="h-6 w-6" />
    }
  ];

  const sectorSolutions = [
    {
      sector: "Commercial Construction",
      description: "From office buildings to retail spaces, we provide highly detailed estimates for structural steel framing, decking, and other key components. Our estimates ensure accurate material sourcing and optimal bid pricing for commercial projects.",
      icon: <Building className="h-8 w-8" />
    },
    {
      sector: "Industrial",
      description: "In the industrial sector, we focus on large-scale projects such as factories, warehouses, and power plants. Our estimates help you manage large quantities of steel and reduce waste, ensuring that your industrial project remains within budget.",
      icon: <Factory className="h-8 w-8" />
    },
    {
      sector: "Infrastructure",
      description: "For complex infrastructure projects like bridges and towers, we provide precise steel takeoffs that ensure safety, compliance, and cost-efficiency. Our expertise ensures that all structural steel components are measured accurately to meet industry standards.",
      icon: <Building className="h-8 w-8" />
    },
    {
      sector: "Specialized Projects",
      description: "We also specialize in seismic retrofits and other highly technical projects that require a deep understanding of engineering standards. Our team provides the expertise needed to estimate the correct materials and labor for these specialized projects.",
      icon: <Settings className="h-8 w-8" />
    }
  ];

  const clientAssurance = [
    {
      title: "Bid-Win Precision Guarantee",
      description: "If our estimates result in a lost bid, we offer a refund. We are dedicated to ensuring our estimates are as accurate as possible to help you win your bids.",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Rush Service Capability",
      description: "Need an estimate quickly? We offer 24-hour rush services to meet your tight deadlines without compromising on the quality or accuracy of the estimate.",
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: "Flexible Pricing",
      description: "We offer flexible pricing models, including per-project pricing or retainer options, to suit your business needs and project requirements.",
      icon: <DollarSign className="h-6 w-6" />
    }
  ];

  const faqs = [
    {
      question: "How do you handle missing details in drawings?",
      answer: "Our team flags missing or unclear details during validation and ensures that any gaps are addressed through RFIs (Requests for Information) before proceeding."
    },
    {
      question: "How are drawing revisions handled mid-estimate?",
      answer: "We quickly incorporate any revisions into the estimate and update material and labor quantities to reflect changes, ensuring the estimate remains accurate throughout the project lifecycle."
    },
    {
      question: "Can you provide region-specific labor rates?",
      answer: "Yes, we can customize labor rates based on your project's location to provide a more accurate and region-specific estimate."
    },
    {
      question: "What's included in RFI support?",
      answer: "Our RFI support includes answering questions and resolving issues related to the estimate, materials, or project scope, ensuring clarity and preventing delays."
    },
    {
      question: "Do you offer assembly-level takeoffs?",
      answer: "Yes, we provide assembly-level takeoffs that break down complex steel systems into manageable components for better cost control and material optimization."
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
              Structural Steel Takeoff Services with Bid-Win Guarantee
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Precision structural steel quantification for contractors & fabricators — slash waste and secure bids with margin-protecting estimates.
            </p>
            <p className="text-lg mb-8 opacity-90">
              At Paradise Estimating, we specialize in structural steel takeoff and steel estimation services that help contractors, fabricators, erectors, and developers secure accurate, reliable, and margin-protecting estimates. With over 20 years of experience, our experts ensure that every takeoff is comprehensive and tailored to your unique project needs, guaranteeing you get the most precise material and labor cost estimates available.
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
            <Button className="bg-construction-orange hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold mt-8">
              Start Your 24-Hour Pilot Takeoff Today
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                Our Structural Steel Estimating Expertise
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Specialized services tailored for contractors, fabricators, and developers in the steel construction industry.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto mt-4">
                With decades of experience, Paradise Estimating has developed a keen understanding of the complexities involved in structural steel estimation. We serve a wide range of industries, providing reliable and precise takeoffs that help our clients improve profitability and minimize errors. Our team of professional estimators is committed to delivering top-quality results with a focus on reducing material waste, ensuring compliance, and providing transparent, easy-to-understand reports.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto mt-4">
                Our services include detailed estimates for all structural steel components, including framing, secondary elements, and specialty components. We utilize industry-standard software and best practices to ensure every aspect of your project is accurately estimated from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                Comprehensive Service Capabilities for Steel Estimation
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                From structural framing to specialty components, we provide accurate takeoffs for all types of projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceCapabilities.map((capability, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-construction-orange group-hover:scale-110 transition-transform duration-300">
                        {capability.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-construction-blue group-hover:text-construction-orange transition-colors duration-300">
                        {capability.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {capability.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
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
                Our Proven Steel Estimation Process
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                A 5-step workflow designed to ensure accuracy, compliance, and efficiency in every estimate.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto mt-4">
                At Paradise Estimating, we follow a carefully structured workflow that prioritizes accuracy, efficiency, and transparency at every stage. Here's how we ensure the highest quality results:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-construction-orange rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                      {step.step}
                    </div>
                    <div className="text-construction-orange mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-construction-blue mb-4 group-hover:text-construction-orange transition-colors duration-300">
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

      {/* Technology Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                Advanced Technology and Expert Validation
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Combining cutting-edge tools with industry expertise to deliver unmatched precision and reliability.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto mt-4">
                At Paradise Estimating, we integrate the latest industry-standard software with the experience of our seasoned estimators to deliver the most accurate estimates in the field. Here's how we stay ahead:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {technologyFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-construction-orange group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-construction-blue group-hover:text-construction-orange transition-colors duration-300">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sector Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                Sector-Specific Solutions to Fit Your Needs
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Tailored steel estimation services for commercial, industrial, infrastructure, and specialized construction projects.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto mt-4">
                At Paradise Estimating, we understand that every project type has its unique demands. That's why we offer customized steel estimation solutions for various sectors:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sectorSolutions.map((sector, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group text-center">
                  <CardContent className="p-6">
                    <div className="text-construction-orange mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                      {sector.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-construction-blue mb-3 group-hover:text-construction-orange transition-colors duration-300">
                      {sector.sector}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {sector.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Assurance Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                Client Assurance and Support Framework
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Providing peace of mind with our Bid-Win Guarantee, rush service options, and flexible pricing models.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto mt-4">
                We stand behind our services with a commitment to client satisfaction:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {clientAssurance.map((assurance, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-construction-orange group-hover:scale-110 transition-transform duration-300">
                        {assurance.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-construction-blue group-hover:text-construction-orange transition-colors duration-300">
                        {assurance.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {assurance.description}
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
                Answers to common inquiries regarding steel estimation, revision handling, and post-bid support.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-construction-blue mb-3">
                      Q: {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      A: {faq.answer}
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
              Ready to Secure Your Next Steel Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get precise structural steel estimates with our bid-win guarantee. Start your 24-hour pilot takeoff today.
            </p>
            <Button className="bg-construction-orange hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold">
              <Upload className="h-5 w-5 mr-2" />
              Start Your Pilot Takeoff
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

export default StructuralSteelServices; 