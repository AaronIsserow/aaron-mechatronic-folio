import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || "Contact from Portfolio");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:aaron.isserow@gmail.com?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client",
      description: "Your default email application should open with the message pre-filled.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactLinks = [
    {
      name: "Email",
      icon: <Mail size={20} />,
      value: "aaron.isserow@gmail.com",
      href: "mailto:aaron.isserow@gmail.com",
      description: "Send me an email"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      value: "Aaron Isserow",
      href: "https://linkedin.com/in/aaron-isserow-6501b3257",
      description: "Connect on LinkedIn"
    },
    {
      name: "GitHub",
      icon: <Github size={20} />,
      value: "AaronIsserow",
      href: "https://github.com/AaronIsserow",
      description: "View my code"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, collaborations, 
            or just connecting with fellow engineers and innovators.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="animate-slide-in border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me more about your inquiry or project..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 group">
                  <Send size={20} className="mr-2" />
                  Send Message
                  <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in">
            <Card className="border-secondary/20">
              <CardHeader>
                <CardTitle className="text-secondary">Contact Information</CardTitle>
                <CardDescription>
                  Prefer to reach out directly? Here are the best ways to connect with me.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {contactLinks.map((link, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="p-3 bg-secondary-light rounded-lg text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                        {link.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{link.name}</h3>
                        <p className="text-sm text-muted-foreground mb-1">{link.description}</p>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary hover:text-primary transition-colors text-sm font-medium"
                        >
                          {link.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-primary mb-2">Let's Build Something Together</h3>
                  <p className="text-muted-foreground text-sm">
                    Whether you're looking for a collaborator on an engineering project, 
                    need help with a technical challenge, or just want to discuss the latest 
                    in mechatronics and robotics, I'd love to hear from you.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;