import React, { useRef } from "react";
import { Shield, Building, Users, Eye } from "lucide-react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  company: string;
  icon: React.ReactNode;
  backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [
  {
    content: "AITX's ROAMEO robots have transformed our campus security. We've seen a 60% reduction in security incidents while cutting operational costs by 40%.",
    author: "Sarah Chen",
    role: "Chief Security Officer",
    company: "TechCorp University",
    icon: <Shield className="w-6 h-6" />,
    backgroundImage: "/background-section1.png"
  },
  {
    content: "The RADDOG units deployed at our manufacturing facilities provide 24/7 surveillance that human guards simply couldn't match. Response times improved dramatically.",
    author: "Michael Rodriguez",
    role: "Facility Manager",
    company: "Global Manufacturing Inc.",
    icon: <Building className="w-6 h-6" />,
    backgroundImage: "/background-section2.png"
  },
  {
    content: "HERO's deterrence capabilities at our critical infrastructure sites have been game-changing. The AI-powered threat detection is incredibly accurate.",
    author: "Dr. Amara Patel",
    role: "Security Director",
    company: "Energy Solutions Corp",
    icon: <Eye className="w-6 h-6" />,
    backgroundImage: "/background-section3.png"
  },
  {
    content: "AITX's AIR platform integrates seamlessly with our existing systems. The ROI was immediate and the scalability allows us to expand security coverage easily.",
    author: "Jason Lee",
    role: "IT Security Manager",
    company: "Innovative Solutions Inc.",
    icon: <Users className="w-6 h-6" />,
    backgroundImage: "/background-section1.png"
  }
];

const TestimonialCard = ({
  content,
  author,
  role,
  company,
  icon,
  backgroundImage = "/background-section1.png"
}: TestimonialProps) => {
  return (
    <div 
      className="bg-cover bg-center rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden" 
      style={{
        backgroundImage: `url('${backgroundImage}')`
      }}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 backdrop-blur-sm z-10 rounded-bl-full flex items-start justify-end p-4">
        <div className="text-white">
          {icon}
        </div>
      </div>
      
      <div className="relative z-0">
        <p className="text-xl mb-8 font-medium leading-relaxed pr-20">{`"${content}"`}</p>
        <div>
          <h4 className="font-semibold text-xl">{author}</h4>
          <p className="text-white/80">{role}</p>
          <p className="text-white/60 text-sm">{company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 bg-white relative" id="testimonials" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span>
            <span>Success Stories</span>
          </div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-left">
          Trusted by Industry Leaders
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              content={testimonial.content} 
              author={testimonial.author} 
              role={testimonial.role} 
              company={testimonial.company}
              icon={testimonial.icon}
              backgroundImage={testimonial.backgroundImage} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
