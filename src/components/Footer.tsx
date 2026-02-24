import { Button } from "@/components/ui/button";
import { Github, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🦦</span>
            <span className="font-display text-xl font-bold">OtterDr</span>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="rounded-lg" asChild>
              <a href="https://github.com/OtterDr/OtterDr" target="_blank" rel="noopener noreferrer">
                <Star className="mr-2 h-4 w-4" />
                Star on GitHub
              </a>
            </Button>
            <Button variant="outline" size="sm" className="rounded-lg" asChild>
              <a href="https://github.com/OtterDr/OtterDr" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Contribute
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>MIT License · Made with 🦦✨ · Happy debugging!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
