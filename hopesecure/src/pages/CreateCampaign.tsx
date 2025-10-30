import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Upload, Users, Mail, Calendar, Target, Eye, Star, BarChart3, CheckCircle, AlertTriangle, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getActiveTemplates, Template } from "@/data/templates";

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [campaignType, setCampaignType] = useState("");
  const [uploadedTargets, setUploadedTargets] = useState<any[]>([]);
  const [showTargetList, setShowTargetList] = useState(false);

  // Get templates from shared data
  const templates = getActiveTemplates();

  const campaignTypes = [
    { value: "credential", label: "Credential Phishing", description: "Test if users enter login credentials" },
    { value: "data-input", label: "Data Input Form", description: "Test if users submit sensitive information" },
    { value: "link-click", label: "Link Click Tracking", description: "Track who clicks suspicious links" },
    { value: "attachment", label: "Fake Attachment", description: "Test if users download suspicious files" }
  ];

  // Mock function to simulate CSV upload and validation
  const handleCSVUpload = () => {
    const mockTargets = [
      { id: 1, name: "John Smith", email: "john.smith@company.com", department: "Marketing", status: "valid" },
      { id: 2, name: "Sarah Wilson", email: "sarah.wilson@company.com", department: "HR", status: "valid" },
      { id: 3, name: "Mike Johnson", email: "mike.johnson@company.com", department: "Finance", status: "valid" },
      { id: 4, name: "Invalid Email", email: "invalid-email", department: "IT", status: "invalid" },
      { id: 5, name: "Lisa Davis", email: "lisa.davis@company.com", department: "IT", status: "valid" },
      { id: 6, name: "Duplicate Test", email: "john.smith@company.com", department: "Marketing", status: "duplicate" }
    ];
    setUploadedTargets(mockTargets);
    setShowTargetList(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "valid": return "bg-green-100 text-green-800 border-green-200";
      case "invalid": return "bg-red-100 text-red-800 border-red-200";
      case "duplicate": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "valid": return <CheckCircle className="h-4 w-4" />;
      case "invalid": return <AlertTriangle className="h-4 w-4" />;
      case "duplicate": return <AlertTriangle className="h-4 w-4" />;
      default: return <CheckCircle className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Button 
              variant="outline" 
              size="sm"
              className="border-white/30 text-white hover:bg-white/10"
              onClick={() => navigate('/dashboard')}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">Create New Campaign</h1>
            <p className="text-gray-300">Set up a new cybersecurity awareness simulation</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-8">
        <form className="space-y-8">
          {/* Campaign Basic Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-hs-blue" />
                Campaign Details
              </CardTitle>
              <CardDescription>Basic information about your security test</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="campaign-name">Campaign Name</Label>
                <Input 
                  id="campaign-name" 
                  placeholder="e.g., Q1 Security Assessment" 
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="campaign-description">Description</Label>
                <Textarea 
                  id="campaign-description"
                  placeholder="Brief description of this campaign's objectives..."
                  className="mt-1"
                  rows={3}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>Campaign Type</Label>
                  <Select value={campaignType} onValueChange={setCampaignType}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select campaign type" />
                    </SelectTrigger>
                    <SelectContent>
                      {campaignTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          <div>
                            <div className="font-medium">{type.label}</div>
                            <div className="text-sm text-muted-foreground">{type.description}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="schedule-date">Schedule Date</Label>
                  <Input 
                    id="schedule-date" 
                    type="datetime-local" 
                    className="mt-1"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Template Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-hs-blue" />
                Email Template
              </CardTitle>
              <CardDescription>Choose or upload a template for your campaign</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {templates.map((template) => (
                  <div 
                    key={template.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-smooth hover:shadow-card ${
                      selectedTemplate === template.id 
                        ? 'border-hs-blue bg-hs-blue/5' 
                        : 'border-border'
                    }`}
                    onClick={() => setSelectedTemplate(template.id)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-foreground">{template.name}</h3>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="text-xs">
                          {template.category}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{template.description}</p>
                    
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className={`text-xs ${
                        template.difficulty === 'Expert' ? 'border-red-200 text-red-700' :
                        template.difficulty === 'Intermediate' ? 'border-yellow-200 text-yellow-700' :
                        'border-green-200 text-green-700'
                      }`}>
                        {template.difficulty}
                      </Badge>
                      <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 text-yellow-500 fill-current" />
                          <span>{template.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <BarChart3 className="h-3 w-3" />
                          <span>{template.successRate}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-xs text-muted-foreground space-y-1">
                      <div><strong>Subject:</strong> {template.emailSubject}</div>
                      <div><strong>Domain:</strong> {template.domain}</div>
                      <div className="flex items-center space-x-1">
                        <strong>Tags:</strong>
                        {template.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="px-1.5 py-0.5 bg-gray-100 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                        {template.tags.length > 2 && (
                          <span className="text-xs">+{template.tags.length - 2}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground mb-2">Or upload your own template</p>
                <Button variant="outline" size="sm">
                  Upload Template
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Target Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-hs-blue" />
                Target Employees
              </CardTitle>
              <CardDescription>Select who will receive this campaign</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-border rounded-lg p-4 text-center">
                  <Users className="h-8 w-8 text-hs-blue mx-auto mb-2" />
                  <h3 className="font-medium mb-2">Upload CSV File</h3>
                  <p className="text-sm text-muted-foreground mb-3">Upload a CSV with employee emails</p>
                  <Button variant="outline" size="sm" onClick={handleCSVUpload}>
                    <Upload className="h-4 w-4 mr-2" />
                    Upload CSV
                  </Button>
                </div>

                <div className="border border-border rounded-lg p-4 text-center">
                  <Mail className="h-8 w-8 text-hs-blue mx-auto mb-2" />
                  <h3 className="font-medium mb-2">Manual Entry</h3>
                  <p className="text-sm text-muted-foreground mb-3">Add emails manually</p>
                  <Button variant="outline" size="sm">
                    Add Manually
                  </Button>
                </div>
              </div>

              {showTargetList && uploadedTargets.length > 0 && (
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium">Uploaded Targets ({uploadedTargets.length})</h3>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-green-600">
                        ✓ {uploadedTargets.filter(t => t.status === 'valid').length} Valid
                      </span>
                      <span className="text-red-600">
                        ✗ {uploadedTargets.filter(t => t.status === 'invalid').length} Invalid
                      </span>
                      <span className="text-yellow-600">
                        ⚠ {uploadedTargets.filter(t => t.status === 'duplicate').length} Duplicates
                      </span>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg max-h-64 overflow-y-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50 border-b">
                        <tr>
                          <th className="text-left p-3">Name</th>
                          <th className="text-left p-3">Email</th>
                          <th className="text-left p-3">Department</th>
                          <th className="text-left p-3">Status</th>
                          <th className="text-left p-3">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {uploadedTargets.map((target) => (
                          <tr key={target.id} className="border-b hover:bg-gray-50">
                            <td className="p-3">{target.name}</td>
                            <td className="p-3">{target.email}</td>
                            <td className="p-3">{target.department}</td>
                            <td className="p-3">
                              <Badge variant="outline" className={getStatusColor(target.status)}>
                                {getStatusIcon(target.status)}
                                <span className="ml-1 capitalize">{target.status}</span>
                              </Badge>
                            </td>
                            <td className="p-3">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setUploadedTargets(uploadedTargets.filter(t => t.id !== target.id))}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              <div>
                <Label htmlFor="email-list">Target Email Addresses</Label>
                <Textarea 
                  id="email-list"
                  placeholder="Enter email addresses separated by commas or new lines..."
                  className="mt-1"
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <Button 
              variant="outline" 
              onClick={() => navigate('/dashboard')}
              className="order-2 sm:order-1"
            >
              Save as Draft
            </Button>
            <Button 
              variant="security" 
              size="lg"
              className="order-1 sm:order-2"
              onClick={() => navigate('/campaign/execute')}
            >
              Launch Campaign
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCampaign;