
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ServiceAreas = () => {
  const serviceAreas = [
    {
      name: "New York",
      description: "Complete construction services in New York",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=500&h=300&fit=crop",
      details: "Serving all five boroughs with comprehensive construction and estimation services"
    },
    {
      name: "California",
      description: "Expert construction solutions in California",
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=500&h=300&fit=crop",
      details: "From Los Angeles to San Francisco, providing top-quality construction services"
    },
    {
      name: "Texas",
      description: "Professional services across Texas",
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=500&h=300&fit=crop",
      details: "Covering Dallas, Houston, Austin and surrounding areas"
    },
    {
      name: "Florida",
      description: "Quality construction support in Florida",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500&h=300&fit=crop",
      details: "Miami, Orlando, Tampa and statewide construction services"
    },
    {
      name: "Illinois",
      description: "Comprehensive services in Illinois",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=300&fit=crop",
      details: "Chicago metropolitan area and throughout the state"
    },
    {
      name: "Pennsylvania",
      description: "Expert solutions in Pennsylvania",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=300&fit=crop",
      details: "Philadelphia, Pittsburgh and across Pennsylvania"
    },
    {
      name: "Georgia",
      description: "Professional services in Georgia",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=500&h=300&fit=crop",
      details: "Atlanta and throughout the state of Georgia"
    },
    {
      name: "North Carolina",
      description: "Quality support in North Carolina",
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=500&h=300&fit=crop",
      details: "Charlotte, Raleigh and statewide coverage"
    },
    {
      name: "Ohio",
      description: "Complete services in Ohio",
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=500&h=300&fit=crop",
      details: "Columbus, Cleveland, Cincinnati and across Ohio"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-construction-blue to-construction-darkGray text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Service Areas
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              We provide comprehensive construction services across multiple states, 
              delivering quality and expertise wherever you need us.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={area.image} 
                    alt={area.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-construction-orange text-white px-3 py-1 rounded-full">
                    <MapPin className="h-4 w-4 inline mr-1" />
                    {area.name}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-construction-darkGray">
                    {area.name}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {area.description}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    {area.details}
                  </p>
                  <div className="flex items-center justify-between text-sm text-construction-blue">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-1" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-1" />
                      <span>Get Quote</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-construction-darkGray">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your construction needs in any of our service areas. 
            We're here to help bring your project to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-construction-orange hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Free Quote
            </button>
            <button className="border-2 border-construction-blue text-construction-blue hover:bg-construction-blue hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Call Now: +1 (555) 123-4567
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceAreas;
