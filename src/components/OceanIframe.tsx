import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Waves, Maximize2, Minimize2, RefreshCw, ExternalLink } from "lucide-react";

interface OceanIframeProps {
  src: string;
  title?: string;
  description?: string;
  className?: string;
}

export const OceanIframe = ({ 
  src, 
  title = "Ocean Content Viewer", 
  description = "Dive deep into immersive content",
  className = "" 
}: OceanIframeProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleRefresh = () => {
    setIsLoading(true);
    // Force iframe reload
    const iframe = document.querySelector('iframe');
    if (iframe) {
      iframe.src = iframe.src;
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className={`w-full ${isFullscreen ? 'fixed inset-0 z-50' : ''} ${className}`}>
      <Card className="glass-card ocean-glow animate-fade-in overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-ocean p-4 border-b border-primary/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-lg animate-float">
                <Waves className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-white font-semibold text-lg">{title}</h2>
                <p className="text-white/80 text-sm">{description}</p>
              </div>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 animate-wave">
                IOA Australia
              </Badge>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleRefresh}
                className="text-white hover:bg-white/10 transition-all duration-300"
              >
                <RefreshCw className="w-4 h-4" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(src, '_blank')}
                className="text-white hover:bg-white/10 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleFullscreen}
                className="text-white hover:bg-white/10 transition-all duration-300"
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Loading indicator */}
        {isLoading && (
          <div className="absolute inset-0 bg-gradient-surface flex items-center justify-center z-10">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
              <p className="text-muted-foreground animate-pulse">Diving into content...</p>
            </div>
          </div>
        )}

        {/* iframe container */}
        <div className="relative overflow-hidden">
          <iframe
            src={src}
            title={title}
            className={`w-full border-0 bg-white transition-all duration-500 ${
              isFullscreen ? 'h-screen' : 'h-[600px]'
            }`}
            onLoad={() => setIsLoading(false)}
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
          
          {/* Ocean wave overlay effect */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-wave opacity-30 animate-wave"></div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-surface p-3 border-t border-border/50">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span>Institute of Aquaphobia Australia</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs">Secure Connection</span>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </Card>

      {/* Fullscreen backdrop */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={toggleFullscreen}
        />
      )}
    </div>
  );
};