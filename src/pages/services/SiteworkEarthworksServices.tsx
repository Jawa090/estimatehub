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
  Factory,
  Mountain,
  Trees,
  Sprout
} from "lucide-react";
import { Link } from 'react-router-dom';

const SiteworkEarthworksServices = () => {
  const heroStats = [
    { number: "GPS", label: "Based Takeoffs" },
    { number: "24hr", label: "Fast Turnaround" },
    { number: "100%", label: "Accuracy Rate" },
    { number: "500+", label: "Projects Completed" }
  ];

  const siteworkServices = [
    {
      title: "Clearing & Grubbing",
      description: "Complete site preparation including vegetation removal and debris clearing.",
      icon: <Trees className="h-6 w-6" />
    },
    {
      title: "Cut/Fill Calculations",
      description: "Precise earthwork calculations to optimize material movement and costs.",
      icon: <Calculator className="h-6 w-6" />
    },
    {
      title: "Site Demolition",
      description: "Comprehensive demolition estimates for existing structures and site elements.",
      icon: <Hammer className="h-6 w-6" />
    },
    {
      title: "Mass Excavation",
      description: "Large-scale excavation estimates with equipment and material optimization.",
      icon: <Mountain className="h-6 w-6" />
    },
    {
      title: "Erosion Control",
      description: "Environmental protection measures and sediment control systems.",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Trenching & Backfill",
      description: "Underground utility installation and foundation preparation estimates.",
      icon: <Layers className="h-6 w-6" />
    }
  ];

  const additionalServices = [
    {
      title: "Temporary Utilities",
      description: "Construction power, water, and communication systems setup.",
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "Soil Stabilization",
      description: "Ground improvement techniques for challenging soil conditions.",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Site Drainage",
      description: "Stormwater management and drainage system design estimates.",
      icon: <Droplets className="h-6 w-6" />
    },
    {
      title: "Rock Removal",
      description: "Blasting and rock excavation for challenging geological conditions.",
      icon: <Mountain className="h-6 w-6" />
    },
    {
      title: "Paving & Surfacing",
      description: "Roadways, parking areas, and surface treatment estimates.",
      icon: <Square className="h-6 w-6" />
    },
    {
      title: "Compaction Testing",
      description: "Soil density verification and quality control measures.",
      icon: <CheckCircle className="h-6 w-6" />
    }
  ];

  const valuePropositions = [
    {
      title: "Avoid Costly Over-Excavation",
      description: "Our GPS-based takeoffs ensure precise earthworks calculations, reducing waste and unnecessary expenses.",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Region-Specific Pricing",
      description: "We specialize in soil analysis to account for local soil conditions (clay, sand, bedrock), keeping your project within budget.",
      icon: <MapPin className="h-6 w-6" />
    },
    {
      title: "Equipment Cost Forecasting",
      description: "From bulldozers to graders, we offer detailed equipment cost analysis, helping you plan effectively for every stage of earthworks.",
      icon: <Truck className="h-6 w-6" />
    }
  ];

  const technologyAdvantages = [
    {
      title: "Trimble Earthworks Integration",
      description: "State-of-the-art technology for precise, reliable estimates.",
      icon: <Settings className="h-6 w-6" />
    },
    {
      title: "Drone Survey Data Processing",
      description: "Fast, accurate aerial data for your earthworks project.",
      icon: <Eye className="h-6 w-6" />
    },
    {
      title: "GIS Mapping",
      description: "Advanced terrain analysis for accurate site planning and cost predictions.",
      icon: <Globe className="h-6 w-6" />
    }
  ];

  const landscapingServices = [
    {
      title: "Hardscape Installation",
      description: "Concrete, pavers, and stone work for outdoor living spaces.",
      icon: <Square className="h-6 w-6" />
    },
    {
      title: "Irrigation Systems",
      description: "Automated watering systems with smart zoning and efficiency controls.",
      icon: <Droplets className="h-6 w-6" />
    },
    {
      title: "Planting & Sodding",
      description: "Landscape vegetation including trees, shrubs, and turf installation.",
      icon: <Sprout className="h-6 w-6" />
    },
    {
      title: "Retaining Walls",
      description: "Structural landscape elements for slope management and aesthetics.",
      icon: <Layers className="h-6 w-6" />
    },
    {
      title: "Outdoor Lighting",
      description: "Landscape lighting systems for safety and ambiance.",
      icon: <Lightbulb className="h-6 w-6" />
    },
    {
      title: "Amenity Installation",
      description: "Playgrounds, seating areas, and recreational features.",
      icon: <Home className="h-6 w-6" />
    }
  ];

  const utilitiesServices = [
    {
      title: "Underground Electrical",
      description: "Power distribution systems and electrical infrastructure.",
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "Water/Sewer Lines",
      description: "Potable water and wastewater infrastructure installation.",
      icon: <Droplets className="h-6 w-6" />
    },
    {
      title: "Gas Line Routing",
      description: "Natural gas and propane distribution systems.",
      icon: <Truck className="h-6 w-6" />
    },
    {
      title: "Stormwater Systems",
      description: "Drainage infrastructure and flood control measures.",
      icon: <Cloud className="h-6 w-6" />
    },
    {
      title: "Telecommunication Conduits",
      description: "Fiber optic and communication infrastructure.",
      icon: <Headphones className="h-6 w-6" />
    },
    {
      title: "Utility Trenching",
      description: "Excavation and installation of underground utility systems.",
      icon: <Layers className="h-6 w-6" />
    }
  ];

  const specializedCapabilities = [
    {
      title: "Xeriscaping Cost Optimization",
      description: "Solutions for cost-effective, sustainable landscaping.",
      icon: <Sprout className="h-6 w-6" />
    },
    {
      title: "BIM Integration",
      description: "Utility conflict detection in 3D to avoid disruptions.",
      icon: <Database className="h-6 w-6" />
    },
    {
      title: "Trenchless Technology Pricing",
      description: "Innovative methods to reduce excavation costs and time.",
      icon: <Settings className="h-6 w-6" />
    },
    {
      title: "Seasonal Planting Cost Factors",
      description: "Accurate pricing based on seasonal variations.",
      icon: <Clock className="h-6 w-6" />
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
              Sitework & Earthworks Takeoff Estimating Services
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Precision Sitework & Earthworks Cost Estimating
            </p>
            <p className="text-lg mb-8 opacity-90">
              At Paradise Estimating, we offer comprehensive sitework and earthworks estimating services to help ensure your construction project gets off to a solid start. Our team uses cutting-edge estimating technology to provide precise, cost-effective takeoffs for site grading, excavation, and foundation phases of your build. With our accurate, professional estimates, you can avoid costly delays and unforeseen issues.
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

      {/* Services Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                Our Comprehensive Services Include
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Sitework Estimating */}
              <div>
                <h3 className="text-2xl font-poppins font-bold mb-8 text-construction-blue text-center">
                  Sitework Estimating
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {siteworkServices.map((service, index) => (
                    <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-construction-orange group-hover:scale-110 transition-transform duration-300">
                            {service.icon}
                          </div>
                          <h4 className="text-sm font-semibold text-construction-blue group-hover:text-construction-orange transition-colors duration-300">
                            {service.title}
                          </h4>
                        </div>
                        <p className="text-gray-600 text-xs mt-2">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Earthworks Estimating */}
              <div>
                <h3 className="text-2xl font-poppins font-bold mb-8 text-construction-blue text-center">
                  Earthworks Estimating
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {additionalServices.map((service, index) => (
                    <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-construction-orange group-hover:scale-110 transition-transform duration-300">
                            {service.icon}
                          </div>
                          <h4 className="text-sm font-semibold text-construction-blue group-hover:text-construction-orange transition-colors duration-300">
                            {service.title}
                          </h4>
                        </div>
                        <p className="text-gray-600 text-xs mt-2">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                Unique Value Proposition
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {valuePropositions.map((proposition, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-construction-orange group-hover:scale-110 transition-transform duration-300">
                        {proposition.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-construction-blue group-hover:text-construction-orange transition-colors duration-300">
                        {proposition.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {proposition.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Advantage Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                Technology Advantage
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {technologyAdvantages.map((advantage, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-construction-orange group-hover:scale-110 transition-transform duration-300">
                        {advantage.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-construction-blue group-hover:text-construction-orange transition-colors duration-300">
                        {advantage.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Landscaping & Utilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                Landscaping & Utilities Estimating Services
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Our landscaping and utilities estimating services are designed to ensure both the beauty and functionality of your development. From hardscape installation and irrigation systems to stormwater management and utility trenching, we provide comprehensive, accurate estimates that cover both surface landscaping and essential underground infrastructure.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto mt-4">
                We deliver coordinated estimates to prevent conflicts between landscaping elements and utility installations, ensuring smooth project execution from start to finish.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Landscaping Estimating */}
              <div>
                <h3 className="text-2xl font-poppins font-bold mb-8 text-construction-blue text-center">
                  Landscaping Estimating
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {landscapingServices.map((service, index) => (
                    <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-construction-orange group-hover:scale-110 transition-transform duration-300">
                            {service.icon}
                          </div>
                          <h4 className="text-sm font-semibold text-construction-blue group-hover:text-construction-orange transition-colors duration-300">
                            {service.title}
                          </h4>
                        </div>
                        <p className="text-gray-600 text-xs mt-2">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Utilities Estimating */}
              <div>
                <h3 className="text-2xl font-poppins font-bold mb-8 text-construction-blue text-center">
                  Utilities Estimating
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {utilitiesServices.map((service, index) => (
                    <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-construction-orange group-hover:scale-110 transition-transform duration-300">
                            {service.icon}
                          </div>
                          <h4 className="text-sm font-semibold text-construction-blue group-hover:text-construction-orange transition-colors duration-300">
                            {service.title}
                          </h4>
                        </div>
                        <p className="text-gray-600 text-xs mt-2">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">
                Specialized Capabilities
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {specializedCapabilities.map((capability, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-construction-orange group-hover:scale-110 transition-transform duration-300">
                        {capability.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-construction-blue group-hover:text-construction-orange transition-colors duration-300">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
              Get Started Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Stop Guessing Ground Conditions – Get Engineered Estimates Now!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-construction-orange hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold">
                <Upload className="h-5 w-5 mr-2" />
                Send Project Details
              </Button>
              <Button className="bg-white text-construction-blue hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                <Headphones className="h-5 w-5 mr-2" />
                Instant Chat Quote
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

export default SiteworkEarthworksServices; 