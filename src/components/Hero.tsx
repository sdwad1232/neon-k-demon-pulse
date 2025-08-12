import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import strayKidsImage from "@/assets/stray-kids-bg.jpg";
import blackpinkImage from "@/assets/blackpink-bg.jpg";
import demonsHuntersImage from "@/assets/demons-hunters-bg.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "STRAY KIDS",
      subtitle: "Bold. Energetic. Unstoppable.",
      description: "Follow the latest updates, music releases, and tour announcements from the phenomenal group that's taking the world by storm.",
      image: strayKidsImage,
      theme: "stray-kids",
      gradient: "bg-gradient-stray-kids",
      textGlow: "text-glow-stray-kids"
    },
    {
      id: 2,
      title: "BLACKPINK",
      subtitle: "Glamorous. Chic. Iconic.",
      description: "Stay connected with the queens of K-pop through exclusive content, fashion moments, and musical masterpieces.",
      image: blackpinkImage,
      theme: "blackpink",
      gradient: "bg-gradient-blackpink",
      textGlow: "text-glow-blackpink"
    },
    {
      id: 3,
      title: "DEMON'S HUNTERS",
      subtitle: "Dark. Thrilling. Netflix Original.",
      description: "Experience the intense supernatural thriller that's captivating audiences worldwide on Netflix.",
      image: demonsHuntersImage,
      theme: "demon",
      gradient: "bg-gradient-demon",
      textGlow: "text-glow-demon"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${currentSlideData.image})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className={`absolute inset-0 ${currentSlideData.gradient} opacity-30`}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Title */}
          <h1 className={`font-orbitron font-black text-5xl md:text-7xl lg:text-8xl ${currentSlideData.textGlow} mb-4`}>
            {currentSlideData.title}
          </h1>
          
          {/* Subtitle */}
          <p className="font-orbitron text-xl md:text-2xl text-neon-cyan text-glow-neon font-bold">
            {currentSlideData.subtitle}
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {currentSlideData.description}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className={`${currentSlideData.gradient} glow-${currentSlideData.theme} font-semibold text-lg px-8 py-4 neon-border group`}
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Explore Content
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-background font-semibold px-8 py-4 glow-neon"
            >
              <Star className="w-5 h-5 mr-2" />
              Fan Favorites
            </Button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-primary glow-neon' : 'bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-black/30 hover:bg-black/50 rounded-full transition-colors duration-300 text-white hover:text-neon-cyan"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-black/30 hover:bg-black/50 rounded-full transition-colors duration-300 text-white hover:text-neon-cyan"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;