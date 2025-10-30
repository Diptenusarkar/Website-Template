import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [showWhatsAppTooltip, setShowWhatsAppTooltip] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const messages = [
    "Click for appointment booking!",
    "Quick chat for beauty services!",
    "Book your salon visit now!",
    "Get instant beauty consultation!",
    "Schedule your makeover today!"
  ];

  // Typing animation effect
  useEffect(() => {
    const currentMessage = messages[currentMessageIndex];
    let timeoutId;

    if (isTyping) {
      if (displayedText.length < currentMessage.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentMessage.slice(0, displayedText.length + 1));
        }, 100); // Typing speed
      } else {
        // Message fully typed, wait then start erasing
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Wait 2 seconds before erasing
      }
    } else {
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50); // Erasing speed
      } else {
        // Message fully erased, move to next message
        setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isTyping, currentMessageIndex, messages]);

  const handleWhatsAppClick = () => {
    const phoneNumber = "1234567890"; // Replace with your actual WhatsApp number
    const message = "Hello! I would like to book an appointment at Beauty & Grace Salon.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Footer />
      
      {/* Typing Animation Text - Fixed Position */}
      <div className="fixed bottom-24 right-6 z-50">
        <div className="bg-white border-2 border-gold px-4 py-2 rounded-lg text-sm font-medium shadow-luxury min-w-[200px] animate-fade-in">
          <div className="flex items-center gap-2">
            <span className="text-black font-semibold">{displayedText}</span>
            <span className={`inline-block w-0.5 h-4 bg-black ${isTyping ? 'animate-pulse' : 'opacity-0'}`}>|</span>
          </div>
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div 
          className="relative"
          onMouseEnter={() => setShowWhatsAppTooltip(true)}
          onMouseLeave={() => setShowWhatsAppTooltip(false)}
        >

          {/* Tooltip */}
          {showWhatsAppTooltip && (
            <div className="absolute bottom-16 right-0 bg-black/90 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap animate-fade-in">
              Chat with us for quick booking!
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
            </div>
          )}
          
          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsAppClick}
            className="group relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate-bounce-slow"
            aria-label="Chat on WhatsApp"
          >
            {/* Pulse Animation */}
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30"></div>
            
            {/* WhatsApp Icon */}
            <MessageCircle className="w-8 h-8 text-white relative z-10" />
            
            {/* Notification Badge */}
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">!</span>
            </div>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Index;
