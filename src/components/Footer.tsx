import { Heart, Mail, MessageCircle, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-blackpink-pink" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-neon-cyan" },
    { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-stray-kids-red" },
    { name: "Discord", icon: MessageCircle, href: "#", color: "hover:text-neon-purple" },
  ];

  const quickLinks = [
    { name: "Latest News", href: "#music" },
    { name: "Music Videos", href: "#videos" },
    { name: "Tour Dates", href: "#tours" },
    { name: "Fan Blog", href: "#blog" },
  ];

  const fandoms = [
    { name: "Stray Kids", color: "text-stray-kids-red" },
    { name: "BLACKPINK", color: "text-blackpink-pink" },
    { name: "Demon's Hunters", color: "text-demon-red" },
  ];

  return (
    <footer className="bg-gradient-to-t from-background to-card/50 border-t border-border">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-blackpink rounded-lg glow-blackpink"></div>
              <span className="font-orbitron font-bold text-xl text-glow-neon">
                FANVERSE
              </span>
            </div>
            <p className="text-muted-foreground">
              Your ultimate destination for K-pop and entertainment content. Made with{" "}
              <Heart className="w-4 h-4 inline text-primary animate-pulse" /> by fans, for fans.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  className={`hover:bg-transparent ${social.color} transition-colors duration-300`}
                >
                  <social.icon className="w-5 h-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-orbitron font-bold text-lg text-neon-cyan">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Fandoms */}
          <div className="space-y-4">
            <h3 className="font-orbitron font-bold text-lg text-neon-cyan">
              Our Fandoms
            </h3>
            <ul className="space-y-2">
              {fandoms.map((fandom) => (
                <li key={fandom.name}>
                  <span className={`${fandom.color} font-medium hover:glow-neon transition-all duration-300 cursor-pointer`}>
                    {fandom.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-orbitron font-bold text-lg text-neon-cyan">
              Stay Updated
            </h3>
            <p className="text-muted-foreground text-sm">
              Get the latest news and updates straight to your inbox!
            </p>
            <div className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-input border border-border rounded-l-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button size="sm" className="rounded-l-none bg-primary hover:bg-primary/80">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 FANVERSE. Made with passion for K-pop and entertainment.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;