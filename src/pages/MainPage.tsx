import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  VolumeX, 
  Shuffle, 
  Repeat,
  Music,
  Radio,
  Heart,
  MoreHorizontal
} from "lucide-react";
import Logo from "@/components/Logo";

const MainPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([65]);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrack, setCurrentTrack] = useState({
    title: "Не выбрано",
    artist: "—",
    duration: "0:00",
    progress: 0
  });

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value);
    if (value[0] > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="min-h-screen bg-background p-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.1),transparent_50%)]" />

      <div className="relative z-10 max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <Logo size="small" />
          <div>
            <h1 className="text-2xl font-tech font-black bg-gradient-primary bg-clip-text text-transparent">
              Управление станцией
            </h1>
            <p className="text-muted-foreground font-mono text-sm">
              Яндекс Станция Макс
            </p>
          </div>
        </div>

        {/* Current Track */}
        <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-glow-subtle">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-tech flex items-center gap-2">
              <Music className="text-primary" size={20} />
              Сейчас играет
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center space-y-2">
              <h3 className="font-tech font-bold text-xl">{currentTrack.title}</h3>
              <p className="text-muted-foreground">{currentTrack.artist}</p>
            </div>
            
            {/* Progress bar */}
            <div className="space-y-2">
              <Slider
                value={[currentTrack.progress]}
                max={100}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground font-mono">
                <span>0:00</span>
                <span>{currentTrack.duration}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Controls */}
        <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-glow-subtle">
          <CardContent className="pt-6">
            <div className="flex items-center justify-center space-x-4">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-accent">
                <Shuffle size={20} />
              </Button>
              
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                <SkipBack size={24} />
              </Button>
              
              <Button 
                onClick={handlePlayPause}
                variant="gradient"
                size="lg"
                className="h-16 w-16 rounded-full shadow-glow-primary"
              >
                {isPlaying ? <Pause size={28} /> : <Play size={28} />}
              </Button>
              
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                <SkipForward size={24} />
              </Button>
              
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-accent">
                <Repeat size={20} />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Volume Control */}
        <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-glow-subtle">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-tech flex items-center gap-2">
              <Volume2 className="text-primary" size={20} />
              Громкость
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMute}
                className="text-muted-foreground hover:text-primary"
              >
                {isMuted || volume[0] === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </Button>
              
              <Slider
                value={isMuted ? [0] : volume}
                onValueChange={handleVolumeChange}
                max={100}
                step={1}
                className="flex-1"
              />
              
              <span className="text-sm font-mono text-muted-foreground w-8">
                {isMuted ? 0 : volume[0]}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-glow-subtle">
            <CardContent className="pt-6">
              <Button variant="ghost" className="w-full h-auto flex-col space-y-2 p-4">
                <Radio className="text-accent" size={24} />
                <span className="font-tech text-sm">Радио</span>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-glow-subtle">
            <CardContent className="pt-6">
              <Button variant="ghost" className="w-full h-auto flex-col space-y-2 p-4">
                <Heart className="text-accent" size={24} />
                <span className="font-tech text-sm">Избранное</span>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Status */}
        <div className="flex justify-center space-x-2">
          <Badge variant="secondary" className="font-mono">
            Подключена
          </Badge>
          <Badge variant="outline" className="font-mono">
            Яндекс Музыка
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default MainPage;