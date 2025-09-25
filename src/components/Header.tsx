import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Clock, Home, FileText } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
    // Move Software Services into the first row and push Specialized/Industries to the second row
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
    // Place Specialized Services in second row
    "Specialized Services": {
      path: "/services/specialized-estimating",
      children: [
        { name: "CSI Trades Estimating Services", link: "/services/csi-trades-estimating" },
        { name: "Value Engineering Services", link: "/services/value-engineering" }
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
    }
  };

  const location = useLocation();
  const pathname = location.pathname;
  const isActive = (path: string) => pathname === path;
  const isServicesActive = pathname.startsWith('/services');
  const isContactActive = isActive('/contact');
  const navigate = useNavigate();

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
                <img src="/uploads/0d18cc57-bb81-4f64-9666-a22d86046947.png" alt="Company Logo" className="h-10" />
              </Link>
            </div>
            
            {/* Navigation - Right side */}
            <div className="hidden lg:flex items-center justify-end flex-1">
              <NavigationMenu>
                <NavigationMenuList className="gap-6">
                  <NavigationMenuItem>
                  <Link 
                    to="/" 
                    className={`font-medium transition-colors duration-200 ${isActive('/') ? 'bg-construction-orange text-white px-3 py-2 rounded-md' : scrolled ? 'text-construction-darkGray hover:text-construction-orange' : 'text-white hover:text-construction-orange'}`}
                  >
                      Home
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={(isServicesActive ? "bg-construction-orange text-white" : scrolled ? "bg-transparent text-construction-darkGray hover:bg-gray-100" : "bg-transparent text-white hover:bg-white/10") + " px-3 py-2 rounded-md"}>
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="right-2 left-auto origin-top-right">
                      <div className="w-[760px] md:w-[820px] max-w-[95vw] p-5 bg-white shadow-2xl rounded-xl border border-gray-100 max-h-[70vh] overflow-y-auto overscroll-contain">
                        <h3 className="text-lg font-bold text-construction-blue border-b border-construction-orange pb-2 mb-4">
                          Our Services
                        </h3>
                        {/* 3 columns per row on desktop; separate scroll inside dropdown on mobile/desktop */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
                          {Object.entries(servicesData).map(([category, data]) => (
                            <div key={category} className="space-y-2">
                              <Link 
                                to={data.path}
                                className="block text-sm font-semibold text-construction-blue hover:text-construction-orange transition-colors border-b border-construction-orange/20 pb-1 hover:border-construction-orange truncate whitespace-nowrap"
                                title={category}
                              >
                                {category}
                              </Link>
                              <ul className="space-y-1">
                                {data.children.slice(0, 2).map((service, index) => (
                                  <li key={index}>
                                    <Link 
                                      to={service.link}
                                      className="block text-xs text-gray-700 hover:text-construction-orange transition-all duration-200 py-1 px-2 rounded hover:bg-orange-50 hover:pl-2 truncate whitespace-nowrap"
                                      title={service.name}
                                    >
                                      {service.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        {/* Bottom Explore All Services */}
                        <div className="mt-6">
                          <div className="w-full bg-gradient-to-br from-construction-orange/10 via-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 shadow-lg text-center">
                            <h4 className="text-lg font-bold text-construction-blue mb-2">
                              Explore All Services
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed max-w-3xl mx-auto mb-4">
                              Discover our comprehensive range of construction estimating and management services with detailed breakdowns and professional solutions.
                            </p>
                            <Link 
                              to="/services"
                              className="inline-flex items-center justify-center bg-gradient-to-r from-construction-orange to-orange-500 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg text-sm font-bold transition-all duration-300 shadow hover:shadow-md"
                            >
                              Explore All Services
                            </Link>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link 
                      to="/service-areas" 
                      className={`font-medium transition-colors duration-200 ${isActive('/service-areas') ? 'bg-construction-orange text-white px-3 py-2 rounded-md' : scrolled ? 'text-construction-darkGray hover:text-construction-orange' : 'text-white hover:text-construction-orange'}`}
                    >
                      Service Areas
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link 
                      to="/about" 
                      className={`font-medium transition-colors duration-200 ${isActive('/about') ? 'bg-construction-orange text-white px-3 py-2 rounded-md' : scrolled ? 'text-construction-darkGray hover:text-construction-orange' : 'text-white hover:text-construction-orange'}`}
                    >
                      About
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link 
                      to="/portfolio" 
                      className={`font-medium transition-colors duration-200 ${isActive('/portfolio') ? 'bg-construction-orange text-white px-3 py-2 rounded-md' : scrolled ? 'text-construction-darkGray hover:text-construction-orange' : 'text-white hover:text-construction-orange'}`}
                    >
                      Portfolio
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link 
                      to="/blog" 
                      className={`font-medium transition-colors duration-200 ${isActive('/blog') ? 'bg-construction-orange text-white px-3 py-2 rounded-md' : scrolled ? 'text-construction-darkGray hover:text-construction-orange' : 'text-white hover:text-construction-orange'}`}
                    >
                      Blog
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
              {/* Contact us button - far right */}
              <Button 
                className={`ml-8 ${isContactActive 
                  ? 'bg-red-600 hover:bg-red-700 text-white border-2 border-red-600 rounded-md' 
                  : `${scrolled ? 'bg-transparent text-construction-darkGray hover:bg-gray-100' : 'bg-transparent text-white hover:bg-white/10'} font-medium px-3 py-2 rounded-md`}
                  transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 active:scale-95 active:shadow-inner`} 
                onClick={() => {
                  navigate('/contact');
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
                  className={`transition-colors w-full ${pathname === '/contact' 
                    ? 'bg-red-600 hover:bg-red-700 text-white border-2 border-red-600 rounded-md' 
                    : 'bg-transparent text-construction-darkGray hover:bg-gray-100 font-medium px-3 py-2 rounded-md'} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 active:scale-95 active:shadow-inner`} 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate('/contact');
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
