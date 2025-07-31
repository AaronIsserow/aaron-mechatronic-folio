import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Cpu, Settings, Globe } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming & Development",
      icon: <Code size={24} />,
      skills: [
        { name: "MATLAB / Simulink", level: 90 },
        { name: "Python", level: 85 },
        { name: "C/C++ (STM32)", level: 80 },
        { name: "Git & GitHub", level: 85 },
      ]
    },
    {
      title: "Web Technologies",
      icon: <Globe size={24} />,
      skills: [
        { name: "HTML/CSS", level: 80 },
        { name: "JavaScript", level: 75 },
        { name: "React", level: 70 },
        { name: "APIs", level: 75 },
      ]
    },
    {
      title: "Engineering & Design",
      icon: <Settings size={24} />,
      skills: [
        { name: "SolidWorks", level: 85 },
        { name: "Control Systems", level: 90 },
        { name: "Circuit Design", level: 80 },
        { name: "System Integration", level: 85 },
      ]
    },
    {
      title: "Embedded & Hardware",
      icon: <Cpu size={24} />,
      skills: [
        { name: "STM32 CubeIDE", level: 85 },
        { name: "Sensor Integration", level: 80 },
        { name: "PCB Design", level: 70 },
        { name: "Microcontrollers", level: 85 },
      ]
    },
  ];

  const getProgressColor = (level: number) => {
    if (level >= 85) return "bg-secondary";
    if (level >= 75) return "bg-primary";
    return "bg-muted-foreground";
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical competencies across various domains 
            of mechatronics engineering and software development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="animate-slide-in border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-3">
                  <div className="p-2 bg-primary-light rounded-lg text-primary">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-1000 ${getProgressColor(skill.level)}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-12 text-center animate-fade-in">
          <Card className="max-w-4xl mx-auto border-secondary/20">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold text-secondary mb-4">Additional Competencies</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                <div>
                  <strong className="text-foreground">Machine Learning:</strong> TensorFlow, scikit-learn, data analysis
                </div>
                <div>
                  <strong className="text-foreground">Project Management:</strong> Agile methodologies, team collaboration
                </div>
                <div>
                  <strong className="text-foreground">Communication:</strong> Technical documentation, presentations
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;