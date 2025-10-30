import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Copy, 
  Mail, 
  Globe, 
  Shield, 
  AlertTriangle,
  FileText,
  Download,
  Upload,
  Search,
  Filter,
  Code,
  Palette,
  Monitor,
  Smartphone,
  Tablet,
  Wand2,
  Image,
  Link,
  Type,
  Layout,
  Zap,
  Target,
  Settings,
  Save,
  RefreshCw,
  Clock,
  Star,
  BarChart3,
  MoreVertical,
  X,
  RotateCcw,
  Paperclip,
  Users
} from "lucide-react";
import { useState } from "react";

const TemplateManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showAdvancedEditor, setShowAdvancedEditor] = useState(false);
  const [previewMode, setPreviewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeEditorTab, setActiveEditorTab] = useState('basic');
  const [selectedTemplates, setSelectedTemplates] = useState<string[]>([]);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [sortBy, setSortBy] = useState('name');
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [showPreviewDialog, setShowPreviewDialog] = useState(false);
  const [previewTemplate, setPreviewTemplate] = useState<any>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [newTag, setNewTag] = useState('');
  
  const [mimicSettings, setMimicSettings] = useState({
    enableDomainMimic: false,
    targetDomain: "",
    mimicDomain: "",
    sslEnabled: false,
    brandingMimic: false
  });
  
  const [templateSettings, setTemplateSettings] = useState({
    name: "",
    category: "",
    description: "",
    emailSubject: "",
    senderName: "",
    senderEmail: "",
    priority: "normal",
    trackingEnabled: true,
    landingPageUrl: "",
    htmlContent: "",
    cssStyles: "",
    attachments: [],
    tags: [] as string[],
    difficulty: "intermediate"
  });

  // Utility functions
  const resetTemplateForm = () => {
    setTemplateSettings({
      name: "",
      category: "",
      description: "",
      emailSubject: "",
      senderName: "",
      senderEmail: "",
      priority: "normal",
      trackingEnabled: true,
      landingPageUrl: "",
      htmlContent: "",
      cssStyles: "",
      attachments: [],
      tags: [],
      difficulty: "intermediate"
    });
    setMimicSettings({
      enableDomainMimic: false,
      targetDomain: "",
      mimicDomain: "",
      sslEnabled: false,
      brandingMimic: false
    });
    setActiveEditorTab('basic');
  };

  const handleCreateTemplate = async () => {
    if (!templateSettings.name || !templateSettings.category) {
      alert('Please fill in required fields');
      return;
    }
    
    setIsCreating(true);
    
    // Simulate API call
    setTimeout(() => {
      alert('Template created successfully!');
      setIsCreating(false);
      setShowCreateDialog(false);
      resetTemplateForm();
    }, 2000);
  };

  const handleSaveDraft = () => {
    alert('Template saved as draft!');
  };

  const handleImportTemplate = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.html,.htm';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target?.result as string;
          setTemplateSettings(prev => ({
            ...prev,
            htmlContent: content,
            name: file.name.replace(/\.[^/.]+$/, "")
          }));
          alert('Template imported successfully!');
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  const handleExportLibrary = () => {
    const exportData = {
      templates: templates,
      exportDate: new Date().toISOString(),
      version: '1.0'
    };
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: 'application/json'
    });
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'template-library.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handlePreviewTemplate = (template: any) => {
    setPreviewTemplate(template);
    setShowPreviewDialog(true);
  };

  const handleEditTemplate = (template: any) => {
    setTemplateSettings({
      name: template.name,
      category: template.category,
      description: template.description,
      emailSubject: template.emailSubject || '',
      senderName: '',
      senderEmail: '',
      priority: 'normal',
      trackingEnabled: true,
      landingPageUrl: '',
      htmlContent: '',
      cssStyles: '',
      attachments: [],
      tags: template.tags || [],
      difficulty: template.difficulty || 'intermediate'
    });
    setShowCreateDialog(true);
  };

  const handleDuplicateTemplate = (template: any) => {
    alert(`Template "${template.name}" duplicated successfully!`);
  };

  const handleDeleteTemplate = (templateId: string) => {
    if (confirm('Are you sure you want to delete this template?')) {
      alert('Template deleted successfully!');
    }
  };

  const addTag = () => {
    if (newTag.trim() && !templateSettings.tags.includes(newTag.trim())) {
      setTemplateSettings(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTemplateSettings(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const generateMimicDomain = () => {
    if (!mimicSettings.targetDomain) return;
    
    const domain = mimicSettings.targetDomain;
    const suggestions = [
      domain.replace('o', '0'),
      domain.replace('a', '4'),
      domain.replace('e', '3'),
      `${domain.split('.')[0]}-secure.${domain.split('.')[1]}`,
      `${domain.split('.')[0]}-login.${domain.split('.')[1]}`,
      domain.replace('.com', '.net')
    ];
    
    const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
    setMimicSettings(prev => ({
      ...prev,
      mimicDomain: randomSuggestion
    }));
  };

  const templates = [
    {
      id: 1,
      name: "Company Login Page",
      category: "Credential Phishing",
      description: "Mimics company login portal to capture credentials",
      usageCount: 15,
      successRate: "32%",
      lastUsed: "2 days ago",
      status: "Active",
      riskLevel: "intermediate",
      preview: "Login form with company branding",
      emailSubject: "Urgent: Account Verification Required",
      domain: "company-login.secure.com",
      difficulty: "Intermediate",
      rating: 4.2,
      tags: ["Login", "Credentials", "Corporate"],
      hasAttachments: false,
      hasCSS: true,
      isResponsive: true,
      thumbnail: "/placeholder.svg"
    },
    {
      id: 2,
      name: "IT Security Alert",
      category: "Link Click Tracking",
      description: "Security alert prompting immediate action",
      usageCount: 23,
      successRate: "45%",
      lastUsed: "1 week ago",
      status: "Active",
      riskLevel: "beginner",
      preview: "Urgent security notification email",
      emailSubject: "Security Alert: Suspicious Activity Detected",
      domain: "security-alerts.company.com",
      difficulty: "Beginner",
      rating: 3.8,
      tags: ["Security", "Alert", "Urgent"],
      hasAttachments: false,
      hasCSS: false,
      isResponsive: true,
      thumbnail: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Office 365 Update",
      category: "Attachment Download",
      description: "Fake Microsoft Office update with malicious attachment",
      usageCount: 8,
      successRate: "67%",
      lastUsed: "3 days ago",
      status: "Draft",
      riskLevel: "expert",
      preview: "Microsoft Office update notification",
      emailSubject: "Important: Office 365 Security Update Required",
      domain: "updates.microsoft-office.com",
      difficulty: "Expert",
      rating: 4.9,
      tags: ["Microsoft", "Office365", "Update"],
      hasAttachments: true,
      hasCSS: true,
      isResponsive: true,
      thumbnail: "/placeholder.svg"
    }
  ];

  const categories = ["all", "Credential Phishing", "Link Click Tracking", "Attachment Download", "Data Input Form", "Social Engineering"];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || template.category === selectedCategory;
    const matchesDifficulty = difficultyFilter === "all" || template.riskLevel === difficultyFilter;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'usage':
        return b.usageCount - a.usageCount;
      case 'success':
        return parseInt(b.successRate) - parseInt(a.successRate);
      default:
        return 0;
    }
  });

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'expert': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800 border-green-200';
      case 'Draft': return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'Archived': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Advanced Template Management</h1>
            <p className="text-gray-600 mt-1">Create, customize and deploy sophisticated phishing simulation templates</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" onClick={handleImportTemplate}>
              <Upload className="h-4 w-4 mr-2" />
              Import Template
            </Button>
            <Button variant="outline" onClick={handleExportLibrary}>
              <Download className="h-4 w-4 mr-2" />
              Export Library
            </Button>
            <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Template
                </Button>
              </DialogTrigger>
              <DialogContent className="w-screen h-screen max-w-none max-h-none m-0 p-6 overflow-y-auto rounded-none">
                <DialogHeader>
                  <DialogTitle className="flex items-center text-xl">
                    <Wand2 className="h-6 w-6 mr-2" />
                    Advanced Template Builder
                  </DialogTitle>
                  <DialogDescription>
                    Create sophisticated phishing templates with advanced customization options
                  </DialogDescription>
                </DialogHeader>
                
                <Tabs value={activeEditorTab} onValueChange={setActiveEditorTab} className="mt-6">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="basic">Basic Info</TabsTrigger>
                    <TabsTrigger value="visual">Visual Editor</TabsTrigger>
                    <TabsTrigger value="code">Code Editor</TabsTrigger>
                    <TabsTrigger value="mimic">Domain Mimic</TabsTrigger>
                  </TabsList>

                  <TabsContent value="basic" className="space-y-6 mt-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="template-name">Template Name</Label>
                          <Input 
                            id="template-name" 
                            placeholder="e.g., Company Login Page" 
                            value={templateSettings.name}
                            onChange={(e) => setTemplateSettings({...templateSettings, name: e.target.value})}
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="template-category">Category</Label>
                          <Select value={templateSettings.category} onValueChange={(value) => setTemplateSettings({...templateSettings, category: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Credential Phishing">Credential Phishing</SelectItem>
                              <SelectItem value="Link Click Tracking">Link Click Tracking</SelectItem>
                              <SelectItem value="Attachment Download">Attachment Download</SelectItem>
                              <SelectItem value="Data Input Form">Data Input Form</SelectItem>
                              <SelectItem value="Social Engineering">Social Engineering</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="template-description">Description</Label>
                          <Textarea 
                            id="template-description" 
                            placeholder="Describe the purpose and approach of this template"
                            rows={3}
                            value={templateSettings.description}
                            onChange={(e) => setTemplateSettings({...templateSettings, description: e.target.value})}
                          />
                        </div>

                        <div>
                          <Label htmlFor="difficulty">Difficulty Level</Label>
                          <Select value={templateSettings.difficulty} onValueChange={(value) => setTemplateSettings({...templateSettings, difficulty: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select difficulty" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="beginner">Beginner</SelectItem>
                              <SelectItem value="intermediate">Intermediate</SelectItem>
                              <SelectItem value="expert">Expert</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="email-subject">Email Subject</Label>
                          <Input 
                            id="email-subject" 
                            placeholder="Subject line for the phishing email"
                            value={templateSettings.emailSubject}
                            onChange={(e) => setTemplateSettings({...templateSettings, emailSubject: e.target.value})}
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <Label htmlFor="sender-name">Sender Name</Label>
                            <Input 
                              id="sender-name" 
                              placeholder="IT Support"
                              value={templateSettings.senderName}
                              onChange={(e) => setTemplateSettings({...templateSettings, senderName: e.target.value})}
                            />
                          </div>
                          <div>
                            <Label htmlFor="sender-email">Sender Email</Label>
                            <Input 
                              id="sender-email" 
                              placeholder="support@company.com"
                              value={templateSettings.senderEmail}
                              onChange={(e) => setTemplateSettings({...templateSettings, senderEmail: e.target.value})}
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="priority">Email Priority</Label>
                          <Select value={templateSettings.priority} onValueChange={(value) => setTemplateSettings({...templateSettings, priority: value})}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">Low</SelectItem>
                              <SelectItem value="normal">Normal</SelectItem>
                              <SelectItem value="high">High</SelectItem>
                              <SelectItem value="urgent">Urgent</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Switch 
                            checked={templateSettings.trackingEnabled} 
                            onCheckedChange={(checked) => setTemplateSettings({...templateSettings, trackingEnabled: checked})}
                          />
                          <Label>Enable tracking pixels</Label>
                        </div>

                        <div>
                          <Label htmlFor="landing-page">Landing Page URL</Label>
                          <Input 
                            id="landing-page" 
                            placeholder="https://phishing-landing.company.com"
                            value={templateSettings.landingPageUrl}
                            onChange={(e) => setTemplateSettings({...templateSettings, landingPageUrl: e.target.value})}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label>Template Tags</Label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {templateSettings.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-red-50">
                            {tag}
                            <button 
                              onClick={() => removeTag(tag)}
                              className="ml-1 text-red-500 hover:text-red-700"
                            >
                              ×
                            </button>
                          </Badge>
                        ))}
                        <div className="flex items-center space-x-2">
                          <Input 
                            value={newTag}
                            onChange={(e) => setNewTag(e.target.value)}
                            placeholder="Add tag"
                            className="h-6 w-24 text-xs"
                            onKeyPress={(e) => e.key === 'Enter' && addTag()}
                          />
                          <Button variant="ghost" size="sm" className="h-6 text-xs" onClick={addTag}>
                            <Plus className="h-3 w-3 mr-1" />
                            Add
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="visual" className="space-y-6 mt-6">
                    <Alert>
                      <Eye className="h-4 w-4" />
                      <AlertDescription>
                        Visual editor with device preview modes. Build templates using drag-and-drop interface.
                      </AlertDescription>
                    </Alert>
                  </TabsContent>

                  <TabsContent value="code" className="space-y-6 mt-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <Label className="text-lg font-semibold">HTML Content</Label>
                        <Textarea
                          className="font-mono text-sm h-96 mt-2"
                          placeholder="<!DOCTYPE html>..."
                          value={templateSettings.htmlContent}
                          onChange={(e) => setTemplateSettings({...templateSettings, htmlContent: e.target.value})}
                        />
                      </div>
                      
                      <div>
                        <Label className="text-lg font-semibold">CSS Styles</Label>
                        <Textarea
                          className="font-mono text-sm h-96 mt-2"
                          placeholder="/* Custom CSS */"
                          value={templateSettings.cssStyles}
                          onChange={(e) => setTemplateSettings({...templateSettings, cssStyles: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <Alert>
                      <Code className="h-4 w-4" />
                      <AlertDescription>
                        Use variables like <code>{'{{company_name}}'}</code>, <code>{'{{employee_name}}'}</code>, <code>{'{{landing_url}}'}</code> for dynamic content replacement.
                      </AlertDescription>
                    </Alert>
                  </TabsContent>

                  <TabsContent value="mimic" className="space-y-6 mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Globe className="h-5 w-5 mr-2" />
                          Domain Mimicry Configuration
                        </CardTitle>
                        <CardDescription>
                          Configure domain spoofing and brand mimicry settings for realistic phishing simulation
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                              <Switch 
                                checked={mimicSettings.enableDomainMimic} 
                                onCheckedChange={(checked) => setMimicSettings({...mimicSettings, enableDomainMimic: checked})}
                              />
                              <Label>Enable Domain Mimicry</Label>
                            </div>
                            
                            <div>
                              <Label>Target Domain</Label>
                              <Input 
                                placeholder="company.com"
                                value={mimicSettings.targetDomain}
                                onChange={(e) => setMimicSettings({...mimicSettings, targetDomain: e.target.value})}
                              />
                            </div>
                            
                            <div>
                              <Label>Mimic Domain</Label>
                              <div className="flex space-x-2">
                                <Input 
                                  placeholder="comp4ny.com"
                                  value={mimicSettings.mimicDomain}
                                  onChange={(e) => setMimicSettings({...mimicSettings, mimicDomain: e.target.value})}
                                  className="flex-1"
                                />
                                <Button variant="outline" size="sm" onClick={generateMimicDomain}>
                                  <Wand2 className="h-4 w-4" />
                                </Button>
                              </div>
                              <p className="text-sm text-gray-600 mt-1">
                                Click the wand to generate suggestions
                              </p>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              <Switch 
                                checked={mimicSettings.sslEnabled} 
                                onCheckedChange={(checked) => setMimicSettings({...mimicSettings, sslEnabled: checked})}
                              />
                              <Label>Enable SSL Certificate</Label>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <div>
                              <Label>Domain Similarity Score</Label>
                              <div className="mt-2 p-4 bg-green-50 border border-green-200 rounded-lg">
                                <div className="flex items-center justify-between">
                                  <span className="text-green-800 font-semibold">92% Similar</span>
                                  <Badge className="bg-green-100 text-green-800">Excellent</Badge>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <Alert>
                          <AlertTriangle className="h-4 w-4" />
                          <AlertDescription>
                            <strong>Legal Notice:</strong> Domain mimicry should only be used for authorized security testing within your organization.
                          </AlertDescription>
                        </Alert>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>

                <div className="flex justify-end space-x-2 mt-6 pt-6 border-t">
                  <Button variant="outline" onClick={() => {setShowCreateDialog(false); resetTemplateForm();}}>
                    Cancel
                  </Button>
                  <Button variant="outline" onClick={handleSaveDraft}>
                    <Save className="h-4 w-4 mr-2" />
                    Save as Draft
                  </Button>
                  <Button onClick={handleCreateTemplate} disabled={isCreating}>
                    {isCreating ? (
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    ) : (
                      <Zap className="h-4 w-4 mr-2" />
                    )}
                    {isCreating ? 'Creating...' : 'Create Template'}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search templates..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Template Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredTemplates.map((template) => (
            <Card key={template.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{template.name}</CardTitle>
                    <CardDescription className="mt-1">{template.description}</CardDescription>
                  </div>
                  <div className="flex space-x-1 ml-4">
                    <Button variant="ghost" size="sm" onClick={() => handlePreviewTemplate(template)}>
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleEditTemplate(template)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleDuplicateTemplate(template)}>
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700" onClick={() => handleDeleteTemplate(template.id.toString())}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className={getRiskColor(template.riskLevel)}>
                      <AlertTriangle className="h-3 w-3 mr-1" />
                      {template.riskLevel} Risk
                    </Badge>
                    <Badge variant="outline" className={getStatusColor(template.status)}>
                      {template.status}
                    </Badge>
                    <Badge variant="secondary">{template.category}</Badge>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Usage Count</p>
                      <p className="font-semibold text-blue-600">{template.usageCount}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Success Rate</p>
                      <p className="font-semibold text-green-600">{template.successRate}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Last Used</p>
                      <p className="font-semibold text-gray-700">{template.lastUsed}</p>
                    </div>
                  </div>

                  {/* Template Details */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">Subject:</span>
                      <span className="font-medium truncate">{template.emailSubject}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">Domain:</span>
                      <span className="font-medium truncate">{template.domain}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1" onClick={() => handlePreviewTemplate(template)}>
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button variant="default" size="sm" className="flex-1" onClick={() => handleEditTemplate(template)}>
                      <FileText className="h-4 w-4 mr-2" />
                      Use Template
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredTemplates.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No templates found</h3>
              <p className="text-gray-600 mb-4">
                {searchTerm || selectedCategory !== "all" 
                  ? "Try adjusting your search or filter criteria" 
                  : "Create your first phishing template to get started"
                }
              </p>
              {!searchTerm && selectedCategory === "all" && (
                <Button onClick={() => setShowCreateDialog(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Your First Template
                </Button>
              )}
            </CardContent>
          </Card>
        )}

        {/* Template Preview Dialog */}
        <Dialog open={showPreviewDialog} onOpenChange={setShowPreviewDialog}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center">
                <Eye className="h-5 w-5 mr-2" />
                Template Preview - {previewTemplate?.name}
              </DialogTitle>
              <DialogDescription>
                Preview how this template will appear to recipients
              </DialogDescription>
            </DialogHeader>
            
            {previewTemplate && (
              <div className="space-y-6">
                {/* Email Header */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <Mail className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">From: {previewTemplate.domain}</p>
                        <p className="text-sm text-gray-600">To: employee@company.com</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-red-600 border-red-200">
                      SIMULATION
                    </Badge>
                  </div>
                  <h3 className="font-bold text-lg">{previewTemplate.emailSubject}</h3>
                </div>
                
                {/* Email Content */}
                <div className="border rounded-lg p-6 bg-white">
                  <div className="space-y-4">
                    <p>Dear Employee,</p>
                    <p>{previewTemplate.description}</p>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="flex items-center space-x-2">
                        <AlertTriangle className="h-5 w-5 text-red-600" />
                        <p className="font-semibold text-red-800">Action Required</p>
                      </div>
                      <p className="text-red-700 mt-2">Please verify your account immediately.</p>
                    </div>
                    <div className="text-center py-4">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        Click Here to Verify
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Template Stats */}
                <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{previewTemplate.usageCount}</div>
                    <div className="text-sm text-gray-600">Times Used</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{previewTemplate.successRate}</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{previewTemplate.riskLevel}</div>
                    <div className="text-sm text-gray-600">Risk Level</div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default TemplateManagement;
