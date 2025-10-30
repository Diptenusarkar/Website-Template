import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CampaignTrendsChart, DepartmentRiskChart, AttackVectorChart } from "@/components/Charts";
import { 
  TrendingUp, 
  TrendingDown, 
  Download, 
  Filter, 
  Calendar,
  BarChart3,
  PieChart,
  Users,
  Shield,
  AlertTriangle,
  CheckCircle,
  Target,
  Mail,
  MousePointer,
  Eye,
  Award,
  FileText,
  Building
} from "lucide-react";
import { useState } from "react";

const AdvancedReports = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("last30days");
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  // Mock data for charts and analytics
  const campaignData = [
    { name: "Company Login Page", sent: 150, opened: 98, clicked: 34, compromised: 12, successRate: 22.7 },
    { name: "Security Alert", sent: 200, opened: 180, clicked: 92, compromised: 23, successRate: 46.0 },
    { name: "HR Document", sent: 120, opened: 72, clicked: 21, compromised: 6, successRate: 17.5 },
    { name: "IT Support", sent: 80, opened: 56, clicked: 18, compromised: 4, successRate: 22.5 },
    { name: "CEO Message", sent: 60, opened: 55, clicked: 35, compromised: 20, successRate: 58.3 }
  ];

  const departmentRisks = [
    { department: "Marketing", employees: 45, highRisk: 12, mediumRisk: 18, lowRisk: 15, avgScore: 52 },
    { department: "Sales", employees: 32, highRisk: 15, mediumRisk: 10, lowRisk: 7, avgScore: 68 },
    { department: "HR", employees: 23, highRisk: 4, mediumRisk: 12, lowRisk: 7, avgScore: 38 },
    { department: "Finance", employees: 28, highRisk: 3, mediumRisk: 8, lowRisk: 17, avgScore: 25 },
    { department: "IT", employees: 35, highRisk: 2, mediumRisk: 8, lowRisk: 25, avgScore: 18 }
  ];

  const timeSeriesData = [
    { month: "Jan", campaigns: 5, avgSuccessRate: 35, employeesAffected: 48 },
    { month: "Feb", campaigns: 7, avgSuccessRate: 42, employeesAffected: 72 },
    { month: "Mar", campaigns: 6, avgSuccessRate: 38, employeesAffected: 55 },
    { month: "Apr", campaigns: 8, avgSuccessRate: 29, employeesAffected: 41 },
    { month: "May", campaigns: 9, avgSuccessRate: 25, employeesAffected: 38 },
    { month: "Jun", campaigns: 7, avgSuccessRate: 31, employeesAffected: 44 },
    { month: "Jul", campaigns: 6, avgSuccessRate: 27, employeesAffected: 35 },
    { month: "Aug", campaigns: 4, avgSuccessRate: 23, employeesAffected: 28 }
  ];

  const overallStats = {
    totalCampaigns: 52,
    totalEmployees: 163,
    averageSuccessRate: 31.2,
    highRiskEmployees: 36,
    improvementRate: 15.3,
    complianceScore: 78
  };

  const exportReport = (type: string) => {
    // In real implementation, this would generate and download the report
    console.log(`Exporting ${type} report...`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Advanced Reports & Analytics</h1>
            <p className="text-gray-600 mt-1">Comprehensive security awareness insights and trends</p>
          </div>
          <div className="flex space-x-2">
            <Select value={selectedTimeRange} onValueChange={setSelectedTimeRange}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last7days">Last 7 Days</SelectItem>
                <SelectItem value="last30days">Last 30 Days</SelectItem>
                <SelectItem value="last90days">Last 90 Days</SelectItem>
                <SelectItem value="last6months">Last 6 Months</SelectItem>
                <SelectItem value="lastyear">Last Year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export All
            </Button>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Campaigns</p>
                  <p className="text-2xl font-bold text-blue-600">{overallStats.totalCampaigns}</p>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12% from last period
                  </p>
                </div>
                <Target className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Success Rate</p>
                  <p className="text-2xl font-bold text-orange-600">{overallStats.averageSuccessRate}%</p>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingDown className="h-3 w-3 mr-1" />
                    -{overallStats.improvementRate}% (Good!)
                  </p>
                </div>
                <BarChart3 className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">High Risk Employees</p>
                  <p className="text-2xl font-bold text-red-600">{overallStats.highRiskEmployees}</p>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingDown className="h-3 w-3 mr-1" />
                    -8 from last month
                  </p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Compliance Score</p>
                  <p className="text-2xl font-bold text-green-600">{overallStats.complianceScore}%</p>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +5% improvement
                  </p>
                </div>
                <Shield className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="campaigns" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="campaigns">Campaign Analysis</TabsTrigger>
            <TabsTrigger value="departments">Department Breakdown</TabsTrigger>
            <TabsTrigger value="trends">Trends & Insights</TabsTrigger>
            <TabsTrigger value="compliance">Compliance Report</TabsTrigger>
          </TabsList>

          <TabsContent value="campaigns">
            <div className="space-y-6">
              {/* Campaign Performance Table */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center">
                        <Target className="h-5 w-5 mr-2" />
                        Campaign Performance Analysis
                      </CardTitle>
                      <CardDescription>Detailed breakdown of phishing simulation results</CardDescription>
                    </div>
                    <Button variant="outline" onClick={() => exportReport('campaign')}>
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Campaign Name</th>
                          <th className="text-center py-3 px-4">Emails Sent</th>
                          <th className="text-center py-3 px-4">Opened</th>
                          <th className="text-center py-3 px-4">Clicked</th>
                          <th className="text-center py-3 px-4">Compromised</th>
                          <th className="text-center py-3 px-4">Success Rate</th>
                          <th className="text-center py-3 px-4">Risk Level</th>
                        </tr>
                      </thead>
                      <tbody>
                        {campaignData.map((campaign, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 font-medium">{campaign.name}</td>
                            <td className="text-center py-3 px-4">{campaign.sent}</td>
                            <td className="text-center py-3 px-4 text-blue-600">{campaign.opened}</td>
                            <td className="text-center py-3 px-4 text-yellow-600">{campaign.clicked}</td>
                            <td className="text-center py-3 px-4 text-red-600 font-semibold">{campaign.compromised}</td>
                            <td className="text-center py-3 px-4">
                              <Badge variant={campaign.successRate > 40 ? "destructive" : campaign.successRate > 25 ? "secondary" : "outline"}>
                                {campaign.successRate}%
                              </Badge>
                            </td>
                            <td className="text-center py-3 px-4">
                              <Badge variant={campaign.successRate > 40 ? "destructive" : campaign.successRate > 25 ? "outline" : "secondary"}>
                                {campaign.successRate > 40 ? "High" : campaign.successRate > 25 ? "Medium" : "Low"}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Interactive Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2" />
                      Attack Vector Effectiveness
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64">
                      <AttackVectorChart />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="h-5 w-5 mr-2" />
                      Top Performing Templates
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {campaignData.sort((a, b) => b.successRate - a.successRate).slice(0, 3).map((campaign, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-sm">{campaign.name}</p>
                            <p className="text-xs text-gray-600">{campaign.sent} emails sent</p>
                          </div>
                          <Badge variant={index === 0 ? "destructive" : "secondary"}>
                            {campaign.successRate}%
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="departments">
            <div className="space-y-6">
              {/* Department Risk Chart */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <PieChart className="h-5 w-5 mr-2" />
                      Department Risk Overview
                    </CardTitle>
                    <CardDescription>Visual breakdown of risk levels by department</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64">
                      <DepartmentRiskChart />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Building className="h-5 w-5 mr-2" />
                      Quick Stats
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Total Departments</span>
                        <Badge variant="outline">{departmentRisks.length}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Total Employees</span>
                        <Badge variant="outline">{departmentRisks.reduce((sum, dept) => sum + dept.employees, 0)}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">High Risk Employees</span>
                        <Badge variant="destructive">{departmentRisks.reduce((sum, dept) => sum + dept.highRisk, 0)}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Average Risk Score</span>
                        <Badge variant="secondary">
                          {Math.round(departmentRisks.reduce((sum, dept) => sum + dept.avgScore, 0) / departmentRisks.length)}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center">
                        <Building className="h-5 w-5 mr-2" />
                        Department Risk Assessment
                      </CardTitle>
                      <CardDescription>Security awareness levels across different departments</CardDescription>
                    </div>
                    <Button variant="outline" onClick={() => exportReport('department')}>
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {departmentRisks.map((dept, index) => (
                      <div key={index} className="border rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold">{dept.department}</h3>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline">{dept.employees} employees</Badge>
                            <Badge variant={dept.avgScore > 50 ? "destructive" : dept.avgScore > 30 ? "secondary" : "outline"}>
                              Risk Score: {dept.avgScore}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="text-center p-3 bg-red-50 rounded-lg">
                            <p className="text-2xl font-bold text-red-600">{dept.highRisk}</p>
                            <p className="text-sm text-red-700">High Risk</p>
                          </div>
                          <div className="text-center p-3 bg-yellow-50 rounded-lg">
                            <p className="text-2xl font-bold text-yellow-600">{dept.mediumRisk}</p>
                            <p className="text-sm text-yellow-700">Medium Risk</p>
                          </div>
                          <div className="text-center p-3 bg-green-50 rounded-lg">
                            <p className="text-2xl font-bold text-green-600">{dept.lowRisk}</p>
                            <p className="text-sm text-green-700">Low Risk</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4">
                          <div className="flex-1">
                            <div className="flex justify-between text-sm mb-1">
                              <span>Risk Distribution</span>
                              <span>{dept.avgScore}% avg risk</span>
                            </div>
                            <Progress value={dept.avgScore} className="h-2" />
                          </div>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="trends">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Security Awareness Trends
                  </CardTitle>
                  <CardDescription>Track improvement in security awareness over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Interactive Campaign Trends Chart */}
                    <div className="h-80">
                      <CampaignTrendsChart />
                    </div>

                    {/* Key Insights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="bg-green-50 border-green-200">
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-2">
                            <TrendingDown className="h-5 w-5 text-green-600" />
                            <div>
                              <p className="font-semibold text-green-800">15.3% Improvement</p>
                              <p className="text-sm text-green-600">Success rate reduction</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-blue-50 border-blue-200">
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-2">
                            <Users className="h-5 w-5 text-blue-600" />
                            <div>
                              <p className="font-semibold text-blue-800">78% Trained</p>
                              <p className="text-sm text-blue-600">Employees completed training</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-purple-50 border-purple-200">
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-2">
                            <Target className="h-5 w-5 text-purple-600" />
                            <div>
                              <p className="font-semibold text-purple-800">92% Detection</p>
                              <p className="text-sm text-purple-600">Improved threat recognition</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="compliance">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center">
                        <FileText className="h-5 w-5 mr-2" />
                        Compliance & Audit Report
                      </CardTitle>
                      <CardDescription>Regulatory compliance status and audit readiness</CardDescription>
                    </div>
                    <Button onClick={() => exportReport('compliance')}>
                      <Download className="h-4 w-4 mr-2" />
                      Generate Report
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">Compliance Metrics</h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                            <span>GDPR Compliance</span>
                          </div>
                          <Badge className="bg-green-100 text-green-800">95%</Badge>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                            <span>SOC 2 Requirements</span>
                          </div>
                          <Badge className="bg-green-100 text-green-800">92%</Badge>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <AlertTriangle className="h-5 w-5 text-yellow-600" />
                            <span>ISO 27001 Standards</span>
                          </div>
                          <Badge className="bg-yellow-100 text-yellow-800">78%</Badge>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                            <span>Training Documentation</span>
                          </div>
                          <Badge className="bg-green-100 text-green-800">100%</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">Audit Summary</h3>
                      
                      <div className="space-y-3">
                        <div className="p-4 border rounded-lg">
                          <p className="font-medium text-sm">Last Audit Date</p>
                          <p className="text-lg">July 15, 2024</p>
                        </div>
                        
                        <div className="p-4 border rounded-lg">
                          <p className="font-medium text-sm">Next Scheduled Audit</p>
                          <p className="text-lg">October 15, 2024</p>
                        </div>
                        
                        <div className="p-4 border rounded-lg">
                          <p className="font-medium text-sm">Overall Score</p>
                          <div className="flex items-center space-x-2">
                            <p className="text-2xl font-bold text-green-600">A-</p>
                            <Badge className="bg-green-100 text-green-800">Excellent</Badge>
                          </div>
                        </div>
                        
                        <div className="p-4 border rounded-lg">
                          <p className="font-medium text-sm">Recommendations</p>
                          <ul className="text-sm text-gray-600 mt-1 space-y-1">
                            <li>• Increase training frequency for high-risk departments</li>
                            <li>• Implement advanced email filtering</li>
                            <li>• Update incident response procedures</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdvancedReports;
