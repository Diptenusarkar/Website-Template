
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingButtons = () => {
  const handleWhatsApp = () => {
    const message = "Hello Dr. Suvendu Pal, I would like to know more about your dental services.";
    window.open(`https://wa.me/919831018170?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsApp}
        className="bg-green-500 hover:bg-green-600 rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Appointment Button */}
      <Link to="/appointments">
        <Button className="bg-teal-600 hover:bg-teal-700 rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
          <Calendar className="h-6 w-6" />
        </Button>
      </Link>
    </div>
  );
};

export default FloatingButtons;
