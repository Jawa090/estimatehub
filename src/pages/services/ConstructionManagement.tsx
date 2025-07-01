
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Building, Calendar, Shield } from "lucide-react";

const ConstructionManagement = () => {
  const services = [
    { name: "Project Execution", description: "End-to-end project execution and delivery management" },
    { name: "Planning & Scheduling", description: "Comprehensive project planning and scheduling services" },
    { name: "Site Supervision", description: "Professional on-site supervision and quality control" },
    { name: "Subcontractor Coordination", description: "Effective coordination and management of subcontractors" },
    { name: "Technology & Innovation", description: "Implementation of latest construction technologies" },
    { name: "Safety & Compliance", description: "Comprehensive safety management and regulatory compliance" },
    { name: "Financial & Legal", description: "Financial management and legal compliance services" }
  ];

  const features = [
    "Professional management",
    "Quality assurance",
    "Safety compliance",
    "Technology integration",
    "Timely delivery",
    "Cost control"
  ];

  return (
    <div className="antialiased">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Construction Management
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Professional construction management services for optimal project execution and delivery.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Building className="h-5 w-5 mr-2" />
                <span>Project Excellence</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Shield className="h-5 w-5 mr-2" />
                <span>Safety First</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
              Construction Management Services
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive construction management services for successful project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-construction-orange mt-1">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-construction-darkGray mb-2">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">
                Management Excellence
              </h2>
              <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-construction-orange flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
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

export default ConstructionManagement;
