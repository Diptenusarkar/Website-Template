import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { RealTimeChart } from "@/components/Charts";
import { 
  ArrowLeft, 
  Play, 
  Pause, 
  StopCircle, 
  Users, 
  Mail, 
  MousePointer, 
  Download, 
  Shield, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Eye,
  Target,
  TrendingUp,
  FileText
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const CampaignExecution = () => {
  const navigate = useNavigate();
  const [campaignStatus, setCampaignStatus] = useState<'ready' | 'launching' | 'active' | 'paused' | 'completed'>('ready');
  const [progress, setProgress] = useState(0);
  const [emailsSent, setEmailsSent] = useState(0);
  
  // Function to parse emails from various formats (comma-separated, line-separated, etc.)
  const parseEmailList = (emailString: string): string[] => {
    if (!emailString.trim()) return [];
    
    return emailString
      .split(/[,\n\r;]+/) // Split by comma, newline, carriage return, or semicolon
      .map(email => email.trim())
      .filter(email => email && email.includes('@')) // Basic email validation
      .filter((email, index, arr) => arr.indexOf(email) === index); // Remove duplicates
  };
  
  // In real app, this would come from the previous page's form data or API
  // For now, simulating with a sample email list that could have come from a textarea
  const [campaignData] = useState({
    name: "Company Login Page Simulation",
    department: "HR Department", 
    template: "Company Login Page",
    emailInput: `john.smith@company.com,
sarah.wilson@company.com, 
mike.johnson@company.com
lisa.davis@company.com;alex.brown@company.com
emma.taylor@company.com
david.clark@company.com, jennifer.white@company.com
robert.lee@company.com
maria.garcia@company.com;chris.martin@company.com,jessica.thompson@company.com
kevin.anderson@company.com
amanda.robinson@company.com,daniel.harris@company.com`
  });
  
  const targetEmails = parseEmailList(campaignData.emailInput);
  const totalEmails = targetEmails.length;

  const handleStartCampaign = () => {
    setCampaignStatus('launching');
  };

  // Simulate campaign progress
  useEffect(() => {
    if (campaignStatus === 'launching') {
      const timer = setTimeout(() => {
        setCampaignStatus('active');
        setProgress(5);
      }, 3000);
      return () => clearTimeout(timer);
    }

    if (campaignStatus === 'active') {
      const interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = Math.min(prev + Math.random() * 5, 100);
          setEmailsSent(Math.floor((newProgress / 100) * totalEmails));
          if (newProgress >= 100) {
            setCampaignStatus('completed');
          }
          return newProgress;
        });
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [campaignStatus, totalEmails]);

  const handlePauseCampaign = () => {
    setCampaignStatus(campaignStatus === 'paused' ? 'active' : 'paused');
  };

  const handleStopCampaign = () => {
    setCampaignStatus('completed');
  };

  const getStatusBadge = () => {
    switch (campaignStatus) {
      case 'ready':
        return <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200"><Target className="w-3 h-3 mr-1" />Ready to Launch</Badge>;
      case 'launching':
        return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200"><Clock className="w-3 h-3 mr-1" />Launching</Badge>;
      case 'active':
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200"><Play className="w-3 h-3 mr-1" />Active</Badge>;
      case 'paused':
        return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200"><Pause className="w-3 h-3 mr-1" />Paused</Badge>;
      case 'completed':
        return <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200"><CheckCircle className="w-3 h-3 mr-1" />Completed</Badge>;
    }
  };

  // Mock real-time data
  const realTimeStats = {
    emailsOpened: campaignStatus === 'ready' ? 0 : Math.floor(emailsSent * 0.65),
    linksClicked: campaignStatus === 'ready' ? 0 : Math.floor(emailsSent * 0.23),
    credentialsEntered: campaignStatus === 'ready' ? 0 : Math.floor(emailsSent * 0.08),
    attachmentsDownloaded: campaignStatus === 'ready' ? 0 : Math.floor(emailsSent * 0.05)
  };

  // Real-time chart data
  const realTimeChartData = {
    labels: ['0 min', '15 min', '30 min', '45 min', '60 min'],
    opens: [0, Math.floor(realTimeStats.emailsOpened * 0.2), Math.floor(realTimeStats.emailsOpened * 0.5), Math.floor(realTimeStats.emailsOpened * 0.8), realTimeStats.emailsOpened],
    clicks: [0, Math.floor(realTimeStats.linksClicked * 0.1), Math.floor(realTimeStats.linksClicked * 0.4), Math.floor(realTimeStats.linksClicked * 0.7), realTimeStats.linksClicked],
    submissions: [0, Math.floor(realTimeStats.credentialsEntered * 0.05), Math.floor(realTimeStats.credentialsEntered * 0.3), Math.floor(realTimeStats.credentialsEntered * 0.6), realTimeStats.credentialsEntered]
  };

  const vulnerableEmployees = campaignStatus === 'ready' ? [] : [
    { name: "John Smith", email: targetEmails[0], department: "Marketing", actions: ["Opened Email", "Clicked Link", "Entered Credentials"], riskLevel: "High" },
    { name: "Sarah Wilson", email: targetEmails[1], department: "HR", actions: ["Opened Email", "Clicked Link"], riskLevel: "Medium" },
    { name: "Mike Johnson", email: targetEmails[2], department: "Finance", actions: ["Opened Email", "Downloaded Attachment"], riskLevel: "High" },
    { name: "Lisa Davis", email: targetEmails[3], department: "IT", actions: ["Opened Email"], riskLevel: "Low" },
    { name: "Alex Brown", email: targetEmails[4], department: "Marketing", actions: ["Opened Email", "Clicked Link"], riskLevel: "Medium" }
  ].filter((_, index) => index < Math.floor(emailsSent * 0.3)); // Show vulnerable employees as campaign progresses

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/campaign/create')}
              className="hover:bg-hs-blue/10 text-hs-blue hover:text-hs-blue-dark transition-all duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Campaign Setup
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Campaign Execution</h1>
              <p className="text-gray-600 mt-1">{campaignData.name} - {campaignData.department}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {getStatusBadge()}
          </div>
        </div>

        {/* Campaign Summary */}
        <Card className="mb-8 bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm font-medium text-blue-800">Campaign Template</p>
                <p className="text-lg font-semibold text-blue-900">{campaignData.template}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-blue-800">Target Department</p>
                <p className="text-lg font-semibold text-blue-900">{campaignData.department}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-blue-800">Total Recipients</p>
                <p className="text-lg font-semibold text-blue-900">{totalEmails} employees</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Campaign Control Panel */}
        <Card className="mb-8 border-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center text-xl">
                  <Target className="h-5 w-5 mr-2 text-security-blue" />
                  Campaign Control Panel
                </CardTitle>
                <CardDescription>Monitor and control your phishing simulation campaign</CardDescription>
              </div>
              <div className="flex space-x-2">
                {campaignStatus === 'ready' && (
                  <Button 
                    variant="default" 
                    onClick={handleStartCampaign}
                    className="hover:bg-green-600 bg-green-700"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Start Campaign
                  </Button>
                )}
                {campaignStatus === 'active' && (
                  <Button 
                    variant="outline" 
                    onClick={handlePauseCampaign}
                    className="hover:bg-yellow-50"
                  >
                    <Pause className="h-4 w-4 mr-2" />
                    Pause
                  </Button>
                )}
                {campaignStatus === 'paused' && (
                  <Button 
                    variant="outline" 
                    onClick={handlePauseCampaign}
                    className="hover:bg-green-50"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Resume
                  </Button>
                )}
                {(campaignStatus === 'active' || campaignStatus === 'paused') && (
                  <Button 
                    variant="destructive" 
                    onClick={handleStopCampaign}
                  >
                    <StopCircle className="h-4 w-4 mr-2" />
                    Stop Campaign
                  </Button>
                )}
                {campaignStatus === 'completed' && (
                  <Button 
                    variant="default"
                    onClick={() => navigate('/dashboard')}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    View Full Report
                  </Button>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {campaignStatus === 'ready' && (
                <Alert>
                  <Target className="h-4 w-4" />
                  <AlertDescription>
                    Campaign is ready to launch. Click "Start Campaign" to begin sending emails to {totalEmails} target recipients.
                  </AlertDescription>
                </Alert>
              )}
              {campaignStatus === 'launching' && (
                <Alert>
                  <Clock className="h-4 w-4" />
                  <AlertDescription>
                    Campaign is being launched. Emails are being sent to {totalEmails} target recipients...
                  </AlertDescription>
                </Alert>
              )}
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-sm font-medium">Email Delivery Progress</div>
                  <Badge variant="outline">{emailsSent} / {totalEmails} sent</Badge>
                </div>
                <div className="text-sm text-gray-600">{Math.round(progress)}% complete</div>
              </div>
              {campaignStatus !== 'ready' && (
                <Progress value={progress} className="h-3" />
              )}
              {campaignStatus === 'ready' && (
                <div className="h-3 bg-gray-100 rounded-full">
                  <div className="h-full bg-gray-300 rounded-full w-0 transition-all duration-300"></div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Target Email Summary */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Users className="h-5 w-5 mr-2 text-blue-600" />
              Target Recipients ({totalEmails} emails)
            </CardTitle>
            <CardDescription>Campaign will be sent to the following email addresses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-h-40 overflow-y-auto">
              {targetEmails.map((email, index) => (
                <div key={index} className="flex items-center space-x-2 p-2 bg-gray-50 rounded text-sm">
                  <Mail className="h-3 w-3 text-gray-400" />
                  <span className="truncate">{email}</span>
                  {emailsSent > index && (
                    <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Real-time Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Emails Opened</p>
                  <p className="text-2xl font-bold text-blue-600">{realTimeStats.emailsOpened}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {emailsSent > 0 ? `${Math.round((realTimeStats.emailsOpened / emailsSent) * 100)}%` : '0%'} open rate
                  </p>
                </div>
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Eye className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Links Clicked</p>
                  <p className="text-2xl font-bold text-yellow-600">{realTimeStats.linksClicked}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {emailsSent > 0 ? `${Math.round((realTimeStats.linksClicked / emailsSent) * 100)}%` : '0%'} click rate
                  </p>
                </div>
                <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <MousePointer className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Credentials Entered</p>
                  <p className="text-2xl font-bold text-red-600">{realTimeStats.credentialsEntered}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {emailsSent > 0 ? `${Math.round((realTimeStats.credentialsEntered / emailsSent) * 100)}%` : '0%'} compromise rate
                  </p>
                </div>
                <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Downloads</p>
                  <p className="text-2xl font-bold text-purple-600">{realTimeStats.attachmentsDownloaded}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {emailsSent > 0 ? `${Math.round((realTimeStats.attachmentsDownloaded / emailsSent) * 100)}%` : '0%'} download rate
                  </p>
                </div>
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Download className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Real-time Analytics Chart */}
        {campaignStatus !== 'ready' && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="h-5 w-5 mr-2" />
                Real-Time Campaign Activity
              </CardTitle>
              <CardDescription>
                Live tracking of email opens, clicks, and submissions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <RealTimeChart data={realTimeChartData} />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Detailed Analysis */}
        <Tabs defaultValue="vulnerable" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="vulnerable">Vulnerable Employees</TabsTrigger>
            <TabsTrigger value="timeline">Activity Timeline</TabsTrigger>
            <TabsTrigger value="departments">Department Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="vulnerable">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
                  Employees Who Fell for the Simulation
                </CardTitle>
                <CardDescription>
                  These employees require immediate security awareness training
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {vulnerableEmployees.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      <Shield className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p className="text-lg font-medium">No vulnerable employees detected yet</p>
                      <p className="text-sm">Start the campaign to begin tracking employee interactions</p>
                    </div>
                  ) : (
                    vulnerableEmployees.map((employee, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <div>
                              <p className="font-medium">{employee.name}</p>
                              <p className="text-sm text-gray-600">{employee.email}</p>
                            </div>
                            <Badge variant="outline">{employee.department}</Badge>
                          </div>
                          <div className="mt-2 flex space-x-2">
                            {employee.actions.map((action, actionIndex) => (
                              <Badge key={actionIndex} variant="secondary" className="text-xs">
                                {action}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge 
                            variant={employee.riskLevel === 'High' ? 'destructive' : employee.riskLevel === 'Medium' ? 'outline' : 'secondary'}
                          >
                            {employee.riskLevel} Risk
                          </Badge>
                          <Button variant="outline" size="sm">
                            Assign Training
                          </Button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="timeline">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-blue-600" />
                  Real-time Activity Timeline
                </CardTitle>
                <CardDescription>
                  Live feed of employee interactions with the phishing simulation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">john.smith@company.com entered credentials</p>
                      <p className="text-xs text-gray-600">Marketing Department • 2 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                    <MousePointer className="h-4 w-4 text-yellow-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">sarah.wilson@company.com clicked phishing link</p>
                      <p className="text-xs text-gray-600">HR Department • 5 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                    <Eye className="h-4 w-4 text-blue-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">mike.johnson@company.com opened email</p>
                      <p className="text-xs text-gray-600">Finance Department • 8 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-400">
                    <Download className="h-4 w-4 text-purple-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">lisa.davis@company.com downloaded attachment</p>
                      <p className="text-xs text-gray-600">IT Department • 12 minutes ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="departments">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                  Department Risk Analysis
                </CardTitle>
                <CardDescription>
                  Breakdown of vulnerability by department
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { dept: "Marketing", total: 45, vulnerable: 12, rate: 27 },
                    { dept: "HR", total: 23, vulnerable: 8, rate: 35 },
                    { dept: "Finance", total: 32, vulnerable: 6, rate: 19 },
                    { dept: "IT", total: 28, vulnerable: 3, rate: 11 },
                    { dept: "Sales", total: 22, vulnerable: 7, rate: 32 }
                  ].map((dept, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium">{dept.dept}</h3>
                          <span className="text-sm text-gray-600">{dept.vulnerable}/{dept.total} employees affected</span>
                        </div>
                        <Progress value={dept.rate} className="h-2" />
                      </div>
                      <div className="ml-4 text-right">
                        <p className="text-lg font-bold text-red-600">{dept.rate}%</p>
                        <p className="text-xs text-gray-600">vulnerability rate</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CampaignExecution;
