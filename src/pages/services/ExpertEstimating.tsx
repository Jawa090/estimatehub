import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import BackToTop from '@/components/BackToTop';
import { ArrowRight, CheckCircle, Layers, ListChecks, Mail, ClipboardList } from "lucide-react";
import { Link } from 'react-router-dom';

const ExpertEstimating = () => {
  return (
    <div className="antialiased">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">Expert Construction Estimating Services</h1>
          <p className="text-xl opacity-90 mb-4">
            Looking to nail down the costs for your next construction project? We're a team of pros who specialize in creating detailed, full-cost estimates for all kinds of construction jobs across the entire country.
          </p>
          <p className="text-xl opacity-90 mb-8">
            We work with everyone from general contractors and subcontractors to homeowners, developers, and architects. Our secret weapon is our team: each estimator is an expert in a specific trade, which means you get the most precise and up-to-date expertise available. This specialization allows us to easily adjust to your project’s unique needs. We’ve handled estimates for every kind of project you can imagine, including new builds, renovations, office buildings, hospitals, restaurants, and single-family homes.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-construction-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300">
            Get a Free Quote Now <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Image Gallery 1-8 */}
      <section className="py-12 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1,2,3,4,5,6,7,8].map((n) => (
              <div key={n} className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                <img src={`/${n}.jpg`} alt="Project example" className="w-full h-40 object-cover rounded-md ring-1 ring-white/30" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Accurate Estimating Matters */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Why Accurate Estimating Matters</h2>
          <p className="text-lg text-gray-700 mb-6 text-center">
            Getting the numbers right from the start is crucial. For example, a precise residential cost estimate is the key to smart budgeting and financial planning. Our services ensure your project stays on track and within budget, helping you avoid costly surprises down the road.
          </p>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Who We Work With</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'Contractors',
              'Home builders',
              'Architects',
              'Developers',
              'Subcontractors',
              'Anyone who wants solid results!'
            ].map((label, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-construction-orange mt-1" />
                <div className="text-gray-700">{label}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/contact" className="inline-flex items-center bg-construction-orange hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get a Free Quote Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted Leader Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">Expert Construction Estimating Services: The Key to Project Success</h2>
          <p className="text-lg text-gray-700 mb-4">
            Estimating Hub Estimation is a trusted leader in the construction estimating industry with 14 years of experience delivering precise and reliable cost estimates and takeoffs. Our adherence to local pricing ensures every estimate is accurate, helping you make informed decisions and secure profitable bids.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            With a track record of excellence, we've helped clients save over $10 million annually and have a remarkable 98% project success rate with over 700 active clients and 3,658 satisfied customers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="font-semibold text-construction-blue mb-2">Detailed Cost Analysis</h3>
              <p className="text-gray-700">In-depth breakdowns by trade and project phase, including conceptual, budgeted, and GMP estimates.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="font-semibold text-construction-blue mb-2">Budget Creation & Cost Control</h3>
              <p className="text-gray-700">We ensure your project remains on track and within its financial constraints.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="font-semibold text-construction-blue mb-2">Value Engineering Services</h3>
              <p className="text-gray-700">Optimize project costs without sacrificing quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Our Specialized Estimating Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-construction-blue mb-2">Concrete & Masonry</h3>
              <p className="text-gray-700">Meticulous takeoffs and estimates for concrete and masonry work, including labor, materials, and equipment. Helps busy contractors stay on schedule and on budget.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-construction-blue mb-2">Steel & Lumber</h3>
              <p className="text-gray-700">Precise takeoffs and lumber cut lists to maximize material usage and minimize waste—critical for boosting profitability.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-construction-blue mb-2">Finishing</h3>
              <p className="text-gray-700">Accurate material takeoffs and pricing for painting, flooring, drywall, and stucco to help you secure more jobs and reduce costly reordering.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">The Estimating Hub Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <Mail className="w-6 h-6 text-construction-blue mb-2" />
              <h3 className="font-semibold mb-1">1) Send us your plans</h3>
              <p className="text-gray-700">Email drawings to sales@estimatinghub.com</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <ListChecks className="w-6 h-6 text-construction-blue mb-2" />
              <h3 className="font-semibold mb-1">2) Provide project details</h3>
              <p className="text-gray-700">Share scope and specific requirements</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <ClipboardList className="w-6 h-6 text-construction-blue mb-2" />
              <h3 className="font-semibold mb-1">3) Receive a quote</h3>
              <p className="text-gray-700">We’ll send a detailed proposal</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <Layers className="w-6 h-6 text-construction-blue mb-2" />
              <h3 className="font-semibold mb-1">4) Takeoff & estimate</h3>
              <p className="text-gray-700">You’ll get a comprehensive report</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Estimating Hub */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">Why Choose Estimating Hub Estimation?</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left inline-block mb-6">
            <li>Accurate Budget Estimates for sound financial planning.</li>
            <li>24/7 Customer Support to address your questions.</li>
            <li>Diverse Industry Expertise across all construction types.</li>
            <li>Precise Software Tools for reliable results.</li>
            <li>Efficient Decision Support to help you win more bids.</li>
          </ul>
          <p className="text-lg text-gray-700">Our 98% job success rate speaks for itself. We've had the pleasure of working with countless contractors across the USA, and their positive feedback is our greatest reward.</p>
        </div>
      </section>

      {/* Types of Estimating */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue text-center">Types of Construction Estimating Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-construction-blue mb-2">Preliminary Cost Estimates</h3>
              <p className="text-gray-700">Ideal for early project stages, these broad-scope estimates give a foundational overview of costs for decision-making.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-construction-blue mb-2">Detailed Cost Estimates</h3>
              <p className="text-gray-700">As your project progresses, we account for specifics and complexities to provide highly accurate forecasts.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-construction-blue mb-2">Unit Price Estimating</h3>
              <p className="text-gray-700">Breaks down costs into units for transparency and granular projections on complex projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">Ready to Get Your Project Moving?</h2>
          <p className="text-xl mb-8 opacity-90">We’re here to help you get the job done faster and more efficiently.</p>
          <Link to="/contact" className="inline-flex items-center bg-construction-orange hover:bg-orange-600 text-white px-10 py-5 rounded-lg font-semibold text-xl transition-colors">
            Get a Free Quote Now <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>

      <Footer />
      <ChatWidget />
      <BackToTop />
    </div>
  );
};

export default ExpertEstimating;


