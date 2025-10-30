import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Globe, Settings, BarChart3 } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: "Custom & Pre-Built Templates",
      description: "Mimic your company's email style or use our professionally designed phishing templates.",
      details: ["Company branding integration", "Industry-specific templates", "Custom email designs"]
    },
    {
      icon: Globe,
      title: "Domain Imitation",
      description: "Campaigns run on realistic-looking domains to ensure authentic test conditions.",
      details: ["Subdomain spoofing", "SSL certificates", "Authentic appearance"]
    },
    {
      icon: Settings,
      title: "Seamless Setup",
      description: "Simply select a template, target employees, and launch your security test.",
      details: ["One-click deployment", "Employee targeting", "Instant activation"]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Detailed performance reports to identify vulnerabilities and training needs.",
      details: ["Click-through rates", "Data submission tracking", "Vulnerability scoring"]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Key Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to conduct comprehensive security awareness testing
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border hover:shadow-card transition-smooth group">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-security-green rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;