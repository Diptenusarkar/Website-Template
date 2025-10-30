
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react";

const Contact = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919831018170', '_blank');
  };

  const handleCall = () => {
    window.open('tel:+919831018170');
  };

  const handleEmail = () => {
    window.open('mailto:dr.suvendupal@gmail.com');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Contact Dr. Suvendu Pal
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for appointments, consultations, or any dental concerns
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-teal-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Clinic Address</h3>
                    <p className="text-gray-600">
                      Dr Suvendu Pal, Dental Clinic<br />
                      9A/6, S Sinthee Rd, Sinthee<br />
                      Kolkata, West Bengal 700050<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-teal-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+91 98310 18170</p>
                    <Button 
                      onClick={handleCall}
                      variant="link" 
                      className="p-0 text-teal-600 hover:text-teal-700"
                    >
                      Call Now
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-teal-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">dr.suvendupal@gmail.com</p>
                    <Button 
                      onClick={handleEmail}
                      variant="link" 
                      className="p-0 text-teal-600 hover:text-teal-700"
                    >
                      Send Email
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-teal-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Working Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 9:00 AM - 5:00 PM</p>
                      <p>Sunday: By appointment only</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-teal-600 to-blue-600 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Need Emergency Care?</h3>
                <p className="mb-4">
                  Dental emergencies can happen anytime. Contact us immediately for urgent care.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    onClick={handleWhatsApp}
                    className="bg-white text-teal-600 hover:bg-gray-100"
                  >
                    WhatsApp Emergency
                  </Button>
                  <Button 
                    onClick={handleCall}
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-teal-600"
                  >
                    Emergency Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Google Map */}
          <div className="space-y-6">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Find Our Clinic</CardTitle>
                <p className="text-gray-600">Located in Sinthee, Kolkata for easy access</p>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.8234567890123!2d88.37123456789012!3d22.593456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277123456789a%3A0x123456789abcdef0!2s9A%2F6%2C%20S%20Sinthee%20Rd%2C%20Sinthee%2C%20Kolkata%2C%20West%20Bengal%20700050%2C%20India!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dr. Suvendu Pal Dental Clinic Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-gray-900">
                  <Calendar className="mr-2 h-5 w-5 text-teal-600" />
                  Quick Appointment Booking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Ready to schedule your appointment? Choose your preferred method:
                </p>
                <div className="space-y-3">
                  <Button 
                    onClick={handleWhatsApp}
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    Book via WhatsApp
                  </Button>
                  <Button 
                    onClick={handleCall}
                    variant="outline" 
                    className="w-full border-teal-600 text-teal-600 hover:bg-teal-50"
                  >
                    Call to Book
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  We'll confirm your appointment within 2 hours during business hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
