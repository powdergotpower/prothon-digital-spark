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
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Prothon</span>
          </h2>
          <p className="text-lg text-muted-foreground">
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
                className="mission-card opacity-0 hover-lift border-border/50 bg-card/50 backdrop-blur-sm"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <CardContent className="p-8">
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br from-primary to-accent">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{mission.title}</h3>
                  <p className="text-muted-foreground">{mission.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground">
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
