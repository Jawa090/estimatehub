import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Clock, Home, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setMobileMenuOpen(false);
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  // Comprehensive services data organized by categories
  const servicesData = {
    "Quantity Takeoff": {
      path: "/services/quantity-takeoff",
      children: [
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
    "Cost Estimation": {
      path: "/services/cost-estimation",
      children: [
        { name: "Preliminary / Budget Estimates", link: "/services/preliminary-estimates" },
        { name: "Detailed Estimates", link: "/services/detailed-estimates" },
        { name: "Bid Estimates", link: "/services/cost-estimation" },
        { name: "Conceptual Estimating", link: "/services/cost-estimation" },
        { name: "Labor & Equipment Analysis", link: "/services/cost-estimation" }
      ]
    },
    "Construction Management": {
      path: "/services/construction-management",
      children: [
        { name: "Project Execution", link: "/services/construction-management" },
        { name: "Planning & Scheduling", link: "/services/construction-management" },
        { name: "Site Supervision", link: "/services/construction-management" },
        { name: "Subcontractor Coordination", link: "/services/construction-management" },
        { name: "Technology & Innovation", link: "/services/construction-management" }
      ]
    },
    "Specialized Services": {
      path: "/services/specialized-estimating",
      children: [
        { name: "CSI Trades Estimating Services", link: "/services/csi-trades-estimating" },
        { name: "Value Engineering Services", link: "/services/value-engineering" }
      ]
    },
    "Software Services": {
      path: "/services/software-based-estimating",
      children: [
        { name: "On-Screen Takeoff (OST)", link: "/services/software-based-estimating" },
        { name: "Bluebeam Revu", link: "/services/software-based-estimating" },
        { name: "Planswift", link: "/services/software-based-estimating" },
        { name: "RSMeans Integration", link: "/services/software-based-estimating" },
        { name: "Excel Estimating Models", link: "/services/software-based-estimating" }
      ]
    },
    "Documentation": {
      path: "/services/documentation-reporting",
      children: [
        { name: "Bill of Quantities (BOQ)", link: "/services/documentation-reporting" },
        { name: "Material Cost Reports", link: "/services/documentation-reporting" },
        { name: "Vendor Comparison Reports", link: "/services/documentation-reporting" },
        { name: "Bid Package Preparation", link: "/services/documentation-reporting" },
        { name: "Cost Breakdown Structure", link: "/services/documentation-reporting" }
      ]
    },
    "Project Support": {
      path: "/services/project-support",
      children: [
        { name: "Scope Gap Analysis", link: "/services/project-support" },
        { name: "Subcontractor Quote Review", link: "/services/project-support" },
        { name: "Estimate Validation", link: "/services/project-support" },
        { name: "Project Cost Benchmarking", link: "/services/project-support" },
        { name: "Cash Flow Forecasting", link: "/services/project-support" }
      ]
    },
    "Industries We Serve": {
      path: "/services/industry",
      children: [
        { name: "Government & Public Sector", link: "/services/government" },
        { name: "Residential Construction", link: "/services/residential" },
        { name: "Commercial & Office", link: "/services/industry" },
        { name: "Retail & Tenant Improvement", link: "/services/retail" },
        { name: "Industrial Construction", link: "/services/industrial" },
        { name: "Warehousing Construction", link: "/services/warehousing" },
        { name: "Turnkey, Design-Build & EPCM", link: "/services/industry" }
      ]
    }
  };

  return <>
      {/* Top Bar with Contact Info */}
      <div className={`hidden lg:block bg-construction-blue text-white py-2 transition-all duration-300 ${scrolled ? 'opacity-0 h-0 py-0 overflow-hidden' : ''}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6 text-base font-semibold">
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              <span>+(212) 450-7419</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              <span>sales@estimatinghub.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-6 text-base font-semibold">
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span>Mon-Fri: 9AM - 5PM</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              <span>876 70th street Brooklyn NY 11228</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'top-0 bg-white shadow-md py-2' : 'top-8 bg-transparent py-4'}`}>
        <div className="container mx-auto px-12">
          <div className="flex items-center justify-between">
            {/* Logo - Left side */}
            <div className="flex items-center">
              <Link to="/">
                <img src="/lovable-uploads/0d18cc57-bb81-4f64-9666-a22d86046947.png" alt="Company Logo" className="h-10" />
              </Link>
            </div>
            
            {/* Navigation - Right side */}
            <div className="hidden lg:flex items-center justify-end flex-1">
              <NavigationMenu>
                <NavigationMenuList className="gap-6">
                  <NavigationMenuItem>
                    <Link 
                      to="/" 
                      className={`font-medium hover:text-construction-orange transition-colors duration-200 ${scrolled ? 'text-construction-darkGray' : 'text-white'}`}
                    >
                      Home
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={scrolled ? "bg-transparent text-construction-darkGray hover:bg-gray-100" : "bg-transparent text-white hover:bg-white/10"}>
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="left-1/2 transform -translate-x-1/2">
                      <div className="w-[700px] max-w-[95vw] p-6 bg-white shadow-2xl rounded-xl border border-gray-100">
                        <div className="grid grid-cols-2 gap-8">
                          {/* Left Side - Parent Services with 2 children each, now in 3 columns */}
                          <div className="space-y-4">
                            <h3 className="text-lg font-bold text-construction-blue border-b border-construction-orange pb-2">
                              Our Services
                            </h3>
                            <div className="grid grid-cols-3 gap-4">
                              {Object.entries(servicesData).map(([category, data]) => (
                                <div key={category} className="space-y-2">
                                  <Link 
                                    to={data.path}
                                    className="block text-sm font-semibold text-construction-blue hover:text-construction-orange transition-colors border-b border-construction-orange/20 pb-1 hover:border-construction-orange"
                                  >
                                    {category}
                                  </Link>
                                  <ul className="space-y-1">
                                    {data.children.slice(0, 2).map((service, index) => (
                                      <li key={index}>
                                        <Link 
                                          to={service.link}
                                          className="block text-xs text-gray-700 hover:text-construction-orange transition-all duration-200 py-1 px-2 rounded hover:bg-orange-50 hover:pl-2 group"
                                        >
                                          <span className="group-hover:font-medium transition-all duration-200">
                                            {service.name}
                                          </span>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                          {/* Right Side - Explore All Services Button Only */}
                          <div className="flex flex-col items-center justify-center space-y-6">
                            <div className="text-center space-y-4">
                              <h3 className="text-xl font-bold text-construction-blue border-b-2 border-construction-orange pb-3">
                                Explore All Services
                              </h3>
                              <div className="bg-gradient-to-br from-construction-orange/10 via-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 shadow-lg">
                                <div className="space-y-4">
                                  <div className="text-center">
                                    <h4 className="text-lg font-bold text-construction-blue mb-2">
                                      Complete Service Catalog
                                    </h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                      Discover our comprehensive range of construction estimating and management services with detailed breakdowns and professional solutions.
                                    </p>
                                  </div>
                                  <div className="flex justify-center">
                                    <Link 
                                      to="/services"
                                      className="inline-flex items-center justify-center bg-gradient-to-r from-construction-orange to-orange-500 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 border-2 border-transparent hover:border-orange-300"
                                    >
                                      Explore All Services
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link 
                      to="/service-areas" 
                      className={`font-medium hover:text-construction-orange transition-colors duration-200 ${scrolled ? 'text-construction-darkGray' : 'text-white'}`}
                    >
                      Service Areas
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link 
                      to="/about" 
                      className={`font-medium hover:text-construction-orange transition-colors duration-200 ${scrolled ? 'text-construction-darkGray' : 'text-white'}`}
                    >
                      About
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link 
                      to="/portfolio" 
                      className={`font-medium hover:text-construction-orange transition-colors duration-200 ${scrolled ? 'text-construction-darkGray' : 'text-white'}`}
                    >
                      Portfolio
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link 
                      to="/blog" 
                      className={`font-medium hover:text-construction-orange transition-colors duration-200 ${scrolled ? 'text-construction-darkGray' : 'text-white'}`}
                    >
                      Blog
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
              {/* Contact us button - far right */}
              <Button 
                className={`ml-8 bg-construction-orange hover:bg-orange-600 transition-colors ${scrolled ? '' : 'shadow-lg'}`} 
                onClick={() => {
                  window.location.href = '/contact';
                }}
              >
                Contact Us
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <button className="lg:hidden text-3xl focus:outline-none" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X className={scrolled ? "text-construction-darkGray" : "text-white"} /> : <Menu className={scrolled ? "text-construction-darkGray" : "text-white"} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && <div className="lg:hidden bg-white shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className="font-medium text-construction-darkGray hover:text-construction-orange transition-colors" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                
                {/* Services with submenu in mobile view */}
                <div className="relative">
                  <span className="font-medium text-construction-darkGray">Services</span>
                  <div className="pl-4 mt-2 border-l-2 border-gray-200 space-y-2">
                    {Object.entries(servicesData).map(([category, data]) => (
                      <div key={category} className="space-y-1">
                        <Link 
                          to={data.path}
                          className="block text-sm font-medium text-construction-blue hover:text-construction-orange py-1" 
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {category}
                        </Link>
                        <div className="pl-3 space-y-1">
                          {data.children.map((service, index) => (
                            <Link 
                              key={index}
                              to={service.link}
                              className="block text-xs text-gray-600 hover:text-construction-orange py-1" 
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Link 
                  to="/service-areas" 
                  className="font-medium text-construction-darkGray hover:text-construction-orange transition-colors" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Service Areas
                </Link>
                
                <Link 
                  to="/about" 
                  className="font-medium text-construction-darkGray hover:text-construction-orange transition-colors" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/portfolio" 
                  className="font-medium text-construction-darkGray hover:text-construction-orange transition-colors" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Portfolio
                </Link>
                <Link 
                  to="/blog" 
                  className="font-medium text-construction-darkGray hover:text-construction-orange transition-colors" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Button 
                  className="bg-construction-orange hover:bg-orange-600 transition-colors w-full" 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.location.href = '/contact';
                  }}
                >
                  Contact Us
                </Button>
              </nav>
            </div>
          </div>}
      </header>
    </>;
};

export default Header;
