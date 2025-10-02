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
    <section id="apps" className="py-24 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "3s" }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10" ref={sectionRef}>
        <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Our <span className="text-gradient">Applications</span>
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-light">
            Innovative solutions designed to enhance productivity and user experience
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {apps.map((app, index) => (
            <Card
              key={index}
              data-direction={index % 2}
              className="app-card opacity-0 overflow-hidden hover-lift border-2 border-border/30 bg-card/70 backdrop-blur-md shadow-lg hover:border-accent/50 transition-all duration-300"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              <CardContent className="p-0">
                <div className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="md:w-1/2">
                    <div className="relative overflow-hidden aspect-video md:aspect-auto md:h-full group">
                      <img
                        src={app.image}
                        alt={app.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>

                  <div className="md:w-1/2 p-10 lg:p-12 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 text-sm font-semibold mb-4">
                      <span className="px-4 py-1.5 bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/30 rounded-full text-accent">{app.category}</span>
                    </div>

                    <h3 className="text-4xl md:text-5xl font-extrabold mb-5 text-foreground">{app.name}</h3>
                    <p className="text-foreground/70 mb-8 text-lg md:text-xl leading-relaxed">{app.description}</p>

                    <div className="flex items-center gap-8 mb-8">
                      <div className="flex items-center gap-2 bg-yellow-500/10 px-4 py-2 rounded-full">
                        <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                        <span className="font-bold text-lg">{app.rating}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-foreground/5 px-4 py-2 rounded-full">
                        <Download className="w-6 h-6 text-accent" />
                        <span className="font-bold text-lg text-foreground/80">{app.downloads}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 group font-semibold">
                        Download Now
                        <Download className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                      </Button>
                      <Button size="lg" variant="outline" className="group font-semibold">
                        Learn More
                        <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
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
