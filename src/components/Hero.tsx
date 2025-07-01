
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Award, TrendingUp, Clock, CheckCircle, Wrench, Shield, Star } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Premium Construction Outsourcing Excellence';
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(typingInterval);
      }
    }, 80);
    return () => clearInterval(typingInterval);
  }, []);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  return <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-construction-blue via-construction-lightBlue to-construction-blue">
      {/* Enhanced Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-construction-blue/98 via-construction-blue/95 to-construction-lightBlue/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-fixed opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-construction-blue/20 to-transparent z-5"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-white mt-24 md:mt-20">
        <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center bg-gradient-to-r from-construction-orange/30 to-red-600/30 backdrop-blur-lg px-8 py-3 rounded-full border border-construction-orange/50 shadow-2xl shadow-construction-orange/25">
              <Star className="h-4 w-4 mr-2 text-yellow-400" />
              <span className="text-sm font-semibold text-white tracking-wide">Trusted by 500+ Industry Leaders Worldwide</span>
              <Star className="h-4 w-4 ml-2 text-yellow-400" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-poppins font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white leading-tight">
            {typedText}
            <span className="animate-pulse text-construction-orange">|</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-gray-100 leading-relaxed max-w-4xl mx-auto font-light">
            Transforming construction projects with industry-leading design precision, 
            <span className="text-construction-orange font-medium"> world-class estimation accuracy</span>, 
            seamless project management, and <span className="text-construction-orange font-medium">dedicated 24/7 support</span>.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 my-16 text-sm md:text-base">
            <div className="bg-white/15 backdrop-blur-lg p-6 rounded-xl border border-white/30 hover:border-construction-orange/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-construction-orange/30 group">
              <Award className="h-10 w-10 mb-3 mx-auto text-construction-orange group-hover:scale-110 transition-transform duration-300" />
              <p className="font-semibold">15+ Years</p>
              <p className="text-xs opacity-90">Industry Experience</p>
            </div>
            <div className="bg-white/15 backdrop-blur-lg p-6 rounded-xl border border-white/30 hover:border-construction-orange/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-construction-orange/30 group">
              <TrendingUp className="h-10 w-10 mb-3 mx-auto text-construction-orange group-hover:scale-110 transition-transform duration-300" />
              <p className="font-semibold">98% Success</p>
              <p className="text-xs opacity-90">Client Satisfaction</p>
            </div>
            <div className="bg-white/15 backdrop-blur-lg p-6 rounded-xl border border-white/30 hover:border-construction-orange/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-construction-orange/30 group">
              <Clock className="h-10 w-10 mb-3 mx-auto text-construction-orange group-hover:scale-110 transition-transform duration-300" />
              <p className="font-semibold">24-48 Hours</p>
              <p className="text-xs opacity-90">Rapid Delivery</p>
            </div>
            <div className="bg-white/15 backdrop-blur-lg p-6 rounded-xl border border-white/30 hover:border-construction-orange/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-construction-orange/30 group">
              <CheckCircle className="h-10 w-10 mb-3 mx-auto text-construction-orange group-hover:scale-110 transition-transform duration-300" />
              <p className="font-semibold">Quality</p>
              <p className="text-xs opacity-90">100% Guaranteed</p>
            </div>
            <div className="bg-white/15 backdrop-blur-lg p-6 rounded-xl border border-white/30 hover:border-construction-orange/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-construction-orange/30 group hidden md:block">
              <Wrench className="h-10 w-10 mb-3 mx-auto text-construction-orange group-hover:scale-110 transition-transform duration-300" />
              <p className="font-semibold">Advanced Tech</p>
              <p className="text-xs opacity-90">Latest Software</p>
            </div>
            <div className="bg-white/15 backdrop-blur-lg p-6 rounded-xl border border-white/30 hover:border-construction-orange/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-construction-orange/30 group hidden md:block">
              <Shield className="h-10 w-10 mb-3 mx-auto text-construction-orange group-hover:scale-110 transition-transform duration-300" />
              <p className="font-semibold">Certified</p>
              <p className="text-xs opacity-90">Expert Team</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <Button 
              className="bg-gradient-to-r from-construction-orange to-red-600 hover:from-red-600 hover:to-construction-orange text-white text-lg py-8 px-12 rounded-xl transition-all transform hover:scale-105 shadow-2xl shadow-construction-orange/40 font-semibold tracking-wide" 
              onClick={() => scrollToSection('services')} 
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              Explore Our Premium Services
            </Button>
            
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  className="bg-white/10 backdrop-blur-lg border-2 border-white/50 text-white hover:bg-white hover:text-construction-blue text-lg py-8 px-12 rounded-xl transition-all transform hover:scale-105 shadow-2xl font-semibold tracking-wide" 
                  data-aos="fade-up" 
                  data-aos-delay="300"
                >
                  Discover Our Excellence
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold text-construction-blue">Welcome to Construction Excellence</DialogTitle>
                  <DialogDescription className="text-lg text-gray-600">
                    Discover how we transform construction projects across the globe with precision and innovation
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-8 my-6 text-gray-700">
                  <div className="flex flex-col gap-8">
                    <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-construction-orange/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                      <h3 className="text-2xl font-bold text-construction-blue mb-4 flex items-center">
                        <Award className="h-6 w-6 mr-3 text-construction-orange" />
                        Our Vision & Mission
                      </h3>
                      <p className="mb-6 text-lg leading-relaxed">
                        We envision a construction industry where cutting-edge technology meets traditional expertise, 
                        creating streamlined, efficient, and accessible solutions for businesses of all sizes. Our mission 
                        is to bridge the gap between innovation and practical construction knowledge.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                          <CheckCircle className="h-6 w-6 text-construction-orange mr-3 flex-shrink-0" />
                          <span className="font-medium">Industry-leading expertise & innovation</span>
                        </div>
                        <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                          <CheckCircle className="h-6 w-6 text-construction-orange mr-3 flex-shrink-0" />
                          <span className="font-medium">Advanced technology integration</span>
                        </div>
                        <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                          <CheckCircle className="h-6 w-6 text-construction-orange mr-3 flex-shrink-0" />
                          <span className="font-medium">Cost-effective premium solutions</span>
                        </div>
                        <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                          <CheckCircle className="h-6 w-6 text-construction-orange mr-3 flex-shrink-0" />
                          <span className="font-medium">24/7 dedicated professional support</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-construction-orange/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                      <h3 className="text-2xl font-bold text-construction-blue mb-4 flex items-center">
                        <Star className="h-6 w-6 mr-3 text-construction-orange" />
                        Why Industry Leaders Choose Us
                      </h3>
                      <p className="mb-6 text-lg leading-relaxed">
                        With over 15 years of proven excellence in the industry, we've refined our processes to deliver 
                        unmatched quality and efficiency. Our team of certified professionals brings extensive knowledge 
                        to every project, ensuring exceptional results at every stage.
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                        <div className="text-center p-6 rounded-xl bg-gradient-to-b from-white to-gray-50 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
                          <div className="text-3xl font-bold text-construction-orange mb-2">500+</div>
                          <div className="text-sm font-medium text-gray-700">Projects Completed</div>
                        </div>
                        <div className="text-center p-6 rounded-xl bg-gradient-to-b from-white to-gray-50 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
                          <div className="text-3xl font-bold text-construction-orange mb-2">98%</div>
                          <div className="text-sm font-medium text-gray-700">Client Satisfaction</div>
                        </div>
                        <div className="text-center p-6 rounded-xl bg-gradient-to-b from-white to-gray-50 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
                          <div className="text-3xl font-bold text-construction-orange mb-2">35+</div>
                          <div className="text-sm font-medium text-gray-700">Countries Served</div>
                        </div>
                        <div className="text-center p-6 rounded-xl bg-gradient-to-b from-white to-gray-50 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
                          <div className="text-3xl font-bold text-construction-orange mb-2">24/7</div>
                          <div className="text-sm font-medium text-gray-700">Expert Support</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center mt-8">
                    <Button 
                      className="bg-gradient-to-r from-construction-orange to-red-600 hover:from-red-600 hover:to-construction-orange text-white py-4 px-10 text-lg font-semibold rounded-xl shadow-xl"
                      onClick={() => {
                        setIsDialogOpen(false);
                        scrollToSection('contact');
                      }}
                    >
                      Start Your Project Today
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="mt-20 animate-bounce-slow">
            <a href="#services" className="inline-block border-2 border-white/60 rounded-full p-4 hover:bg-white hover:text-construction-blue transition-all duration-300 hover:shadow-2xl hover:shadow-construction-orange/30 backdrop-blur-sm bg-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>;
};

export default Hero;
