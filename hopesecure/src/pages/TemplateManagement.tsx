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
  Users,
  ExternalLink,
  Undo,
  Redo,
  AlignLeft,
  AlignCenter,
  AlignRight
} from "lucide-react";
import { useState } from "react";
import { templateData, getActiveTemplates, addTemplate, updateTemplate, deleteTemplate, Template } from "@/data/templates";

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
    difficulty: "intermediate",
    previewDevice: "desktop",
    hasCSS: false,
    isResponsive: true,
    hasAttachments: false,
    textContent: "",
    preview: ""
  });

  // Visual Editor States
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [canvasElements, setCanvasElements] = useState<any[]>([]);
  const [elementProperties, setElementProperties] = useState({
    backgroundColor: "#ffffff",
    textColor: "#000000",
    fontSize: "14px",
    alignment: "left",
    margin: "0",
    padding: "0",
    fadeIn: false,
    slideUp: false
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
      difficulty: "intermediate",
      previewDevice: "desktop",
      hasCSS: false,
      isResponsive: true,
      hasAttachments: false,
      textContent: "",
      preview: ""
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
    
    try {
      // Create new template object
      const newTemplate: Omit<Template, 'id'> = {
        name: templateSettings.name,
        category: templateSettings.category,
        description: templateSettings.description || 'Custom template created in Template Management',
        usageCount: 0,
        successRate: '0%',
        lastUsed: 'Never',
        status: 'Draft',
        riskLevel: templateSettings.difficulty?.toLowerCase() || 'beginner',
        preview: templateSettings.preview || templateSettings.name,
        emailSubject: templateSettings.emailSubject || `Template: ${templateSettings.name}`,
        domain: mimicSettings.mimicDomain || 'custom-template.com',
        difficulty: templateSettings.difficulty || 'Beginner',
        rating: 0,
        tags: templateSettings.tags || [],
        hasAttachments: templateSettings.hasAttachments || false,
        hasCSS: templateSettings.hasCSS || false,
        isResponsive: templateSettings.isResponsive || true,
        thumbnail: '/placeholder.svg',
        htmlContent: templateSettings.htmlContent || '',
        cssStyles: templateSettings.cssStyles || '',
        senderName: templateSettings.senderName || '',
        senderEmail: templateSettings.senderEmail || '',
        landingPageUrl: templateSettings.landingPageUrl || '',
        priority: templateSettings.priority || 'normal',
        trackingEnabled: templateSettings.trackingEnabled || true
      };
      
      // Add template to shared data
      addTemplate(newTemplate);
      
      setTimeout(() => {
        alert('Template created successfully and added to library!');
        setIsCreating(false);
        setShowCreateDialog(false);
        resetTemplateForm();
        // Force re-render to show the new template
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error('Error creating template:', error);
      alert('Error creating template. Please try again.');
      setIsCreating(false);
    }
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
      senderName: template.senderName || '',
      senderEmail: template.senderEmail || '',
      priority: template.priority || 'normal',
      trackingEnabled: template.trackingEnabled || true,
      landingPageUrl: template.landingPageUrl || '',
      htmlContent: template.htmlContent || '',
      cssStyles: template.cssStyles || '',
      attachments: [],
      tags: template.tags || [],
      difficulty: template.difficulty || 'intermediate',
      previewDevice: "desktop",
      hasCSS: template.hasCSS || false,
      isResponsive: template.isResponsive || true,
      hasAttachments: template.hasAttachments || false,
      textContent: "",
      preview: template.preview || ""
    });
    setShowCreateDialog(true);
  };

  const handleDuplicateTemplate = (template: any) => {
    alert(`Template "${template.name}" duplicated successfully!`);
  };

  const handleDeleteTemplate = (templateId: string) => {
    if (confirm('Are you sure you want to delete this template?')) {
      try {
        deleteTemplate(parseInt(templateId));
        alert('Template deleted successfully!');
        // Force re-render to show updated list
        window.location.reload();
      } catch (error) {
        console.error('Error deleting template:', error);
        alert('Error deleting template. Please try again.');
      }
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

  // Visual Editor Functions
  const handleDeviceChange = (device: string) => {
    setTemplateSettings(prev => ({ ...prev, previewDevice: device }));
  };

  const handleRefreshPreview = () => {
    // Force refresh of the preview
    setTemplateSettings(prev => ({ ...prev }));
  };

  const handleOpenInNewTab = () => {
    const htmlContent = generatePreviewHTML();
    const newWindow = window.open();
    if (newWindow) {
      newWindow.document.write(htmlContent);
      newWindow.document.close();
    }
  };

  const generatePreviewHTML = () => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${templateSettings.emailSubject || 'Email Preview'}</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5; }
        .email-container { max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .header { padding: 20px; border-bottom: 1px solid #eee; display: flex; align-items: center; gap: 12px; }
        .avatar { width: 40px; height: 40px; background: #3b82f6; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; }
        .content { padding: 24px; }
        .alert-box { background: #fef3c7; border: 1px solid #f59e0b; padding: 16px; border-radius: 6px; margin: 16px 0; }
        .btn { background: #dc2626; color: white; padding: 12px 32px; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="avatar">📧</div>
            <div>
                <div style="font-weight: bold;">${templateSettings.senderName || 'IT Support'}</div>
                <div style="color: #666; font-size: 14px;">${templateSettings.senderEmail || 'support@company.com'}</div>
            </div>
        </div>
        <div class="content">
            <h2>${templateSettings.emailSubject || 'Security Alert: Action Required'}</h2>
            <p>Dear Employee,</p>
            <p>We have detected unusual activity on your account and need to verify your identity immediately.</p>
            <div class="alert-box">
                <strong>⚠️ Your account will be suspended in 24 hours if no action is taken.</strong>
            </div>
            <p>Please click the button below to verify your account:</p>
            <div style="text-align: center; margin: 24px 0;">
                <button class="btn">Verify Account Now</button>
            </div>
            <p style="color: #666; font-size: 14px;">If you have any questions, please contact our support team.</p>
        </div>
    </div>
</body>
</html>`;
  };

  // Default template text management
  const [defaultTemplateTexts, setDefaultTemplateTexts] = useState({
    greeting: "Dear Employee,",
    'main-text': "We have detected unusual activity on your account and need to verify your identity immediately.",
    'instruction-text': "Please click the button below to verify your account:",
    'footer-text': "If you have any questions, please contact our support team.",
    'warning-text': "⚠️ Your account will be suspended in 24 hours if no action is taken."
  });

  const getDefaultTemplateText = (elementId: string) => {
    return defaultTemplateTexts[elementId as keyof typeof defaultTemplateTexts] || '';
  };

  const updateDefaultTemplateText = (elementId: string, newText: string) => {
    setDefaultTemplateTexts(prev => ({
      ...prev,
      [elementId]: newText
    }));
  };

  // Helper function to apply styles to default template elements
  const getElementStyle = (elementId: string) => {
    if (selectedElement === elementId) {
      return {
        backgroundColor: elementProperties.backgroundColor,
        color: elementProperties.textColor,
        fontSize: elementProperties.fontSize,
        textAlign: elementProperties.alignment as any,
        margin: `${elementProperties.margin}px`,
        padding: `${elementProperties.padding}px`,
      };
    }
    return {};
  };

  const handleDragStart = (e: React.DragEvent, componentType: string) => {
    e.dataTransfer.setData('componentType', componentType);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const componentType = e.dataTransfer.getData('componentType');
    const newElement = {
      id: Date.now().toString(),
      type: componentType,
      content: getDefaultContent(componentType),
      properties: { ...elementProperties }
    };
    setCanvasElements(prev => [...prev, newElement]);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const getDefaultContent = (type: string) => {
    switch (type) {
      case 'header': return { text: 'Header Text', tag: 'h1' };
      case 'text': return { text: 'Sample text content' };
      case 'button': return { text: 'Click Here', action: '#' };
      case 'image': return { src: '/placeholder.svg', alt: 'Image' };
      case 'section': return { content: 'This is a section container. You can add content here and customize its appearance.' };
      case 'footer': return { text: 'Footer text' };
      case 'form': return { fields: ['email', 'password'] };
      default: return { text: 'Default content' };
    }
  };

  const handleElementClick = (elementId: string) => {
    setSelectedElement(elementId);
  };

  const handlePropertyChange = (property: string, value: any) => {
    setElementProperties(prev => ({ ...prev, [property]: value }));
    if (selectedElement) {
      setCanvasElements(prev => 
        prev.map(el => 
          el.id === selectedElement 
            ? { ...el, properties: { ...el.properties, [property]: value } }
            : el
        )
      );
    }
  };

  const handleColorChange = (type: 'background' | 'text', color: string) => {
    const property = type === 'background' ? 'backgroundColor' : 'textColor';
    handlePropertyChange(property, color);
  };

  const handleUndo = () => {
    // Implement undo functionality
    if (canvasElements.length > 0) {
      setCanvasElements(prev => prev.slice(0, -1));
    }
  };

  const handleRedo = () => {
    // Implement redo functionality
    console.log('Redo action');
  };

  const handleSaveChanges = () => {
    const updatedHTML = generateCanvasHTML();
    setTemplateSettings(prev => ({ ...prev, htmlContent: updatedHTML }));
    alert('Changes saved successfully!');
  };

  const handleExportHTML = () => {
    const htmlContent = generateCanvasHTML();
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${templateSettings.name || 'template'}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const generateCanvasHTML = () => {
    let html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${templateSettings.emailSubject}</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
        .email-container { max-width: 600px; margin: 0 auto; }
        ${templateSettings.cssStyles}
    </style>
</head>
<body>
    <div class="email-container">`;

    canvasElements.forEach(element => {
      html += generateElementHTML(element);
    });

    html += `
    </div>
</body>
</html>`;
    return html;
  };

  const generateElementHTML = (element: any) => {
    const { type, content, properties } = element;
    const style = `style="
      background-color: ${properties.backgroundColor};
      color: ${properties.textColor};
      font-size: ${properties.fontSize};
      text-align: ${properties.alignment};
      margin: ${properties.margin}px;
      padding: ${properties.padding}px;
    "`;

    switch (type) {
      case 'header':
        return `<h1 ${style}>${content.text}</h1>`;
      case 'text':
        return `<p ${style}>${content.text}</p>`;
      case 'button':
        return `<button ${style}>${content.text}</button>`;
      case 'image':
        return `<img src="${content.src}" alt="${content.alt}" ${style} />`;
      default:
        return `<div ${style}>${content.text || 'Element'}</div>`;
    }
  };

  const loadTemplate = (templateType: string) => {
    let elements = [];
    switch (templateType) {
      case 'login':
        elements = [
          { id: '1', type: 'header', content: { text: 'Company Login Portal' }, properties: elementProperties },
          { id: '2', type: 'text', content: { text: 'Please enter your credentials to access your account.' }, properties: elementProperties },
          { id: '3', type: 'form', content: { fields: ['email', 'password'] }, properties: elementProperties },
          { id: '4', type: 'button', content: { text: 'Sign In' }, properties: elementProperties }
        ];
        break;
      case 'security':
        elements = [
          { id: '1', type: 'header', content: { text: 'Security Alert' }, properties: elementProperties },
          { id: '2', type: 'text', content: { text: 'Suspicious activity detected on your account.' }, properties: elementProperties },
          { id: '3', type: 'button', content: { text: 'Verify Now' }, properties: elementProperties }
        ];
        break;
      case 'document':
        elements = [
          { id: '1', type: 'header', content: { text: 'Document Shared' }, properties: elementProperties },
          { id: '2', type: 'text', content: { text: 'A new document has been shared with you.' }, properties: elementProperties },
          { id: '3', type: 'button', content: { text: 'View Document' }, properties: elementProperties }
        ];
        break;
    }
    setCanvasElements(elements);
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

  const templates = templateData;

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
                    <div className="flex flex-col space-y-6">
                      {/* Device Preview Selector */}
                      <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <h3 className="font-semibold text-gray-800">Device Preview</h3>
                          <div className="flex space-x-2">
                            <Button
                              variant={templateSettings.previewDevice === 'desktop' ? 'default' : 'outline'}
                              size="sm"
                              onClick={() => handleDeviceChange('desktop')}
                              className="flex items-center space-x-2"
                            >
                              <Monitor className="h-4 w-4" />
                              <span>Desktop</span>
                            </Button>
                            <Button
                              variant={templateSettings.previewDevice === 'tablet' ? 'default' : 'outline'}
                              size="sm"
                              onClick={() => handleDeviceChange('tablet')}
                              className="flex items-center space-x-2"
                            >
                              <Tablet className="h-4 w-4" />
                              <span>Tablet</span>
                            </Button>
                            <Button
                              variant={templateSettings.previewDevice === 'mobile' ? 'default' : 'outline'}
                              size="sm"
                              onClick={() => handleDeviceChange('mobile')}
                              className="flex items-center space-x-2"
                            >
                              <Smartphone className="h-4 w-4" />
                              <span>Mobile</span>
                            </Button>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" onClick={handleRefreshPreview}>
                            <RefreshCw className="h-4 w-4 mr-2" />
                            Refresh Preview
                          </Button>
                          <Button variant="outline" size="sm" onClick={handleOpenInNewTab}>
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Open in New Tab
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        {/* Component Library */}
                        <div className="lg:col-span-1">
                          <Card>
                            <CardHeader>
                              <CardTitle className="text-lg flex items-center">
                                <Layout className="h-5 w-5 mr-2" />
                                Components
                              </CardTitle>
                              <CardDescription>Drag components to build your template</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <div className="space-y-2">
                                <h4 className="font-medium text-sm text-gray-700">Layout</h4>
                                <div className="grid grid-cols-2 gap-2">
                                  <div 
                                    className="p-2 bg-blue-50 border border-blue-200 rounded cursor-pointer hover:bg-blue-100 transition-colors"
                                    draggable
                                    onDragStart={(e) => handleDragStart(e, 'header')}
                                  >
                                    <div className="w-full h-8 bg-blue-300 rounded mb-1"></div>
                                    <span className="text-xs">Header</span>
                                  </div>
                                  <div 
                                    className="p-2 bg-green-50 border border-green-200 rounded cursor-pointer hover:bg-green-100 transition-colors"
                                    draggable
                                    onDragStart={(e) => handleDragStart(e, 'footer')}
                                  >
                                    <div className="w-full h-6 bg-green-300 rounded mb-1"></div>
                                    <span className="text-xs">Footer</span>
                                  </div>
                                  <div 
                                    className="p-2 bg-purple-50 border border-purple-200 rounded cursor-pointer hover:bg-purple-100 transition-colors"
                                    draggable
                                    onDragStart={(e) => handleDragStart(e, '2column')}
                                  >
                                    <div className="grid grid-cols-2 gap-1 mb-1">
                                      <div className="h-4 bg-purple-300 rounded"></div>
                                      <div className="h-4 bg-purple-300 rounded"></div>
                                    </div>
                                    <span className="text-xs">2 Column</span>
                                  </div>
                                  <div 
                                    className="p-2 bg-yellow-50 border border-yellow-200 rounded cursor-pointer hover:bg-yellow-100 transition-colors"
                                    draggable
                                    onDragStart={(e) => handleDragStart(e, 'section')}
                                  >
                                    <div className="w-full h-6 bg-yellow-300 rounded mb-1"></div>
                                    <span className="text-xs">Section</span>
                                  </div>
                                </div>
                              </div>

                              <div className="space-y-2">
                                <h4 className="font-medium text-sm text-gray-700">Content</h4>
                                <div className="grid grid-cols-2 gap-2">
                                  <div 
                                    className="p-2 bg-gray-50 border border-gray-200 rounded cursor-pointer hover:bg-gray-100 transition-colors"
                                    draggable
                                    onDragStart={(e) => handleDragStart(e, 'text')}
                                  >
                                    <div className="w-full h-2 bg-gray-400 rounded mb-1"></div>
                                    <div className="w-3/4 h-2 bg-gray-300 rounded"></div>
                                    <span className="text-xs mt-1 block">Text</span>
                                  </div>
                                  <div 
                                    className="p-2 bg-red-50 border border-red-200 rounded cursor-pointer hover:bg-red-100 transition-colors"
                                    draggable
                                    onDragStart={(e) => handleDragStart(e, 'button')}
                                  >
                                    <div className="w-full h-6 bg-red-300 rounded mb-1"></div>
                                    <span className="text-xs">Button</span>
                                  </div>
                                  <div 
                                    className="p-2 bg-orange-50 border border-orange-200 rounded cursor-pointer hover:bg-orange-100 transition-colors"
                                    draggable
                                    onDragStart={(e) => handleDragStart(e, 'image')}
                                  >
                                    <div className="w-full h-4 bg-orange-300 rounded mb-1"></div>
                                    <span className="text-xs">Image</span>
                                  </div>
                                  <div 
                                    className="p-2 bg-indigo-50 border border-indigo-200 rounded cursor-pointer hover:bg-indigo-100 transition-colors"
                                    draggable
                                    onDragStart={(e) => handleDragStart(e, 'form')}
                                  >
                                    <div className="space-y-1 mb-1">
                                      <div className="w-full h-1 bg-indigo-300 rounded"></div>
                                      <div className="w-full h-1 bg-indigo-200 rounded"></div>
                                      <div className="w-full h-1 bg-indigo-200 rounded"></div>
                                    </div>
                                    <span className="text-xs">Form</span>
                                  </div>
                                </div>
                              </div>

                              <div className="space-y-2">
                                <h4 className="font-medium text-sm text-gray-700">Templates</h4>
                                <div className="space-y-2">
                                  <Button 
                                    variant="outline" 
                                    size="sm" 
                                    className="w-full justify-start text-xs"
                                    onClick={() => loadTemplate('login')}
                                  >
                                    <Mail className="h-3 w-3 mr-2" />
                                    Login Page
                                  </Button>
                                  <Button 
                                    variant="outline" 
                                    size="sm" 
                                    className="w-full justify-start text-xs"
                                    onClick={() => loadTemplate('security')}
                                  >
                                    <Shield className="h-3 w-3 mr-2" />
                                    Security Alert
                                  </Button>
                                  <Button 
                                    variant="outline" 
                                    size="sm" 
                                    className="w-full justify-start text-xs"
                                    onClick={() => loadTemplate('document')}
                                  >
                                    <FileText className="h-3 w-3 mr-2" />
                                    Document Share
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>

                        {/* Visual Editor Canvas */}
                        <div className="lg:col-span-2">
                          <Card className="h-[600px]">
                            <CardHeader className="pb-2">
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-lg">Visual Canvas</CardTitle>
                                <div className="flex space-x-2">
                                  <Button variant="ghost" size="sm" onClick={handleUndo}>
                                    <Undo className="h-4 w-4" />
                                  </Button>
                                  <Button variant="ghost" size="sm" onClick={handleRedo}>
                                    <Redo className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="p-0">
                              <div className={`mx-auto bg-white border-2 border-dashed border-gray-300 transition-all duration-300 ${
                                templateSettings.previewDevice === 'desktop' ? 'w-full h-[520px]' :
                                templateSettings.previewDevice === 'tablet' ? 'w-[768px] h-[520px]' :
                                'w-[375px] h-[520px]'
                              }`}
                              onDrop={handleDrop}
                              onDragOver={handleDragOver}
                              >
                                <div className="p-6 h-full overflow-auto">
                                  {/* Canvas Elements */}
                                  {canvasElements.length > 0 ? (
                                    <div className="space-y-4">
                                      {canvasElements.map((element) => (
                                        <div
                                          key={element.id}
                                          className={`border border-gray-200 p-2 cursor-pointer hover:border-blue-400 transition-colors ${
                                            selectedElement === element.id ? 'border-blue-500 bg-blue-50' : ''
                                          }`}
                                          onClick={() => handleElementClick(element.id)}
                                          style={{
                                            backgroundColor: element.properties.backgroundColor,
                                            color: element.properties.textColor,
                                            fontSize: element.properties.fontSize,
                                            textAlign: element.properties.alignment,
                                            margin: `${element.properties.margin}px`,
                                            padding: `${element.properties.padding}px`,
                                          }}
                                        >
                                          {element.type === 'header' && <h3>{element.content.text}</h3>}
                                          {element.type === 'text' && <p>{element.content.text}</p>}
                                          {element.type === 'button' && (
                                            <button className="bg-blue-500 text-white px-4 py-2 rounded">
                                              {element.content.text}
                                            </button>
                                          )}
                                          {element.type === 'image' && (
                                            <img src={element.content.src} alt={element.content.alt} className="max-w-full h-20 object-cover" />
                                          )}
                                          {element.type === 'form' && (
                                            <div className="space-y-2">
                                              <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
                                              <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
                                            </div>
                                          )}
                                          {element.type === 'section' && (
                                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50 hover:border-blue-400 transition-colors min-h-[100px]">
                                              <div className="text-gray-700 font-medium mb-2">
                                                <Layout className="h-4 w-4 inline mr-2" />
                                                Section Container
                                              </div>
                                              <div className="text-gray-600 leading-relaxed">
                                                {element.content.content || 'This is a section container. You can add content here and customize its appearance.'}
                                              </div>
                                              {selectedElement === element.id && (
                                                <div className="text-xs text-blue-600 mt-3 font-medium">
                                                  Click in Properties panel to edit content →
                                                </div>
                                              )}
                                            </div>
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                  ) : (
                                    /* Default Email Template Preview - Interactive Elements */
                                    <div className="bg-white border rounded-lg shadow-sm p-6 space-y-4">
                                      {/* Header Section */}
                                      <div 
                                        className={`flex items-center space-x-3 pb-3 border-b cursor-pointer p-2 rounded transition-colors ${
                                          selectedElement === 'header-section' ? 'border-blue-500 bg-blue-50' : 'hover:bg-gray-50'
                                        }`}
                                        onClick={() => {
                                          setSelectedElement('header-section');
                                          setElementProperties({
                                            backgroundColor: "#ffffff",
                                            textColor: "#000000",
                                            fontSize: "16px",
                                            alignment: "left",
                                            margin: "0",
                                            padding: "8",
                                            fadeIn: false,
                                            slideUp: false
                                          });
                                        }}
                                      >
                                        <div 
                                          className={`w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-105 ${
                                            selectedElement === 'avatar' ? 'ring-2 ring-blue-400' : ''
                                          }`}
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedElement('avatar');
                                            setElementProperties({
                                              backgroundColor: "#3b82f6",
                                              textColor: "#ffffff",
                                              fontSize: "16px",
                                              alignment: "center",
                                              margin: "0",
                                              padding: "0",
                                              fadeIn: false,
                                              slideUp: false
                                            });
                                          }}
                                        >
                                          <Mail className="h-5 w-5 text-white" />
                                        </div>
                                        <div>
                                          <h3 
                                            className={`font-semibold cursor-pointer p-1 rounded transition-colors ${
                                              selectedElement === 'sender-name' ? 'bg-blue-100 border border-blue-300' : 'hover:bg-gray-100'
                                            }`}
                                            style={getElementStyle('sender-name')}
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              setSelectedElement('sender-name');
                                              setElementProperties({
                                                backgroundColor: "#ffffff",
                                                textColor: "#000000",
                                                fontSize: "16px",
                                                alignment: "left",
                                                margin: "0",
                                                padding: "4",
                                                fadeIn: false,
                                                slideUp: false
                                              });
                                            }}
                                          >
                                            {templateSettings.senderName || 'IT Support'}
                                          </h3>
                                          <p 
                                            className={`text-sm text-gray-600 cursor-pointer p-1 rounded transition-colors ${
                                              selectedElement === 'sender-email' ? 'bg-blue-100 border border-blue-300' : 'hover:bg-gray-100'
                                            }`}
                                            style={getElementStyle('sender-email')}
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              setSelectedElement('sender-email');
                                              setElementProperties({
                                                backgroundColor: "#ffffff",
                                                textColor: "#6b7280",
                                                fontSize: "14px",
                                                alignment: "left",
                                                margin: "0",
                                                padding: "4",
                                                fadeIn: false,
                                                slideUp: false
                                              });
                                            }}
                                          >
                                            {templateSettings.senderEmail || 'support@company.com'}
                                          </p>
                                        </div>
                                      </div>
                                      
                                      <div>
                                        <h2 
                                          className={`text-xl font-bold mb-4 cursor-pointer p-2 rounded transition-colors ${
                                            selectedElement === 'email-subject' ? 'bg-blue-100 border border-blue-300' : 'hover:bg-gray-100'
                                          }`}
                                          style={getElementStyle('email-subject')}
                                          onClick={() => {
                                            setSelectedElement('email-subject');
                                            setElementProperties({
                                              backgroundColor: "#ffffff",
                                              textColor: "#000000",
                                              fontSize: "24px",
                                              alignment: "left",
                                              margin: "0",
                                              padding: "8",
                                              fadeIn: false,
                                              slideUp: false
                                            });
                                          }}
                                        >
                                          {templateSettings.emailSubject || 'Security Alert: Action Required'}
                                        </h2>
                                        <div className="space-y-3 text-gray-700">
                                          <p 
                                            className={`cursor-pointer p-2 rounded transition-colors ${
                                              selectedElement === 'greeting' ? 'bg-blue-100 border border-blue-300' : 'hover:bg-gray-100'
                                            }`}
                                            style={getElementStyle('greeting')}
                                            onClick={() => {
                                              setSelectedElement('greeting');
                                              setElementProperties({
                                                backgroundColor: "#ffffff",
                                                textColor: "#374151",
                                                fontSize: "16px",
                                                alignment: "left",
                                                margin: "0",
                                                padding: "8",
                                                fadeIn: false,
                                                slideUp: false
                                              });
                                            }}
                                          >
                                            {defaultTemplateTexts.greeting}
                                          </p>
                                          <p 
                                            className={`cursor-pointer p-2 rounded transition-colors ${
                                              selectedElement === 'main-text' ? 'bg-blue-100 border border-blue-300' : 'hover:bg-gray-100'
                                            }`}
                                            style={getElementStyle('main-text')}
                                            onClick={() => {
                                              setSelectedElement('main-text');
                                              setElementProperties({
                                                backgroundColor: "#ffffff",
                                                textColor: "#374151",
                                                fontSize: "16px",
                                                alignment: "left",
                                                margin: "0",
                                                padding: "8",
                                                fadeIn: false,
                                                slideUp: false
                                              });
                                            }}
                                          >
                                            {defaultTemplateTexts['main-text']}
                                          </p>
                                          <div 
                                            className={`bg-yellow-50 border border-yellow-200 p-4 rounded-lg cursor-pointer transition-colors ${
                                              selectedElement === 'warning-box' ? 'ring-2 ring-blue-400' : 'hover:ring-1 hover:ring-yellow-400'
                                            }`}
                                            onClick={() => {
                                              setSelectedElement('warning-box');
                                              setElementProperties({
                                                backgroundColor: "#fefce8",
                                                textColor: "#92400e",
                                                fontSize: "16px",
                                                alignment: "left",
                                                margin: "0",
                                                padding: "16",
                                                fadeIn: false,
                                                slideUp: false
                                              });
                                            }}
                                          >
                                            <p 
                                              className={`text-yellow-800 font-medium cursor-pointer p-1 rounded ${
                                                selectedElement === 'warning-text' ? 'bg-yellow-200' : ''
                                              }`}
                                              style={getElementStyle('warning-text')}
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedElement('warning-text');
                                                setElementProperties({
                                                  backgroundColor: "#fefce8",
                                                  textColor: "#92400e",
                                                  fontSize: "16px",
                                                  alignment: "left",
                                                  margin: "0",
                                                  padding: "4",
                                                  fadeIn: false,
                                                  slideUp: false
                                                });
                                              }}
                                            >
                                              {defaultTemplateTexts['warning-text']}
                                            </p>
                                          </div>
                                          <p 
                                            className={`cursor-pointer p-2 rounded transition-colors ${
                                              selectedElement === 'instruction-text' ? 'bg-blue-100 border border-blue-300' : 'hover:bg-gray-100'
                                            }`}
                                            style={getElementStyle('instruction-text')}
                                            onClick={() => {
                                              setSelectedElement('instruction-text');
                                              setElementProperties({
                                                backgroundColor: "#ffffff",
                                                textColor: "#374151",
                                                fontSize: "16px",
                                                alignment: "left",
                                                margin: "0",
                                                padding: "8",
                                                fadeIn: false,
                                                slideUp: false
                                              });
                                            }}
                                          >
                                            {defaultTemplateTexts['instruction-text']}
                                          </p>
                                          <div className="text-center py-4">
                                            <Button 
                                              className={`bg-red-600 hover:bg-red-700 text-white px-8 py-3 cursor-pointer transition-all ${
                                                selectedElement === 'cta-button' ? 'ring-2 ring-blue-400 scale-105' : 'hover:scale-105'
                                              }`}
                                              onClick={() => {
                                                setSelectedElement('cta-button');
                                                setElementProperties({
                                                  backgroundColor: "#dc2626",
                                                  textColor: "#ffffff",
                                                  fontSize: "16px",
                                                  alignment: "center",
                                                  margin: "0",
                                                  padding: "12",
                                                  fadeIn: false,
                                                  slideUp: false
                                                });
                                              }}
                                            >
                                              Verify Account Now
                                            </Button>
                                          </div>
                                          <p 
                                            className={`text-sm text-gray-600 cursor-pointer p-2 rounded transition-colors ${
                                              selectedElement === 'footer-text' ? 'bg-blue-100 border border-blue-300' : 'hover:bg-gray-100'
                                            }`}
                                            style={getElementStyle('footer-text')}
                                            onClick={() => {
                                              setSelectedElement('footer-text');
                                              setElementProperties({
                                                backgroundColor: "#ffffff",
                                                textColor: "#6b7280",
                                                fontSize: "14px",
                                                alignment: "left",
                                                margin: "0",
                                                padding: "8",
                                                fadeIn: false,
                                                slideUp: false
                                              });
                                            }}
                                          >
                                            {defaultTemplateTexts['footer-text']}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>

                        {/* Properties Panel */}
                        <div className="lg:col-span-1">
                          <Card>
                            <CardHeader>
                              <CardTitle className="text-lg flex items-center">
                                <Settings className="h-5 w-5 mr-2" />
                                Properties
                              </CardTitle>
                              <CardDescription>Customize selected element</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <div className="space-y-3">
                                <div>
                                  <Label className="text-sm font-medium">Background Color</Label>
                                  <div className="flex space-x-2 mt-1">
                                    <div 
                                      className="w-6 h-6 bg-white border-2 border-gray-300 rounded cursor-pointer hover:scale-110 transition-transform"
                                      onClick={() => handleColorChange('background', '#ffffff')}
                                    ></div>
                                    <div 
                                      className="w-6 h-6 bg-blue-500 rounded cursor-pointer hover:scale-110 transition-transform"
                                      onClick={() => handleColorChange('background', '#3b82f6')}
                                    ></div>
                                    <div 
                                      className="w-6 h-6 bg-red-500 rounded cursor-pointer hover:scale-110 transition-transform"
                                      onClick={() => handleColorChange('background', '#ef4444')}
                                    ></div>
                                    <div 
                                      className="w-6 h-6 bg-green-500 rounded cursor-pointer hover:scale-110 transition-transform"
                                      onClick={() => handleColorChange('background', '#10b981')}
                                    ></div>
                                    <div 
                                      className="w-6 h-6 bg-yellow-500 rounded cursor-pointer hover:scale-110 transition-transform"
                                      onClick={() => handleColorChange('background', '#f59e0b')}
                                    ></div>
                                  </div>
                                </div>

                                <div>
                                  <Label className="text-sm font-medium">Text Color</Label>
                                  <div className="flex space-x-2 mt-1">
                                    <div 
                                      className="w-6 h-6 bg-black rounded cursor-pointer hover:scale-110 transition-transform"
                                      onClick={() => handleColorChange('text', '#000000')}
                                    ></div>
                                    <div 
                                      className="w-6 h-6 bg-gray-600 rounded cursor-pointer hover:scale-110 transition-transform"
                                      onClick={() => handleColorChange('text', '#4b5563')}
                                    ></div>
                                    <div 
                                      className="w-6 h-6 bg-blue-600 rounded cursor-pointer hover:scale-110 transition-transform"
                                      onClick={() => handleColorChange('text', '#2563eb')}
                                    ></div>
                                    <div 
                                      className="w-6 h-6 bg-red-600 rounded cursor-pointer hover:scale-110 transition-transform"
                                      onClick={() => handleColorChange('text', '#dc2626')}
                                    ></div>
                                  </div>
                                </div>

                                <div>
                                  <Label className="text-sm font-medium">Font Size</Label>
                                  <Select 
                                    value={elementProperties.fontSize} 
                                    onValueChange={(value) => handlePropertyChange('fontSize', value)}
                                  >
                                    <SelectTrigger className="mt-1">
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="12px">12px</SelectItem>
                                      <SelectItem value="14px">14px</SelectItem>
                                      <SelectItem value="16px">16px</SelectItem>
                                      <SelectItem value="18px">18px</SelectItem>
                                      <SelectItem value="24px">24px</SelectItem>
                                      <SelectItem value="32px">32px</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>

                                <div>
                                  <Label className="text-sm font-medium">Alignment</Label>
                                  <div className="flex space-x-1 mt-1">
                                    <Button 
                                      variant={elementProperties.alignment === 'left' ? 'default' : 'outline'} 
                                      size="sm"
                                      onClick={() => handlePropertyChange('alignment', 'left')}
                                    >
                                      <AlignLeft className="h-4 w-4" />
                                    </Button>
                                    <Button 
                                      variant={elementProperties.alignment === 'center' ? 'default' : 'outline'} 
                                      size="sm"
                                      onClick={() => handlePropertyChange('alignment', 'center')}
                                    >
                                      <AlignCenter className="h-4 w-4" />
                                    </Button>
                                    <Button 
                                      variant={elementProperties.alignment === 'right' ? 'default' : 'outline'} 
                                      size="sm"
                                      onClick={() => handlePropertyChange('alignment', 'right')}
                                    >
                                      <AlignRight className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>

                                {/* Content Editing for selected element */}
                                {selectedElement && canvasElements.find(el => el.id === selectedElement)?.type === 'section' && (
                                  <div>
                                    <Label className="text-sm font-medium">Section Content</Label>
                                    <Textarea 
                                      placeholder="Enter section content..."
                                      className="mt-1"
                                      value={canvasElements.find(el => el.id === selectedElement)?.content.content || ''}
                                      onChange={(e) => {
                                        const currentElement = canvasElements.find(el => el.id === selectedElement);
                                        if (currentElement) {
                                          setCanvasElements(prev => 
                                            prev.map(el => 
                                              el.id === selectedElement 
                                                ? { ...el, content: { ...el.content, content: e.target.value } }
                                                : el
                                            )
                                          );
                                        }
                                      }}
                                    />
                                  </div>
                                )}

                                {/* Text content editing for text and header elements */}
                                {selectedElement && ['text', 'header', 'button'].includes(canvasElements.find(el => el.id === selectedElement)?.type) && (
                                  <div>
                                    <Label className="text-sm font-medium">Text Content</Label>
                                    <Input 
                                      placeholder="Enter text..."
                                      className="mt-1"
                                      value={canvasElements.find(el => el.id === selectedElement)?.content.text || ''}
                                      onChange={(e) => {
                                        const currentElement = canvasElements.find(el => el.id === selectedElement);
                                        if (currentElement) {
                                          setCanvasElements(prev => 
                                            prev.map(el => 
                                              el.id === selectedElement 
                                                ? { ...el, content: { ...el.content, text: e.target.value } }
                                                : el
                                            )
                                          );
                                        }
                                      }}
                                    />
                                  </div>
                                )}

                                {/* Content editing for default template elements */}
                                {selectedElement === 'sender-name' && (
                                  <div>
                                    <Label className="text-sm font-medium">Sender Name</Label>
                                    <Input 
                                      placeholder="Enter sender name..."
                                      className="mt-1"
                                      value={templateSettings.senderName}
                                      onChange={(e) => setTemplateSettings({...templateSettings, senderName: e.target.value})}
                                    />
                                  </div>
                                )}

                                {selectedElement === 'sender-email' && (
                                  <div>
                                    <Label className="text-sm font-medium">Sender Email</Label>
                                    <Input 
                                      placeholder="Enter sender email..."
                                      className="mt-1"
                                      value={templateSettings.senderEmail}
                                      onChange={(e) => setTemplateSettings({...templateSettings, senderEmail: e.target.value})}
                                    />
                                  </div>
                                )}

                                {selectedElement === 'email-subject' && (
                                  <div>
                                    <Label className="text-sm font-medium">Email Subject</Label>
                                    <Input 
                                      placeholder="Enter email subject..."
                                      className="mt-1"
                                      value={templateSettings.emailSubject}
                                      onChange={(e) => setTemplateSettings({...templateSettings, emailSubject: e.target.value})}
                                    />
                                  </div>
                                )}

                                {['greeting', 'main-text', 'instruction-text', 'footer-text', 'warning-text'].includes(selectedElement) && (
                                  <div>
                                    <Label className="text-sm font-medium">Text Content</Label>
                                    <Textarea 
                                      placeholder="Enter text content..."
                                      className="mt-1"
                                      value={getDefaultTemplateText(selectedElement)}
                                      onChange={(e) => updateDefaultTemplateText(selectedElement, e.target.value)}
                                    />
                                  </div>
                                )}

                                <div className="space-y-2">
                                  <Label className="text-sm font-medium">Spacing</Label>
                                  <div className="space-y-2">
                                    <div>
                                      <Label className="text-xs text-gray-600">Margin</Label>
                                      <Input 
                                        type="number" 
                                        placeholder="0" 
                                        className="text-sm" 
                                        value={elementProperties.margin}
                                        onChange={(e) => handlePropertyChange('margin', e.target.value)}
                                      />
                                    </div>
                                    <div>
                                      <Label className="text-xs text-gray-600">Padding</Label>
                                      <Input 
                                        type="number" 
                                        placeholder="0" 
                                        className="text-sm"
                                        value={elementProperties.padding}
                                        onChange={(e) => handlePropertyChange('padding', e.target.value)}
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="pt-4 border-t">
                                  <h4 className="font-medium text-sm mb-2">Animation</h4>
                                  <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                      <Switch 
                                        checked={elementProperties.fadeIn}
                                        onCheckedChange={(checked) => handlePropertyChange('fadeIn', checked)}
                                      />
                                      <Label className="text-sm">Fade In</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <Switch 
                                        checked={elementProperties.slideUp}
                                        onCheckedChange={(checked) => handlePropertyChange('slideUp', checked)}
                                      />
                                      <Label className="text-sm">Slide Up</Label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      {/* Bottom Toolbar */}
                      <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <Switch 
                              checked={templateSettings.isResponsive}
                              onCheckedChange={(checked) => setTemplateSettings({...templateSettings, isResponsive: checked})}
                            />
                            <Label className="text-sm">Responsive Design</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch 
                              checked={templateSettings.hasCSS}
                              onCheckedChange={(checked) => setTemplateSettings({...templateSettings, hasCSS: checked})}
                            />
                            <Label className="text-sm">Custom CSS</Label>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" onClick={handleSaveChanges}>
                            <Save className="h-4 w-4 mr-2" />
                            Save Changes
                          </Button>
                          <Button variant="outline" size="sm" onClick={handleExportHTML}>
                            <Download className="h-4 w-4 mr-2" />
                            Export HTML
                          </Button>
                        </div>
                      </div>
                    </div>
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
