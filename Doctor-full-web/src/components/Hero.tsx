
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Your Smile, <span className="text-teal-600">Our Priority</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Welcome to the practice of Dr. Suvendu Pal, your trusted dental care provider in Kolkata. 
              We offer comprehensive dental services with a focus on comfort, quality, and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/appointments">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 w-full sm:w-auto">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 w-full sm:w-auto">
                <MessageCircle className="mr-2 h-5 w-5" />
                Online Consultation
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/lovable-uploads/26113cf8-9298-47bc-872f-2679a465b520.png" 
                alt="Dr. Suvendu Pal - Professional Dentist"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">29+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">5000+</div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
