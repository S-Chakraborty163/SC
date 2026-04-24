
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, Download, Send, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-background/50">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-12 font-headline text-center">Let&apos;s Connect</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="grid gap-4">
              <Card className="glass-card hover:border-primary/50 transition-colors">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:soumyajitc687@gmail.com" className="font-medium hover:underline">soumyajitc687@gmail.com</a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card hover:border-primary/50 transition-colors">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/soumyajit-chakraborty-111a742a1" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline flex items-center gap-1">
                      Professional Profile <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card hover:border-primary/50 transition-colors">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <a href="https://github.com/S-Chakraborty163" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline flex items-center gap-1">
                      Code Repositories <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="pt-6">
              <Button size="lg" className="w-full rounded-full bg-secondary hover:bg-secondary/90 text-white font-bold group">
                <Download className="mr-2 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                Download Resume (PDF)
              </Button>
            </div>
          </div>

          <Card className="glass-card border-white/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input placeholder="John Doe" className="bg-background/50 border-white/10" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="john@example.com" className="bg-background/50 border-white/10" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="Project Inquiry" className="bg-background/50 border-white/10" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="Tell me about your idea..." className="min-h-[150px] bg-background/50 border-white/10" required />
                </div>
                <Button type="submit" className="w-full group">
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
