import React, { useEffect, useRef, useState } from "react";
import { Shield, Bot, Eye, Zap, Users, Building } from "lucide-react";

const SolutionsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ticking = useRef(false);
  const lastScrollY = useRef(0);

  const solutions = [
    {
      name: "ROAMEO™",
      description: "Rugged mobile security robot for large outdoor spaces",
      icon: <Bot className="w-8 h-8" />,
      features: ["Autonomous patrol", "Large area coverage", "Rugged design"],
      category: "Mobile Security"
    },
    {
      name: "RADDOG™",
      description: "Quadruped robotic security K9 for law enforcement",
      icon: <Shield className="w-8 h-8" />,
      features: ["Law enforcement", "Commercial patrol", "Agile movement"],
      category: "Security K9"
    },
    {
      name: "HERO™",
      description: "Compact high-visibility deterrence unit for critical infrastructure",
      icon: <Eye className="w-8 h-8" />,
      features: ["Critical infrastructure", "High visibility", "Deterrence"],
      category: "Deterrence"
    },
    {
      name: "RIO™",
      description: "Rapid deployment tower for events and construction",
      icon: <Building className="w-8 h-8" />,
      features: ["Portable surveillance", "Event security", "Construction sites"],
      category: "Rapid Deployment"
    },
    {
      name: "ROSA™",
      description: "Wall-mounted AI device for perimeter monitoring",
      icon: <Zap className="w-8 h-8" />,
      features: ["Perimeter monitoring", "Proactive deterrence", "AI-powered"],
      category: "Perimeter Security"
    },
    {
      name: "AVA™",
      description: "AI-powered autonomous access control for gated entries",
      icon: <Users className="w-8 h-8" />,
      features: ["Access control", "Gated entries", "Lobby security"],
      category: "Access Control"
    }
  ];

  // More responsive timing function with shorter duration
  const cardStyle = {
    height: '60vh',
    maxHeight: '600px',
    borderRadius: '20px',
    transition: 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
    willChange: 'transform, opacity'
  };

  useEffect(() => {
    // Create intersection observer to detect when section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Optimized scroll handler using requestAnimationFrame
    const handleScroll = () => {
      if (!ticking.current) {
        lastScrollY.current = window.scrollY;
        
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;
          
          const sectionRect = sectionRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const totalScrollDistance = viewportHeight * 2;
          
          // Calculate the scroll progress
          let progress = 0;
          if (sectionRect.top <= 0) {
            progress = Math.min(1, Math.max(0, Math.abs(sectionRect.top) / totalScrollDistance));
          }
          
          // Determine which card should be visible based on progress
          if (progress >= 0.66) {
            setActiveCardIndex(2);
          } else if (progress >= 0.33) {
            setActiveCardIndex(1);
          } else {
            setActiveCardIndex(0);
          }
          
          ticking.current = false;
        });
        
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Card visibility based on active index instead of direct scroll progress
  const isFirstCardVisible = isIntersecting;
  const isSecondCardVisible = activeCardIndex >= 1;
  const isThirdCardVisible = activeCardIndex >= 2;

  return (
    <div 
      ref={sectionRef} 
      className="relative" 
      style={{ height: '300vh' }}
    >
      <section className="w-full h-screen py-10 md:py-16 sticky top-0 overflow-hidden bg-white" id="solutions">
        <div className="container px-6 lg:px-8 mx-auto h-full flex flex-col">
          <div className="mb-2 md:mb-3">
            <div className="flex items-center gap-4 mb-2 md:mb-2 pt-8 sm:pt-6 md:pt-4">
              <div className="pulse-chip opacity-0 animate-fade-in" style={{
                animationDelay: "0.1s"
              }}>
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">02</span>
                <span>Solutions</span>
              </div>
            </div>
            
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-1 md:mb-2">
              Our Security Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Comprehensive robotic security and facility management solutions powered by our AIR™ platform
            </p>
          </div>
          
          <div ref={cardsContainerRef} className="relative flex-1 perspective-1000">
            {/* First Card - Mobile Security */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl ${isFirstCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                zIndex: 10,
                transform: `translateY(${isFirstCardVisible ? '90px' : '200px'}) scale(0.9)`,
                opacity: isFirstCardVisible ? 0.9 : 0
              }}
            >
              <div
                className="absolute inset-0 z-0 bg-gradient-to-b from-blue-900/40 to-dark-900/80"
                style={{
                  backgroundImage: "url('/background-section1.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                  backgroundBlendMode: "overlay"
                }}
              ></div>
              
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">Mobile Security</span>
                </div>
              </div>
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white/20 rounded-lg">
                      {solutions[0].icon}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight">
                      {solutions[0].name}
                    </h3>
                  </div>
                  <p className="text-white/90 text-lg mb-4">
                    {solutions[0].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {solutions[0].features.map((feature, index) => (
                      <span key={index} className="px-3 py-1 bg-white/20 rounded-full text-white text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Second Card - Security K9 */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl ${isSecondCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                zIndex: 20,
                transform: `translateY(${isSecondCardVisible ? activeCardIndex === 1 ? '55px' : '45px' : '200px'}) scale(0.95)`,
                opacity: isSecondCardVisible ? 1 : 0,
                pointerEvents: isSecondCardVisible ? 'auto' : 'none'
              }}
            >
              <div
                className="absolute inset-0 z-0 bg-gradient-to-b from-green-900/40 to-dark-900/80"
                style={{
                  backgroundImage: "url('/background-section2.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlendMode: "overlay"
                }}
              ></div>
              
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">Security K9</span>
                </div>
              </div>
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white/20 rounded-lg">
                      {solutions[1].icon}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight">
                      {solutions[1].name}
                    </h3>
                  </div>
                  <p className="text-white/90 text-lg mb-4">
                    {solutions[1].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {solutions[1].features.map((feature, index) => (
                      <span key={index} className="px-3 py-1 bg-white/20 rounded-full text-white text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Third Card - Deterrence */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl ${isThirdCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                zIndex: 30,
                transform: `translateY(${isThirdCardVisible ? activeCardIndex === 2 ? '15px' : '0' : '200px'}) scale(1)`,
                opacity: isThirdCardVisible ? 1 : 0,
                pointerEvents: isThirdCardVisible ? 'auto' : 'none'
              }}
            >
              <div
                className="absolute inset-0 z-0 bg-gradient-to-b from-red-900/40 to-dark-900/80"
                style={{
                  backgroundImage: "url('/background-section3.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "bottom center",
                  backgroundBlendMode: "overlay"
                }}
              ></div>
              
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">Deterrence</span>
                </div>
              </div>
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white/20 rounded-lg">
                      {solutions[2].icon}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight">
                      {solutions[2].name}
                    </h3>
                  </div>
                  <p className="text-white/90 text-lg mb-4">
                    {solutions[2].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {solutions[2].features.map((feature, index) => (
                      <span key={index} className="px-3 py-1 bg-white/20 rounded-full text-white text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsSection;
