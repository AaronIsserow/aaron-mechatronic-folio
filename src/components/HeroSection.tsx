import { Button } from "@/components/ui/button";
import { FileText, ArrowRight } from "lucide-react";
import aaronProfile from "@/assets/aaron-profile.jpg";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-light via-background to-secondary-light pt-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary">
                Hi, I'm Aaron
              </h1>
              <h2 className="text-xl lg:text-2xl text-secondary font-medium">
                Final-Year Mechatronics Engineering Student at UCT
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I'm passionate about solving real-world problems through engineering. 
              Over the last four years, I've worked on a variety of technical projects 
              ranging from control systems and robotics to embedded systems and web development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("#resume")}
                className="bg-primary hover:bg-primary/90 group"
              >
                <FileText size={20} className="mr-2" />
                View Resume
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("#projects")}
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground group"
              >
                See My Projects
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-4 border-primary/20 shadow-2xl overflow-hidden">
                <img
                  src={"/DA14E76E-0D6A-44D8-8ACD-A83EDF75D708.JPG"}
                  alt="Aaron Isserow - Mechatronics Engineering Student"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full -z-10 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;