import { Card } from "@/components/ui/card";
import { Award, Heart, Users, Sparkles, Clock, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { icon: Users, value: "5000+", label: "Happy Clients" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Star, value: "4.9/5", label: "Client Rating" },
  { icon: Heart, value: "100%", label: "Satisfaction" },
];

const values = [
  {
    icon: Sparkles,
    title: "Excellence",
    description: "We strive for perfection in every service, using only premium products and advanced techniques.",
  },
  {
    icon: Heart,
    title: "Care",
    description: "Your comfort and satisfaction are our top priorities. We treat every client like family.",
  },
  {
    icon: Award,
    title: "Expertise",
    description: "Our team consists of certified professionals with years of experience in luxury beauty services.",
  },
  {
    icon: Clock,
    title: "Dedication",
    description: "We're committed to staying updated with the latest trends and innovations in beauty care.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="container px-4 mb-24">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-light">Our Story</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-gold">Beauty & Grace</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Founded in 2008, Beauty and Grace Salon has been the premier destination for 
              sophisticated beauty services. Our mission is to help you look and feel your 
              absolute best through personalized care and exceptional service.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container px-4 mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.label} className="glass-card border-border/50 p-8 text-center hover:border-primary/50 hover:glow-gold transition-all duration-300">
                  <Icon className="w-10 h-10 text-gold mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-gold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-light">{stat.label}</div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Story Section */}
        <section className="container px-4 mb-24">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-card border-border/50 p-8 md:p-12 shadow-luxury animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gold">Our Journey</h2>
              <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                <p>
                  What began as a small neighborhood salon has blossomed into one of the most 
                  sought-after beauty destinations in the city. Our founder, inspired by the elegance 
                  of European beauty salons and the warmth of family hospitality, created Beauty and Grace 
                  as a sanctuary where beauty meets luxury.
                </p>
                <p>
                  Over the years, we've had the privilege of serving thousands of clients, each with 
                  their unique beauty needs and aspirations. From bridal preparations to everyday 
                  pampering, we've been part of countless special moments and transformations.
                </p>
                <p>
                  Our team is carefully selected not just for their technical expertise, but for 
                  their passion for beauty and genuine care for our clients. Every stylist, 
                  aesthetician, and nail artist at Beauty & Grace Salon is committed to creating an 
                  unforgettable experience.
                </p>
                <p className="text-foreground font-medium">
                  Today, we continue to evolve, incorporating the latest techniques and technologies 
                  while maintaining the personalized touch that makes every visit special.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Values Section */}
        <section className="container px-4 mb-24">
          <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground font-light">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={value.title}
                  className="glass-card border-border/50 p-8 hover:border-primary/50 hover:glow-gold transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 glow-gold">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-gold">{value.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Our Team Section */}
        <section className="container px-4 mb-24">
          <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our <span className="text-gold">Expert Team</span></h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Our talented professionals are passionate about making you look and feel your absolute best
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Team Member 1 */}
            <Card className="glass-card border-border/50 p-6 text-center hover:border-primary/50 hover:glow-gold transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="w-24 h-24 rounded-full bg-gradient-gold mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gold">Sarah Johnson</h3>
              <p className="text-muted-foreground font-light mb-3">Senior Hair Stylist</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                With over 12 years of experience, Sarah specializes in cutting-edge hair styling, coloring, and bridal looks. She's passionate about creating unique styles that reflect each client's personality.
              </p>
            </Card>

            {/* Team Member 2 */}
            <Card className="glass-card border-border/50 p-6 text-center hover:border-primary/50 hover:glow-gold transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <div className="w-24 h-24 rounded-full bg-gradient-gold mx-auto mb-4 flex items-center justify-center">
                <Sparkles className="w-12 h-12 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gold">Emily Chen</h3>
              <p className="text-muted-foreground font-light mb-3">Master Aesthetician</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Emily is our skincare expert with advanced certifications in facial treatments, microdermabrasion, and anti-aging therapies. She believes healthy skin is the foundation of true beauty.
              </p>
            </Card>

            {/* Team Member 3 */}
            <Card className="glass-card border-border/50 p-6 text-center hover:border-primary/50 hover:glow-gold transition-all duration-300 animate-fade-in" style={{ animationDelay: '1.0s' }}>
              <div className="w-24 h-24 rounded-full bg-gradient-gold mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-12 h-12 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gold">Maria Rodriguez</h3>
              <p className="text-muted-foreground font-light mb-3">Nail Artist & Spa Specialist</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Maria combines artistic flair with technical precision to create stunning nail art and provide relaxing spa treatments. Her attention to detail and gentle touch make every service special.
              </p>
            </Card>

            {/* Team Member 4 */}
            <Card className="glass-card border-border/50 p-6 text-center hover:border-primary/50 hover:glow-gold transition-all duration-300 animate-fade-in" style={{ animationDelay: '1.1s' }}>
              <div className="w-24 h-24 rounded-full bg-gradient-gold mx-auto mb-4 flex items-center justify-center">
                <Award className="w-12 h-12 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gold">Jessica Taylor</h3>
              <p className="text-muted-foreground font-light mb-3">Makeup Artist</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Jessica specializes in bridal makeup, special occasion looks, and makeup lessons. Her expertise in color theory and face contouring helps clients achieve their perfect look.
              </p>
            </Card>

            {/* Team Member 5 */}
            <Card className="glass-card border-border/50 p-6 text-center hover:border-primary/50 hover:glow-gold transition-all duration-300 animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <div className="w-24 h-24 rounded-full bg-gradient-gold mx-auto mb-4 flex items-center justify-center">
                <Star className="w-12 h-12 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gold">Lisa Wang</h3>
              <p className="text-muted-foreground font-light mb-3">Junior Stylist</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Lisa brings fresh energy and the latest trends to our team. She's passionate about hair care and loves helping clients discover new styles that make them feel confident and beautiful.
              </p>
            </Card>

            {/* Team Member 6 */}
            <Card className="glass-card border-border/50 p-6 text-center hover:border-primary/50 hover:glow-gold transition-all duration-300 animate-fade-in" style={{ animationDelay: '1.3s' }}>
              <div className="w-24 h-24 rounded-full bg-gradient-gold mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-12 h-12 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gold">Amanda Foster</h3>
              <p className="text-muted-foreground font-light mb-3">Salon Manager</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Amanda ensures every client receives exceptional service from the moment they walk in. She coordinates appointments and maintains the high standards that Beauty & Grace is known for.
              </p>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container px-4">
          <Card className="glass-card border-primary/30 p-12 text-center shadow-luxury glow-gold animate-fade-in" style={{ animationDelay: '1.4s' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience the <span className="text-gold">Beauty & Grace Difference</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 font-light max-w-2xl mx-auto">
              Join our family of satisfied clients and discover why Beauty & Grace Salon is the premier 
              choice for discerning beauty enthusiasts.
            </p>
            <a href="/booking">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-gold text-primary-foreground hover:opacity-90 glow-gold h-11 px-8">
                Book Your Appointment
              </button>
            </a>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
