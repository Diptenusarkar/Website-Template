import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Globe, 
  Plus, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  Copy, 
  Eye, 
  Trash2, 
  RefreshCw,
  Shield,
  Mail,
  Settings,
  ExternalLink
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const DomainManagement = () => {
  const { toast } = useToast();
  const [domains, setDomains] = useState([
    {
      id: 1,
      domain: "secure-login.company.com",
      status: "Verified",
      addedDate: "2024-08-10",
      lastVerified: "2024-08-15",
      sslEnabled: true,
      spfRecord: "v=spf1 include:_spf.google.com ~all",
      dkimRecord: "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDGGG...",
      returnPath: "bounce@secure-login.company.com"
    },
    {
      id: 2,
      domain: "hr-portal.mycompany.net",
      status: "Pending",
      addedDate: "2024-08-14",
      lastVerified: "Never",
      sslEnabled: false,
      spfRecord: "Not configured",
      dkimRecord: "Not configured",
      returnPath: "Not configured"
    },
    {
      id: 3,
      domain: "updates.companyname.org",
      status: "Failed",
      addedDate: "2024-08-12",
      lastVerified: "2024-08-13",
      sslEnabled: true,
      spfRecord: "v=spf1 include:_spf.sendgrid.net ~all",
      dkimRecord: "Configuration error",
      returnPath: "bounce@updates.companyname.org"
    }
  ]);

  const [newDomain, setNewDomain] = useState("");
  const [selectedDomain, setSelectedDomain] = useState<any>(null);
  const [isVerifying, setIsVerifying] = useState<number | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Verified": return "bg-hs-purple/10 text-hs-purple border-hs-purple/20";
      case "Pending": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Failed": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Verified": return <CheckCircle className="h-4 w-4" />;
      case "Pending": return <Clock className="h-4 w-4" />;
      case "Failed": return <AlertTriangle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const handleAddDomain = () => {
    if (!newDomain) {
      toast({
        title: "Error",
        description: "Please enter a domain name",
        variant: "destructive"
      });
      return;
    }

    const domainExists = domains.find(d => d.domain === newDomain);
    if (domainExists) {
      toast({
        title: "Error", 
        description: "Domain already exists",
        variant: "destructive"
      });
      return;
    }

    const newDomainObj = {
      id: domains.length + 1,
      domain: newDomain,
      status: "Pending",
      addedDate: new Date().toISOString().split('T')[0],
      lastVerified: "Never",
      sslEnabled: false,
      spfRecord: "Not configured",
      dkimRecord: "Not configured", 
      returnPath: "Not configured"
    };

    setDomains([...domains, newDomainObj]);
    setNewDomain("");
    toast({
      title: "Success",
      description: `Domain ${newDomain} added successfully`
    });
  };

  const handleVerifyDomain = async (domainId: number) => {
    setIsVerifying(domainId);
    
    // Simulate verification process
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setDomains(domains.map(domain => {
      if (domain.id === domainId) {
        const isSuccess = Math.random() > 0.3; // 70% success rate
        return {
          ...domain,
          status: isSuccess ? "Verified" : "Failed",
          lastVerified: new Date().toISOString().split('T')[0],
          spfRecord: isSuccess ? "v=spf1 include:_spf.google.com ~all" : "Configuration error",
          dkimRecord: isSuccess ? "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDGGG..." : "Configuration error",
          returnPath: isSuccess ? `bounce@${domain.domain}` : "Configuration error"
        };
      }
      return domain;
    }));
    
    setIsVerifying(null);
    toast({
      title: "Verification Complete",
      description: "Domain verification process completed"
    });
  };

  const handleDeleteDomain = (domainId: number) => {
    setDomains(domains.filter(domain => domain.id !== domainId));
    toast({
      title: "Success",
      description: "Domain deleted successfully"
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied",
      description: "Text copied to clipboard"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center">
              <Globe className="h-8 w-8 mr-3 text-hs-blue" />
              Domain Management
            </h1>
            <p className="text-gray-600 mt-1">Manage and verify sender domains for phishing simulations</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Domain
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Domain</DialogTitle>
                <DialogDescription>
                  Add a new domain for phishing simulation campaigns
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div>
                  <Label htmlFor="domain">Domain Name</Label>
                  <Input
                    id="domain"
                    placeholder="example.com"
                    value={newDomain}
                    onChange={(e) => setNewDomain(e.target.value)}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Enter the domain you want to use for sending simulation emails
                  </p>
                </div>
                <Alert>
                  <Shield className="h-4 w-4" />
                  <AlertDescription>
                    Make sure you own this domain and have DNS access for verification
                  </AlertDescription>
                </Alert>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setNewDomain("")}>
                    Cancel
                  </Button>
                  <Button onClick={handleAddDomain}>
                    Add Domain
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <Tabs defaultValue="domains" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="domains">Domain List</TabsTrigger>
            <TabsTrigger value="dns-config">DNS Configuration</TabsTrigger>
          </TabsList>

          <TabsContent value="domains">
            {/* Domain Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Domains</p>
                      <p className="text-2xl font-bold text-gray-900">{domains.length}</p>
                    </div>
                    <Globe className="h-8 w-8 text-hs-blue" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Verified</p>
                      <p className="text-2xl font-bold text-hs-purple">
                        {domains.filter(d => d.status === "Verified").length}
                      </p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-hs-purple" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Pending</p>
                      <p className="text-2xl font-bold text-yellow-600">
                        {domains.filter(d => d.status === "Pending").length}
                      </p>
                    </div>
                    <Clock className="h-8 w-8 text-yellow-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Failed</p>
                      <p className="text-2xl font-bold text-red-600">
                        {domains.filter(d => d.status === "Failed").length}
                      </p>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Domain List */}
            <Card>
              <CardHeader>
                <CardTitle>Domain List</CardTitle>
                <CardDescription>
                  All registered domains and their verification status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Domain Name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>SSL</TableHead>
                        <TableHead>Added</TableHead>
                        <TableHead>Last Verified</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {domains.map((domain) => (
                        <TableRow key={domain.id}>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <Globe className="h-4 w-4 text-gray-400" />
                              <span className="font-medium">{domain.domain}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className={getStatusColor(domain.status)}>
                              {getStatusIcon(domain.status)}
                              <span className="ml-1">{domain.status}</span>
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {domain.sslEnabled ? (
                              <Badge variant="outline" className="bg-green-100 text-green-800">
                                <Shield className="h-3 w-3 mr-1" />
                                Enabled
                              </Badge>
                            ) : (
                              <Badge variant="outline" className="bg-gray-100 text-gray-800">
                                Disabled
                              </Badge>
                            )}
                          </TableCell>
                          <TableCell>{domain.addedDate}</TableCell>
                          <TableCell>{domain.lastVerified}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleVerifyDomain(domain.id)}
                                disabled={isVerifying === domain.id}
                              >
                                {isVerifying === domain.id ? (
                                  <RefreshCw className="h-4 w-4 animate-spin" />
                                ) : (
                                  <RefreshCw className="h-4 w-4" />
                                )}
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setSelectedDomain(domain)}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleDeleteDomain(domain.id)}
                                className="text-red-600 hover:text-red-700"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="dns-config">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* DNS Records */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="h-5 w-5 mr-2" />
                    DNS Configuration Guide
                  </CardTitle>
                  <CardDescription>
                    Required DNS records for domain verification
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-blue-600" />
                      SPF Record
                    </h4>
                    <div className="bg-gray-50 p-3 rounded-lg border">
                      <code className="text-sm">v=spf1 include:_spf.google.com ~all</code>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="ml-2"
                        onClick={() => copyToClipboard("v=spf1 include:_spf.google.com ~all")}
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Add this TXT record to authorize email sending
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Shield className="h-4 w-4 mr-2 text-green-600" />
                      DKIM Record
                    </h4>
                    <div className="bg-gray-50 p-3 rounded-lg border">
                      <code className="text-sm break-all">
                        v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDGGG...
                      </code>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="ml-2"
                        onClick={() => copyToClipboard("v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDGGG...")}
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Add this TXT record with selector "default._domainkey"
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Return-Path</h4>
                    <div className="bg-gray-50 p-3 rounded-lg border">
                      <code className="text-sm">bounce@yourdomain.com</code>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="ml-2"
                        onClick={() => copyToClipboard("bounce@yourdomain.com")}
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Configure bounce handling subdomain
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Verification Steps */}
              <Card>
                <CardHeader>
                  <CardTitle>Verification Steps</CardTitle>
                  <CardDescription>
                    Follow these steps to verify your domain
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium">Add DNS Records</h4>
                        <p className="text-sm text-gray-600">
                          Add the SPF, DKIM, and Return-Path records to your domain's DNS settings
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium">Wait for Propagation</h4>
                        <p className="text-sm text-gray-600">
                          DNS changes can take up to 24 hours to propagate globally
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium">Verify Domain</h4>
                        <p className="text-sm text-gray-600">
                          Click the verify button to check your DNS configuration
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        ✓
                      </div>
                      <div>
                        <h4 className="font-medium">Start Sending</h4>
                        <p className="text-sm text-gray-600">
                          Once verified, use the domain in your phishing campaigns
                        </p>
                      </div>
                    </div>
                  </div>

                  <Alert className="mt-6">
                    <ExternalLink className="h-4 w-4" />
                    <AlertDescription>
                      Need help with DNS configuration? 
                      <a href="#" className="text-blue-600 hover:underline ml-1">
                        View detailed documentation
                      </a>
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Domain Details Modal */}
        {selectedDomain && (
          <Dialog open={!!selectedDomain} onOpenChange={() => setSelectedDomain(null)}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="flex items-center">
                  <Globe className="h-5 w-5 mr-2" />
                  {selectedDomain.domain}
                </DialogTitle>
                <DialogDescription>
                  Domain configuration and DNS records
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Status</Label>
                    <Badge variant="outline" className={getStatusColor(selectedDomain.status)}>
                      {getStatusIcon(selectedDomain.status)}
                      <span className="ml-1">{selectedDomain.status}</span>
                    </Badge>
                  </div>
                  <div>
                    <Label>SSL Enabled</Label>
                    <Badge variant="outline" className={selectedDomain.sslEnabled ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}>
                      {selectedDomain.sslEnabled ? "Yes" : "No"}
                    </Badge>
                  </div>
                </div>

                <div>
                  <Label>SPF Record</Label>
                  <div className="bg-gray-50 p-3 rounded-lg border mt-1">
                    <code className="text-sm">{selectedDomain.spfRecord}</code>
                  </div>
                </div>

                <div>
                  <Label>DKIM Record</Label>
                  <div className="bg-gray-50 p-3 rounded-lg border mt-1">
                    <code className="text-sm break-all">{selectedDomain.dkimRecord}</code>
                  </div>
                </div>

                <div>
                  <Label>Return-Path</Label>
                  <div className="bg-gray-50 p-3 rounded-lg border mt-1">
                    <code className="text-sm">{selectedDomain.returnPath}</code>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Added Date</Label>
                    <p className="text-sm text-gray-600">{selectedDomain.addedDate}</p>
                  </div>
                  <div>
                    <Label>Last Verified</Label>
                    <p className="text-sm text-gray-600">{selectedDomain.lastVerified}</p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
};

export default DomainManagement;
