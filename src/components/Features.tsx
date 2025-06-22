import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Shield, DollarSign, Users, Zap, Eye, TrendingUp } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "feature-card glass-card opacity-0 p-4 sm:p-6",
        "lg:hover:bg-gradient-to-br lg:hover:from-white lg:hover:to-pulse-50",
        "transition-all duration-300"
      )}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="rounded-full bg-pulse-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-pulse-500 mb-4 sm:mb-5">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-12 sm:py-16 md:py-20 pb-0 relative bg-gray-50" id="features" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span>Benefits</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
            Transform Your Security<br className="hidden sm:block" />with Autonomous Intelligence
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element">
            Reduce costs, improve safety, and enhance operational efficiency with AI-powered robotic solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <FeatureCard
            icon={<Shield className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="24/7 Protection"
            description="Continuous autonomous monitoring and response capabilities that never sleep, ensuring round-the-clock security coverage."
            index={0}
          />
          <FeatureCard
            icon={<DollarSign className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Cost Reduction"
            description="Significantly reduce security personnel costs while improving coverage and response times through automation."
            index={1}
          />
          <FeatureCard
            icon={<Users className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Human Safety"
            description="Keep personnel out of dangerous situations by deploying robots for hazardous or high-risk security tasks."
            index={2}
          />
          <FeatureCard
            icon={<Zap className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Instant Response"
            description="AI-powered threat detection and immediate response capabilities that react faster than human operators."
            index={3}
          />
          <FeatureCard
            icon={<Eye className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Advanced Analytics"
            description="Comprehensive data collection and analysis providing insights for improved security strategies and operational efficiency."
            index={4}
          />
          <FeatureCard
            icon={<TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Scalable Solutions"
            description="Modular design allows easy scaling from single units to comprehensive security networks across multiple locations."
            index={5}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
