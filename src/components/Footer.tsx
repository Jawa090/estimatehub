
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-construction-darkGray text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/lovable-uploads/0d18cc57-bb81-4f64-9666-a22d86046947.png" alt="Company Logo" className="h-10" />
              
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for construction outsourcing services. We help you build better, faster, and more efficiently.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-construction-orange transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-construction-orange transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="hover:text-construction-orange transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="hover:text-construction-orange transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/quantity-takeoff" className="text-gray-300 hover:text-construction-orange transition-colors">Quantity Takeoff</Link>
              </li>
              <li>
                <Link to="/services/cost-estimation" className="text-gray-300 hover:text-construction-orange transition-colors">Cost Estimation</Link>
              </li>
              <li>
                <Link to="/services/construction-management" className="text-gray-300 hover:text-construction-orange transition-colors">Construction Management</Link>
              </li>
              <li>
                <Link to="/services/specialized-estimating" className="text-gray-300 hover:text-construction-orange transition-colors">Specialized Services</Link>
              </li>
              <li>
                <Link to="/services/software-based-estimating" className="text-gray-300 hover:text-construction-orange transition-colors">Software Services</Link>
              </li>
              <li>
                <Link to="/services/documentation-reporting" className="text-gray-300 hover:text-construction-orange transition-colors">Documentation</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-construction-orange transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-construction-orange transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/service-areas" className="text-gray-300 hover:text-construction-orange transition-colors">Service Areas</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-construction-orange transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-construction-orange transition-colors">Contact</Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-construction-orange transition-colors">Careers</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-construction-orange" />
                <span>876 70th street Brooklyn NY 11228</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-construction-orange" />
                <span>+(212) 450-7419</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-construction-orange" />
                <span>sales@estimatinghub.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} ConstructionHub. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-construction-orange text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-construction-orange text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-construction-orange text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
