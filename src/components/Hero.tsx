import otterHero from "@/assets/otter-hero.png";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent opacity-60 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-secondary opacity-60 blur-3xl" />
      </div>

      <div className="container relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 mb-6 text-sm font-medium text-accent-foreground">
            <span>🦦</span> VS Code Extension
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Meet{" "}
            <span className="text-gradient">OtterDr</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-display font-medium">
            Your Friendly AI Debugging Companion
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
            A playful yet powerful VS Code extension that helps you understand and fix code errors using AI, guided by an expressive otter that reacts to the health of your code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="text-lg px-8 py-6 rounded-xl shadow-lg" asChild>
              <a href="https://marketplace.visualstudio.com/items?itemName=OtterDr.otterdr" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Install Extension
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-xl" asChild>
              <a href="https://github.com/OtterDr/OtterDr" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl scale-110" />
            <img
              src={otterHero}
              alt="OtterDr mascot - a cute otter wearing doctor equipment at a computer"
              className="relative w-72 md:w-96 animate-float drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
