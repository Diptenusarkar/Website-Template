import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Settings, 
  Mail, 
  Shield, 
  Users, 
  Globe, 
  Bell, 
  Database,
  Key,
  Download,
  Upload,
  Save,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Eye,
  EyeOff
} from "lucide-react";
import { useState } from "react";

const SettingsPage = () => {
  const [showApiKey, setShowApiKey] = useState(false);
  const [emailSettings, setEmailSettings] = useState({
    provider: "sendgrid",
    apiKey: "sg-xxxxxxxxxxxxxxxxxxxx",
    fromEmail: "security@company.com",
    fromName: "Security Team",
    replyTo: "noreply@company.com",
    enableTracking: true,
    dailyLimit: 1000
  });

  const [organizationSettings, setOrganizationSettings] = useState({
    companyName: "TechCorp Inc.",
    domain: "techcorp.com",
    industry: "technology",
    employeeCount: "200-500",
    timezone: "UTC-5",
    language: "en",
    logo: null
  });

  const [securitySettings, setSecuritySettings] = useState({
    enableMFA: true,
    sessionTimeout: 30,
    maxFailedAttempts: 5,
    passwordExpiry: 90,
    enableAuditLog: true,
    dataRetention: 365,
    enableGDPR: true
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailAlerts: true,
    campaignStarted: true,
    highRiskDetected: true,
    campaignCompleted: true,
    weeklyReports: true,
    monthlyReports: true,
    alertThreshold: 25
  });

  const handleSaveSettings = (section: string) => {
    // In real implementation, this would save to backend
    console.log(`Saving ${section} settings...`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Settings & Configuration</h1>
            <p className="text-gray-600 mt-1">Manage your HopeSecure platform settings</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Upload className="h-4 w-4 mr-2" />
              Import Config
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Config
            </Button>
          </div>
        </div>

        <Tabs defaultValue="organization" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="organization">Organization</TabsTrigger>
            <TabsTrigger value="email">Email & SMTP</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
          </TabsList>

          <TabsContent value="organization">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Organization Information
                  </CardTitle>
                  <CardDescription>Basic information about your organization</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company-name">Company Name</Label>
                      <Input 
                        id="company-name" 
                        value={organizationSettings.companyName}
                        onChange={(e) => setOrganizationSettings({...organizationSettings, companyName: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="domain">Primary Domain</Label>
                      <Input 
                        id="domain" 
                        value={organizationSettings.domain}
                        onChange={(e) => setOrganizationSettings({...organizationSettings, domain: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="industry">Industry</Label>
                      <Select value={organizationSettings.industry} onValueChange={(value) => setOrganizationSettings({...organizationSettings, industry: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="employee-count">Employee Count</Label>
                      <Select value={organizationSettings.employeeCount} onValueChange={(value) => setOrganizationSettings({...organizationSettings, employeeCount: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-50">1-50</SelectItem>
                          <SelectItem value="51-200">51-200</SelectItem>
                          <SelectItem value="200-500">200-500</SelectItem>
                          <SelectItem value="500-1000">500-1000</SelectItem>
                          <SelectItem value="1000+">1000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select value={organizationSettings.timezone} onValueChange={(value) => setOrganizationSettings({...organizationSettings, timezone: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="UTC-12">UTC-12 (Baker Island)</SelectItem>
                          <SelectItem value="UTC-8">UTC-8 (Pacific)</SelectItem>
                          <SelectItem value="UTC-5">UTC-5 (Eastern)</SelectItem>
                          <SelectItem value="UTC+0">UTC+0 (London)</SelectItem>
                          <SelectItem value="UTC+1">UTC+1 (Berlin)</SelectItem>
                          <SelectItem value="UTC+8">UTC+8 (Singapore)</SelectItem>
                          <SelectItem value="UTC+9">UTC+9 (Tokyo)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="language">Default Language</Label>
                      <Select value={organizationSettings.language} onValueChange={(value) => setOrganizationSettings({...organizationSettings, language: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                          <SelectItem value="de">German</SelectItem>
                          <SelectItem value="zh">Chinese</SelectItem>
                          <SelectItem value="ja">Japanese</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company-logo">Company Logo</Label>
                    <div className="mt-2 flex items-center space-x-4">
                      <div className="h-16 w-16 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                        <Users className="h-8 w-8 text-gray-400" />
                      </div>
                      <div>
                        <Button variant="outline">
                          <Upload className="h-4 w-4 mr-2" />
                          Upload Logo
                        </Button>
                        <p className="text-sm text-gray-600 mt-1">Recommended: 200x200px, PNG/JPG</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={() => handleSaveSettings('organization')}>
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="email">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-5 w-5 mr-2" />
                    Email Configuration
                  </CardTitle>
                  <CardDescription>Configure email sending and SMTP settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="email-provider">Email Provider</Label>
                    <Select value={emailSettings.provider} onValueChange={(value) => setEmailSettings({...emailSettings, provider: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sendgrid">SendGrid</SelectItem>
                        <SelectItem value="mailgun">Mailgun</SelectItem>
                        <SelectItem value="ses">Amazon SES</SelectItem>
                        <SelectItem value="smtp">Custom SMTP</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="api-key">API Key / SMTP Password</Label>
                    <div className="relative">
                      <Input 
                        id="api-key" 
                        type={showApiKey ? "text" : "password"}
                        value={emailSettings.apiKey}
                        onChange={(e) => setEmailSettings({...emailSettings, apiKey: e.target.value})}
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2"
                        onClick={() => setShowApiKey(!showApiKey)}
                      >
                        {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="from-email">From Email</Label>
                      <Input 
                        id="from-email" 
                        type="email"
                        value={emailSettings.fromEmail}
                        onChange={(e) => setEmailSettings({...emailSettings, fromEmail: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="from-name">From Name</Label>
                      <Input 
                        id="from-name" 
                        value={emailSettings.fromName}
                        onChange={(e) => setEmailSettings({...emailSettings, fromName: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="reply-to">Reply-To Email</Label>
                      <Input 
                        id="reply-to" 
                        type="email"
                        value={emailSettings.replyTo}
                        onChange={(e) => setEmailSettings({...emailSettings, replyTo: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="daily-limit">Daily Email Limit</Label>
                      <Input 
                        id="daily-limit" 
                        type="number"
                        value={emailSettings.dailyLimit}
                        onChange={(e) => setEmailSettings({...emailSettings, dailyLimit: parseInt(e.target.value)})}
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch 
                      checked={emailSettings.enableTracking} 
                      onCheckedChange={(checked) => setEmailSettings({...emailSettings, enableTracking: checked})}
                    />
                    <Label>Enable Email Tracking (open rates, click tracking)</Label>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Test Connection
                    </Button>
                    <Button onClick={() => handleSaveSettings('email')}>
                      <Save className="h-4 w-4 mr-2" />
                      Save Email Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="security">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Security Settings
                  </CardTitle>
                  <CardDescription>Configure security and authentication settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold">Authentication</h3>
                      
                      <div className="flex items-center justify-between">
                        <Label>Multi-Factor Authentication (MFA)</Label>
                        <Switch 
                          checked={securitySettings.enableMFA} 
                          onCheckedChange={(checked) => setSecuritySettings({...securitySettings, enableMFA: checked})}
                        />
                      </div>

                      <div>
                        <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                        <Input 
                          id="session-timeout" 
                          type="number"
                          value={securitySettings.sessionTimeout}
                          onChange={(e) => setSecuritySettings({...securitySettings, sessionTimeout: parseInt(e.target.value)})}
                        />
                      </div>

                      <div>
                        <Label htmlFor="max-attempts">Max Failed Login Attempts</Label>
                        <Input 
                          id="max-attempts" 
                          type="number"
                          value={securitySettings.maxFailedAttempts}
                          onChange={(e) => setSecuritySettings({...securitySettings, maxFailedAttempts: parseInt(e.target.value)})}
                        />
                      </div>

                      <div>
                        <Label htmlFor="password-expiry">Password Expiry (days)</Label>
                        <Input 
                          id="password-expiry" 
                          type="number"
                          value={securitySettings.passwordExpiry}
                          onChange={(e) => setSecuritySettings({...securitySettings, passwordExpiry: parseInt(e.target.value)})}
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold">Data Management</h3>
                      
                      <div className="flex items-center justify-between">
                        <Label>Enable Audit Logging</Label>
                        <Switch 
                          checked={securitySettings.enableAuditLog} 
                          onCheckedChange={(checked) => setSecuritySettings({...securitySettings, enableAuditLog: checked})}
                        />
                      </div>

                      <div>
                        <Label htmlFor="data-retention">Data Retention Period (days)</Label>
                        <Input 
                          id="data-retention" 
                          type="number"
                          value={securitySettings.dataRetention}
                          onChange={(e) => setSecuritySettings({...securitySettings, dataRetention: parseInt(e.target.value)})}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <Label>GDPR Compliance Mode</Label>
                        <Switch 
                          checked={securitySettings.enableGDPR} 
                          onCheckedChange={(checked) => setSecuritySettings({...securitySettings, enableGDPR: checked})}
                        />
                      </div>

                      <Alert>
                        <AlertTriangle className="h-4 w-4" />
                        <AlertDescription>
                          Enabling GDPR mode will add additional privacy controls and data handling requirements.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={() => handleSaveSettings('security')}>
                      <Save className="h-4 w-4 mr-2" />
                      Save Security Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="notifications">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="h-5 w-5 mr-2" />
                    Notification Preferences
                  </CardTitle>
                  <CardDescription>Configure alerts and notification settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Email Notifications</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label>Campaign Started</Label>
                        <Switch 
                          checked={notificationSettings.campaignStarted} 
                          onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, campaignStarted: checked})}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <Label>Campaign Completed</Label>
                        <Switch 
                          checked={notificationSettings.campaignCompleted} 
                          onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, campaignCompleted: checked})}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <Label>High Risk Employee Detected</Label>
                        <Switch 
                          checked={notificationSettings.highRiskDetected} 
                          onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, highRiskDetected: checked})}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <Label>Weekly Reports</Label>
                        <Switch 
                          checked={notificationSettings.weeklyReports} 
                          onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, weeklyReports: checked})}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <Label>Monthly Reports</Label>
                        <Switch 
                          checked={notificationSettings.monthlyReports} 
                          onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, monthlyReports: checked})}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="alert-threshold">High Risk Alert Threshold (%)</Label>
                    <Input 
                      id="alert-threshold" 
                      type="number"
                      min="1"
                      max="100"
                      value={notificationSettings.alertThreshold}
                      onChange={(e) => setNotificationSettings({...notificationSettings, alertThreshold: parseInt(e.target.value)})}
                    />
                    <p className="text-sm text-gray-600 mt-1">Send alert when campaign success rate exceeds this threshold</p>
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={() => handleSaveSettings('notifications')}>
                      <Save className="h-4 w-4 mr-2" />
                      Save Notification Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="integrations">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="h-5 w-5 mr-2" />
                    Third-Party Integrations
                  </CardTitle>
                  <CardDescription>Connect with external services and tools</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="border-2">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <Database className="h-8 w-8 text-blue-600" />
                            <div>
                              <h3 className="font-semibold">Active Directory</h3>
                              <p className="text-sm text-gray-600">Employee sync and authentication</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Connected
                          </Badge>
                        </div>
                        <Button variant="outline" className="w-full">Configure</Button>
                      </CardContent>
                    </Card>

                    <Card className="border-2">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <Shield className="h-8 w-8 text-purple-600" />
                            <div>
                              <h3 className="font-semibold">SIEM Integration</h3>
                              <p className="text-sm text-gray-600">Security event logging</p>
                            </div>
                          </div>
                          <Badge variant="outline">
                            Not Connected
                          </Badge>
                        </div>
                        <Button className="w-full">Connect</Button>
                      </CardContent>
                    </Card>

                    <Card className="border-2">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <Bell className="h-8 w-8 text-orange-600" />
                            <div>
                              <h3 className="font-semibold">Slack</h3>
                              <p className="text-sm text-gray-600">Real-time notifications</p>
                            </div>
                          </div>
                          <Badge variant="outline">
                            Not Connected
                          </Badge>
                        </div>
                        <Button className="w-full">Connect</Button>
                      </CardContent>
                    </Card>

                    <Card className="border-2">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <Key className="h-8 w-8 text-red-600" />
                            <div>
                              <h3 className="font-semibold">API Access</h3>
                              <p className="text-sm text-gray-600">Custom integrations</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Active
                          </Badge>
                        </div>
                        <Button variant="outline" className="w-full">Manage Keys</Button>
                      </CardContent>
                    </Card>
                  </div>

                  <Alert>
                    <Globe className="h-4 w-4" />
                    <AlertDescription>
                      Need a custom integration? Contact our support team for enterprise API access and custom development options.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SettingsPage;
