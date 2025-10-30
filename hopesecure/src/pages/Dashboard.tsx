import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  BarChart3, 
  Users, 
  Shield, 
  Clock, 
  Target, 
  ChevronRight, 
  FileText, 
  Settings,
  Mail,
  Award,
  TrendingUp,
  Globe,
  Eye
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const recentCampaigns = [
    {
      id: 1,
      name: "Q4 Security Assessment",
      status: "Active",
      targets: 150,
      opened: 89,
      clicked: 23,
      submitted: 8,
      date: "2024-01-15"
    },
    {
      id: 2,
      name: "New Employee Training",
      status: "Completed", 
      targets: 45,
      opened: 42,
      clicked: 12,
      submitted: 3,
      date: "2024-01-10"
    },
    {
      id: 3,
      name: "Executive Phishing Test",
      status: "Scheduled",
      targets: 25,
      opened: 0,
      clicked: 0,
      submitted: 0,
      date: "2024-01-20"
    }
  ];

  const stats = [
    {
      title: "Total Campaigns",
      value: "12",
      change: "+3 this month",
      icon: Target,
      color: "text-hs-blue"
    },
    {
      title: "Employees Tested",
      value: "1,247",
      change: "+156 this month", 
      icon: Users,
      color: "text-hs-purple"
    },
    {
      title: "Risk Score",
      value: "Medium",
      change: "Improved from High",
      icon: Shield,
      color: "text-yellow-600"
    },
    {
      title: "Avg Click Rate",
      value: "18.5%",
      change: "-5.2% vs last month",
      icon: BarChart3,
      color: "text-hs-purple"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-hs-purple";
      case "Completed": return "bg-hs-blue";
      case "Scheduled": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-hs-gradient text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Security Campaign Dashboard</h1>
              <p className="text-white/80">Monitor and manage your cybersecurity awareness campaigns</p>
            </div>
            <Button 
              variant="secondary" 
              size="lg" 
              className="w-fit bg-white/20 hover:bg-white/30 text-white border-white/30"
              onClick={() => navigate('/campaign/create')}
            >
              <Plus className="h-5 w-5 mr-2" />
              New Campaign
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border border-border hover:shadow-card transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  <Badge variant="secondary" className="text-xs">
                    {stat.change}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Campaigns */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl">Recent Campaigns</CardTitle>
                <CardDescription>Track the performance of your latest security tests</CardDescription>
              </div>
              <Button variant="outline" onClick={() => navigate('/campaigns')}>
                View All
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentCampaigns.map((campaign) => (
                <div key={campaign.id} className="border border-border rounded-lg p-4 hover:shadow-sm transition-smooth">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-foreground">{campaign.name}</h3>
                      <Badge className={`${getStatusColor(campaign.status)} text-white`}>
                        {campaign.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {campaign.date}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Targets</p>
                      <p className="font-semibold text-foreground">{campaign.targets}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Opened</p>
                      <p className="font-semibold text-hs-blue">
                        {campaign.opened} ({campaign.targets > 0 ? Math.round((campaign.opened / campaign.targets) * 100) : 0}%)
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Clicked</p>
                      <p className="font-semibold text-yellow-600">
                        {campaign.clicked} ({campaign.targets > 0 ? Math.round((campaign.clicked / campaign.targets) * 100) : 0}%)
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Submitted</p>
                      <p className="font-semibold text-red-600">
                        {campaign.submitted} ({campaign.targets > 0 ? Math.round((campaign.submitted / campaign.targets) * 100) : 0}%)
                      </p>
                    </div>
                  </div>
                  
                  {/* Action button for active/completed campaigns */}
                  {campaign.status !== 'Scheduled' && (
                    <div className="mt-4 pt-3 border-t border-border">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => navigate('/campaign/execute')}
                        className="text-hs-blue hover:text-hs-blue-dark hover:bg-hs-blue/10"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View Campaign Details
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <Card className="border border-border hover:shadow-card transition-smooth cursor-pointer" onClick={() => navigate('/campaign/create')}>
            <CardHeader className="text-center">
              <Plus className="h-12 w-12 text-hs-blue mx-auto mb-4" />
              <CardTitle>Create Campaign</CardTitle>
              <CardDescription>Launch a new phishing simulation</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border border-border hover:shadow-card transition-smooth cursor-pointer" onClick={() => navigate('/templates')}>
            <CardHeader className="text-center">
              <Mail className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle>Template Management</CardTitle>
              <CardDescription>Create and manage email templates</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border border-border hover:shadow-card transition-smooth cursor-pointer" onClick={() => navigate('/employees')}>
            <CardHeader className="text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle>Employee Management</CardTitle>
              <CardDescription>Manage employee profiles and training</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border border-border hover:shadow-card transition-smooth cursor-pointer" onClick={() => navigate('/domains')}>
            <CardHeader className="text-center">
              <Globe className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <CardTitle>Domain Management</CardTitle>
              <CardDescription>Manage sender domains and DNS</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border border-border hover:shadow-card transition-smooth cursor-pointer" onClick={() => navigate('/reports')}>
            <CardHeader className="text-center">
              <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Advanced Reports</CardTitle>
              <CardDescription>Comprehensive analytics and insights</CardDescription>
            </CardHeader>
          </Card>

          <Card className="border border-border hover:shadow-card transition-smooth cursor-pointer" onClick={() => navigate('/campaign/execute')}>
            <CardHeader className="text-center">
              <Target className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <CardTitle>Campaign Monitor</CardTitle>
              <CardDescription>Monitor live campaign execution</CardDescription>
            </CardHeader>
          </Card>

          <Card className="border border-border hover:shadow-card transition-smooth cursor-pointer" onClick={() => navigate('/settings')}>
            <CardHeader className="text-center">
              <Settings className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <CardTitle>Settings</CardTitle>
              <CardDescription>Configure platform settings</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;