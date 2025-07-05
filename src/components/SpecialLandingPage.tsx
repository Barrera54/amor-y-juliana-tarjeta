import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star } from "lucide-react";
import moment1 from "@/assets/moment1.jpg";
import moment2 from "@/assets/moment2.jpg";
import moment3 from "@/assets/moment3.jpg";
import moment4 from "@/assets/moment4.jpg";
import moment5 from "@/assets/moment5.jpg";

interface SpecialLandingPageProps {
  userName: string;
}

const SpecialLandingPage = ({ userName }: SpecialLandingPageProps) => {
  const moments = [
    { id: 1, image: moment1, alt: "Momento especial 1" },
    { id: 2, image: moment2, alt: "Momento especial 2" },
    { id: 3, image: moment3, alt: "Momento especial 3" },
    { id: 4, image: moment4, alt: "Momento especial 4" },
    { id: 5, image: moment5, alt: "Momento especial 5" },
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto shadow-tender border-warm-pink/20 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-8 space-y-8">
            {/* Header with greeting */}
            <div className="text-center space-y-4">
              <div className="flex justify-center space-x-2">
                <Heart className="w-8 h-8 text-warm-pink animate-pulse" />
                <Star className="w-8 h-8 text-soft-gold animate-pulse" />
                <Heart className="w-8 h-8 text-warm-pink animate-pulse" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-emotional bg-clip-text text-transparent">
                ¡Feliz Cumpleaños {userName}! 🎂💕
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hoy es tu día especial y quería sorprenderte con algo hecho con todo el amor
              </p>
            </div>

            {/* Photo Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {moments.map((moment, index) => (
                <div
                  key={moment.id}
                  className={`relative group cursor-pointer transition-all duration-300 hover:scale-105 ${
                    index === 2 ? "md:col-span-1" : ""
                  }`}
                >
                  <div className="overflow-hidden rounded-lg shadow-gentle hover:shadow-tender transition-all duration-300">
                    <img
                      src={moment.image}
                      alt={moment.alt}
                      className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-pink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                </div>
              ))}
            </div>

            {/* Central Message */}
            <div className="text-center bg-gradient-warmth p-8 rounded-xl shadow-gentle">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Un Día Muy Especial Para Ti 🎂
                </h2>
                <p className="text-white/90 text-lg leading-relaxed max-w-3xl mx-auto">
                  Hoy celebramos no solo el día que llegaste al mundo, sino también todo lo que has 
                  significado en nuestras vidas. Cada risa compartida, cada momento juntos, cada abrazo 
                  ha sido un regalo. En tu cumpleaños quiero que sepas lo especial que eres y cuánto 
                  alegras nuestros corazones. ¡Que este nuevo año de vida esté lleno de felicidad, 
                  amor y momentos inolvidables!
                </p>
                <div className="flex justify-center space-x-2 mt-4">
                  <Heart className="w-6 h-6 text-white animate-pulse" />
                  <Heart className="w-6 h-6 text-white animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <Heart className="w-6 h-6 text-white animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
              </div>
            </div>

            {/* YouTube Video */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center text-foreground">
                Un Mensaje Especial Para Ti 🎵
              </h3>
              <div className="relative w-full max-w-2xl mx-auto">
                <div className="aspect-video rounded-lg overflow-hidden shadow-gentle">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Mensaje especial"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* Special Dedication */}
            <div className="bg-tender-lavender/30 p-6 rounded-xl text-center space-y-4 border border-warm-pink/20">
              <div className="space-y-4">
                <div className="flex justify-center space-x-3">
                  <Heart className="w-6 h-6 text-warm-pink" />
                  <Star className="w-6 h-6 text-soft-gold" />
                  <Heart className="w-6 h-6 text-warm-pink" />
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold bg-gradient-emotional bg-clip-text text-transparent">
                    Con cariño
                  </p>
                  <p className="text-xl font-semibold text-foreground">
                    Samuel 💝
                  </p>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  ¡Que tengas el mejor cumpleaños! ✨
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SpecialLandingPage;