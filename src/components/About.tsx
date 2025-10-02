import { useEffect, useRef } from "react";
import { Code2, Rocket, Users, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll(".mission-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const missions = [
    {
      icon: Code2,
      title: "Innovative Development",
      description:
        "We leverage cutting-edge technologies to build robust, scalable applications that stand the test of time.",
    },
    {
      icon: Rocket,
      title: "Rapid Deployment",
      description:
        "From concept to launch, we ensure swift and efficient deployment without compromising quality.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description:
        "Your success is our mission. We work closely with clients to deliver solutions that exceed expectations.",
    },
    {
      icon: Shield,
      title: "Security First",
      description:
        "We prioritize security at every step, ensuring your applications and data remain protected.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10" ref={sectionRef}>
        <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            About <span className="text-gradient">Prothon</span>
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-light">
            Prothon is a technology powerhouse dedicated to creating innovative
            solutions that drive business growth. We specialize in developing,
            deploying, and maintaining high-quality applications that connect
            businesses with their customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {missions.map((mission, index) => {
            const Icon = mission.icon;
            return (
              <Card
                key={index}
                className="mission-card opacity-0 hover-lift border-2 border-border/30 bg-card/70 backdrop-blur-md shadow-lg hover:border-accent/50 transition-all duration-300"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <CardContent className="p-10">
                  <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{mission.title}</h3>
                  <p className="text-lg text-foreground/70 leading-relaxed">{mission.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-20 max-w-4xl mx-auto animate-scale-in" style={{ animationDelay: "0.8s" }}>
          <Card className="bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 border-2 border-accent/30 shadow-lg backdrop-blur-sm hover-lift transition-all duration-300">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-gradient">Our Vision</h3>
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-light">
                To become the leading technology partner for businesses worldwide,
                empowering them with innovative solutions that drive digital
                transformation and sustainable growth.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
