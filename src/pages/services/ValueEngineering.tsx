import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import BackToTop from '@/components/BackToTop';
import { Phone } from 'lucide-react';

const capabilities = [
  {
    title: 'Design-Phase Value Engineering',
    desc: 'We collaborate with design teams early in the process to identify cost-saving opportunities before they are embedded into construction documents. This early intervention is where cost optimization consulting yields the highest ROI.'
  },
  {
    title: 'Life Cycle Cost Analysis',
    desc: 'Our experts perform detailed assessments of operational, maintenance, and long-term costs, enabling clients to make informed decisions that deliver savings throughout the facility\'s life span.'
  },
  {
    title: 'Cost Reduction Strategy & Implementation',
    desc: 'Using detailed cost-benefit analysis, we evaluate construction alternatives, perform functional decomposition, and offer substitute systems and materials that provide equivalent or enhanced value at a reduced cost.'
  },
  {
    title: 'Constructability & Efficiency Reviews',
    desc: 'We analyze your project\'s drawings and specifications to identify field challenges, inefficiencies, and sequencing issues, offering solutions that improve on-site productivity and reduce potential rework.'
  },
  {
    title: 'Alternative Systems & Material Evaluation',
    desc: 'We explore feasible alternatives to conventional materials and systems, presenting construction cost optimization strategies tailored to your schedule, budget, and performance objectives.'
  },
];

const whyChoose = [
  'Expertise Across Project Types and Markets: With over 12,000 successfully completed estimates, we bring unmatched industry insight to every engagement — from office towers to institutional buildings.',
  'Proven Cost Optimization Results: Our clients regularly achieve 10%–20% in cost savings through strategic value engineering initiatives without compromising scope or design integrity.',
  'Certified Estimating Professionals: Our team includes experienced cost engineers and value engineering consultants who are trained in ASTM standards, CSI formats, and industry best practices.',
  'Transparent, Collaborative Process: We work closely with owners, architects, engineers, and contractors to ensure recommendations are practical, cost-effective, and aligned with project goals.'
];

const industries = [
  'Commercial Construction: Office complexes, retail developments, and mixed-use spaces',
  'Residential Projects: Multifamily developments, townhomes, and high-end custom homes',
  'Healthcare & Institutional Facilities: Hospitals, schools, and municipal infrastructure',
  'Industrial & Utility Projects: Manufacturing plants, warehouses, and energy systems',
];

const approach = [
  'Project Assessment: We conduct a comprehensive review of project plans, scope, and cost drivers.',
  'Function & Cost Analysis: Each building system and component is evaluated to determine its necessity, cost-efficiency, and alternatives.',
  'Presentation of Recommendations: Our team delivers a detailed report outlining proposed changes, cost savings, and impacts on design, timeline, and performance.',
  'Client Review & Decision Support: We assist in evaluating the trade-offs and support implementation through cost validation and coordination with your project team.'
];

const challenges = [
  'Projects over budget and requiring redesign',
  'Developers seeking higher ROI through construction cost optimization',
  'Design teams looking to reduce complexity without compromising intent',
  'Owners seeking cost-effective construction solutions that also consider long-term performance',
];

const impact = [
  'Lower Construction Costs – Clients typically save between 10%–25% through design optimization and material substitution.',
  'Improved Constructability – Fewer RFIs, smoother workflows, and reduced rework during construction.',
  'Better Lifecycle Outcomes – Reduced operational and maintenance costs, energy efficiency gains, and extended service life of materials and systems.',
];

const ValueEngineering = () => {
  return (
    <div className="antialiased">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-construction-blue to-construction-lightBlue text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">Value Engineering Services for Construction</h1>
          <p className="text-xl mb-8 opacity-90">Strategic Cost Optimization without Compromising Design or Performance</p>
          <p className="text-lg mb-4">
            At Paradise Estimating, we specialize in delivering expert-led value engineering services that help developers, architects, and contractors reduce costs, enhance performance, and optimize building efficiency — all while preserving the integrity of your project's design. With a deep understanding of construction economics and practical field experience, our team of qualified consultants provides actionable recommendations that result in measurable cost savings.
          </p>
          <p className="text-lg mb-4">
            Whether you are in the design development stage or revisiting a project mid-cycle, our structured approach to construction value engineering identifies opportunities to streamline costs, improve constructability, and deliver long-term value.
          </p>
        </div>
      </section>

      {/* What Is Value Engineering Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">What Is Value Engineering in Construction?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Value Engineering (VE) is a disciplined, systematic methodology used to improve the value of a construction project by analyzing its functions and identifying cost-effective alternatives. The goal is to reduce unnecessary costs while maintaining — or improving — the required performance, quality, and safety.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            At Paradise Estimating, we apply this process through a rigorous evaluation of systems, materials, and methods, ensuring that every dollar spent contributes meaningfully to the project's overall value.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-8 text-construction-blue text-center">Our Value Engineering Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow p-6 text-left">
                <h3 className="text-xl font-semibold text-construction-blue mb-2">{cap.title}</h3>
                <p className="text-gray-700">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">Why Choose Paradise Estimating?</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left inline-block mb-6">
            {whyChoose.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">Industries We Serve</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left inline-block mb-6">
            {industries.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p className="text-lg text-gray-700 mt-4">No matter the scale or complexity of your project, our experts ensure cost-efficiency without compromising quality or performance.</p>
        </div>
      </section>

      {/* Structured Approach Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-8 text-construction-blue text-center">A Structured Approach to Cost Optimization</h2>
          <ol className="list-decimal list-inside text-lg text-gray-700 space-y-2 text-left inline-block mb-6">
            {approach.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* Frequently Addressed Challenges Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">Frequently Addressed Challenges</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left inline-block mb-6">
            {challenges.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Measurable Impact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-construction-blue">The Measurable Impact of Value Engineering</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left inline-block mb-6">
            {impact.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-poppins font-bold mb-6 text-construction-blue">Start Saving Today with a Tailored Value Engineering Consultation</h2>
          <p className="text-lg text-gray-700 mb-8">If your project requires smarter budgeting, greater efficiency, or a second look at material or system selection, let our expert team help you realize real, quantifiable savings.</p>
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-4">
            <a href="/contact" className="bg-construction-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded transition flex items-center justify-center"><Phone className="h-5 w-5 mr-2" />Call us today</a>
          </div>
          <p className="text-lg text-gray-700 mt-8 font-semibold">Driving Smarter Construction Decisions</p>
          <p className="text-lg text-gray-700 mb-8">With our tailored construction value engineering services, you gain more than cost savings — you gain a strategic partner committed to your project's success. Let us help you build smarter, not costlier.</p>
        </div>
      </section>

      <Footer />
      <ChatWidget />
      <BackToTop />
    </div>
  );
};

export default ValueEngineering; 