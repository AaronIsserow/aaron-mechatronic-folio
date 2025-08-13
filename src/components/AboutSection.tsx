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
              <p>
                Outside of academics I am into sport, especially soccer, and I will take any opportunity to explore, whether that means hiking, travelling, or getting involved in a new challenge. I am driven by curiosity, a need to figure things out, and the belief that engineering is at its best when it is creative, practical, and impactful.
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