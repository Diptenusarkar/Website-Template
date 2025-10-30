import { Card } from "@/components/ui/card";
import { Scissors, Sparkles, Heart, Palette } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Hair Styling",
    description: "Expert cuts, colors, and treatments for stunning, healthy hair",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Sparkles,
    title: "Skin Care",
    description: "Rejuvenating facials and treatments for radiant, glowing skin",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: Heart,
    title: "Nail Services",
    description: "Premium manicures and pedicures with exquisite designs",
    gradient: "from-primary/15 to-accent/10",
  },
  {
    icon: Palette,
    title: "Makeup Artistry",
    description: "Professional makeup for any occasion, from natural to glamorous",
    gradient: "from-accent/15 to-primary/10",
  },
];

const Services = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Premium Beauty Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Indulge in our signature treatments designed to enhance your natural beauty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="group relative overflow-hidden glass-card border-border hover:border-primary/50 transition-all duration-500 hover:glow-gold animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 glow-gold">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground font-light">{service.description}</p>
                  
                  <div className="mt-6 flex items-center text-gold text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Learn More
                    <span className="ml-2">→</span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
