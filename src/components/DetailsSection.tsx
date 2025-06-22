import React, { useState } from "react";
import { toast } from "sonner";
import { Building, Users, Shield, Bot } from "lucide-react";

const AboutSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.fullName || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Demo form submission
    toast.success("Message sent successfully! We'll get back to you soon.");

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      company: "",
      message: ""
    });
  };

  const subsidiaries = [
    {
      name: "RAD",
      description: "Robotic Assistance Devices - Core security robotics",
      icon: <Shield className="w-6 h-6" />
    },
    {
      name: "RAD-M",
      description: "Mobile security and patrol solutions",
      icon: <Bot className="w-6 h-6" />
    },
    {
      name: "RAD-R",
      description: "Remote monitoring and response systems",
      icon: <Building className="w-6 h-6" />
    },
    {
      name: "RAD-G",
      description: "Government and law enforcement solutions",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <section id="about" className="w-full bg-white py-0">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {/* Left Card - About AITX */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
            {/* Card Header with background image instead of gradient */}
            <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex items-end" style={{
              backgroundImage: "url('/background-section3.png')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}>
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold">
                About AITX
              </h2>
            </div>
            
            {/* Card Content */}
            <div className="bg-white p-4 sm:p-8" style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #ECECEC"
            }}>
              <h3 className="text-lg sm:text-xl font-display mb-6 sm:mb-8">
                Transforming security through autonomous intelligence
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  AITX (Artificial Intelligence Technology Solutions Inc.) is a trailblazer in transforming 
                  the landscape of physical security, facility automation, and AI-enhanced robotics. Through 
                  our flagship platform, Autonomous Intelligent Response (AIR™), we leverage the power of AI, 
                  computer vision, edge processing, and advanced robotics.
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Our Subsidiaries:</h4>
                  {subsidiaries.map((sub, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-pulse-500 flex items-center justify-center mt-1 flex-shrink-0">
                        <div className="text-white">
                          {sub.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="p-3 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                          <span className="font-semibold text-base">{sub.name}:</span> {sub.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Contact Form */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
            {/* Card Header with background image instead of gradient */}
            <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex flex-col items-start" style={{
              backgroundImage: "url('/background-section1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}>
              <div className="inline-block px-4 sm:px-6 py-2 border border-white text-white rounded-full text-xs mb-4">
                Get in touch
              </div>
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold mt-auto">
                Contact us
              </h2>
            </div>
            
            {/* Card Content - Form */}
            <div className="bg-white p-4 sm:p-8" style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #ECECEC"
            }}>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <input 
                    type="text" 
                    name="fullName" 
                    value={formData.fullName} 
                    onChange={handleChange} 
                    placeholder="Full name" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent" 
                    required 
                  />
                </div>
                
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Email address" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent" 
                    required 
                  />
                </div>
                
                <div>
                  <input 
                    type="text" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    placeholder="Company (optional)" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent" 
                  />
                </div>

                <div>
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Tell us about your security needs..." 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent resize-none" 
                  />
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="w-full px-6 py-3 bg-pulse-500 hover:bg-pulse-600 text-white font-medium rounded-full transition-colors duration-300"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
