import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-xl font-bold mb-2">Aaron Isserow</h3>
            <p className="text-primary-foreground/80 text-sm">
              Mechatronics Engineering Student<br />
              University of Cape Town
            </p>
          </div>

          <div className="text-center">
            <p className="text-primary-foreground/80 text-sm mb-4">
              Connect with me on social media
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="mailto:aaron.isserow@example.com" // TODO: Replace with actual email
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com/in/aaron-isserow" // TODO: Replace with actual LinkedIn
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/aaron-isserow" // TODO: Replace with actual GitHub
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          <div className="text-right">
            <p className="text-primary-foreground/80 text-sm">
              © {currentYear} Aaron Isserow<br />
              Built with passion for engineering
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-xs">
            This portfolio is part of my academic coursework and showcases my journey 
            through Mechatronics Engineering at UCT.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;