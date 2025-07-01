import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Phone, Award, CheckCircle, FileText, Building, Users, Settings, Clock } from "lucide-react";
import { Link } from 'react-router-dom';

const projectTypes = [
  {
    title: "Detached Homes",
    description: "Custom cost models for luxury finishes and site-specific variables. We account for architectural uniqueness, premium materials, and regional cost fluctuations to ensure every estimate reflects the actual build conditions."
  },
  {
    title: "Apartments",
    description: "High-density unit costing with economies of scale optimization. Our models capture volume-driven cost efficiencies, from shared services to modular build strategies, helping developers increase ROI per unit."
  },
  {
    title: "Townhouses",
    description: "Repetitive element takeoffs for fast-track developments. We streamline costs for repetitive layouts, reducing errors and turnaround time for phased rollouts or prefabricated builds."
  },
  {
    title: "Housing Estates",
    description: "Phased budgeting for large-scale community builds. Our phased cost planning supports funding rounds, progressive release strategies, and seamless cost-to-completion forecasting."
  }
];

const whatSetsUsApart = [
  "98% Estimate Accuracy Guarantee",
  "24-Hour Turnaround for Urgent Bids",
  "Cloud-Based Collaboration Portal (Real-time updates, shared access for project teams)"
];

const endToEndSolutions = [
  {
    title: "Conceptual Costing (Per Unit / SQM)",
    description: "Secure financing faster with feasibility studies tailored to lender requirements. We provide early-stage pre-construction cost analysis that allows you to assess viability before investing in detailed design. Whether per square meter or per dwelling unit, our feasibility studies help you align costs with financial goals and funding benchmarks."
  },
  {
    title: "Detailed Trade Take-offs (Structure / Finishes / MEP)",
    description: "Eliminate material waste with AI-powered quantity surveys for every trade. From excavation to electrical, we deliver precise trade-by-trade takeoffs using tools like Planswift, Revit, and BIM models. We highlight material overlaps, identify waste zones, and give your subs detailed scope clarity that minimizes disputes and rework."
  },
  {
    title: "Developer Budgeting & Sales Cost Reconciliations",
    description: "Protect profit margins with real-time cost vs. sales price tracking. Our team builds cost tracking frameworks that align with your projected sales prices. With real-time feedback on margins, you can make smarter decisions on unit pricing, upgrade options, and construction sequencing."
  },
  {
    title: "Tender Pricing Support",
    description: "Win more bids with subcontractor-ready pricing packages. We package our estimates into trade-specific pricing documents designed for easy tendering. Whether you're selecting subs in California or Florida, our structured templates keep comparisons fair and transparent."
  },
  {
    title: "Variation Estimating",
    description: "Avoid change-order disputes with instant impact assessments for client/architect revisions. Scope changes are inevitable—but surprise costs aren't. Our team rapidly evaluates the cost impact of design tweaks, client upgrades, and site conditions so you can respond quickly and transparently."
  },
  {
    title: "Material Scheduling (Bundles / Rolls / Pallets)",
    description: "Just-in-time delivery planning to reduce storage costs by up to 30%. We align your material scheduling with construction phases to reduce site clutter, theft risk, and storage fees. Our deliverables include detailed breakdowns for roll goods, pallets, bundles, and unit-based delivery timelines."
  }
];

const whyBuildersChoose = [
  "Tech Advantage: Drone-based site scans + AI cost forecasting",
  "Industry Cred: Licensed Quantity Surveyors with 100+ years of combined residential experience",
  "Collaborative Approach: We work as an extension of your development team—not just an outsourced service",
  "National Reach: Serving developers in California, Texas, Florida, and nationwide",
  "Speed + Detail: 24-hour turnarounds for urgent submissions, without compromising detail"
];

const whoWeWorkWith = [
  "Property developers",
  "Home builders",
  "Construction managers",
  "Real estate investment firms",
  "Owner-builders"
];

const Residential = () => {
  return (
    <div className="antialiased">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">Residential Construction Estimating Services</h1>
          <p className="text-xl mb-8 opacity-90">
            Did you know that 70% of residential construction projects exceed their budgets due to inaccurate or incomplete estimating? That's not just a statistic—it's a costly reality for many developers and builders across the U.S.<br />
            At Paradise Estimating, we've built our reputation by flipping that stat on its head. Our expert team delivers high-precision residential estimating services that empower developers to build smarter, faster, and more profitably. Whether you're planning a custom home, a townhouse community, or a multi-story apartment block, we ensure on-time, on-budget delivery—from concept through construction.
          </p>
        </div>
      </section>

      {/* Project Expertise Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Our Residential Project Expertise</h2>
          <p className="text-lg text-gray-700 mb-8 text-center">Trusted by Top Developers for 15+ Years</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectTypes.map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-construction-blue mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-base">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">What Sets Us Apart</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left inline-block mb-6">
            {whatSetsUsApart.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* End-to-End Solutions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">End-to-End Estimating Solutions</h2>
          <p className="text-lg text-gray-700 mb-8 text-center">At Paradise Estimating, we don't just provide numbers—we provide clarity. Our full-spectrum residential estimating services are designed to support developers at every stage of the project lifecycle.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {endToEndSolutions.map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-construction-blue mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-base">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Builders Choose Paradise Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">Why Builders Choose Paradise</h2>
          <p className="text-lg text-gray-700 mb-4">Developer-Focused. Not Generic.<br />Unlike outdated per-square-foot models, our trade-specific databases reflect real-time material and labor costs in all 50 states."<br />Most estimating firms still rely on one-size-fits-all square footage pricing. We don't. At Paradise Estimating, we customize each estimate based on actual trade rates, regional labor costs, and supplier pricing trends. It's how we maintain 98% accuracy across thousands of residential projects.</p>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left inline-block mb-6">
            {whyBuildersChoose.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">Who We Work With</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left inline-block mb-6">
            {whoWeWorkWith.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p className="text-lg text-gray-700 mt-8">Whether you're developing a single infill property or launching a 500-lot master-planned community, we adapt our delivery to meet your project needs and team structure.</p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">Get a Estimate for Your Next Project</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
            <a href="/contact" className="bg-construction-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition flex items-center justify-center"><Phone className="h-5 w-5 mr-2" />Request a Quote</a>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
      <BackToTop />
    </div>
  );
};

export default Residential; 