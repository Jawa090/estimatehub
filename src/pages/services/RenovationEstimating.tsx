import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import BackToTop from '@/components/BackToTop';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const residentialServices = [
  'Kitchen renovation cost estimates – cabinets, countertops, appliances, finishes',
  'Bathroom remodel estimating – plumbing, tile, lighting, fixtures',
  'Full-home remodels and additions',
  'Historic home restoration cost consulting',
  'Structural and cosmetic renovations',
];

const commercialClients = [
  'Contractors and general contractors',
  'Developers and commercial real estate firms',
  'Property managers and building owners',
];

const commercialServices = [
  'Tenant improvement (TI) estimating for leased office and retail spaces',
  'Office renovation cost calculator for layout changes, finishes, and MEP systems',
  'Retail/storefront retrofit budgets for rebranding or expansion',
  'Hospitality and restaurant upgrades',
  'Medical office and light industrial remodels',
];

const process = [
  'Digital Takeoff: We perform detailed building renovation takeoffs using advanced software and your plans.',
  'Line-Item Costing: Every material, labor hour, and subcontractor cost is accounted for in your restoration project estimate.',
  'Adaptive Reuse & Retrofit Evaluation: We specialize in budgeting for historic buildings and adaptive reuse, including code compliance and preservation requirements.',
  'Need value engineering? We help optimize scope to meet your budget without sacrificing quality.',
];

const whyChoose = [
  'Industry-Leading Accuracy: Our renovation estimates are up to 98% accurate, based on real-time pricing databases and over 12,000 completed takeoffs.',
  'Speed That Wins Bids: We deliver complete renovation cost estimates within 24–48 hours, helping you stay competitive.',
  'Transparent Pricing: No fluff, no guesswork—just clear, itemized retrofit cost estimating and line-by-line clarity.',
  'Specialized Knowledge: From adaptive reuse estimating to modern tenant improvements, our team understands the nuances of complex renovations.',
];

const faqs = [
  {
    q: 'Do you offer estimates for historic building renovations?',
    a: 'Absolutely. Our historic building renovation estimates include material sourcing, preservation requirements, and code compliance for older structures.'
  },
  {
    q: 'What\'s covered in your TI estimating?',
    a: 'Our tenant improvement estimating services include partitions, lighting, HVAC, electrical (MEP), flooring, paint, restrooms, and ADA upgrades.'
  },
  {
    q: 'Do you provide estimates without full plans?',
    a: 'Yes. We can work from sketches, scopes, or even site photos. Detailed plans are ideal, but not required.'
  },
  {
    q: 'Can I request just a kitchen or bathroom estimate?',
    a: 'Yes. Many clients request targeted estimates for kitchens, baths, or specific renovation scopes.'
  },
];

const RenovationEstimating = () => {
  return (
    <div className="antialiased">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">Accurate Renovation Cost Estimating & Remodeling Estimates</h1>
          <p className="text-xl mb-8 opacity-90">Get precise home renovation estimates and commercial remodeling costs—delivered in 24 hours. Free consultation.</p>
          <p className="text-lg mb-4">
            At Paradise Estimating, we deliver expert renovation estimating services for both residential and commercial projects. Whether you're remodeling a kitchen or retrofitting a retail space, our cost estimates help you plan with confidence and win profitable jobs.
          </p>
          <Link to="/contact" className="bg-construction-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition flex items-center justify-center inline-block mt-4"><Phone className="h-5 w-5 mr-2" />Get Your Custom Estimate &rarr;</Link>
        </div>
      </section>

      {/* Pain Point Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-poppins font-bold mb-6 text-construction-blue">Struggling with Unpredictable Renovation Budgets?</h2>
          <p className="text-lg text-gray-700 mb-4">Over 80% of remodeling projects go over budget due to unforeseen costs and inaccurate projections.</p>
          <p className="text-lg text-gray-700 mb-4">That's where we come in. Our renovation cost estimating experts provide highly accurate, detailed estimates for residential renovations, commercial remodels, and adaptive reuse projects—so you never overpay or underbid.</p>
          <p className="text-lg text-gray-700 mb-4">We help property owners, investors, and contractors stay within budget and on schedule.</p>
        </div>
      </section>

      {/* Residential Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-poppins font-bold mb-6 text-construction-blue">Home Renovation Estimator Services</h2>
          <p className="text-lg text-gray-700 mb-6">Transform your home with clarity and cost control.</p>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-6">
            {residentialServices.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p className="text-lg text-gray-700">Whether you're a homeowner, real estate investor, or house flipper, Paradise Estimating gives you the data you need to plan with precision and maximize ROI.</p>
        </div>
      </section>

      {/* Commercial Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-poppins font-bold mb-6 text-construction-blue">B2B Renovation Estimating: Offices, Retail & More</h2>
          <p className="text-lg text-gray-700 mb-6">Plan smarter and build profitably.</p>
          <p className="text-lg text-gray-700 mb-2 font-semibold">Our commercial renovation estimating solutions are trusted by:</p>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-4">
            {commercialClients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p className="text-lg text-gray-700 mb-2 font-semibold">We provide expert cost analysis for:</p>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-6">
            {commercialServices.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p className="text-lg text-gray-700">Each commercial renovation estimate is tailored to your project scope, pricing structure, and regulatory requirements.</p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-poppins font-bold mb-6 text-construction-blue">How Our Renovation Estimating Process Works</h2>
          <ol className="list-decimal list-inside text-lg text-gray-700 space-y-2 mb-6">
            {process.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-poppins font-bold mb-6 text-construction-blue">Why Choose Paradise Estimating?</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left inline-block mb-6">
            {whyChoose.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-poppins font-bold mb-6 text-construction-blue">FAQs – Renovation Estimating Services</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="text-left bg-white rounded-xl shadow p-6">
                <h3 className="text-lg font-semibold text-construction-blue mb-2">Q: {faq.q}</h3>
                <p className="text-gray-700">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-poppins font-bold mb-6 text-construction-blue">Ready for Stress-Free Renovation Planning?</h2>
          <p className="text-lg text-gray-700 mb-8">Let's take the guesswork out of renovation costs. Whether you're a homeowner or a commercial builder, Paradise Estimating provides the accuracy you need to plan, budget, and win.</p>
          <Link to="/contact" className="bg-construction-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition flex items-center justify-center inline-block mt-4"><Phone className="h-5 w-5 mr-2" />Request Your Estimate</Link>
        </div>
      </section>

      <Footer />
      <ChatWidget />
      <BackToTop />
    </div>
  );
};

export default RenovationEstimating; 