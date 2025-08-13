import engineeringWorkspace from "@/assets/engineering-workspace.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">About Me</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Aaron Isserow is a Mechatronics Engineering student at UCT with strong 
                interests in control systems, embedded electronics, and automation. 
                Known for his collaborative spirit and creative problem-solving, Aaron 
                has taken part in hands-on projects such as a penguin protection system 
                and a line following robot.
              </p>
              <p>
                He enjoys building solutions that have a meaningful impact, combining 
                technical expertise with innovative thinking to tackle real-world challenges. 
                Aaron's journey through engineering has been marked by a passion for 
                learning and a drive to make a positive difference through technology.
              </p>
              <p>
                Currently in his final year, Aaron is exploring opportunities to apply 
                his skills in control systems, robotics, and embedded systems to projects 
                that matter. He brings enthusiasm, technical competence, and a collaborative 
                approach to every challenge.
              </p>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <img
                src={engineeringWorkspace}
                alt="Engineering workspace with robotics and development tools"
                className="rounded-lg shadow-xl w-full max-w-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;