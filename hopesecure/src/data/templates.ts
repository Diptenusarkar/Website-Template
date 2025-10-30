// Shared template data for the cybersecurity simulation platform

export interface Template {
  id: number;
  name: string;
  category: string;
  description: string;
  usageCount: number;
  successRate: string;
  lastUsed: string;
  status: string;
  riskLevel: string;
  preview: string;
  emailSubject: string;
  domain: string;
  difficulty: string;
  rating: number;
  tags: string[];
  hasAttachments: boolean;
  hasCSS: boolean;
  isResponsive: boolean;
  thumbnail: string;
  htmlContent?: string;
  cssStyles?: string;
  senderName?: string;
  senderEmail?: string;
  landingPageUrl?: string;
  priority?: string;
  trackingEnabled?: boolean;
}

export const templateData: Template[] = [
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
    thumbnail: "/placeholder.svg",
    htmlContent: `<!DOCTYPE html>
<html>
<head>
    <title>Company Login</title>
    <style>
        body { font-family: Arial, sans-serif; background: #f5f5f5; margin: 0; padding: 20px; }
        .container { max-width: 400px; margin: 50px auto; background: white; padding: 40px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .logo { text-align: center; margin-bottom: 30px; color: #007acc; font-size: 24px; font-weight: bold; }
        .form-group { margin-bottom: 20px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; color: #333; }
        input[type="email"], input[type="password"] { width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px; }
        .btn { width: 100%; padding: 12px; background: #007acc; color: white; border: none; border-radius: 4px; font-size: 16px; cursor: pointer; }
        .btn:hover { background: #005fa3; }
        .warning { background: #fff3cd; border: 1px solid #ffeaa7; color: #856404; padding: 10px; border-radius: 4px; margin-bottom: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">Company Portal</div>
        <div class="warning">⚠️ Your account will be suspended in 24 hours if not verified.</div>
        <form>
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button type="submit" class="btn">Verify Account</button>
        </form>
    </div>
</body>
</html>`,
    senderName: "IT Security Team",
    senderEmail: "security@company.com",
    landingPageUrl: "https://phishing-test.company.com/login",
    priority: "high",
    trackingEnabled: true
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
    thumbnail: "/placeholder.svg",
    htmlContent: `<!DOCTYPE html>
<html>
<head>
    <title>Security Alert</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: white; border: 1px solid #ddd; }
        .header { background: #d32f2f; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .alert-box { background: #ffebee; border-left: 4px solid #f44336; padding: 15px; margin: 20px 0; }
        .btn { display: inline-block; background: #f44336; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; margin: 10px 0; }
        .footer { background: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #666; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🔒 SECURITY ALERT</h1>
        </div>
        <div class="content">
            <p>Dear Employee,</p>
            <p>We have detected suspicious activity on your company account from an unrecognized device.</p>
            <div class="alert-box">
                <strong>⚠️ IMMEDIATE ACTION REQUIRED</strong><br>
                Location: Unknown Location<br>
                Time: Just now<br>
                Device: Unrecognized Device
            </div>
            <p>If this wasn't you, please click the button below to secure your account immediately:</p>
            <a href="#" class="btn">SECURE MY ACCOUNT NOW</a>
            <p>This link will expire in 1 hour for security reasons.</p>
        </div>
        <div class="footer">
            This is an automated security notification. Do not reply to this email.
        </div>
    </div>
</body>
</html>`,
    senderName: "Security Team",
    senderEmail: "alerts@company.com",
    landingPageUrl: "https://phishing-test.company.com/security",
    priority: "urgent",
    trackingEnabled: true
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
    thumbnail: "/placeholder.svg",
    htmlContent: `<!DOCTYPE html>
<html>
<head>
    <title>Office 365 Update</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background: #f3f2f1; }
        .container { max-width: 600px; margin: 0 auto; background: white; }
        .header { background: #0078d4; color: white; padding: 20px; text-align: center; }
        .logo { font-size: 24px; font-weight: bold; }
        .content { padding: 30px; }
        .update-box { background: #fff4ce; border: 1px solid #ffd83b; padding: 20px; border-radius: 6px; margin: 20px 0; }
        .btn { display: inline-block; background: #0078d4; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; font-weight: bold; }
        .version-info { background: #f8f9fa; padding: 15px; border-radius: 4px; margin: 15px 0; }
        .footer { background: #f8f9fa; padding: 20px; text-align: center; font-size: 12px; color: #666; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">📊 Microsoft Office 365</div>
        </div>
        <div class="content">
            <h2>Critical Security Update Available</h2>
            <p>Hello,</p>
            <p>A critical security update is now available for your Office 365 installation. This update addresses important security vulnerabilities and must be installed immediately.</p>
            
            <div class="update-box">
                <strong>⚠️ UPDATE REQUIRED</strong><br>
                Failure to install this update may result in security vulnerabilities and potential data breaches.
            </div>
            
            <div class="version-info">
                <strong>Update Details:</strong><br>
                Current Version: 16.0.14931.20120<br>
                New Version: 16.0.15028.20160<br>
                Size: 247 MB<br>
                Security Level: Critical
            </div>
            
            <p>Click the button below to download and install the update:</p>
            <a href="#" class="btn">DOWNLOAD UPDATE NOW</a>
            
            <p><small>This update must be completed within 48 hours to maintain compliance with company security policies.</small></p>
        </div>
        <div class="footer">
            Microsoft Corporation | This is an automated message | Do not reply
        </div>
    </div>
</body>
</html>`,
    senderName: "Microsoft Office Team",
    senderEmail: "updates@microsoft-office.com",
    landingPageUrl: "https://phishing-test.company.com/office-update",
    priority: "high",
    trackingEnabled: true
  },
  {
    id: 4,
    name: "HR Benefits Enrollment",
    category: "Data Input Form",
    description: "Annual benefits enrollment requiring personal information",
    usageCount: 12,
    successRate: "56%",
    lastUsed: "5 days ago",
    status: "Active",
    riskLevel: "intermediate",
    preview: "HR enrollment form requesting sensitive data",
    emailSubject: "Urgent: Complete Your Benefits Enrollment",
    domain: "hr-benefits.company.com",
    difficulty: "Intermediate",
    rating: 4.1,
    tags: ["HR", "Benefits", "Forms", "Personal Info"],
    hasAttachments: false,
    hasCSS: true,
    isResponsive: true,
    thumbnail: "/placeholder.svg",
    htmlContent: `<!DOCTYPE html>
<html>
<head>
    <title>Benefits Enrollment</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f8f9fa; }
        .container { max-width: 700px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .header { background: #28a745; color: white; padding: 20px; text-align: center; }
        .content { padding: 30px; }
        .form-group { margin-bottom: 20px; }
        .form-row { display: flex; gap: 15px; }
        .form-row .form-group { flex: 1; }
        label { display: block; margin-bottom: 5px; font-weight: bold; color: #333; }
        input, select { width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px; }
        .deadline { background: #fff3cd; border: 1px solid #ffeaa7; color: #856404; padding: 15px; border-radius: 4px; margin: 20px 0; }
        .btn { background: #28a745; color: white; padding: 12px 30px; border: none; border-radius: 4px; font-size: 16px; cursor: pointer; width: 100%; }
        .btn:hover { background: #218838; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🏥 Annual Benefits Enrollment</h1>
            <p>Complete your enrollment by December 15th</p>
        </div>
        <div class="content">
            <div class="deadline">
                ⏰ <strong>Deadline Reminder:</strong> You have only 3 days left to complete your benefits enrollment. Missing this deadline will result in loss of coverage for next year.
            </div>
            
            <form>
                <div class="form-row">
                    <div class="form-group">
                        <label for="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName" required>
                    </div>
                    <div class="form-group">
                        <label for="lastName">Last Name</label>
                        <input type="text" id="lastName" name="lastName" required>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="ssn">Social Security Number</label>
                        <input type="text" id="ssn" name="ssn" placeholder="XXX-XX-XXXX" required>
                    </div>
                    <div class="form-group">
                        <label for="dob">Date of Birth</label>
                        <input type="date" id="dob" name="dob" required>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="address">Home Address</label>
                    <input type="text" id="address" name="address" required>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" required>
                    </div>
                    <div class="form-group">
                        <label for="emergency">Emergency Contact</label>
                        <input type="text" id="emergency" name="emergency" required>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="plan">Select Health Plan</label>
                    <select id="plan" name="plan" required>
                        <option value="">Choose a plan</option>
                        <option value="basic">Basic Plan ($150/month)</option>
                        <option value="premium">Premium Plan ($280/month)</option>
                        <option value="family">Family Plan ($420/month)</option>
                    </select>
                </div>
                
                <button type="submit" class="btn">COMPLETE ENROLLMENT</button>
            </form>
        </div>
    </div>
</body>
</html>`,
    senderName: "HR Benefits Team",
    senderEmail: "benefits@company.com",
    landingPageUrl: "https://phishing-test.company.com/benefits",
    priority: "high",
    trackingEnabled: true
  }
];

// Function to get active templates only
export const getActiveTemplates = (): Template[] => {
  return templateData.filter(template => template.status === 'Active');
};

// Function to get templates by category
export const getTemplatesByCategory = (category: string): Template[] => {
  if (category === 'all') return templateData;
  return templateData.filter(template => template.category === category);
};

// Function to add a new template
export const addTemplate = (template: Omit<Template, 'id'>): Template => {
  const newTemplate: Template = {
    ...template,
    id: Math.max(...templateData.map(t => t.id)) + 1
  };
  templateData.push(newTemplate);
  return newTemplate;
};

// Function to update an existing template
export const updateTemplate = (id: number, updates: Partial<Template>): Template | null => {
  const index = templateData.findIndex(t => t.id === id);
  if (index === -1) return null;
  
  templateData[index] = { ...templateData[index], ...updates };
  return templateData[index];
};

// Function to delete a template
export const deleteTemplate = (id: number): boolean => {
  const index = templateData.findIndex(t => t.id === id);
  if (index === -1) return false;
  
  templateData.splice(index, 1);
  return true;
};
