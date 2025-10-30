import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              ABOUT US
            </h2>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              For over 25 years, we have been creating exceptional spaces that enhance communities and improve lives. Our commitment to quality, innovation, and sustainability drives every project we undertake.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              From concept to completion, our experienced team brings expertise in design, engineering, and construction management to deliver projects that exceed expectations and stand the test of time.
            </p>
            <Button variant="default" size="lg">
              EXPLORE MORE
            </Button>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop"
                alt="Modern building"
                className="rounded-lg w-full h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop"
                alt="Construction site"
                className="rounded-lg w-full h-48 object-cover mt-8"
              />
            </div>
            
            <div className="absolute bottom-4 right-4 bg-construction-dark text-white rounded-lg p-4 text-center">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm">Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;