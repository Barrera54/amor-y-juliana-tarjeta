import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";

interface LoginFormProps {
  onLogin: (name: string) => void;
}

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && password) {
      onLogin(name);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-soft flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-tender border-warm-pink/20">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <Heart className="w-12 h-12 text-warm-pink animate-pulse" />
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-emotional bg-clip-text text-transparent">
            ¡Feliz Cumpleaños! 🎂
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Una tarjeta digital muy especial creada especialmente para tu día
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">Tu nombre</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="¿Cómo te llamas?"
                className="border-warm-pink/30 focus:border-warm-pink transition-colors"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="border-warm-pink/30 focus:border-warm-pink transition-colors"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">Contraseña</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresa cualquier contraseña"
                className="border-warm-pink/30 focus:border-warm-pink transition-colors"
                required
              />
            </div>
            <Button 
              type="submit" 
              variant="emotional"
              className="w-full"
            >
              Descubrir mi regalo ✨
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;