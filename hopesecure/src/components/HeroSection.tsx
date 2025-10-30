import { Button } from "@/components/ui/button";
import { Shield, Zap, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-security.jpg";

const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-screen bg-hs-gradient flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-hs-blue/90 via-hs-purple/85 to-hs-blue-light/80" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold">HopeSecure</span>
              <span className="text-white/90 text-2xl font-bold">Feeder</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Test. Measure.{" "}
              <span className="text-security-green">Secure.</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Launch realistic cyber awareness simulations to measure your team's readiness against phishing and data breach attempts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={() => navigate('/dashboard')}
              >
                Start Your Campaign
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10">
                Watch Demo
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-security-green mb-2">98%</div>
                <div className="text-sm text-gray-300">Detection Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-security-green mb-2">50K+</div>
                <div className="text-sm text-gray-300">Tests Conducted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-security-green mb-2">500+</div>
                <div className="text-sm text-gray-300">Enterprise Clients</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-glow">
              <h3 className="text-white text-xl font-semibold mb-6">Why Choose HopeSecure Feeder?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Target className="h-6 w-6 text-security-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">Realistic Simulations</h4>
                    <p className="text-gray-300 text-sm">Domain imitation and authentic-looking campaigns</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-6 w-6 text-security-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">Instant Setup</h4>
                    <p className="text-gray-300 text-sm">Launch campaigns in minutes, not hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-security-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">Detailed Analytics</h4>
                    <p className="text-gray-300 text-sm">Comprehensive reporting and insights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;