import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import BackToTop from '@/components/BackToTop';
import { Phone } from 'lucide-react';

const CSIEstimating = () => {
  return (
    <div className="antialiased">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">CSI Trades Estimating Services</h1>
          <p className="text-xl mb-8 opacity-90">Professional Construction Cost Estimation for Every Trade</p>
          <p className="text-lg mb-4">
            At Paradise Estimating, our comprehensive CSI trades estimating services cover every aspect of construction, from initial site preparation to final finishes. We understand that successful construction projects require accurate construction cost estimating across all divisions, and our experienced team delivers the precision and reliability you need to bid competitively and win profitable work.
          </p>
          <p className="text-lg mb-4">
            With decades of combined experience in professional construction estimating, we provide detailed cost breakdowns that help contractors, subcontractors, and developers make informed decisions. Our estimates are based on current market conditions, local labor rates, and up-to-date material pricing, ensuring you have the most accurate information for your project planning and bidding process.
          </p>
        </div>
      </section>

      {/* Complete Trade Coverage Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-8 text-construction-blue text-center">Complete Trade Coverage Across All Construction Disciplines</h2>

          {/* Sitework & Earthwork Estimating */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-construction-blue mb-2">Sitework & Earthwork Estimating</h3>
            <p className="text-lg text-gray-700 mb-2">Accurate Costs for Excavation, Utilities & Grading</p>
            <p className="text-lg text-gray-700 mb-2">Site preparation and earthwork form the foundation of every successful construction project. Our estimating team specializes in all aspects of sitework, including excavation, grading, utility installation, and site improvements. We work with excavation contractors, site preparation specialists, and utility installation teams to provide comprehensive building trades cost analysis.</p>
            <p className="text-lg text-gray-700 mb-2">Our sitework estimates cover concrete contractors specializing in foundations and flatwork, asphalt and paving contractors for roadways and parking areas, and landscaping professionals who complete the final site improvements. This includes expertise in existing conditions estimating, earthwork estimating, and exterior improvements estimating. We understand the complexities of soil conditions, equipment requirements, and regulatory compliance that impact sitework costs.</p>
            <p className="text-lg text-gray-700 mb-2 font-semibold">Key Trades We Estimate:</p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-1 mb-2">
              <li>Excavation Contractors & Site Preparation Specialists</li>
              <li>Concrete Contractors & Asphalt Paving Teams</li>
              <li>Utility Installation & Grading Specialists</li>
              <li>Landscaping & Hardscaping Professionals</li>
            </ul>
          </div>

          {/* Structural & Foundation Estimating */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-construction-blue mb-2">Structural & Foundation Estimating</h3>
            <p className="text-lg text-gray-700 mb-2">The structural integrity of any building depends on expert foundation and framing work. Our estimates cover all aspects of structural construction, from deep foundations to complex steel erection. We work closely with concrete contractors who specialize in everything from residential footings to high-rise structural concrete systems.</p>
            <p className="text-lg text-gray-700 mb-2">This includes concrete estimating, masonry estimating, metals estimating, and special construction estimating. Masonry contractors, including brick masons, block layers, and stone masons, rely on our detailed estimates for both structural and architectural masonry work. Steel erectors and metal building contractors depend on our understanding of complex steel fabrication and erection processes.</p>
            <p className="text-lg text-gray-700 mb-2 font-semibold">Specialized Structural Trades:</p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-1 mb-2">
              <li>Concrete & Masonry Contractors</li>
              <li>Steel Erectors & Metal Building Specialists</li>
              <li>Reinforcing Steel & Precast Concrete Teams</li>
              <li>Foundation & Form Contractors</li>
            </ul>
          </div>

          {/* Framing & Carpentry Estimating */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-construction-blue mb-2">Framing & Carpentry Estimating</h3>
            <p className="text-lg text-gray-700 mb-2">Carpentry remains one of the most diverse and skill-intensive trades in construction. Our estimates cover rough carpenters who handle structural framing, finish carpenters who specialize in trim and millwork, and cabinet makers who create custom cabinetry solutions. This includes wood plastics composites estimating.</p>
            <p className="text-lg text-gray-700 mb-2">Millwork contractors and architectural woodwork specialists require detailed estimates that account for custom fabrication, specialty materials, and skilled installation. Our estimates also cover stair builders, deck builders, and door and window installers—falling under openings estimating.</p>
            <p className="text-lg text-gray-700 mb-2 font-semibold">Carpentry Specializations:</p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-1 mb-2">
              <li>Rough & Finish Carpenters</li>
              <li>Cabinet Makers & Millwork Contractors</li>
              <li>Stair Builders & Deck Construction Specialists</li>
              <li>Door, Window & Wood Flooring Installers</li>
            </ul>
          </div>

          {/* Roofing & Waterproofing Estimating */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-construction-blue mb-2">Roofing & Waterproofing Estimating</h3>
            <p className="text-lg text-gray-700 mb-2">Protecting buildings from the elements requires expert roofing and waterproofing professionals. Our estimates cover roofing contractors who work with all roofing systems, from basic shingles to complex membrane systems. We also estimate for thermal and moisture protection estimating.</p>
            <p className="text-lg text-gray-700 mb-2">Sheet metal workers who specialize in metal roofing and custom flashings rely on our detailed material and labor calculations. Waterproofing contractors and caulking specialists require estimates that account for both materials and the specialized techniques needed for effective building envelope protection.</p>
            <p className="text-lg text-gray-700 mb-2 font-semibold">Weather Protection Specialists:</p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-1 mb-2">
              <li>Roofing Contractors & Sheet Metal Workers</li>
              <li>Waterproofing & Sealant Specialists</li>
              <li>Membrane & Specialty Roofing Teams</li>
              <li>Gutter & Drainage System Installers</li>
            </ul>
          </div>

          {/* Mechanical Estimating Services */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-construction-blue mb-2">Mechanical Estimating Services</h3>
            <p className="text-lg text-gray-700 mb-2">Mechanical systems are the heart of modern buildings, requiring precise installation and careful cost planning. Our plumbing estimates cover master plumbers and licensed plumbing contractors handling plumbing estimating.</p>
            <p className="text-lg text-gray-700 mb-2">HVAC contractors depend on our detailed estimates for heating, cooling, and ventilation systems under HVAC estimating. We also estimate fire suppression estimating and specialized trades like geothermal and boiler technicians.</p>
            <p className="text-lg text-gray-700 mb-2 font-semibold">Core Mechanical Disciplines:</p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-1 mb-2">
              <li>Master Plumbers & Plumbing Contractors</li>
              <li>HVAC & Refrigeration Specialists</li>
              <li>Ductwork & Controls Contractors</li>
              <li>Boiler & Geothermal System Experts</li>
            </ul>
          </div>

          {/* Electrical Estimating Services */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-construction-blue mb-2">Electrical Estimating Services</h3>
            <p className="text-lg text-gray-700 mb-2">Modern electrical systems require expert installation and precise trade estimating services. Our estimates serve licensed electricians, from residential specialists to industrial electrical contractors under electrical estimating.</p>
            <p className="text-lg text-gray-700 mb-2">Low voltage technicians and telecommunications installers rely on our communications estimating and electronic safety and security estimating. Solar installation specialists depend on our understanding of renewable energy systems and associated electrical work.</p>
            <p className="text-lg text-gray-700 mb-2 font-semibold">Electrical Specializations:</p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-1 mb-2">
              <li>Licensed Electricians & Electrical Contractors</li>
              <li>Industrial & Commercial Electrical Teams</li>
              <li>Solar & Low Voltage Specialists</li>
              <li>Security & Fire Alarm System Installers</li>
            </ul>
          </div>

          {/* Interior Finishes Estimating */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-construction-blue mb-2">Interior Finishes Estimating</h3>
            <p className="text-lg text-gray-700 mb-2">Interior finishes transform construction projects into completed spaces. Our estimates cover all aspects of finishes estimating. Flooring contractors specialize in everything from carpet installation to polished concrete.</p>
            <p className="text-lg text-gray-700 mb-2">We also estimate specialties estimating, furnishings estimating, and even equipment estimating, covering contractors like tile setters, drywall specialists, painters, and acoustical ceiling installers.</p>
            <p className="text-lg text-gray-700 mb-2 font-semibold">Interior Finish Specialists:</p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-1 mb-2">
              <li>Flooring Contractors & Tile Setters</li>
              <li>Painting & Finishing Specialists</li>
              <li>Drywall & Acoustical Contractors</li>
              <li>Custom Interior Installation Teams</li>
            </ul>
          </div>

          {/* All-Inclusive CSI Division Estimating */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-construction-blue mb-2">All-Inclusive CSI Division Estimating</h3>
            <p className="text-lg text-gray-700 mb-2">Our estimating services go beyond simple material and labor calculations. We provide CSI MasterFormat estimating analysis that includes equipment costs, overhead factors, and risk assessment. Whether you're a general contractor coordinating multiple trades or a specialty contractor focused on one, Paradise Estimating delivers the detailed insight you need.</p>
            <p className="text-lg text-gray-700 mb-2">Each estimate reflects trade-specific estimating realities like tools, skilled labor, and premium materials, ensuring our clients receive dependable construction trades estimation across all CSI divisions.</p>
          </div>

          {/* Projects We Estimate */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-construction-blue mb-2">Projects We Estimate | Residential, Commercial, Industrial & Institutional Sectors</h3>
            <p className="text-lg text-gray-700 mb-2">Paradise Estimating supports a wide range of projects including commercial, residential, industrial, and institutional work. Whether your job requires general requirements estimating or specialized conveying systems estimating, we deliver precision and speed.</p>
          </div>

          {/* Why Contractors Trust Paradise Estimating */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-construction-blue mb-2">Why Contractors Trust Paradise Estimating | Expert CSI Trades Cost Analysis</h3>
            <p className="text-lg text-gray-700 mb-2">Our expertise in CSI trades estimating stems from working across all CSI divisions and maintaining real-time cost databases. Every estimate includes a full building trades cost analysis—material, labor, equipment, and overhead.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-poppins font-bold mb-6 text-construction-blue">Get Started Today</h2>
          <p className="text-lg text-gray-700 mb-8">Whether your project involves a single CSI division or spans across multiple, Paradise Estimating provides reliable trade estimating services tailored to your needs. Reach out today.</p>
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-4">
            <a href="/contact" className="bg-construction-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition flex items-center justify-center"><Phone className="h-5 w-5 mr-2" />Contact Us</a>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
      <BackToTop />
    </div>
  );
};

export default CSIEstimating; 