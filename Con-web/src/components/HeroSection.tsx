import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-r from-black/60 to-black/40">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Building Tomorrow's Infrastructure Today
              </h1>
              <p className="text-lg mb-8 text-white/90 leading-relaxed">
                In id enim odio. Nunc aliquet diam tortor, et venenatis urna sagittis non. Suspendisse sodales nulla sit amet sem condimentum, ac euismod nibh elementum. Praesent eu urna at sem sodales venenatis. Mauris efficitur dapibus enim in posuere
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-lg">
                LEARN MORE
              </Button>
            </div>
            
            {/* Stats Cards */}
            <div className="flex gap-4 mt-12">
              <div className="bg-black text-white rounded-lg p-6 text-center min-w-[160px]">
                <div className="text-4xl font-bold mb-2">147</div>
                <div className="text-sm opacity-90">Project Completed</div>
              </div>
              
              <div className="bg-primary text-white rounded-lg p-6 text-center min-w-[160px]">
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-sm">Years of Experience</div>
              </div>
            </div>
          </div>
          
          {/* Right Info Card */}
          <div className="lg:col-span-5 flex justify-end">
            <div className="bg-white rounded-2xl p-8 shadow-xl max-w-md w-full">
              <h3 className="text-xl font-bold mb-6 text-foreground">
                We Construct and Manage Places and Infrastructures
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">General Contract</h4>
                    <p className="text-sm text-muted-foreground">Quisque condimentum erat ac orci blandit, in sollicitudin tellus vestibulum</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Project Planning</h4>
                    <p className="text-sm text-muted-foreground">Nullam commodo tincidunt nisl, nec vehicula dui interdum nec</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Refurbishment</h4>
                    <p className="text-sm text-muted-foreground">Sed vitae aliquet ipsum, ut ornare lectus. Proin and sem risus. Sed nunc</p>
                  </div>
                </div>
              </div>
              
              <button className="mt-6 w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white hover:bg-primary/90 transition-colors ml-auto">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;