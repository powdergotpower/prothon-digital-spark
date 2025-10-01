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
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Talented individuals united by a passion for technology and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <Card
              key={index}
              className="team-card opacity-0 overflow-hidden hover-lift group border-border/50 bg-card"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex gap-3">
                      <a
                        href="#"
                        className="p-2 bg-background/20 backdrop-blur-sm rounded-full hover:bg-background/40 transition-colors"
                      >
                        <Linkedin className="w-5 h-5 text-primary-foreground" />
                      </a>
                      <a
                        href="#"
                        className="p-2 bg-background/20 backdrop-blur-sm rounded-full hover:bg-background/40 transition-colors"
                      >
                        <Github className="w-5 h-5 text-primary-foreground" />
                      </a>
                      <a
                        href="#"
                        className="p-2 bg-background/20 backdrop-blur-sm rounded-full hover:bg-background/40 transition-colors"
                      >
                        <Mail className="w-5 h-5 text-primary-foreground" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-accent font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
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
