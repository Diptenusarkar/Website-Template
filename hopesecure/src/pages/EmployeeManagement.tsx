import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Users, 
  UserPlus, 
  Search, 
  Filter, 
  Download, 
  Upload, 
  Mail,
  Shield,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  BookOpen,
  Calendar,
  Building,
  Award
} from "lucide-react";
import { useState } from "react";

const EmployeeManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedRiskLevel, setSelectedRiskLevel] = useState("all");

  const employees = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@company.com",
      department: "Marketing",
      position: "Marketing Manager",
      riskScore: 85,
      riskLevel: "High",
      lastCampaign: "2024-08-12",
      campaignsParticipated: 5,
      vulnerabilityCount: 3,
      trainingCompleted: 2,
      trainingPending: 3,
      status: "Active",
      joinDate: "2023-01-15"
    },
    {
      id: 2,
      name: "Sarah Wilson",
      email: "sarah.wilson@company.com",
      department: "HR",
      position: "HR Specialist",
      riskScore: 45,
      riskLevel: "Medium",
      lastCampaign: "2024-08-10",
      campaignsParticipated: 8,
      vulnerabilityCount: 1,
      trainingCompleted: 7,
      trainingPending: 0,
      status: "Active",
      joinDate: "2022-03-20"
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike.johnson@company.com",
      department: "Finance",
      position: "Financial Analyst",
      riskScore: 25,
      riskLevel: "Low",
      lastCampaign: "2024-08-08",
      campaignsParticipated: 12,
      vulnerabilityCount: 0,
      trainingCompleted: 10,
      trainingPending: 0,
      status: "Active",
      joinDate: "2021-06-10"
    },
    {
      id: 4,
      name: "Lisa Davis",
      email: "lisa.davis@company.com",
      department: "IT",
      position: "Software Developer",
      riskScore: 15,
      riskLevel: "Low",
      lastCampaign: "2024-08-05",
      campaignsParticipated: 15,
      vulnerabilityCount: 0,
      trainingCompleted: 12,
      trainingPending: 0,
      status: "Active",
      joinDate: "2020-11-01"
    },
    {
      id: 5,
      name: "Alex Brown",
      email: "alex.brown@company.com",
      department: "Sales",
      position: "Sales Representative",
      riskScore: 70,
      riskLevel: "High",
      lastCampaign: "2024-08-13",
      campaignsParticipated: 6,
      vulnerabilityCount: 4,
      trainingCompleted: 1,
      trainingPending: 5,
      status: "Training Required",
      joinDate: "2023-05-08"
    }
  ];

  const departments = ["all", "Marketing", "HR", "Finance", "IT", "Sales"];
  const riskLevels = ["all", "High", "Medium", "Low"];

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === "all" || employee.department === selectedDepartment;
    const matchesRisk = selectedRiskLevel === "all" || employee.riskLevel === selectedRiskLevel;
    return matchesSearch && matchesDepartment && matchesRisk;
  });

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'High': return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Training Required': return 'bg-orange-100 text-orange-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Calculate department statistics
  const departmentStats = departments.slice(1).map(dept => {
    const deptEmployees = employees.filter(emp => emp.department === dept);
    const highRisk = deptEmployees.filter(emp => emp.riskLevel === 'High').length;
    const avgRisk = deptEmployees.reduce((sum, emp) => sum + emp.riskScore, 0) / deptEmployees.length || 0;
    
    return {
      department: dept,
      totalEmployees: deptEmployees.length,
      highRiskCount: highRisk,
      averageRiskScore: Math.round(avgRisk),
      trainingPending: deptEmployees.reduce((sum, emp) => sum + emp.trainingPending, 0)
    };
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Employee Management</h1>
            <p className="text-gray-600 mt-1">Manage employee security profiles and training</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Upload className="h-4 w-4 mr-2" />
              Import CSV
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add Employee
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Employee</DialogTitle>
                  <DialogDescription>
                    Add a new employee to the security monitoring system
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Full Name</label>
                      <Input placeholder="Enter full name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email Address</label>
                      <Input placeholder="employee@company.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Department</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="marketing">Marketing</SelectItem>
                          <SelectItem value="hr">HR</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="it">IT</SelectItem>
                          <SelectItem value="sales">Sales</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Position</label>
                      <Input placeholder="Job title" />
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline">Cancel</Button>
                    <Button>Add Employee</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <Tabs defaultValue="employees" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="employees">Employee Directory</TabsTrigger>
            <TabsTrigger value="departments">Department Overview</TabsTrigger>
            <TabsTrigger value="training">Training Progress</TabsTrigger>
          </TabsList>

          <TabsContent value="employees">
            {/* Filters */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder="Search employees..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                      <SelectTrigger className="w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map(dept => (
                          <SelectItem key={dept} value={dept}>
                            {dept === "all" ? "All Departments" : dept}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select value={selectedRiskLevel} onValueChange={setSelectedRiskLevel}>
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {riskLevels.map(risk => (
                          <SelectItem key={risk} value={risk}>
                            {risk === "all" ? "All Risk Levels" : risk}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Employee Table */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Employee Directory ({filteredEmployees.length} employees)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Employee</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Risk Score</TableHead>
                        <TableHead>Campaigns</TableHead>
                        <TableHead>Vulnerabilities</TableHead>
                        <TableHead>Training</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredEmployees.map((employee) => (
                        <TableRow key={employee.id}>
                          <TableCell>
                            <div>
                              <p className="font-medium">{employee.name}</p>
                              <p className="text-sm text-gray-600">{employee.email}</p>
                              <p className="text-xs text-gray-500">{employee.position}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">{employee.department}</Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <span className="font-semibold">{employee.riskScore}</span>
                              <Badge variant="outline" className={getRiskColor(employee.riskLevel)}>
                                {employee.riskLevel}
                              </Badge>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-center">
                              <p className="font-medium">{employee.campaignsParticipated}</p>
                              <p className="text-xs text-gray-500">participated</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-1">
                              {employee.vulnerabilityCount > 0 ? (
                                <AlertTriangle className="h-4 w-4 text-red-500" />
                              ) : (
                                <CheckCircle className="h-4 w-4 text-green-500" />
                              )}
                              <span className={employee.vulnerabilityCount > 0 ? "text-red-600 font-medium" : "text-green-600"}>
                                {employee.vulnerabilityCount}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-center">
                              <p className="text-sm">
                                <span className="text-green-600 font-medium">{employee.trainingCompleted}</span>
                                <span className="text-gray-400 mx-1">/</span>
                                <span className="text-orange-600">{employee.trainingPending}</span>
                              </p>
                              <p className="text-xs text-gray-500">completed/pending</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(employee.status)}>
                              {employee.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-1">
                              <Button variant="ghost" size="sm">
                                <TrendingUp className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <BookOpen className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Mail className="h-4 w-4" />
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

          <TabsContent value="departments">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departmentStats.map((dept) => (
                <Card key={dept.department}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center">
                        <Building className="h-5 w-5 mr-2" />
                        {dept.department}
                      </span>
                      <Badge variant="outline">{dept.totalEmployees} employees</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-red-50 rounded-lg">
                          <p className="text-2xl font-bold text-red-600">{dept.highRiskCount}</p>
                          <p className="text-sm text-red-700">High Risk</p>
                        </div>
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <p className="text-2xl font-bold text-blue-600">{dept.averageRiskScore}</p>
                          <p className="text-sm text-blue-700">Avg Risk Score</p>
                        </div>
                      </div>
                      <div className="text-center p-3 bg-orange-50 rounded-lg">
                        <p className="text-xl font-bold text-orange-600">{dept.trainingPending}</p>
                        <p className="text-sm text-orange-700">Pending Training</p>
                      </div>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="training">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Training Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                      <div>
                        <p className="font-medium text-green-800">Completed Training</p>
                        <p className="text-sm text-green-600">Security awareness courses</p>
                      </div>
                      <div className="text-2xl font-bold text-green-700">
                        {employees.reduce((sum, emp) => sum + emp.trainingCompleted, 0)}
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                      <div>
                        <p className="font-medium text-orange-800">Pending Training</p>
                        <p className="text-sm text-orange-600">Assigned but not completed</p>
                      </div>
                      <div className="text-2xl font-bold text-orange-700">
                        {employees.reduce((sum, emp) => sum + emp.trainingPending, 0)}
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                      <div>
                        <p className="font-medium text-red-800">Training Required</p>
                        <p className="text-sm text-red-600">High-risk employees</p>
                      </div>
                      <div className="text-2xl font-bold text-red-700">
                        {employees.filter(emp => emp.riskLevel === 'High').length}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    Training Assignments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {employees.filter(emp => emp.trainingPending > 0).map(employee => (
                      <div key={employee.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{employee.name}</p>
                          <p className="text-sm text-gray-600">{employee.department}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className={getRiskColor(employee.riskLevel)}>
                            {employee.riskLevel}
                          </Badge>
                          <Badge variant="secondary">
                            {employee.trainingPending} pending
                          </Badge>
                          <Button size="sm">Assign</Button>
                        </div>
                      </div>
                    ))}
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

export default EmployeeManagement;
