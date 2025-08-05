import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FileText } from "lucide-react";
import penguinProject from "@/assets/penguin-project.jpg";
import robotProject from "@/assets/robot-project.jpg";
import matlabProject from "@/assets/matlab-project.jpg";
import engineeringWorkspace from "@/assets/engineering-workspace.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Penguin Protection System",
      description: "Web-based monitoring system with AI chat interface for protecting African penguins. Features real-time wildlife monitoring and intelligent threat detection.",
      image: penguinProject,
      tags: ["Web App", "AI/ML", "Conservation", "React", "Python"],
      githubLink: "https://github.com/AaronIsserow/penguin-patrol-alert-system2.git",
      reportLink: "/EEE4113F_Final_Report_Group_15.pdf",
    },
    {
      title: "Servo Design Lab",
      description: "PI control system implementation using MATLAB/Simulink for precise servo motor control. Includes system modeling, controller design, and performance analysis.",
      image: matlabProject,
      tags: ["Control Systems", "MATLAB", "Simulink", "Engineering"],
      reportLink: "/EEE4118F_2025_Group_18_Servo_Design_Report (1).pdf",
    },
    {
      title: "Save a City from an Asteroid (Simulation)",
      description: "MATLAB simulation and control system design for asteroid deflection mission. Implements advanced control algorithms and trajectory optimization for planetary defense scenarios in a simulated environment.",
      image: engineeringWorkspace,
      tags: ["Control Systems", "MATLAB", "Simulation", "Trajectory Optimization", "Engineering"],
      reportLink: "/Milestone_4___Report__2_ (8).pdf",
    },
    {
      title: "Advanced Robot Sensing & Navigation System",
      description: "Comprehensive robotic system combining autonomous navigation, line following capabilities, and advanced sensor fusion. Demonstrates sensor integration, path planning, real-time control systems, and environmental perception.",
      image: robotProject,
      tags: ["Embedded", "Robotics", "STM32", "Sensors", "C", "Navigation", "Data Fusion"],
      sensingReportLink: "/EEE3088F_final_report_ISSAAR001-9 (1).pdf",
      navigationReportLink: "/EEE3099S_Milestone3_Group18_ISSAAR001_VCHEMA001 (2).pdf",
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
                    {project.githubLink && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        onClick={() => window.open(project.githubLink, '_blank')}
                      >
                        <Github size={16} className="mr-2" />
                        GitHub
                      </Button>
                    )}
                    {project.reportLink && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                        onClick={() => window.open(project.reportLink, '_blank')}
                      >
                        <FileText size={16} className="mr-2" />
                        Report
                      </Button>
                    )}
                    {project.sensingReportLink && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                        onClick={() => window.open(project.sensingReportLink, '_blank')}
                      >
                        <FileText size={16} className="mr-2" />
                        Sensing Report
                      </Button>
                    )}
                    {project.navigationReportLink && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                        onClick={() => window.open(project.navigationReportLink, '_blank')}
                      >
                        <FileText size={16} className="mr-2" />
                        Navigation Report
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