import React, { useState } from 'react';
import { Plus, Send, Users, Mail, Clock, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const campaigns = [
  {
    id: 1,
    name: 'Q4 Security Policy Update',
    type: 'Policy Update',
    status: 'active',
    sent: 1250,
    opened: 980,
    responded: 750,
    created: '2024-01-15',
    scheduled: '2024-01-16 09:00'
  },
  {
    id: 2,
    name: 'Phishing Simulation Test',
    type: 'Security Test',
    status: 'active',
    sent: 800,
    opened: 650,
    responded: 520,
    created: '2024-01-14',
    scheduled: '2024-01-15 10:30'
  },
  {
    id: 3,
    name: 'Data Handling Guidelines',
    type: 'Training',
    status: 'completed',
    sent: 1100,
    opened: 890,
    responded: 670,
    created: '2024-01-10',
    scheduled: '2024-01-12 14:00'
  },
  {
    id: 4,
    name: 'Holiday Schedule Notice',
    type: 'Announcement',
    status: 'draft',
    sent: 0,
    opened: 0,
    responded: 0,
    created: '2024-01-16',
    scheduled: null
  }
];

export function EmailCampaigns() {
  const [isNewCampaignOpen, setIsNewCampaignOpen] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-success text-success-foreground';
      case 'completed':
        return 'bg-muted text-muted-foreground';
      case 'draft':
        return 'bg-warning text-warning-foreground';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Email Campaigns</h1>
          <p className="text-muted-foreground">
            Create and manage internal communication campaigns
          </p>
        </div>
        <Dialog open={isNewCampaignOpen} onOpenChange={setIsNewCampaignOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Campaign
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Create New Campaign</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="campaign-name">Campaign Name</Label>
                <Input id="campaign-name" placeholder="Enter campaign name" />
              </div>
              <div>
                <Label htmlFor="campaign-type">Campaign Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="policy">Policy Update</SelectItem>
                    <SelectItem value="security">Security Test</SelectItem>
                    <SelectItem value="training">Training</SelectItem>
                    <SelectItem value="announcement">Announcement</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="subject">Email Subject</Label>
                <Input id="subject" placeholder="Enter email subject" />
              </div>
              <div>
                <Label htmlFor="content">Email Content</Label>
                <Textarea 
                  id="content" 
                  placeholder="Enter email content..."
                  rows={4}
                />
              </div>
              <div>
                <Label htmlFor="recipients">Target Recipients</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select recipients" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Employees</SelectItem>
                    <SelectItem value="department">Specific Department</SelectItem>
                    <SelectItem value="role">Specific Role</SelectItem>
                    <SelectItem value="custom">Custom List</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">Save as Draft</Button>
                <Button className="flex-1">
                  <Send className="mr-2 h-4 w-4" />
                  Send Now
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Campaigns List */}
      <div className="grid gap-4">
        {campaigns.map((campaign) => (
          <Card key={campaign.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold">{campaign.name}</h3>
                    <Badge variant="outline">{campaign.type}</Badge>
                    <Badge className={getStatusColor(campaign.status)}>
                      {campaign.status.toUpperCase()}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-4 gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{campaign.sent.toLocaleString()}</p>
                        <p className="text-muted-foreground">Recipients</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">
                          {campaign.opened.toLocaleString()} ({campaign.sent > 0 ? Math.round((campaign.opened / campaign.sent) * 100) : 0}%)
                        </p>
                        <p className="text-muted-foreground">Opened</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Send className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">
                          {campaign.responded.toLocaleString()} ({campaign.sent > 0 ? Math.round((campaign.responded / campaign.sent) * 100) : 0}%)
                        </p>
                        <p className="text-muted-foreground">Responded</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">
                          {campaign.scheduled ? new Date(campaign.scheduled).toLocaleDateString() : 'Not scheduled'}
                        </p>
                        <p className="text-muted-foreground">Scheduled</p>
                      </div>
                    </div>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit Campaign</DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuItem>Export Results</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}