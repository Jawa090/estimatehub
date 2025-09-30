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
          <p className="text-xl mb-4 opacity-90">
            Accurate residential cost estimates are crucial for the success of any construction project, but they can be complex and time-consuming. Miscalculations can lead to costly delays or, worse, losing a bid. We provide reliable and precise residential estimating services designed to help you succeed.
          </p>
          <p className="text-xl mb-8 opacity-90">
            Our services are tailored for both homeowners and builders, providing detailed project cost evaluations that account for the latest market trends and construction methodologies. We also include contingency planning to identify and manage potential risks, ensuring your project stays on track and within budget.
          </p>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-12 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
              <img src="/6.jpg" alt="Residential estimating image 1" className="w-full h-64 object-cover rounded-md ring-1 ring-white/30" />
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
              <img src="/7.jpg" alt="Residential estimating image 2" className="w-full h-64 object-cover rounded-md ring-1 ring-white/30" />
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
              <img src="/8.jpg" alt="Residential estimating image 3" className="w-full h-64 object-cover rounded-md ring-1 ring-white/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Residential Estimating Portfolio */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">Our Residential Estimating Portfolio</h2>
          <p className="text-lg text-gray-700 mb-6">With years of experience, we've developed deep insights into residential projects of all types. We provide single-family and multi-family residential estimating services that have contributed to the successful completion of a wide range of properties, including:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Single-Family Housing & Custom Homes</li>
              <li>Bungalows & Cottages</li>
              <li>Multi-Family Housing & Apartments</li>
            </ul>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Mansions & Modular Housing</li>
              <li>Duplexes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Your Residential Estimating Needs? */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">Why Choose Us for Your Residential Estimating Needs?</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left inline-block mb-6">
            <li>Accurate Budget Estimates: We provide precise forecasts for sound financial planning.</li>
            <li>Diverse Industry Expertise: Our knowledge spans all residential construction types.</li>
            <li>Precise Software Tools: We use the latest technology to ensure reliable results.</li>
            <li>Efficient Decision Support: Our estimates give you the confidence to win more bids.</li>
            <li>24/7 Customer Support: We're always available to answer your questions.</li>
          </ul>
        </div>
      </section>

      {/* Specialized Estimating for All Residential Trades */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Specialized Estimating for All Residential Trades</h2>
          <p className="text-lg text-gray-700 mb-6 text-center">Our residential estimators are skilled in providing detailed cost breakdowns for a wide variety of trades, from small tasks to large-scale projects. We provide services for:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Lumber & Framing</li>
              <li>Concrete & Masonry</li>
              <li>MEP & Electrical</li>
              <li>Earthworks & Site Improvements</li>
            </ul>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Doors, Windows & Millwork</li>
              <li>Roofing & Siding</li>
              <li>Painting & Finishes</li>
              <li>Landscaping</li>
            </ul>
          </div>
          <p className="text-lg text-gray-700 mt-6 text-center">We can also assist with preliminary estimates, even if your plans are not fully finalized. Our services cover sub-structures, super-structures, finishing, and all trades.</p>
        </div>
      </section>

      {/* For Homeowners & Contractors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">For Homeowners & Contractors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-construction-blue mb-2">For Homeowners</h3>
              <p className="text-gray-700">Our services help you evaluate the true cost of your dream home, including all required materials and labor, allowing you to avoid surprises.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-construction-blue mb-2">For Contractors</h3>
              <p className="text-gray-700">We act as an extension of your team, providing a detailed plan that ensures you get accurate quotes every time. This allows you to focus on your core responsibilities and streamlines your workflow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-construction-blue">Ready to get a precise estimate for your next project?</h2>
          <p className="text-lg text-gray-700 mb-6">Get a free quote today!</p>
          <div className="flex justify-center">
            <a href="/contact" className="bg-construction-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition flex items-center justify-center"><Phone className="h-5 w-5 mr-2" />Get Free Quote</a>
          </div>
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