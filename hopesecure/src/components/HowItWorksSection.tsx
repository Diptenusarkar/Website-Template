import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserCheck, Mail, Database, FileBarChart, ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserCheck,
      title: "CEO/Security Head Initiates Campaign",
      description: "Select a mimic or provided template to match your security testing needs.",
      details: "Choose from company-branded templates or industry-standard phishing simulations"
    },
    {
      icon: Mail,
      title: "Employees Receive Simulated Emails",
      description: "Team members interact with realistic phishing attempts as they normally would.",
      details: "Authentic-looking emails delivered through secure, monitored channels"
    },
    {
      icon: Database,
      title: "Data is Captured & Analyzed",
      description: "See exactly who clicked, submitted data, or triggered the simulated breach.",
      details: "Real-time tracking of all user interactions and responses"
    },
    {
      icon: FileBarChart,
      title: "Detailed Performance Report",
      description: "Identify weak points and train accordingly with comprehensive insights.",
      details: "Actionable recommendations and personalized training suggestions"
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deploy comprehensive security awareness testing in four simple steps
          </p>
        </div>
        
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full border border-border hover:shadow-card transition-smooth group">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth relative">
                    <step.icon className="h-8 w-8 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-security-green rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <CardTitle className="text-lg text-foreground mb-2">{step.title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-sm">
                    {step.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.details}
                  </p>
                </CardContent>
              </Card>
              
              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-security-blue" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center bg-gradient-hero rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Test Your Team's Security Awareness?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start with a free trial campaign and see how your organization measures up against modern cyber threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" className="text-lg px-8 py-4">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;