
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Target, TrendingUp } from "lucide-react";

const ProjectSupportServices = () => {
  const services = [
    { name: "Scope Gap Analysis", description: "Comprehensive analysis to identify project scope gaps" },
    { name: "Subcontractor Quote Review", description: "Detailed review and analysis of subcontractor quotes" },
    { name: "Estimate Validation & Peer Review", description: "Professional validation and peer review of estimates" },
    { name: "Project Cost Benchmarking", description: "Benchmarking against industry standards and best practices" },
    { name: "Cash Flow Forecasting", description: "Accurate cash flow projections for project planning" }
  ];

  const features = [
    "Expert analysis",
    "Risk mitigation",
    "Quality assurance",
    "Industry benchmarking",
    "Strategic planning",
    "Continuous support"
  ];

  return (
    <div className="antialiased">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Project Support Services
            </h1>
            <p className="text-xl mb-8 opacity-90">
              End-to-end project support services for successful project delivery and risk management.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Users className="h-5 w-5 mr-2" />
                <span>Expert Support</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Target className="h-5 w-5 mr-2" />
                <span>Strategic Planning</span>
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
              Project Support Services
            </h2>
            <div className="w-24 h-1 bg-construction-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive support services to ensure project success and minimize risks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-construction-orange mt-1">
                      <TrendingUp className="h-6 w-6" />
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
                Support Excellence
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

export default ProjectSupportServices;
