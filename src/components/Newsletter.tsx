import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Shield, Bell } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive updates about AITX security solutions and industry insights."
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="newsletter" className="bg-gray-50 py-16">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">
                <Bell className="w-3 h-3" />
              </span>
              <span>Stay Updated</span>
            </div>
          </div>
          
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Stay Ahead of Security Threats
            </h2>
            <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
              Get the latest insights on autonomous security technology, industry trends, 
              and exclusive updates on AITX's innovative robotic solutions.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-start md:items-center max-w-2xl mx-auto">
            <div className="relative flex-grow">
              <input 
                type="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                placeholder="Enter your email address" 
                className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pulse-500 text-gray-700" 
                required 
              />
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting} 
              className="bg-pulse-500 hover:bg-pulse-600 text-white font-medium py-4 px-8 rounded-full transition-all duration-300 md:ml-4 flex items-center gap-2"
            >
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <>
                  <Shield className="w-4 h-4" />
                  Subscribe
                </>
              )}
            </button>
          </form>
          
          <p className="text-sm text-gray-500 text-center mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;