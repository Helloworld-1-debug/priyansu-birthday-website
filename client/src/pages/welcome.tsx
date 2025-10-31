import { useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Heart } from "lucide-react";
import priyansuPhoto from "@assets/fetch (3)_1761934789364.jpeg";
import photo1 from "@assets/fetch (1)_1761934855205.jpeg";
import photo2 from "@assets/fetch (2)_1761934855204.jpeg";

declare global {
  interface Window {
    confetti: any;
  }
}

export default function Welcome() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    const duration = 4000;
    const animationEnd = Date.now() + duration;
    const defaults = { 
      startVelocity: 30, 
      spread: 360, 
      ticks: 60, 
      zIndex: 0,
      colors: ['#F59E0B', '#FBBF24', '#FCD34D', '#1E40AF', '#2563EB', '#FFFFFF']
    };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: NodeJS.Timeout = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      if (window.confetti) {
        window.confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        });
        window.confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        });
      }
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50 dark:from-blue-950 dark:via-gray-900 dark:to-amber-950 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 animate-float-balloon" style={{ animationDelay: '0s' }}>
          <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
            <ellipse cx="30" cy="35" rx="25" ry="35" fill="#F59E0B" opacity="0.9"/>
            <path d="M30 70 L28 78 L32 78 Z" fill="#D97706"/>
          </svg>
        </div>
        <div className="absolute top-20 right-20 animate-float-balloon" style={{ animationDelay: '0.5s' }}>
          <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
            <ellipse cx="30" cy="35" rx="25" ry="35" fill="#2563EB" opacity="0.9"/>
            <path d="M30 70 L28 78 L32 78 Z" fill="#1E40AF"/>
          </svg>
        </div>
        <div className="absolute top-40 left-1/4 animate-float-balloon" style={{ animationDelay: '1s' }}>
          <svg width="50" height="70" viewBox="0 0 50 70" fill="none">
            <ellipse cx="25" cy="30" rx="20" ry="30" fill="#FBBF24" opacity="0.9"/>
            <path d="M25 60 L23 68 L27 68 Z" fill="#F59E0B"/>
          </svg>
        </div>
        <div className="absolute top-32 right-1/3 animate-float-balloon" style={{ animationDelay: '1.5s' }}>
          <svg width="55" height="75" viewBox="0 0 55 75" fill="none">
            <ellipse cx="27.5" cy="32.5" rx="22.5" ry="32.5" fill="#3B82F6" opacity="0.9"/>
            <path d="M27.5 65 L25.5 73 L29.5 73 Z" fill="#2563EB"/>
          </svg>
        </div>
        
        {[...Array(20)].map((_, i) => (
          <Sparkles 
            key={i}
            className="absolute animate-twinkle text-amber-400 dark:text-amber-300"
            size={16}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.6
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
        <div className="hidden md:block absolute top-24 left-8 lg:left-20 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="relative rotate-[-8deg] hover:rotate-[-4deg] transition-transform duration-300">
            <div className="bg-white dark:bg-card p-3 rounded-lg shadow-2xl border-2 border-amber-300 dark:border-amber-600">
              <img src={photo1} alt="Priyansu" className="w-32 h-40 object-cover rounded" />
            </div>
          </div>
        </div>

        <div className="hidden md:block absolute top-32 right-8 lg:right-20 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <div className="relative rotate-[6deg] hover:rotate-[3deg] transition-transform duration-300">
            <div className="bg-white dark:bg-card p-3 rounded-lg shadow-2xl border-2 border-blue-300 dark:border-blue-600">
              <img src={photo2} alt="Priyansu" className="w-32 h-40 object-cover rounded" />
            </div>
          </div>
        </div>

        <div className="text-center space-y-8 max-w-4xl animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-amber-500 dark:from-blue-400 dark:via-blue-500 dark:to-amber-400 bg-clip-text text-transparent leading-tight">
              Happy Birthday
            </h1>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-800 dark:text-blue-200">
              Priyansu Pradhan
            </h2>
          </div>

          <div className="flex justify-center py-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border-4 border-amber-400 dark:border-amber-500 shadow-2xl overflow-hidden">
                <img 
                  src={priyansuPhoto} 
                  alt="Priyansu Pradhan"
                  className="w-full h-full object-cover object-center"
                  data-testid="img-priyansu"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-amber-400 dark:bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="text-white" size={24} />
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto space-y-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white/80 dark:bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-200 dark:border-card-border">
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                <span className="font-semibold text-blue-700 dark:text-blue-300">Priyansu Pradhan</span> is a distinguished student at{" "}
                <span className="font-semibold text-blue-700 dark:text-blue-300">SOA University</span>, 
                a dedicated member of the <span className="font-semibold text-blue-700 dark:text-blue-300">SOA NCC team</span>, 
                and a passionate enthusiast of <span className="font-semibold text-amber-600 dark:text-amber-400">IoT and Robotics</span>. 
                Known for being kind, disciplined, and inspiring to juniors.
              </p>
            </div>
          </div>

          <div className="pt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button
              data-testid="button-view-wishes"
              size="lg"
              onClick={() => setLocation("/wishes")}
              className="bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-500 dark:to-amber-600 text-white border-amber-600 dark:border-amber-600 font-semibold text-lg px-10 py-7 rounded-full shadow-2xl group"
            >
              View Birthday Wishes
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
            </Button>
          </div>

          <div className="pt-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <p className="text-sm text-muted-foreground italic">
              Made with <Heart className="inline w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> by Aryan Agrawal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
