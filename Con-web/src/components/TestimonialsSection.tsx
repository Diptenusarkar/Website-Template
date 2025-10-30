import { Star } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wide">Clients Review</span>
          <h2 className="text-4xl font-bold mt-2 text-foreground">Our Clients Say</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary rounded-lg p-8 text-white relative">
            <div className="flex items-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
                alt="Milton Zahra"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h4 className="font-bold text-lg">Milton Zahra</h4>
                <p className="opacity-90">CEO, Tech Innovations</p>
              </div>
            </div>
            
            <p className="text-lg mb-6 leading-relaxed">
              "Exceptional service and outstanding results. The team delivered our commercial project on time and exceeded our expectations. Their attention to detail and professional approach made the entire process smooth and stress-free."
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>
              
              <div className="flex space-x-2">
                <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  ←
                </button>
                <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;