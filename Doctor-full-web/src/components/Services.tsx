
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Root Canal Treatment",
      description: "Pain-free root canal procedures using advanced techniques and materials.",
      icon: "🦷",
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Dental Braces",
      description: "Orthodontic treatment to straighten teeth and improve your smile.",
      icon: "😬",
      color: "bg-teal-50 border-teal-200"
    },
    {
      title: "Teeth Cleaning",
      description: "Professional dental cleaning and oral hygiene maintenance.",
      icon: "✨",
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Dental Implants",
      description: "Permanent tooth replacement solution with natural look and feel.",
      icon: "🔧",
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "Cosmetic Dentistry",
      description: "Enhance your smile with our cosmetic dental procedures.",
      icon: "💫",
      color: "bg-pink-50 border-pink-200"
    },
    {
      title: "Emergency Care",
      description: "24/7 emergency dental care for urgent dental problems.",
      icon: "🚨",
      color: "bg-red-50 border-red-200"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Dental Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive dental care services to keep your smile healthy and beautiful
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`${service.color} border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
