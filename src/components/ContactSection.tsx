import { useState, useEffect } from 'react';
import { Mail, Phone, Github, Linkedin, Send, MapPin, Calendar, Clock } from 'lucide-react';

const ContactSection = () => {
  // State management remains the same
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [currentHour, setCurrentHour] = useState(0);

  useEffect(() => {
    // Time and availability logic remains the same
    const now = new Date();
    setCurrentHour(now.getHours());
    
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentHour(now.getHours());
    }, 60000);
    
    return () => clearInterval(interval);
  }, []);

  // Form handling functions remain the same
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Determine availability status
  const isAvailable = currentHour >= 9 && currentHour < 18;
  const availabilityStatus = isAvailable ? 
    { text: 'Available now', color: 'bg-green-100 text-green-700' } : 
    { text: 'Available Mon-Fri, 9AM-6PM', color: 'bg-amber-100 text-amber-700' };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shushilgautam@proton.me',
      href: 'mailto:shushilgautam@proton.me',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+977 9843499339',
      href: 'tel:+9779843499339',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Butwal, Nepal',
      href: 'https://maps.google.com/?q=Butwal,Nepal',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Calendar,
      label: 'Availability',
      value: availabilityStatus.text,
      color: availabilityStatus.color
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/shushilgautam',
      color: 'bg-gray-900 hover:bg-gray-800'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/shushilgautam/',
      color: 'bg-blue-700 hover:bg-blue-800'
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-50 to-amber-50 rounded-full border border-orange-100 mb-4 group hover:shadow-sm transition-all duration-300">
            <span className="text-sm font-medium text-orange-700">Get In Touch</span>
            <span className="h-1 w-1 rounded-full bg-orange-400"></span>
            <span className="text-xs text-orange-500 group-hover:translate-x-0.5 transition-transform">Let's talk</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's Create Something <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Amazing</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Reach out and I'll respond within 24 hours.
          </p>
        </div>
      
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-100">Contact Information</h3>
              
              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, href, color, label, value }, index) => (
                  <a
                    key={index}
                    href={href}
                    target={href?.startsWith('http') ? '_blank' : '_self'}
                    rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                  >
                    <div
                      className={`p-3 rounded-lg ${color} group-hover:scale-110 transition-transform flex items-center justify-center`}
                    >
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">{label}</p>
                      <p className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 pt-5 border-t border-gray-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Connect With Me</h4>
                <div className="flex gap-3">
                  {socialLinks.map(({ icon: Icon, href, color, label }, index) => (
                    <a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`p-4 rounded-xl transition-all duration-300 ${color} text-white flex items-center justify-center transform hover:-translate-y-1 hover:shadow-md`}
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            
          </div>
          
          {/* Right Column - Contact Form (now wider) */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-full hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-100">
                <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                  <Send size={20} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Send a Message</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-base hover:border-gray-300"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-base hover:border-gray-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none text-base hover:border-gray-300"
                    placeholder="Tell me about your project goals, timeline, and budget..."
                  />
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl transition-all duration-300 font-medium shadow-sm ${
                      isSubmitting 
                        ? 'bg-gray-300 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white hover:shadow-md transform hover:-translate-y-0.5'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                  
                  {submitSuccess && (
                    <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center animate-fade-in">
                      🎉 Thanks for your message! I'll get back to you soon.
                    </div>
                  )}
                </div>
              </form>
              
              <div className="mt-4 pt-2 border-t border-gray-100">
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                      <Phone size={18} />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Prefer a call?</p>
                    <p className="text-sm text-gray-600">Schedule a 15-min intro call to discuss your project</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
            <span className="text-sm text-gray-600">Looking forward to hearing from you</span>
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;