import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, User, Mail, Phone, Sparkles } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bookingSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  phone: z.string().trim().min(10, { message: "Phone number must be at least 10 digits" }).max(20, { message: "Phone number must be less than 20 digits" }),
  service: z.string().min(1, { message: "Please select a service" }),
  date: z.string().min(1, { message: "Please select a date" }),
  time: z.string().min(1, { message: "Please select a time" }),
  notes: z.string().max(500, { message: "Notes must be less than 500 characters" }).optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const services = [
  "Hair Styling",
  "Hair Coloring",
  "Facial Treatment",
  "Skin Care Package",
  "Manicure",
  "Pedicure",
  "Makeup Application",
  "Bridal Package",
];

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
];

const Booking = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      notes: "",
    },
  });

  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Booking request submitted successfully! We'll contact you shortly.", {
      description: `${data.service} on ${data.date} at ${data.time}`,
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-light">Reserve Your Experience</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Book Your <span className="text-gold">Appointment</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Select your preferred service and time. We'll confirm your booking within 24 hours.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="glass-card border-border/50 p-8 md:p-12 shadow-luxury animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-gold flex items-center gap-2">
                      <User className="w-6 h-6" />
                      Personal Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Jane Doe" {...field} className="glass-card" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+1 (555) 123-4567" {...field} className="glass-card" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="jane@example.com" {...field} className="glass-card" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Appointment Details */}
                  <div className="space-y-6 pt-6 border-t border-border/50">
                    <h3 className="text-2xl font-semibold text-gold flex items-center gap-2">
                      <Calendar className="w-6 h-6" />
                      Appointment Details
                    </h3>

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Select Service</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="glass-card">
                                <SelectValue placeholder="Choose a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service} value={service}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Date</FormLabel>
                            <FormControl>
                              <Input type="date" min={today} {...field} className="glass-card" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="time"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Time</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="glass-card">
                                  <SelectValue placeholder="Select time" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {timeSlots.map((time) => (
                                  <SelectItem key={time} value={time}>
                                    {time}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="notes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Notes (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Any special requests or preferences..."
                              className="glass-card resize-none"
                              rows={4}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Confirm Booking"}
                  </Button>
                </form>
              </Form>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <section className="container px-4 py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-light">Visit Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find <span className="text-gold">Beauty & Grace Salon</span>
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Located in the heart of the city, we're easily accessible and offer convenient parking
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Location Details */}
            <Card className="glass-card border-border/50 p-8 hover:border-primary/50 hover:glow-gold transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-gold">Our Location</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black text-sm">📍</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Address</h4>
                    <p className="text-muted-foreground">
                      Beauty & Grace Salon<br />
                      Kolkata, West Bengal, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Hours</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                      <p>Saturday: 8:00 AM - 7:00 PM</p>
                      <p>Sunday: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black text-sm">🚗</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Parking</h4>
                    <p className="text-muted-foreground">
                      Free parking available in our private lot<br />
                      Street parking also available
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Embedded Map */}
            <Card className="glass-card border-border/50 p-4 hover:border-primary/50 hover:glow-gold transition-all duration-300">
              <div className="w-full h-96 rounded-lg overflow-hidden bg-muted/20 relative">
                {/* Google Maps Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8984765052587!2d88.42795300000001!3d22.648541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM4JzU0LjciTiA4OMKwMjUnNDAuNiJF!5e0!3m2!1sen!2sbd!4v1635959889123!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="Beauty & Grace Salon Location"
                ></iframe>
                
                {/* Overlay for styling */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-lg"></div>
              </div>
              
              {/* Directions Button */}
              <div className="mt-4 text-center">
                <Button
                  variant="luxury"
                  size="sm"
                  className="w-full"
                  onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=22.648541,88.427953', '_blank')}
                >
                  Get Directions
                </Button>
              </div>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <Card className="glass-card border-primary/30 p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-gold">Getting Here</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
                <div>
                  <h4 className="font-medium text-foreground mb-2">🚌 Public Transport</h4>
                  <p>Metro and bus services available<br />Auto-rickshaw accessible</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">🚗 By Car</h4>
                  <p>Easy road access<br />Parking space available</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">🛵 Ride Sharing</h4>
                  <p>Uber, Ola available<br />Convenient drop-off point</p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;
