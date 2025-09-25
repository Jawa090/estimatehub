
import { useState } from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "David Romero",
    position: "Senior Project Manager, NorthBridge Constructors",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    quote: "EstimatingHub’s numbers landed within 1.3% of our final costs on a 120,000 sq ft office build. Their clarity on inclusions and assumptions made our bid review effortless and helped us win the project.",
    rating: 5,
    project: "120k sq ft Office Expansion (NY)"
  },
  {
    id: 2,
    name: "Aisha Patel",
    position: "Director of Development, UrbanVista Realty",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: "Turnaround in 36 hours, scope gap notes we actually used, and a clean export we sent straight to lenders. This is the most dependable estimating partner we’ve used in 10+ years.",
    rating: 5,
    project: "Mixed‑Use Residential (6 floors)"
  },
  {
    id: 3,
    name: "Miguel Alvarez",
    position: "Operations Lead, Apex Industrial Group",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    quote: "We stress‑tested their takeoffs against our in‑house team on three packages—steel, drywall, and flooring. EstimatingHub was spot‑on and identified two vendor discrepancies before PO.",
    rating: 5,
    project: "Distribution Facility (250k sq ft)"
  },
  {
    id: 4,
    name: "Karen Liu",
    position: "Principal Architect, Atelier KL",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    quote: "Their conceptual estimates early in design helped us steer materials and assemblies before drawings were locked. It saved the owner six figures without sacrificing design intent.",
    rating: 5,
    project: "Ambulatory Care Center"
  }
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(1);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-construction-blue to-construction-blue/90 relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-construction-orange/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-construction-orange/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-white font-medium uppercase tracking-wider mb-2 block bg-construction-orange/30 py-1 px-4 rounded-full inline-block backdrop-blur-sm" data-aos="fade-up">Testimonials</span>
          <h2 className="text-3xl font-poppins font-bold mb-3 text-white" data-aos="fade-up">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-construction-orange mx-auto mb-6" data-aos="fade-up" data-aos-delay="100"></div>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Hear from the clients who've experienced the difference our services make
          </p>
        </div>

        <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="300">
          <div className="relative">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className={`transition-all duration-500 glass-card rounded-xl p-8 md:p-10 shadow-2xl ${
                  activeTestimonial === testimonial.id 
                    ? 'opacity-100 scale-100 z-20' 
                    : 'opacity-0 scale-95 absolute top-0 left-0 right-0'
                }`}
              >
                <Quote className="h-16 w-16 text-construction-orange/30 absolute top-6 right-6" />
                
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-24 h-24 rounded-full border-4 border-white shadow-xl object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-white text-lg md:text-xl mb-6 relative italic">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center gap-2 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          size={18} 
                          className={i < testimonial.rating ? "fill-construction-orange text-construction-orange" : "text-white/30"} 
                        />
                      ))}
                    </div>
                    
                    <div className="text-white">
                      <p className="font-semibold text-xl">{testimonial.name}</p>
                      <p className="text-gray-200 mb-1">{testimonial.position}</p>
                      <p className="text-sm text-construction-orange">Project: {testimonial.project}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10 space-x-3">
            {testimonials.map((testimonial) => (
              <button
                key={testimonial.id}
                className={`transition-all ${
                  activeTestimonial === testimonial.id 
                    ? 'bg-white w-10 h-3 rounded-full' 
                    : 'bg-white/50 hover:bg-white/70 w-3 h-3 rounded-full'
                }`}
                onClick={() => setActiveTestimonial(testimonial.id)}
                aria-label={`View testimonial from ${testimonial.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
