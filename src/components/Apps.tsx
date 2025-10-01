import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download, Star } from "lucide-react";
import app1 from "@/assets/app-1.jpg";
import app2 from "@/assets/app-2.jpg";
import app3 from "@/assets/app-3.jpg";

const Apps = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const direction = parseInt(entry.target.getAttribute("data-direction") || "0");
            if (direction === 0) {
              entry.target.classList.add("animate-slide-in-left");
            } else {
              entry.target.classList.add("animate-slide-in-right");
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll(".app-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const apps = [
    {
      name: "FitTrack Pro",
      description: "Advanced fitness tracking with AI-powered insights and personalized workout plans",
      image: app1,
      rating: 4.8,
      downloads: "50K+",
      category: "Health & Fitness",
    },
    {
      name: "ShopSmart",
      description: "Seamless e-commerce experience with smart recommendations and secure payments",
      image: app2,
      rating: 4.9,
      downloads: "100K+",
      category: "Shopping",
    },
    {
      name: "TaskFlow",
      description: "Productivity app that helps teams collaborate and manage projects efficiently",
      image: app3,
      rating: 4.7,
      downloads: "75K+",
      category: "Productivity",
    },
  ];

  return (
    <section id="apps" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Applications</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Innovative solutions designed to enhance productivity and user experience
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {apps.map((app, index) => (
            <Card
              key={index}
              data-direction={index % 2}
              className="app-card opacity-0 overflow-hidden hover-lift border-border/50 bg-card/80 backdrop-blur-sm"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              <CardContent className="p-0">
                <div className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8`}>
                  <div className="md:w-1/2">
                    <div className="relative overflow-hidden aspect-video md:aspect-auto md:h-full group">
                      <img
                        src={app.image}
                        alt={app.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 text-sm text-accent font-medium mb-3">
                      <span className="px-3 py-1 bg-accent/10 rounded-full">{app.category}</span>
                    </div>

                    <h3 className="text-3xl font-bold mb-4">{app.name}</h3>
                    <p className="text-muted-foreground mb-6 text-lg">{app.description}</p>

                    <div className="flex items-center gap-6 mb-6">
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                        <span className="font-semibold">{app.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="w-5 h-5 text-muted-foreground" />
                        <span className="text-muted-foreground">{app.downloads}</span>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 group">
                        Download Now
                        <Download className="ml-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                      </Button>
                      <Button variant="outline" className="group">
                        Learn More
                        <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Apps;
