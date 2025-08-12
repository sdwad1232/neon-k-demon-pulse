import { useState } from "react";
import { Menu, X, Heart, Music, Video, Calendar, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", icon: Heart },
    { name: "Music", href: "#music", icon: Music },
    { name: "Videos", href: "#videos", icon: Video },
    { name: "Tours", href: "#tours", icon: Calendar },
    { name: "Blog", href: "#blog", icon: PenTool },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-blackpink rounded-lg glow-blackpink"></div>
          <span className="font-orbitron font-bold text-xl text-glow-neon">
            FANVERSE
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
            >
              <item.icon className="w-4 h-4 group-hover:text-neon-cyan transition-colors" />
              <span className="font-medium">{item.name}</span>
            </a>
          ))}
        </div>

        {/* Daily Message Button */}
        <Button 
          variant="outline" 
          className="hidden md:flex neon-border bg-gradient-neon text-background font-semibold"
        >
          Daily Inspiration
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-lg border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
            <Button 
              variant="outline" 
              className="w-full neon-border bg-gradient-neon text-background font-semibold mt-4"
            >
              Daily Inspiration
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;