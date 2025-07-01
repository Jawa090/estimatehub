import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Phone, Mail, Award, CheckCircle, Settings, Clock, FileText, Building, Users } from "lucide-react";
import { Link } from 'react-router-dom';

const Industry = () => {
  return (
    <div className="antialiased">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">Industry-Specific Construction Estimating Services</h1>
          <p className="text-xl mb-8 opacity-90">
            At Paradise Estimating, we specialize in delivering accurate, fast, and reliable construction estimating services tailored to the needs of every industry. Whether you're bidding on a government-funded project or managing a fast-paced retail build-out, our team of certified estimators is equipped with the tools and knowledge to help you win more bids and complete your projects with confidence.
          </p>
        </div>
      </section>

      {/* Precision Estimating Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">Precision Estimating for Every Construction Sector</h2>
          <p className="text-lg text-gray-700 mb-6">
            We don't believe in one-size-fits-all estimating. Each sector comes with its own codes, compliance issues, and design standards—and we account for all of them. With deep experience across diverse construction types, we provide the clarity and precision you need to quote competitively and plan effectively.
          </p>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Industries We Serve</h2>

          {/* Government & Public Sector */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-construction-blue mb-2">Government & Public Sector Projects</h3>
              <p className="text-gray-700 mb-2">Government-funded projects require a higher standard of documentation, precision, and compliance with regulations. Our public sector estimating services are designed to ensure adherence to prevailing wage standards, facilitate navigation of bid requirements, and guarantee full compliance with local, state, and federal guidelines.</p>
              <p className="text-gray-700 mb-2">These projects typically involve intricate RFPs and complex scopes, making detailed takeoffs essential for maintaining competitiveness and avoiding underbidding. Our expertise extends to a wide range of project types, including educational institutions, public healthcare facilities, infrastructure upgrades, government buildings, public parks, and military installations.</p>
              <Link to="/contact" className="inline-block mt-2 bg-construction-orange hover:bg-orange-600 text-white font-bold py-2 px-6 rounded transition flex items-center justify-center">Learn More About Government Project Estimating <ArrowRight className="h-4 w-4 ml-2" /></Link>
            </CardContent>
          </Card>

          {/* Residential Construction */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-construction-blue mb-2">Residential Construction Projects</h3>
              <p className="text-gray-700 mb-2">Whether you're a general contractor building custom homes or a developer overseeing multi-family projects, we provide complete residential estimating solutions. We cover everything from framing to finishes and renovations to ground-up construction.</p>
              <p className="text-gray-700 mb-2"><b>Project Types:</b> Custom homes, subdivisions, townhomes, multi-family units, renovations, additions.</p>
              <p className="text-gray-700 mb-2"><b>Why It Matters:</b> Timely and accurate estimates reduce material waste, help secure financing, and ensure profitable project planning.</p>
              <Link to="/contact" className="inline-block mt-2 bg-construction-orange hover:bg-orange-600 text-white font-bold py-2 px-6 rounded transition flex items-center justify-center">Learn More About Residential Project Estimating <ArrowRight className="h-4 w-4 ml-2" /></Link>
            </CardContent>
          </Card>

          {/* Commercial & Office */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-construction-blue mb-2">Commercial & Office Projects</h3>
              <p className="text-gray-700 mb-2">Detailed Estimating for Complex Commercial Builds</p>
              <p className="text-gray-700 mb-2">Our expertise covers all aspects of construction, from framing and finishes to renovations and new builds. We specialize in a variety of project types, including custom homes, subdivisions, townhomes, multi-family units, renovations, and additions. Accurate and timely estimates are essential for minimizing material waste, securing financing, and ensuring effective project planning to maximize profitability.</p>
              <Link to="/contact" className="inline-block mt-2 bg-construction-orange hover:bg-orange-600 text-white font-bold py-2 px-6 rounded transition flex items-center justify-center">Learn More About Commercial Project Estimating <ArrowRight className="h-4 w-4 ml-2" /></Link>
            </CardContent>
          </Card>

          {/* Retail & Tenant Improvement */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-construction-blue mb-2">Retail & Tenant Improvement Projects</h3>
              <p className="text-gray-700 mb-2">Retail projects require a delicate balance of functionality, aesthetics, and timely delivery. We offer comprehensive estimating services tailored to the needs of retail spaces, including storefronts, lighting, interior fit-outs, signage, and specialty fixtures. These elements are crucial for creating attractive, customer-ready environments that align with your vision and operational goals.</p>
              <p className="text-gray-700 mb-2">Our expertise spans a range of project types, including shopping malls, retail chains, restaurants, entertainment venues, and retail tenant improvements. In the fast-paced retail sector, precision and cost control are essential. Our team ensures you meet deadlines while maintaining design integrity and cost efficiency.</p>
              <Link to="/contact" className="inline-block mt-2 bg-construction-orange hover:bg-orange-600 text-white font-bold py-2 px-6 rounded transition flex items-center justify-center">Learn More About Retail Project Estimating <ArrowRight className="h-4 w-4 ml-2" /></Link>
            </CardContent>
          </Card>

          {/* Industrial & Warehouse */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-construction-blue mb-2">Industrial & Warehouse Projects</h3>
              <p className="text-gray-700 mb-2">Industrial construction projects, characterized by complex systems, expansive square footage, and stringent safety standards, demand highly accurate and detailed estimating. We provide comprehensive services for equipment installations, structural steel, utilities, and site work, ensuring precise cost projections for large-scale projects.</p>
              <p className="text-gray-700 mb-2">Our expertise spans a variety of industrial projects, including distribution centers, factories, logistics hubs, cold storage facilities, and manufacturing plants. In such high-stakes environments, accuracy is essential when managing heavy equipment, MEP systems, and phased construction. Our team helps mitigate unexpected costs and maintains strict control over project expenses, ensuring successful project execution.</p>
              <Link to="/contact" className="inline-block mt-2 bg-construction-orange hover:bg-orange-600 text-white font-bold py-2 px-6 rounded transition flex items-center justify-center">Learn More About Industrial Project Estimating <ArrowRight className="h-4 w-4 ml-2" /></Link>
            </CardContent>
          </Card>

          {/* Turnkey, Design-Build & EPCM */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-construction-blue mb-2">Turnkey, Design-Build & EPCM Projects</h3>
              <p className="text-gray-700 mb-2">We collaborate with design-build and EPCM (Engineering, Procurement, and Construction Management) teams to provide comprehensive early-phase budgeting and lifecycle estimating. Our integrated approach ensures smooth transitions from design to construction, allowing for more efficient project delivery.</p>
              <p className="text-gray-700 mb-2">We specialize in various project types, including design-build contracts, EPCM projects, industrial turnkey developments, and cross-sector delivery models. Integrated estimating is essential for real-time cost control, supporting value engineering and informed decision-making throughout the project lifecycle. This approach maximizes project efficiency, reduces risks, and ensures that projects stay within budget while maintaining quality.</p>
              <Link to="/contact" className="inline-block mt-2 bg-construction-orange hover:bg-orange-600 text-white font-bold py-2 px-6 rounded transition flex items-center justify-center">Learn More About Design-Build Project Estimating <ArrowRight className="h-4 w-4 ml-2" /></Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">Why Choose Paradise Estimating?</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left inline-block mb-6">
            <li>Certified Industry Experts</li>
            <li>Fast 24–48 Hour Turnaround</li>
            <li>Proven Accuracy & Reliability</li>
            <li>Advanced Estimating Technology</li>
          </ul>
          <p className="text-lg text-gray-700 mb-4">Ready to Get Started? Submit your plans online in just a few clicks and receive a personalized quote from our team—fast, easy, and hassle-free.</p>
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
            <a href="/contact" className="bg-construction-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition flex items-center justify-center"><Phone className="h-5 w-5 mr-2" />Contact Us</a>
            <a href="/contact" className="bg-construction-blue hover:bg-blue-800 text-white font-bold py-3 px-8 rounded transition flex items-center justify-center"><Mail className="h-5 w-5 mr-2" />Submit Your Plans</a>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
      <BackToTop />
    </div>
  );
};

export default Industry; 