import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Otter from "@/assets/otter-icon.png";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Install", href: "#install" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-1.5">
          <img src={Otter} alt="OtterDr icon" className="w-[60px]" />
          <span className="font-display text-xl font-bold">OtterDr</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button size="sm" className="rounded-lg" asChild>
            <a
              href="https://marketplace.visualstudio.com/items?itemName=OtterDr.otterdr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Install
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background p-4 space-y-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <Button size="sm" className="w-full rounded-lg" asChild>
            <a
              href="https://marketplace.visualstudio.com/items?itemName=OtterDr.otterdr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Install Extension
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
