
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, MessageCircle } from "lucide-react";

const CallToAction = () => {
  const handleOnlineConsultation = () => {
    const message = "Hello Dr. Suvendu Pal, I would like to book an online consultation.";
    window.open(`https://wa.me/9831018170?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Smile?
        </h2>
        <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
          Book your appointment today and experience professional dental care in a comfortable environment
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/appointments">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 w-full sm:w-auto">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Appointment
            </Button>
          </Link>
          <Button 
            onClick={handleOnlineConsultation}
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-teal-600 w-full sm:w-auto bg-transparent"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Online Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
