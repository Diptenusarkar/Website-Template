import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin, MessageCircle, Video } from "lucide-react";

const Appointments = () => {
  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"
  ];

  const handleWhatsAppBooking = () => {
    const message = "Hello Dr. Suvendu Pal, I would like to book an appointment for dental consultation.";
    window.open(`https://wa.me/919831018170?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleOnlineConsultation = () => {
    const message = "Hello Dr. Suvendu Pal, I would like to book an online consultation.";
    window.open(`https://wa.me/919831018170?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Book Your Appointment
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose between online consultation or visit our clinic in Kolkata
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Online Consultation */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center text-xl">
                <Video className="mr-3 h-6 w-6" />
                Online Consultation
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-700">
                  <Clock className="mr-3 h-5 w-5 text-blue-600" />
                  <span>30-45 minutes session</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <MessageCircle className="mr-3 h-5 w-5 text-blue-600" />
                  <span>Video call or chat consultation</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Calendar className="mr-3 h-5 w-5 text-blue-600" />
                  <span>Available 7 days a week</span>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-blue-800 mb-2">Perfect for:</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Initial consultation</li>
                  <li>• Follow-up appointments</li>
                  <li>• Dental advice</li>
                  <li>• Treatment planning</li>
                </ul>
              </div>
              <Button 
                onClick={handleOnlineConsultation}
                className="w-full bg-blue-600 hover:bg-blue-700"
                size="lg"
              >
                <Video className="mr-2 h-5 w-5" />
                Book Online Consultation
              </Button>
            </CardContent>
          </Card>

          {/* Offline Visit */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center text-xl">
                <MapPin className="mr-3 h-6 w-6" />
                Clinic Visit
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-700">
                  <Clock className="mr-3 h-5 w-5 text-teal-600" />
                  <span>Mon-Sat: 9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <MapPin className="mr-3 h-5 w-5 text-teal-600" />
                  <span>Kolkata, West Bengal</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Calendar className="mr-3 h-5 w-5 text-teal-600" />
                  <span>Same day appointments available</span>
                </div>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-teal-800 mb-2">Perfect for:</h4>
                <ul className="text-teal-700 text-sm space-y-1">
                  <li>• Physical examination</li>
                  <li>• Dental procedures</li>
                  <li>• X-rays and diagnostics</li>
                  <li>• Emergency care</li>
                </ul>
              </div>
              <Button 
                onClick={handleWhatsAppBooking}
                className="w-full bg-teal-600 hover:bg-teal-700"
                size="lg"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Book Clinic Appointment
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Available Time Slots */}
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">Available Time Slots</CardTitle>
            <p className="text-gray-600">Choose your preferred time for the appointment</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {timeSlots.map((time, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="border-teal-200 text-teal-700 hover:bg-teal-50 hover:border-teal-300"
                >
                  {time}
                </Button>
              ))}
            </div>
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-yellow-800 text-sm">
                <strong>Note:</strong> Final appointment confirmation will be done via WhatsApp or phone call. 
                Emergency appointments available 24/7.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Appointments;
