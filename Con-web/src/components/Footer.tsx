const Footer = () => {
  return (
    <footer className="bg-construction-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold">BuildersInc</span>
            </div>
            <p className="text-white/70 mb-4">
              Building tomorrow's infrastructure today with over 25 years of construction excellence.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span>f</span>
              </div>
              <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span>t</span>
              </div>
              <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span>in</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">General Contracting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Design & Build</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Project Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Renovation</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact Info</h3>
            <div className="space-y-2 text-white/70">
              <p>📍 123 Construction Ave, Building City, BC 12345</p>
              <p>📞 (555) 123-4567</p>
              <p>✉️ info@buildersinc.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/70">
          <p>&copy; 2024 BuildersInc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;