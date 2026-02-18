import { useState } from 'react';
import { Mail, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getWhatsAppLink1, getWhatsAppLink2, getEmailLink } from '@/lib/inquiryLinks';
import { useSubmitInquiry } from '@/hooks/useSubmitInquiryMutation';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    serviceNeeded: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const { mutate: submitInquiry, isPending, isSuccess, isError, error } = useSubmitInquiry();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim() && !formData.phone.trim()) {
      newErrors.contact = 'Please provide either email or phone number';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.serviceNeeded) {
      newErrors.serviceNeeded = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Construct a comprehensive message for the backend
    const fullMessage = `
Name: ${formData.name}
${formData.businessName ? `Business: ${formData.businessName}` : ''}
${formData.phone ? `Phone: ${formData.phone}` : ''}
Service Needed: ${formData.serviceNeeded}

Message:
${formData.message}
    `.trim();

    submitInquiry(
      {
        email: formData.email || formData.phone || 'no-email-provided',
        message: fullMessage,
      },
      {
        onSuccess: () => {
          // Reset form on success
          setFormData({
            name: '',
            email: '',
            phone: '',
            businessName: '',
            serviceNeeded: '',
            message: '',
          });
          setErrors({});
        },
      }
    );
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Contact us today for a free consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Options */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  WhatsApp
                </CardTitle>
                <CardDescription>Get instant responses to your questions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button asChild className="w-full">
                  <a href={getWhatsAppLink1()}>
                    +91 8095126443
                  </a>
                </Button>
                <Button asChild className="w-full">
                  <a href={getWhatsAppLink2()}>
                    +91 9663848939
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Email
                </CardTitle>
                <CardDescription>Send us a detailed inquiry</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <a href={getEmailLink()}>
                    Send Email
                  </a>
                </Button>
              </CardContent>
            </Card>

            <div className="p-6 rounded-lg bg-card border">
              <h3 className="font-semibold mb-2">Business Hours</h3>
              <p className="text-sm text-muted-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 10:00 AM - 4:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-semibold">Thank you for reaching out!</h3>
                    <p className="text-muted-foreground">
                      We've received your message and will get back to you shortly.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => window.location.reload()}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        disabled={isPending}
                        className={errors.name ? 'border-destructive' : ''}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="businessName">Business Name</Label>
                      <Input
                        id="businessName"
                        placeholder="Your Company"
                        value={formData.businessName}
                        onChange={(e) => handleChange('businessName', e.target.value)}
                        disabled={isPending}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        disabled={isPending}
                        className={errors.email ? 'border-destructive' : ''}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        disabled={isPending}
                      />
                    </div>
                  </div>

                  {errors.contact && (
                    <p className="text-sm text-destructive">{errors.contact}</p>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="serviceNeeded">
                      Service Needed <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      value={formData.serviceNeeded}
                      onValueChange={(value) => handleChange('serviceNeeded', value)}
                      disabled={isPending}
                    >
                      <SelectTrigger
                        id="serviceNeeded"
                        className={errors.serviceNeeded ? 'border-destructive' : ''}
                      >
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="business-website">Business Website</SelectItem>
                        <SelectItem value="company-profile">Company Profile</SelectItem>
                        <SelectItem value="landing-page">Landing Page</SelectItem>
                        <SelectItem value="website-redesign">Website Redesign</SelectItem>
                        <SelectItem value="maintenance">Maintenance & Support</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.serviceNeeded && (
                      <p className="text-sm text-destructive">{errors.serviceNeeded}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      disabled={isPending}
                      className={errors.message ? 'border-destructive' : ''}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message}</p>
                    )}
                  </div>

                  {isError && (
                    <div className="flex items-center gap-2 p-4 rounded-lg bg-destructive/10 text-destructive">
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                      <p className="text-sm">
                        {error instanceof Error ? error.message : 'Failed to submit inquiry. Please try again.'}
                      </p>
                    </div>
                  )}

                  <Button type="submit" className="w-full" size="lg" disabled={isPending}>
                    {isPending ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
