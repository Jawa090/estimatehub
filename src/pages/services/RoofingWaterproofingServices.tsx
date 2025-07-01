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
  FileDown
} from "lucide-react";
import { Link } from 'react-router-dom';

const RoofingWaterproofingServices = () => {
  const heroStats = [
    { number: "500+", label: "Contractors Trust Us" },
    { number: "24hr", label: "Fast Turnaround" },
    { number: "98%", label: "Accuracy Rate" },
    { number: "1000+", label: "Projects Completed" }
  ];

  const commercialRoofing = [
    {
      title: "Material Breakdown",
      description: "Membranes, insulation, flashing, adhesives, fasteners with detailed specifications.",
      icon: <Package className="h-6 w-6" />
    },
    {
      title: "Labor Breakdown",
      description: "Calculated by roof type and square footage for accurate cost estimation.",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Waste Factors",
      description: "Built-in allowances for overages to prevent material shortages.",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Custom Details",
      description: "Includes parapets, edge treatments, penetrations for complete coverage.",
      icon: <Settings className="h-6 w-6" />
    }
  ];

  const residentialRoofing = [
    {
      title: "Materials Covered",
      description: "Shingles, tile, slate, and more with precise quantity calculations.",
      icon: <Home className="h-6 w-6" />
    },
    {
      title: "Additional Elements",
      description: "Gutters, downspouts, flashing, vents included in comprehensive estimates.",
      icon: <Droplets className="h-6 w-6" />
    },
    {
      title: "Waste & Overages",
      description: "Tailored to roof complexity for optimal material planning.",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Installation Notes",
      description: "Underlayment and system notes for regional climates and requirements.",
      icon: <FileText className="h-6 w-6" />
    }
  ];

  const industrialRoofing = [
    {
      title: "Chemical-Resistant Coatings",
      description: "Detailed material + application specs for industrial environments.",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "HVAC Penetrations",
      description: "Accurate counts for vents, ducts, flashings and mechanical systems.",
      icon: <Thermometer className="h-6 w-6" />
    },
    {
      title: "Solar-Ready Roofs",
      description: "Includes mounting systems and conduit pathways for future installations.",
      icon: <Sun className="h-6 w-6" />
    },
    {
      title: "Insulation Systems",
      description: "Compliant thermal and energy-efficiency details for code compliance.",
      icon: <Layers className="h-6 w-6" />
    }
  ];

  const roofingComponents = [
    {
      title: "Decking",
      description: "Quantities for wood, steel, and concrete decking materials.",
      icon: <Square className="h-6 w-6" />
    },
    {
      title: "Underlayment",
      description: "Estimates for all roof types and underlayment systems.",
      icon: <Layers className="h-6 w-6" />
    },
    {
      title: "Insulation",
      description: "Foam, fiberglass, and other insulation materials with R-values.",
      icon: <ThermometerSnowflake className="h-6 w-6" />
    },
    {
      title: "Flashing & Edge Details",
      description: "Skylights, roof edges, and penetrations with precise measurements.",
      icon: <Settings className="h-6 w-6" />
    }
  ];

  const foundationWaterproofing = [
    {
      title: "Membranes",
      description: "Liquid-applied, sheet membranes, coatings for complete protection.",
      icon: <Umbrella className="h-6 w-6" />
    },
    {
      title: "Drainage Systems",
      description: "French drains, sump pumps, drainage boards for water management.",
      icon: <Droplets className="h-6 w-6" />
    },
    {
      title: "Protection",
      description: "Dimpled membranes, protection boards for long-term durability.",
      icon: <Shield className="h-6 w-6" />
    }
  ];

  const balconyWaterproofing = [
    {
      title: "Materials",
      description: "Membranes, flashing, surface coatings for exposed structures.",
      icon: <Package className="h-6 w-6" />
    },
    {
      title: "Design Considerations",
      description: "Slope, drainage, expansion joints for optimal performance.",
      icon: <Settings className="h-6 w-6" />
    },
    {
      title: "Surface Protection",
      description: "Long-term wear-resistance layers for durability.",
      icon: <Shield className="h-6 w-6" />
    }
  ];

  const belowGradeWaterproofing = [
    {
      title: "Membrane Systems",
      description: "Liquid, bentonite, and composite options for below-grade protection.",
      icon: <Umbrella className="h-6 w-6" />
    },
    {
      title: "Drainage & Protection",
      description: "Gravel layers, coatings, and backfill for complete systems.",
      icon: <Droplets className="h-6 w-6" />
    },
    {
      title: "Crack Sealing",
      description: "Injection systems and waterproof sealants for existing structures.",
      icon: <Wrench className="h-6 w-6" />
    }
  ];

  const clientTypes = [
    {
      title: "Roofing Contractors",
      description: "Residential, commercial, and industrial scopes with precise estimates.",
      icon: <HardHat className="h-8 w-8" />
    },
    {
      title: "Waterproofing Contractors",
      description: "All types of envelope and below-grade systems with detailed takeoffs.",
      icon: <Umbrella className="h-8 w-8" />
    },
    {
      title: "General Contractors",
      description: "Preparing competitive, accurate bid packages for all project types.",
      icon: <Building className="h-8 w-8" />
    },
    {
      title: "Developers",
      description: "Managing project budgets and timelines with reliable estimates.",
      icon: <Users className="h-8 w-8" />
    },
    {
      title: "Architects & Consultants",
      description: "Needing reliable takeoffs for design and planning phases.",
      icon: <Palette className="h-8 w-8" />
    }
  ];

  const whyChooseUs = [
    {
      title: "24–48 Hour Turnaround",
      description: "Get your takeoff fast without compromising accuracy or quality.",
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: "98% Accuracy Guarantee",
      description: "Every estimate reviewed by expert estimators for maximum precision.",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Contractor-Friendly Reports",
      description: "Delivered in Excel, PDF, or your custom format for easy integration.",
      icon: <FileText className="h-6 w-6" />
    }
  ];

  const faqs = [
    {
      question: "How do you ensure accuracy in your takeoffs?",
      answer: "Our estimators follow strict quantity surveying practices and double-review each takeoff to deliver 98%+ accuracy."
    },
    {
      question: "Can you handle rush projects with tight deadlines?",
      answer: "Yes. We offer a 24-hour rush service to help you meet last-minute deadlines without sacrificing quality."
    },
    {
      question: "What formats do you deliver your takeoffs in?",
      answer: "Excel, PDF, and custom formats tailored to your workflow and software requirements."
    },
    {
      question: "What types of projects do you support?",
      answer: "We estimate residential, commercial, and industrial roofing and waterproofing projects of all sizes."
    },
    {
      question: "Do you include labor and waste in your estimates?",
      answer: "Yes. Our reports include precise labor calculations and waste factors based on material and job complexity."
    },
    {
      question: "Can I review a sample before ordering?",
      answer: "Yes. You can download a sample takeoff to see our format and detail level before committing."
    },
    {
      question: "Do you work with general contractors and developers?",
      answer: "Absolutely. We support GCs, developers, and design professionals in addition to specialty contractors."
    },
    {
      question: "What file types can I upload?",
      answer: "We accept PDF, DWG, and Revit files for maximum flexibility and compatibility."
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
              Roofing & Waterproofing Takeoffs in 24 Hours
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Trusted by 500+ contractors across the nation to save time, reduce errors, and win more projects with fast, precise estimates.
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

      {/* Roofing Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                Roofing Estimating Services
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Precision Roofing Takeoffs for Every Project Type. At Paradise Estimating, we provide roofing takeoffs with unmatched precision and detail. From residential to industrial projects, our estimates help contractors submit accurate, competitive bids.
              </p>
            </div>

            {/* Commercial Roofing */}
            <div className="mb-16">
              <h3 className="text-2xl font-poppins font-bold mb-8 text-construction-blue text-center">
                Commercial Roofing Estimates
              </h3>
              <p className="text-lg text-gray-600 mb-8 text-center">
                We handle all types of commercial roofing systems:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {commercialRoofing.map((service, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="text-construction-orange group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <h4 className="text-lg font-semibold text-construction-blue group-hover:text-construction-orange transition-colors duration-300">
                          {service.title}
                        </h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Residential Roofing */}
            <div className="mb-16">
              <h3 className="text-2xl font-poppins font-bold mb-8 text-construction-blue text-center">
                Residential Roofing Takeoffs
              </h3>
              <p className="text-lg text-gray-600 mb-8 text-center">
                For single-family and multi-unit residential projects:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {residentialRoofing.map((service, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="text-construction-orange group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <h4 className="text-lg font-semibold text-construction-blue group-hover:text-construction-orange transition-colors duration-300">
                          {service.title}
                        </h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Industrial Roofing */}
            <div className="mb-16">
              <h3 className="text-2xl font-poppins font-bold mb-8 text-construction-blue text-center">
                Industrial Roofing Estimating
              </h3>
              <p className="text-lg text-gray-600 mb-8 text-center">
                Complex systems demand expert takeoffs:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {industrialRoofing.map((service, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="text-construction-orange group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <h4 className="text-lg font-semibold text-construction-blue group-hover:text-construction-orange transition-colors duration-300">
                          {service.title}
                        </h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Roofing Components */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-poppins font-bold mb-6 text-construction-blue text-center">
                Roofing Division-Specific Takeoffs
              </h3>
              <p className="text-lg text-gray-600 mb-8 text-center">
                We cover every component that contributes to your roof's performance:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {roofingComponents.map((component, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-construction-orange mt-1">
                      {component.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-construction-blue mb-2">{component.title}</h4>
                      <p className="text-gray-600 text-sm">{component.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waterproofing Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                Waterproofing Estimating Services
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Waterproofing Takeoffs That Prevent Costly Mistakes. From foundations to flat roofs, we deliver detailed waterproofing takeoffs that help avoid errors and costly rework.
              </p>
            </div>

            {/* Foundation Waterproofing */}
            <div className="mb-16">
              <h3 className="text-2xl font-poppins font-bold mb-8 text-construction-blue text-center">
                Foundation Waterproofing
              </h3>
              <p className="text-lg text-gray-600 mb-8 text-center">
                We include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {foundationWaterproofing.map((service, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="text-construction-orange group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <h4 className="text-lg font-semibold text-construction-blue group-hover:text-construction-orange transition-colors duration-300">
                          {service.title}
                        </h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Balcony Waterproofing */}
            <div className="mb-16">
              <h3 className="text-2xl font-poppins font-bold mb-8 text-construction-blue text-center">
                Balcony & Terrace Waterproofing
              </h3>
              <p className="text-lg text-gray-600 mb-8 text-center">
                Estimates tailored for exposed structures:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {balconyWaterproofing.map((service, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="text-construction-orange group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <h4 className="text-lg font-semibold text-construction-blue group-hover:text-construction-orange transition-colors duration-300">
                          {service.title}
                        </h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Below Grade Waterproofing */}
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-poppins font-bold mb-6 text-construction-blue text-center">
                Below-Grade Waterproofing
              </h3>
              <p className="text-lg text-gray-600 mb-8 text-center">
                Detailed takeoffs for basements and tunnels:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {belowGradeWaterproofing.map((service, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-construction-orange mt-1">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-construction-blue mb-2">{service.title}</h4>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                Our Clients
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Trusted by Professionals Across the Industry. We serve a wide range of construction professionals, including:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                Why Choose Paradise Estimating?
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                The Fastest, Most Accurate Estimating Partner
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

      {/* Sample Report Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
              Free Sample Report
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">
              See Exactly What You'll Get – Download a Sample
            </p>
            <p className="text-gray-600 mb-8">
              Want to preview our work before you order? Download a free sample takeoff today.
            </p>
            <Button className="bg-construction-orange hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold">
              <FileDown className="h-5 w-5 mr-2" />
              Download Sample Roofing Takeoff
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                FAQs
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Your Questions – Answered
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

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
              Stop Losing Bids to Inaccurate Estimates
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start winning more bids today with fast, accurate takeoffs from Paradise Estimating.
            </p>
            <Button className="bg-construction-orange hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold">
              Get Your First Takeoff 10% Off – Start Today
              <ArrowRight className="h-5 w-5 ml-2" />
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

export default RoofingWaterproofingServices; 