import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-12">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">AITX.ai</h3>
            <p className="text-gray-300 mb-4">
              Artificial Intelligence Technology Solutions Inc. - Transforming physical security 
              and facility automation through AI-powered robotics.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">ROAMEO™</a></li>
              <li><a href="#" className="hover:text-white transition-colors">RADDOG™</a></li>
              <li><a href="#" className="hover:text-white transition-colors">HERO™</a></li>
              <li><a href="#" className="hover:text-white transition-colors">RIO™</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ROSA™</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AVA™</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>info@aitx.ai</p>
              <p>+1 (555) 123-4567</p>
              <p>1234 Security Blvd<br />Tech City, TC 12345</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 AITX (Artificial Intelligence Technology Solutions Inc.). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
