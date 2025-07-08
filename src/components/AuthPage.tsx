import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "./Logo";
import { LogIn, Shield, Smartphone, Zap } from "lucide-react";

const AuthPage = () => {
  const handleYandexAuth = () => {
    // TODO: Implement Yandex ID authentication
    console.log("Yandex auth clicked");
    // Временно перенаправляем на главную страницу
    window.location.href = "/main";
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 animate-float">
        <Shield className="text-primary/20" size={24} />
      </div>
      <div className="absolute bottom-20 right-20 animate-float delay-1000">
        <Zap className="text-accent/20" size={32} />
      </div>
      
      <Card className="w-full max-w-md mx-auto bg-card/80 backdrop-blur-sm border-primary/20 shadow-glow-subtle animate-fade-in">
        <CardHeader className="text-center space-y-6">
          <div className="flex justify-center">
            <Logo size="default" />
          </div>
          
          <div>
            <CardTitle className="text-2xl font-tech bg-gradient-primary bg-clip-text text-transparent">
              Добро пожаловать
            </CardTitle>
            <CardDescription className="text-muted-foreground mt-2">
              Управление Яндекс Станции
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <Button 
            onClick={handleYandexAuth}
            variant="gradient"
            size="lg"
            className="w-full animate-slide-up font-tech"
          >
            <LogIn size={20} />
            Войти через Яндекс ID
          </Button>

          <div className="text-center space-y-1">
            <p className="text-xs text-muted-foreground font-mono">
              v1.0.0 | EX-PLOIT TECH
            </p>
            <p className="text-xs text-muted-foreground/60">
              Сделано в сотрудничестве с Яндекс
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthPage;