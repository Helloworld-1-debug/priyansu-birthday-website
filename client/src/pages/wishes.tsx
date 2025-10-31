import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Heart, Sparkles, Lightbulb, Award, Users } from "lucide-react";
import photo3 from "@assets/fetch 3_1761934855205.jpeg";
import photo4 from "@assets/fetch_1761934855206.jpeg";
import photo5 from "@assets/fetch (4)_1761934864217.jpeg";
import photo6 from "@assets/fetch (5)_1761934864218.jpeg";
import photo7 from "@assets/fetch (6)_1761934864218.jpeg";

export default function Wishes() {
  const [, setLocation] = useLocation();
  const [hearts, setHearts] = useState<Array<{ id: number; delay: number; left: number }>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts(prev => [
        ...prev.filter(h => Date.now() - h.id < 6000),
        {
          id: Date.now(),
          delay: Math.random() * 2,
          left: Math.random() * 100
        }
      ]);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  const compliments = [
    {
      icon: Users,
      title: "Inspiring Senior",
      description: "Your guidance and mentorship have been invaluable to all juniors. You lead by example and inspire us to be better every day.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Lightbulb,
      title: "Tech Enthusiast",
      description: "Your passion for IoT and Robotics is contagious. You've shown us the exciting possibilities of technology and innovation.",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: Award,
      title: "Disciplined Leader",
      description: "As a member of the NCC team, you exemplify discipline, dedication, and leadership that motivates everyone around you.",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Heart,
      title: "Kind Soul",
      description: "Your positive attitude and kind nature make you not just a great senior, but an amazing human being who brightens everyone's day.",
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50 dark:from-blue-950 dark:via-gray-900 dark:to-amber-950 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {hearts.map(heart => (
          <Heart
            key={heart.id}
            className="absolute bottom-0 text-red-400 dark:text-red-300 fill-red-400 dark:fill-red-300 animate-float-up opacity-70"
            size={20}
            style={{
              left: `${heart.left}%`,
              animationDelay: `${heart.delay}s`
            }}
          />
        ))}

        {[...Array(15)].map((_, i) => (
          <Sparkles 
            key={i}
            className="absolute animate-twinkle text-amber-400 dark:text-amber-300"
            size={12}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.5
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="container max-w-6xl mx-auto px-4 py-8 md:py-12">
          <div className="mb-8">
            <Button
              data-testid="button-back-home"
              variant="outline"
              onClick={() => setLocation("/")}
              className="hover-elevate active-elevate-2"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Home
            </Button>
          </div>

          <div className="text-center mb-12 space-y-4 animate-fade-in-up">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-amber-500 dark:from-blue-400 dark:to-amber-400 bg-clip-text text-transparent">
              A Special Message for You
            </h1>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent max-w-xs"></div>
              <Sparkles className="text-amber-500" size={24} />
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent max-w-xs"></div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Card className="border-l-4 border-l-amber-500 shadow-2xl bg-white/90 dark:bg-card/90 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6 text-foreground">
                  <p className="text-lg md:text-xl leading-relaxed">
                    Dear <span className="font-semibold text-blue-700 dark:text-blue-300">Priyansu Bhaiya</span>,
                  </p>
                  
                  <p className="text-lg md:text-xl leading-relaxed">
                    Wishing you a very Happy Birthday! You are not just a great senior but also an amazing human being who inspires everyone around with your passion for IoT, Robotics, and discipline through NCC. Your guidance and positive attitude motivate me every day. May this year bring you more success, happiness, and endless achievements.
                  </p>

                  <div className="pt-6 border-t border-amber-200 dark:border-amber-800">
                    <p className="text-lg md:text-xl font-serif italic text-right text-muted-foreground">
                      With respect and warm wishes,
                    </p>
                    <div className="text-right mt-2 space-y-1">
                      <p className="text-xl md:text-2xl font-semibold text-blue-700 dark:text-blue-300">
                        Aryan Agrawal
                      </p>
                      <p className="text-xl md:text-2xl font-semibold text-blue-700 dark:text-blue-300">
                        Biswajit Baral
                      </p>
                      <p className="text-xl md:text-2xl font-semibold text-blue-700 dark:text-blue-300">
                        Subhasish Sahu
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12 text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Makes You Special
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here's what we admire most about you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {compliments.map((compliment, index) => {
              const Icon = compliment.icon;
              return (
                <Card 
                  key={index} 
                  className="hover-elevate active-elevate-2 transition-shadow duration-300 bg-white/90 dark:bg-card/90 backdrop-blur-sm shadow-lg"
                  data-testid={`card-compliment-${index}`}
                >
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${compliment.color} shadow-lg flex-shrink-0`}>
                        <Icon className="text-white" size={28} />
                      </div>
                      <div className="space-y-2 flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                          {compliment.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {compliment.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 mb-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
              Memories Together
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
              <div className="relative group overflow-hidden rounded-2xl shadow-lg hover-elevate active-elevate-2 transition-all duration-300">
                <img src={photo3} alt="Memory with Priyansu" className="w-full h-48 md:h-56 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl shadow-lg hover-elevate active-elevate-2 transition-all duration-300">
                <img src={photo4} alt="Memory with Priyansu" className="w-full h-48 md:h-56 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl shadow-lg hover-elevate active-elevate-2 transition-all duration-300">
                <img src={photo5} alt="Memory with Priyansu" className="w-full h-48 md:h-56 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl shadow-lg hover-elevate active-elevate-2 transition-all duration-300 col-span-2 md:col-span-1">
                <img src={photo6} alt="Memory with Priyansu" className="w-full h-48 md:h-56 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl shadow-lg hover-elevate active-elevate-2 transition-all duration-300 col-span-2">
                <img src={photo7} alt="Memory with Priyansu" className="w-full h-48 md:h-56 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="inline-block bg-gradient-to-r from-blue-100 to-amber-100 dark:from-blue-900/30 dark:to-amber-900/30 rounded-2xl p-8 md:p-12 shadow-xl border border-amber-200 dark:border-amber-800">
              <Heart className="inline-block text-red-500 fill-red-500 mb-4 animate-pulse" size={48} />
              <p className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Have an Amazing Year Ahead!
              </p>
              <p className="text-lg text-muted-foreground mt-4">
                May all your dreams come true
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
