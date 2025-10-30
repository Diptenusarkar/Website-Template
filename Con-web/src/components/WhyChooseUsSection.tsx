import { CheckCircle } from "lucide-react";

const WhyChooseUsSection = () => {
  const features = [
    {
      title: "25+ Years of construction experience",
      icon: "📅"
    },
    {
      title: "On-time & budget-friendly execution",
      icon: "💰"
    },
    {
      title: "Licensed, insured, and industry-certified",
      icon: "✅"
    },
    {
      title: "Sustainable & modern building practices",
      icon: "🌱"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 text-foreground">
              Why businesses trust elite Builders Inc. ?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              We've built our reputation on delivering exceptional construction projects that stand the test of time. Our commitment to quality, innovation, and client satisfaction sets us apart in the industry.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-construction-dark text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <span className="text-foreground font-medium">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-primary text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">25+ Years of construction experience</h3>
              <p className="opacity-90">Quarter-century of expertise in delivering complex construction projects</p>
            </div>
            
            <div className="bg-primary text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">On-time & budget-friendly execution</h3>
              <p className="opacity-90">We pride ourselves on meeting deadlines and staying within budget constraints</p>
            </div>
            
            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2 text-foreground">Licensed, insured, and industry-certified</h3>
              <p className="text-muted-foreground">Fully compliant with all regulations and industry standards</p>
            </div>
            
            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2 text-foreground">Sustainable & modern building practices</h3>
              <p className="text-muted-foreground">Committed to environmentally responsible construction methods</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;