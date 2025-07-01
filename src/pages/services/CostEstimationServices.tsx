import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  BarChart3,
  DollarSign,
  FileText,
  Building,
  Shield,
  Settings,
  Truck,
  Layers,
  Thermometer,
  Hammer,
  Ruler,
  Droplets,
  Wrench,
  Lightbulb,
  HardHat,
  Paintbrush,
  Home,
  Award,
  Phone,
  Mail,
  ArrowRight,
  Factory,
  Star,
  Clock
} from "lucide-react";

const csiDivisions = [
  { name: "02 Sitework & Earthwork", description: "excavation, grading, utilities", icon: <Truck className="h-6 w-6" /> },
  { name: "03 Concrete", description: "foundations, flatwork, tilt‑up, precast", icon: <Building className="h-6 w-6" /> },
  { name: "04 Masonry", description: "CMU, brick, stone", icon: <Hammer className="h-6 w-6" /> },
  { name: "05 Metals", description: "structural steel, miscellaneous iron, rebar", icon: <Building className="h-6 w-6" /> },
  { name: "06 Wood, Lumber, Millwork & Cabinetry", description: "rough carpentry, finish carpentry, custom casework", icon: <Wrench className="h-6 w-6" /> },
  { name: "07 Thermal & Moisture Protection", description: "roofing, waterproofing, insulation, stucco", icon: <Layers className="h-6 w-6" /> },
  { name: "08 Openings", description: "doors, frames, hardware, windows, curtain wall", icon: <Home className="h-6 w-6" /> },
  { name: "09 Finishes", description: "drywall, ceilings, painting, flooring, specialties", icon: <Paintbrush className="h-6 w-6" /> },
  { name: "10–14 Specialties, Equipment & Furnishings", description: "", icon: <Award className="h-6 w-6" /> },
  { name: "21–23 MEP", description: "fire suppression, plumbing, HVAC, electrical, low‑voltage", icon: <Settings className="h-6 w-6" /> },
];

const projectTypes = [
  { name: "Residential", description: "Custom homes, multi‑family, renovations", icon: <Home className="h-6 w-6" /> },
  { name: "Commercial", description: "Offices, retail, restaurants, hospitality", icon: <Building className="h-6 w-6" /> },
  { name: "Industrial", description: "Warehouses, process plants, manufacturing", icon: <Factory className="h-6 w-6" /> },
  { name: "Institutional", description: "K‑12, higher‑ed, healthcare, public safety", icon: <Award className="h-6 w-6" /> },
  { name: "Civil & Infrastructure", description: "Roads, bridges, utilities, urban development", icon: <Truck className="h-6 w-6" /> },
  { name: "Sports & Entertainment", description: "Arenas, recreation centers, parks", icon: <Star className="h-6 w-6" /> },
  { name: "Marine & Mining", description: "Piers, bulkheads, mine facilities", icon: <Droplets className="h-6 w-6" /> },
  { name: "Mixed‑Use & High‑Rise Developments", description: "", icon: <Building className="h-6 w-6" /> },
];

const servicePortfolio = [
  { name: "Preliminary / Budget Estimates", description: "Early‑stage ROM and Class 5–3 budgets that test feasibility, secure financing, and set cost parameters.", icon: <BarChart3 className="h-6 w-6" /> },
  { name: "Design‑Phase Detailed Estimates (SD → DD → CD)", description: "Progressive material, labor, and equipment pricing that evolves alongside your drawings—pinpointing cost drivers before they become change orders.", icon: <FileText className="h-6 w-6" /> },
  { name: "Bid / Tender Estimates", description: "Highly competitive, fully scoped bids for GCs and subs. We highlight inclusions, exclusions, and clarifications so you bid confidently and profitably.", icon: <CheckCircle className="h-6 w-6" /> },
  { name: "Conceptual Estimating", description: "When drawings are scarce, we extrapolate from benchmarks, parametric data, and historical cost models to give you a realistic \"back‑of‑napkin\" number.", icon: <Award className="h-6 w-6" /> },
  { name: "Labor & Equipment Rate Analysis", description: "Localized wage, crew‑mix, and equipment‑cost studies to optimize resource allocation and uncover savings.", icon: <DollarSign className="h-6 w-6" /> },
  { name: "Life‑Cycle Cost Analysis", description: "Total cost of ownership (TCO) projections—including O&M, energy, and replacement—so owners can select the most economical design solutions.", icon: <BarChart3 className="h-6 w-6" /> },
  { name: "Value Engineering Support", description: "Collaborative option studies that trim unnecessary spend while protecting performance, aesthetics, and schedule.", icon: <Settings className="h-6 w-6" /> },
  { name: "Change‑Order Pricing", description: "Rapid, bullet‑proof pricing for scope revisions—helping you maintain tight control over project cost drift.", icon: <CheckCircle className="h-6 w-6" /> },
];

const benefits = [
  { benefit: "Cost Savings", result: "No salaries, software licenses, or training overhead", icon: <DollarSign className="h-6 w-6" /> },
  { benefit: "Speed & Capacity", result: "Bid more projects without burnout", icon: <BarChart3 className="h-6 w-6" /> },
  { benefit: "Third‑Party Credibility", result: "Independent numbers add weight in lender & owner meetings", icon: <Award className="h-6 w-6" /> },
  { benefit: "Flexibility", result: "Scale up or down as project load fluctuates", icon: <Settings className="h-6 w-6" /> },
];

const software = [
  { name: "Planswift", icon: <FileText className="h-6 w-6" /> },
  { name: "Bluebeam", icon: <FileText className="h-6 w-6" /> },
  { name: "FastPIPE", icon: <FileText className="h-6 w-6" /> },
  { name: "Trimble", icon: <FileText className="h-6 w-6" /> },
  { name: "Xactimate", icon: <FileText className="h-6 w-6" /> },
  { name: "Quest Estimating", icon: <FileText className="h-6 w-6" /> },
];

const workflow = [
  { step: 1, title: "Submit Drawings & Specs", description: "Upload via our secure portal or email.", icon: <FileText className="h-6 w-6" /> },
  { step: 2, title: "Receive Quote", description: "We outline scope, turnaround, and lump‑sum fee.", icon: <DollarSign className="h-6 w-6" /> },
  { step: 3, title: "Estimate Preparation", description: "Quantities, unit pricing, labor curves, mark‑ups.", icon: <BarChart3 className="h-6 w-6" /> },
  { step: 4, title: "Delivery & Review", description: "You receive a neatly organized Excel or native software file plus PDF marked‑up drawings.", icon: <CheckCircle className="h-6 w-6" /> },
];

const CostEstimationServices = () => {
  return (
    <div className="antialiased">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">Construction Cost Estimating Services</h1>
          <p className="text-xl mb-8 opacity-90">
            At Paradise Estimating, we deliver precise, reliable, and fully coordinated cost estimates that keep your construction projects—of any size or complexity—on budget and on schedule. Whether you're planning a single‑family residence, a mixed‑use high‑rise, or a heavy‑industrial facility, our certified estimating team tailors every deliverable to your exact scope, timeline, and market conditions.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Why Builders Choose Paradise Estimating</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <CheckCircle className="h-6 w-6 text-construction-orange flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700"><b>Trade‑Specialist Expertise:</b> Each estimator is a CSI division specialist—sitework, concrete, metals, MEP, millwork & cabinetry, and more—led by a senior estimator who ensures total scope coverage.</span>
                </div>
                <div className="flex items-start space-x-4 mb-4">
                  <Award className="h-6 w-6 text-construction-orange flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700"><b>Standards‑Driven Accuracy:</b> We follow AACE International and AIQS best‑practice protocols, resulting in dependable quantities, realistic productivity rates, and defensible unit prices.</span>
                </div>
                <div className="flex items-start space-x-4 mb-4">
                  <Clock className="h-6 w-6 text-construction-orange flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700"><b>Fast Turnarounds:</b> Need numbers quickly? Most estimates are delivered within 24–48 hours without sacrificing depth or detail.</span>
                </div>
                <div className="flex items-start space-x-4">
                  <Settings className="h-6 w-6 text-construction-orange flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700"><b>Scalable Support:</b> Outsource a single bid or your entire estimating department—only pay for what you need, exactly when you need it.</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Portfolio Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Service Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicePortfolio.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="text-construction-orange mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-construction-darkGray mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CSI Divisions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Expertise Across All 16 CSI Divisions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {csiDivisions.map((division, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="text-construction-orange mb-2 flex justify-center">{division.icon}</div>
                  <h3 className="text-lg font-semibold text-construction-darkGray mb-1">{division.name}</h3>
                  <p className="text-gray-600 text-sm">{division.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-lg text-gray-700 mt-8 text-center">From single‑trade takeoffs to full‑division reconciliations, we supply clear, itemized cost breakdowns you can trust.</p>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Project Types & Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="text-construction-orange mb-2 flex justify-center">{type.icon}</div>
                  <h3 className="text-lg font-semibold text-construction-darkGray mb-1">{type.name}</h3>
                  <p className="text-gray-600 text-sm">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Estimating Software Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Estimating Software We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-center">
            {software.map((tool, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="text-construction-orange mb-2 flex justify-center">{tool.icon}</div>
                  <h3 className="text-lg font-semibold text-construction-darkGray mb-1">{tool.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-lg text-gray-700 mt-8 text-center">By utilizing these powerful tools, we can deliver comprehensive and detailed estimates that align with your project's specific requirements.</p>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Transparent Four‑Step Workflow</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflow.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="bg-construction-orange text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">{step.step}</div>
                  <div className="text-construction-orange mb-2 flex justify-center">{step.icon}</div>
                  <h3 className="text-lg font-semibold text-construction-darkGray mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Outsource & Gain the Edge</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="text-construction-orange mb-2 flex justify-center">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-construction-darkGray mb-1">{item.benefit}</h3>
                  <p className="text-gray-600 text-sm">{item.result}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">Ready for Accurate Numbers?</h2>
          <p className="text-lg text-gray-700 mb-4">Ready to get started? Here's how you can request a quote and get in touch with us:</p>
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
            <a href="/contact" className="bg-construction-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition flex items-center justify-center"><Phone className="h-5 w-5 mr-2" />Request a Quote</a>
            <a href="/contact" className="bg-construction-blue hover:bg-blue-800 text-white font-bold py-3 px-8 rounded transition flex items-center justify-center"><Mail className="h-5 w-5 mr-2" />Contact Us</a>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
      <BackToTop />
    </div>
  );
};

export default CostEstimationServices;
