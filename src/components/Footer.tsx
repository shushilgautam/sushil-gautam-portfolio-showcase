
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-purple-400 hover:to-blue-400 transition-all duration-500 hover:scale-105 transform">
              Sushil Gautam
            </div>
            <p className="text-gray-400 max-w-md mx-auto text-lg leading-relaxed hover:text-gray-300 transition-colors duration-300">
              Flutter Developer passionate about creating beautiful, functional mobile applications 
              that make a difference.
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300">
                © 2024 Sushil Gautam. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-gray-400 text-sm group hover:text-gray-300 transition-colors duration-300">
                <span>Built with</span>
                <Heart size={16} className="text-red-500 fill-current group-hover:scale-110 transition-transform duration-300 animate-pulse" />
                <span>using React & Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
