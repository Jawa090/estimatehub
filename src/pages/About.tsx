import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Award, Clock, Globe, Lightbulb, CheckCircle } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      experience: "15+ years",
      specialization: "Project Management & Strategic Planning",
      image: "/placeholder.svg"
    },
    {
      name: "Sarah Johnson",
      position: "Head of Estimating",
      experience: "12+ years",
      specialization: "Quantity Takeoffs & Cost Analysis",
      image: "/placeholder.svg"
    },
    {
      name: "Mike Chen",
      position: "Senior Construction Manager",
      experience: "10+ years",
      specialization: "Site Management & Quality Control",
      image: "/placeholder.svg"
    },
    {
      name: "Emily Davis",
      position: "Technology Director",
      experience: "8+ years",
      specialization: "BIM & Digital Solutions",
      image: "/placeholder.svg"
    }
  ];

  const milestones = [
    {
      year: "2010",
      title: "Company Founded",
      description: "Started with a vision to revolutionize construction estimating"
    },
    {
      year: "2015",
      title: "100+ Projects Completed",
      description: "Reached our first major milestone in project delivery"
    },
    {
      year: "2018",
      title: "Technology Integration",
      description: "Implemented advanced BIM and digital estimation tools"
    },
    {
      year: "2020",
      title: "International Expansion",
      description: "Extended services to clients across North America"
    },
    {
      year: "2024",
      title: "1000+ Projects Delivered",
      description: "Celebrating over a decade of construction excellence"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Delivering accurate estimates and flawless execution in every project we undertake."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients and stakeholders to achieve shared construction goals."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing cutting-edge technology and methodologies to stay ahead of industry trends."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Maintaining the highest standards of quality and professionalism in all our services."
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "Consistently meeting deadlines and delivering projects on time and within budget."
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Promoting environmentally responsible construction practices and green building solutions."
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
              About Our Company
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Building excellence through precision, innovation, and unwavering commitment to quality construction solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-construction-darkGray mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2010 with a vision to transform the construction industry through accurate estimating and innovative project management, 
                we have grown from a small team of passionate professionals to a leading construction services company. Our journey has been marked 
                by continuous learning, technological advancement, and an unwavering commitment to client satisfaction.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-construction-blue mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  To provide accurate, reliable, and innovative construction estimating and management services that empower our clients 
                  to make informed decisions and achieve project success.
                </p>
                <h3 className="text-2xl font-bold text-construction-blue mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the most trusted partner in construction services, known for our precision, innovation, and commitment to 
                  building a sustainable future.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-construction-blue/5 rounded-lg">
                  <div className="text-3xl font-bold text-construction-blue mb-2">1000+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-construction-orange/5 rounded-lg">
                  <div className="text-3xl font-bold text-construction-orange mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-construction-blue/5 rounded-lg">
                  <div className="text-3xl font-bold text-construction-blue mb-2">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center p-6 bg-construction-orange/5 rounded-lg">
                  <div className="text-3xl font-bold text-construction-orange mb-2">99%</div>
                  <div className="text-gray-600">Accuracy Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-construction-darkGray mb-6">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our commitment to excellence in construction services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-construction-blue/10 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-construction-blue" />
                  </div>
                  <CardTitle className="text-xl text-construction-darkGray">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-construction-darkGray mb-6">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Key milestones that have shaped our growth and success in the construction industry.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-construction-blue rounded-full flex items-center justify-center text-white font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-construction-darkGray mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-construction-darkGray mb-6">Certifications & Recognition</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is recognized through industry certifications and awards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white border rounded-lg shadow-sm">
              <Award className="h-12 w-12 text-construction-blue mx-auto mb-4" />
              <h3 className="font-bold text-construction-darkGray mb-2">ISO 9001:2015</h3>
              <p className="text-sm text-gray-600">Quality Management System</p>
            </div>
            <div className="text-center p-6 bg-white border rounded-lg shadow-sm">
              <CheckCircle className="h-12 w-12 text-construction-orange mx-auto mb-4" />
              <h3 className="font-bold text-construction-darkGray mb-2">LEED Accredited</h3>
              <p className="text-sm text-gray-600">Green Building Certification</p>
            </div>
            <div className="text-center p-6 bg-white border rounded-lg shadow-sm">
              <Award className="h-12 w-12 text-construction-blue mx-auto mb-4" />
              <h3 className="font-bold text-construction-darkGray mb-2">Best Estimating Firm</h3>
              <p className="text-sm text-gray-600">Industry Excellence Award 2023</p>
            </div>
            <div className="text-center p-6 bg-white border rounded-lg shadow-sm">
              <CheckCircle className="h-12 w-12 text-construction-orange mx-auto mb-4" />
              <h3 className="font-bold text-construction-darkGray mb-2">Safety First</h3>
              <p className="text-sm text-gray-600">OSHA Compliance Certified</p>
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

export default About;
