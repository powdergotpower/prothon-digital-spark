import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, MessageSquare, Lightbulb, Mail } from "lucide-react";
import { toast } from "sonner";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon.", {
      description: "Your message has been received.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="feedback" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions, feedback, or ideas? We'd love to hear from you!
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="hover-lift border-border/50 bg-card">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent">
                  <MessageSquare className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Share Feedback</h3>
                  <p className="text-muted-foreground">
                    Let us know how we're doing and how we can improve our services
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift border-border/50 bg-card">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-accent to-primary">
                  <Lightbulb className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Suggest Ideas</h3>
                  <p className="text-muted-foreground">
                    Have a great idea for a feature or new app? We're all ears!
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift border-border/50 bg-card">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Get Support</h3>
                  <p className="text-muted-foreground">
                    Need help with our apps? Our support team is ready to assist
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-border/50 bg-card">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-background resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 group"
                  size="lg"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
