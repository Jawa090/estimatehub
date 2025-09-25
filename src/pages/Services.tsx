import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Calculator, Settings, Monitor, FileText, Users, Wrench, HardHat, Award } from "lucide-react";
import { Link } from 'react-router-dom';

const Services = () => {
  const serviceCategories = [
    {
      title: "Quantity Takeoff",
      description: "Comprehensive quantity takeoff services for all construction materials and components with precision and accuracy.",
      icon: <Calculator className="h-8 w-8" />,
      link: "/services/quantity-takeoff",
      services: [
        { name: "Concrete Takeoff", link: "/services/concrete-takeoff" },
        { name: "Masonry Takeoff", link: "/services/masonry-takeoff" },
        { name: "Structural & Reinforcing Steel", link: "/services/structural-steel" },
        { name: "Carpentry & Millwork", link: "/services/carpentry-millwork" },
        { name: "Drywall & Insulation", link: "/services/drywall-insulation" },
        { name: "Roofing & Waterproofing", link: "/services/roofing-waterproofing" },
        { name: "Flooring Takeoff", link: "/services/flooring-takeoff" },
        { name: "Doors, Windows & Glazing", link: "/services/doors-windows-glazing" },
        { name: "Sitework & Earthworks", link: "/services/sitework-earthworks" }
      ]
    },
    {
      title: "Cost Estimation",
      description: "Accurate cost estimation with detailed analysis and budget planning for successful project delivery.",
      icon: <Building className="h-8 w-8" />,
      link: "/services/cost-estimation",
      services: [
        { name: "Preliminary / Budget Estimates", link: "/services/preliminary-estimates" },
        { name: "Detailed Estimates", link: "/services/detailed-estimates" },
        { name: "Bid Estimates", link: "/services/bid-estimates" },
        { name: "Conceptual Estimating", link: "/services/conceptual-estimating" },
        { name: "Dedicated Estimator", link: "/services/dedicated-estimator" }
      ]
    },
    {
      title: "Construction Management",
      description: "Professional construction management services for optimal project execution and delivery.",
      icon: <Wrench className="h-8 w-8" />,
      link: "/services/construction-management",
      services: [
        { name: "Project Execution", link: "/services/construction-management" },
        { name: "Planning & Scheduling", link: "/services/construction-management" },
        { name: "Site Supervision", link: "/services/construction-management" },
        { name: "Subcontractor Coordination", link: "/services/construction-management" },
        { name: "Technology & Innovation", link: "/services/construction-management" }
      ]
    },
    {
      title: "Specialized Services",
      description: "Specialized estimating services for complex and unique construction projects requiring expert knowledge.",
      icon: <Settings className="h-8 w-8" />,
      link: "/services/specialized-estimating",
      services: [
        // { name: "Trade-Specific Estimating", link: "/services/specialized-estimating" },
        // { name: "Civil & Infrastructure", link: "/services/specialized-estimating" },
        // { name: "Residential / Commercial / Industrial", link: "/services/specialized-estimating" },
        // { name: "Green Building / LEED", link: "/services/specialized-estimating" },
        { name: "CSI Trades Estimating Services", link: "/services/csi-trades-estimating" },
        { name: "Value Engineering Services", link: "/services/value-engineering" },
        { name: 'Renovation Cost Estimating & Remodeling Estimates', link: '/services/renovation-estimating', },
      ]
    },
    {
      title: "Software Services",
      description: "Advanced software-based estimating solutions for precise calculations and efficient project delivery.",
      icon: <Monitor className="h-8 w-8" />,
      link: "/services/software-based-estimating",
      services: [
        { name: "On-Screen Takeoff (OST)", link: "/services/software-based-estimating" },
        { name: "Bluebeam Revu", link: "/services/software-based-estimating" },
        { name: "Planswift", link: "/services/software-based-estimating" },
        { name: "RSMeans Integration", link: "/services/software-based-estimating" },
        { name: "Excel Estimating Models", link: "/services/software-based-estimating" }
      ]
    },
    {
      title: "Documentation",
      description: "Comprehensive documentation and reporting services for construction projects with professional standards.",
      icon: <FileText className="h-8 w-8" />,
      link: "/services/documentation-reporting",
      services: [
        { name: "Bill of Quantities (BOQ)", link: "/services/documentation-reporting" },
        { name: "Material Cost Reports", link: "/services/documentation-reporting" },
        { name: "Vendor Comparison Reports", link: "/services/documentation-reporting" },
        { name: "Bid Package Preparation", link: "/services/documentation-reporting" },
        { name: "Cost Breakdown Structure", link: "/services/documentation-reporting" }
      ]
    },
    {
      title: "Project Support",
      description: "End-to-end project support services for successful project delivery and risk management.",
      icon: <Users className="h-8 w-8" />,
      link: "/services/project-support",
      services: [
        { name: "Scope Gap Analysis", link: "/services/project-support" },
        { name: "Subcontractor Quote Review", link: "/services/project-support" },
        { name: "Estimate Validation", link: "/services/project-support" },
        { name: "Project Cost Benchmarking", link: "/services/project-support" },
        { name: "Cash Flow Forecasting", link: "/services/project-support" }
      ]
    },
    {
      title: "Industries We Serve",
      description: "Industry-specific estimating for government, residential, commercial, retail, industrial, and design-build projects.",
      icon: <Award className="h-8 w-8" />,
      link: "/services/industry",
      services: [
        { name: "Government & Public Sector", link: "/services/government" },
        { name: "Residential Construction", link: "/services/residential" },
        { name: "Commercial & Office", link: "/services/commercial" },
        { name: "Retail & Tenant Improvement", link: "/services/retail" },
        { name: "Industrial & Warehouse", link: "/services/industry" },
        { name: "Turnkey / Design-Build / EPCM Construction Estimating Services", link: "/services/turnkey" }
      ]
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Accuracy Rate" },
    { number: "24-48", label: "Hour Turnaround" },
    { number: "15+", label: "Years Experience" }
  ];

  return (
    <div className="antialiased">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Our Construction Services
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Comprehensive construction outsourcing services for quantity takeoff, cost estimation, project management, and specialized solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
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

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
              Complete Construction Solutions
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From initial concept to project completion, we provide end-to-end construction services with precision, expertise, and professional excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-construction-orange group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <CardTitle className="text-xl text-construction-blue group-hover:text-construction-orange transition-colors duration-300">
                      {category.title}
                    </CardTitle>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-construction-orange rounded-full mt-2 flex-shrink-0"></div>
                        <Link 
                          to={service.link} 
                          className="text-gray-700 hover:text-construction-orange transition-colors duration-200"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link to={category.link}>
                    <Button className="w-full bg-construction-orange hover:bg-orange-600 transition-colors group">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
                Why Choose Our Services?
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We combine industry expertise, cutting-edge technology, and proven methodologies to deliver exceptional results for your construction projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-construction-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-construction-orange/20 transition-colors duration-300">
                  <Calculator className="h-8 w-8 text-construction-orange" />
                </div>
                <h3 className="text-lg font-semibold text-construction-blue mb-2">Precision & Accuracy</h3>
                <p className="text-gray-600 text-sm">98% accuracy rate with detailed quality control processes</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-construction-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-construction-orange/20 transition-colors duration-300">
                  <Monitor className="h-8 w-8 text-construction-orange" />
                </div>
                <h3 className="text-lg font-semibold text-construction-blue mb-2">Advanced Technology</h3>
                <p className="text-gray-600 text-sm">Latest software tools and digital solutions for optimal results</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-construction-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-construction-orange/20 transition-colors duration-300">
                  <Users className="h-8 w-8 text-construction-orange" />
                </div>
                <h3 className="text-lg font-semibold text-construction-blue mb-2">Expert Team</h3>
                <p className="text-gray-600 text-sm">15+ years of combined industry experience and expertise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-construction-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your project requirements and how we can help you achieve your construction goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-construction-orange hover:bg-orange-600 text-white px-8 py-3"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 100,
                      behavior: 'smooth'
                    });
                  } else {
                    window.location.href = '/#contact';
                  }
                }}
              >
                Get Free Quote
              </Button>
              <Button 
                size="lg" 
                className="bg-construction-orange hover:bg-orange-600 text-white border-0 px-8 py-3"
                onClick={() => {
                  window.location.href = 'tel:+15551234567';
                }}
              >
                Call Now: (555) 123-4567
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

export default Services;
