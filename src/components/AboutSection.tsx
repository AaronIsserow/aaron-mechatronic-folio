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
                Hi, I am Aaron Isserow, a final year Mechatronics Engineering student at UCT who is passionate about turning ideas into real, working systems. Over the past few years I have built and worked on a variety of projects, from automated tea making machines to predator alert systems for penguin colonies, rocket interception simulations, and many others. I enjoy that space where hardware meets software, designing, building, and controlling systems that deliver results in the real world.
              </p>
              <p>
                I am always drawn to projects that push me to learn new tools and skills, whether that means using MATLAB and Simulink for control design, programming STM32 microcontrollers for embedded systems, or developing full stack web applications to bring an idea to life. I enjoy problem solving that is hands on, collaborative, and focused on making something that works rather than just looks good on paper.
              </p>
              
              <h3 className="text-xl font-semibold text-primary mt-6">Hobbies & Interests</h3>
              <p>
                Outside of academics, I am passionate about sport, especially soccer, and thrive in competitive and team driven environments. I have proudly represented South Africa at the U20 Indoor Soccer World Cup, competed in Sweden at the Gothia Cup, the largest youth soccer tournament in the world, reaching the last 16 and earning the Player of the Team award. I also served as vice captain at the Maccabi Games, experiences that strengthened my leadership, teamwork, and ability to perform under pressure. Beyond sport, I take every opportunity to explore, whether it is hiking, travelling, or embracing new challenges. I am driven by curiosity, a need to figure things out, and the belief that engineering is at its best when it is creative, practical, and impactful.
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