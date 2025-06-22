import React from "react";
import { Brain, Eye, Shield, Zap } from "lucide-react";

const SpecsSection = () => {
  const capabilities = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Decision Making",
      description: "Autonomous intelligent response system with real-time threat assessment"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Computer Vision",
      description: "Advanced facial recognition, license plate detection, and behavioral analytics"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Firearm Detection",
      description: "Proactive weapon identification and threat response capabilities"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Edge Processing",
      description: "Local AI processing for faster response times and reduced latency"
    }
  ];

  return (
    <section className="w-full py-6 sm:py-10 bg-white" id="specifications">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">03</span>
              <span>Technology</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        {/* Main content with text mask image - responsive text sizing */}
        <div className="max-w-5xl pl-4 sm:pl-8 mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display leading-tight mb-8 sm:mb-12">
            <span className="block bg-clip-text text-transparent bg-[url('/text-mask-image.jpg')] bg-cover bg-center">
              AIR™ Platform: Where AI meets autonomous security. Our proprietary RADPack™ technology delivers intelligent, scalable solutions that work seamlessly with your existing infrastructure while providing 24/7 protection and operational efficiency.
            </span>
          </h2>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-pulse-500 rounded-lg text-white">
                  {capability.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {capability.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
