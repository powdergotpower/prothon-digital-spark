import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Github, Mail } from "lucide-react";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";
import teamMember4 from "@/assets/team-member-4.jpg";

const Team = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-scale-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll(".team-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: teamMember1,
      bio: "Visionary leader with 15+ years in tech innovation",
    },
    {
      name: "Sarah Chen",
      role: "Lead Developer",
      image: teamMember2,
      bio: "Full-stack expert passionate about clean code",
    },
    {
      name: "Michael Ross",
      role: "UX Designer",
      image: teamMember3,
      bio: "Creating beautiful and intuitive user experiences",
    },
    {
      name: "Emily Davis",
      role: "Project Manager",
      image: teamMember4,
      bio: "Ensuring seamless project delivery and client satisfaction",
    },
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-32 w-80 h-80 bg-primary rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-32 right-32 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "4s" }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10" ref={sectionRef}>
        <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Meet Our <span className="text-gradient text-glow">Team</span>
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-light">
            Talented individuals united by a passion for technology and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <Card
              key={index}
              className="team-card opacity-0 hover-lift hover-glow overflow-hidden border-2 border-border/30 bg-card/70 backdrop-blur-md shadow-xl hover:border-accent/50 transition-all duration-700 group"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8">
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg"
                      >
                        <Linkedin className="w-6 h-6 text-white" />
                      </a>
                      <a
                        href="#"
                        className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg"
                      >
                        <Github className="w-6 h-6 text-white" />
                      </a>
                      <a
                        href="#"
                        className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg"
                      >
                        <Mail className="w-6 h-6 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{member.name}</h3>
                  <p className="text-accent font-semibold mb-3 text-lg">{member.role}</p>
                  <p className="text-base text-foreground/70 leading-relaxed">{member.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
