import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-construction-dark text-white relative overflow-hidden">
      {/* Background avatars */}
      <div className="absolute inset-0 opacity-10">
        <div className="flex items-center justify-center h-full space-x-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">👤</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to start your project?
        </h2>
        <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
          Get in touch with our team today and let's build something extraordinary together.
        </p>
        
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default CTASection;