import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Mail, 
  Lock, 
  User, 
  Eye, 
  EyeOff, 
  Shield, 
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Building
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const AuthPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Login form state
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  // Signup form state
  const [signupForm, setSignupForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    company: "",
    jobTitle: "",
    agreeToTerms: false
  });

  // Forgot password form state
  const [forgotPasswordForm, setForgotPasswordForm] = useState({
    email: ""
  });

  const [activeTab, setActiveTab] = useState("login");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    if (loginForm.email && loginForm.password) {
      toast({
        title: "Login Successful",
        description: "Welcome back to HopeSecure Feeder!"
      });
      navigate("/dashboard");
    } else {
      toast({
        title: "Login Failed",
        description: "Please check your credentials and try again.",
        variant: "destructive"
      });
    }
    
    setIsLoading(false);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (signupForm.password !== signupForm.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive"
      });
      return;
    }

    if (!signupForm.agreeToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Account Created",
      description: "Please check your email for verification instructions."
    });
    
    setActiveTab("login");
    setIsLoading(false);
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Reset Link Sent",
      description: "Please check your email for password reset instructions."
    });
    
    setActiveTab("login");
    setIsLoading(false);
  };

  const validatePassword = (password: string) => {
    const minLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return {
      minLength,
      hasUpper,
      hasLower,
      hasNumber,
      hasSpecial,
      isValid: minLength && hasUpper && hasLower && hasNumber && hasSpecial
    };
  };

  const passwordValidation = validatePassword(signupForm.password);

  return (
    <div className="min-h-screen bg-hs-gradient-soft flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-12 w-12 text-hs-blue mr-2" />
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">HopeSecure</span>
              <span className="text-hs-purple text-2xl font-bold ml-1">Feeder</span>
            </div>
          </div>
          <p className="text-gray-600">Cybersecurity Awareness Platform</p>
        </div>

        <Card className="border-0 shadow-hs-card backdrop-blur-sm bg-white/95">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl">Welcome</CardTitle>
            <CardDescription>
              Secure access to your phishing simulation platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
                <TabsTrigger value="forgot">Reset</TabsTrigger>
              </TabsList>

              {/* Login Tab */}
              <TabsContent value="login" className="mt-6">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <Label htmlFor="login-email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="admin@company.com"
                        className="pl-10"
                        value={loginForm.email}
                        onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="login-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="login-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="pl-10 pr-10"
                        value={loginForm.password}
                        onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        title="Remember login"
                        checked={loginForm.rememberMe}
                        onChange={(e) => setLoginForm({...loginForm, rememberMe: e.target.checked})}
                        className="rounded"
                      />
                      <span className="text-sm text-gray-600">Remember me</span>
                    </label>
                    <Button
                      type="button"
                      variant="link"
                      className="p-0 h-auto text-sm"
                      onClick={() => setActiveTab("forgot")}
                    >
                      Forgot password?
                    </Button>
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Signing in..." : "Sign In"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Button
                      variant="link"
                      className="p-0 h-auto"
                      onClick={() => setActiveTab("signup")}
                    >
                      Sign up here
                    </Button>
                  </p>
                </div>
              </TabsContent>

              {/* Signup Tab */}
              <TabsContent value="signup" className="mt-6">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="first-name">First Name</Label>
                      <Input
                        id="first-name"
                        type="text"
                        placeholder="John"
                        value={signupForm.firstName}
                        onChange={(e) => setSignupForm({...signupForm, firstName: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input
                        id="last-name"
                        type="text"
                        placeholder="Smith"
                        value={signupForm.lastName}
                        onChange={(e) => setSignupForm({...signupForm, lastName: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="signup-email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="admin@company.com"
                        className="pl-10"
                        value={signupForm.email}
                        onChange={(e) => setSignupForm({...signupForm, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          id="company"
                          type="text"
                          placeholder="TechCorp Inc."
                          className="pl-10"
                          value={signupForm.company}
                          onChange={(e) => setSignupForm({...signupForm, company: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="job-title">Job Title</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          id="job-title"
                          type="text"
                          placeholder="CISO"
                          className="pl-10"
                          value={signupForm.jobTitle}
                          onChange={(e) => setSignupForm({...signupForm, jobTitle: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="signup-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="signup-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        className="pl-10 pr-10"
                        value={signupForm.password}
                        onChange={(e) => setSignupForm({...signupForm, password: e.target.value})}
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                    
                    {/* Password Strength Indicator */}
                    {signupForm.password && (
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center space-x-2 text-xs">
                          {passwordValidation.minLength ? (
                            <CheckCircle className="h-3 w-3 text-green-500" />
                          ) : (
                            <AlertTriangle className="h-3 w-3 text-red-500" />
                          )}
                          <span className={passwordValidation.minLength ? "text-green-600" : "text-red-600"}>
                            At least 8 characters
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs">
                          {passwordValidation.hasUpper && passwordValidation.hasLower ? (
                            <CheckCircle className="h-3 w-3 text-green-500" />
                          ) : (
                            <AlertTriangle className="h-3 w-3 text-red-500" />
                          )}
                          <span className={passwordValidation.hasUpper && passwordValidation.hasLower ? "text-green-600" : "text-red-600"}>
                            Upper and lowercase letters
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs">
                          {passwordValidation.hasNumber ? (
                            <CheckCircle className="h-3 w-3 text-green-500" />
                          ) : (
                            <AlertTriangle className="h-3 w-3 text-red-500" />
                          )}
                          <span className={passwordValidation.hasNumber ? "text-green-600" : "text-red-600"}>
                            At least one number
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs">
                          {passwordValidation.hasSpecial ? (
                            <CheckCircle className="h-3 w-3 text-green-500" />
                          ) : (
                            <AlertTriangle className="h-3 w-3 text-red-500" />
                          )}
                          <span className={passwordValidation.hasSpecial ? "text-green-600" : "text-red-600"}>
                            Special character
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        className="pl-10 pr-10"
                        value={signupForm.confirmPassword}
                        onChange={(e) => setSignupForm({...signupForm, confirmPassword: e.target.value})}
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="agree-terms"
                      title="Agree to Terms and Conditions"
                      checked={signupForm.agreeToTerms}
                      onChange={(e) => setSignupForm({...signupForm, agreeToTerms: e.target.checked})}
                      className="rounded"
                      required
                    />
                    <Label htmlFor="agree-terms" className="text-sm">
                      I agree to the{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </a>
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isLoading || !passwordValidation.isValid}
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <Button
                      variant="link"
                      className="p-0 h-auto"
                      onClick={() => setActiveTab("login")}
                    >
                      Sign in here
                    </Button>
                  </p>
                </div>
              </TabsContent>

              {/* Forgot Password Tab */}
              <TabsContent value="forgot" className="mt-6">
                <form onSubmit={handleForgotPassword} className="space-y-4">
                  <Alert>
                    <Mail className="h-4 w-4" />
                    <AlertDescription>
                      Enter your email address and we'll send you a link to reset your password.
                    </AlertDescription>
                  </Alert>

                  <div>
                    <Label htmlFor="forgot-email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="forgot-email"
                        type="email"
                        placeholder="admin@company.com"
                        className="pl-10"
                        value={forgotPasswordForm.email}
                        onChange={(e) => setForgotPasswordForm({...forgotPasswordForm, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send Reset Link"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Remember your password?{" "}
                    <Button
                      variant="link"
                      className="p-0 h-auto"
                      onClick={() => setActiveTab("login")}
                    >
                      Sign in here
                    </Button>
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            🔒 Your data is protected with enterprise-grade security
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
