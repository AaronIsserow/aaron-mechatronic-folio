import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import penguinProject from "@/assets/penguin-project.jpg";
import robotProject from "@/assets/robot-project.jpg";
import matlabProject from "@/assets/matlab-project.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Penguin Protection System",
      description: "Web-based monitoring system with AI chat interface for protecting African penguins. Features real-time wildlife monitoring and intelligent threat detection.",
      image: penguinProject,
      tags: ["Web App", "AI/ML", "Conservation", "React", "Python"],
      githubLink: "#", // TODO: Replace with actual GitHub link
      liveLink: "#", // TODO: Replace with actual live demo link
    },
    {
      title: "Servo Design Lab",
      description: "PI control system implementation using MATLAB/Simulink for precise servo motor control. Includes system modeling, controller design, and performance analysis.",
      image: matlabProject,
      tags: ["Control Systems", "MATLAB", "Simulink", "Engineering"],
      githubLink: "#", // TODO: Replace with actual GitHub link
    },
    {
      title: "Line Following Robot",
      description: "Autonomous navigation robot using embedded sensors and control algorithms. Demonstrates sensor integration, path planning, and real-time control systems.",
      image: robotProject,
      tags: ["Embedded", "Robotics", "STM32", "Sensors", "C"],
      githubLink: "#", // TODO: Replace with actual GitHub link
    },
    {
      title: "Robot Sensing System",
      description: "Advanced sensing and perception system for autonomous robots. Integration of multiple sensor modalities for enhanced environmental awareness and decision making.",
      image: robotProject,
      tags: ["Embedded", "Sensors", "Data Fusion", "STM32"],
      githubLink: "#", // TODO: Replace with actual GitHub link
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the key projects I've worked on during my engineering journey. 
            Each project showcases different aspects of mechatronics engineering and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-primary/20 animate-slide-in overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-primary group-hover:text-secondary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className="bg-secondary-light text-secondary"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <Github size={16} className="mr-2" />
                      GitHub
                    </Button>
                    {project.liveLink && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                        onClick={() => window.open(project.liveLink, '_blank')}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Button>
                    )}
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

export default ProjectsSection;