import { useState, useEffect } from "react";
import { Heart, Sparkles, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const DailyMessage = () => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const messages = {
    "stray-kids": [
      "Chase your dreams like Stray Kids chase the stage - with endless passion! 🔥",
      "Stay strong, stay authentic, just like our boys taught us! 💪",
      "Every challenge is a step closer to your breakthrough moment! ⭐",
      "Create your own path and let your unique voice shine bright! 🌟",
      "Together we're stronger - teamwork makes the dream work! 🤝",
      "Embrace your differences, they make you extraordinary! ✨",
      "Keep fighting for what you believe in, never give up! 💫"
    ],
    "blackpink": [
      "Confidence is your best accessory - wear it proudly! 👑",
      "Be fierce, be fabulous, be unapologetically YOU! 💖",
      "Self-love is the greatest revolution you can start! 🌹",
      "Shine bright like the queen you are meant to be! ✨",
      "Your worth isn't defined by others - you're already enough! 💎",
      "Elegance is an attitude, kindness is a superpower! 🦋",
      "Break barriers and rewrite the rules with grace! 🌸"
    ],
    "demon": [
      "Face your demons with courage - you're stronger than you think! ⚔️",
      "In darkness, be the light that guides others home! 🕯️",
      "Every battle teaches you something about your inner strength! 🛡️",
      "Protect what matters most with unwavering determination! 🔥",
      "Heroes aren't born, they're forged through challenges! 🗡️",
      "Stand up for justice, even when it's difficult! ⚡",
      "Your past doesn't define you - your choices do! 🌟"
    ]
  };

  const getRandomMessage = () => {
    const types = Object.keys(messages);
    const randomType = types[Math.floor(Math.random() * types.length)];
    const typeMessages = messages[randomType as keyof typeof messages];
    const randomMessage = typeMessages[Math.floor(Math.random() * typeMessages.length)];
    
    setMessageType(randomType);
    setCurrentMessage(randomMessage);
  };

  useEffect(() => {
    // Get today's message based on date
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
    
    const types = Object.keys(messages);
    const selectedType = types[dayOfYear % types.length];
    const typeMessages = messages[selectedType as keyof typeof messages];
    const selectedMessage = typeMessages[dayOfYear % typeMessages.length];
    
    setMessageType(selectedType);
    setCurrentMessage(selectedMessage);
  }, []);

  const getThemeClasses = () => {
    switch (messageType) {
      case "stray-kids":
        return {
          gradient: "bg-gradient-stray-kids",
          glow: "glow-stray-kids",
          textGlow: "text-glow-stray-kids"
        };
      case "blackpink":
        return {
          gradient: "bg-gradient-blackpink",
          glow: "glow-blackpink",
          textGlow: "text-glow-blackpink"
        };
      case "demon":
        return {
          gradient: "bg-gradient-demon",
          glow: "glow-demon",
          textGlow: "text-glow-demon"
        };
      default:
        return {
          gradient: "bg-gradient-neon",
          glow: "glow-neon",
          textGlow: "text-glow-neon"
        };
    }
  };

  const themeClasses = getThemeClasses();

  return (
    <section className="py-16 bg-gradient-main">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-glow-neon mb-4">
            Daily Inspiration
          </h2>
          <p className="text-muted-foreground text-lg">
            A message of hope and strength, just for you
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className={`${themeClasses.glow} bg-card/80 backdrop-blur-sm border-2 border-primary/20 animate-pulse-neon`}>
            <CardContent className="p-8 md:p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className={`p-4 rounded-full ${themeClasses.gradient} ${themeClasses.glow} animate-float`}>
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <blockquote className={`text-xl md:text-2xl lg:text-3xl font-medium ${themeClasses.textGlow} mb-8 leading-relaxed`}>
                "{currentMessage}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <Sparkles className="w-5 h-5 text-neon-cyan animate-pulse" />
                <span className="text-muted-foreground font-medium">
                  {new Date().toLocaleDateString('en-US', { 
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <Sparkles className="w-5 h-5 text-neon-cyan animate-pulse" />
              </div>
              
              <Button
                onClick={getRandomMessage}
                variant="outline"
                className="mt-8 neon-border text-neon-cyan border-neon-cyan hover:bg-neon-cyan hover:text-background"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Get Another Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DailyMessage;