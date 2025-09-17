import { useState } from "react";
import { OceanIframe } from "@/components/OceanIframe";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Waves, Globe, Anchor, Shield, Compass, Heart } from "lucide-react";

const Index = () => {
  const [customUrl, setCustomUrl] = useState("");
  const [currentUrl, setCurrentUrl] = useState("https://www.aquaphobia.org.au/");

  const handleUrlChange = () => {
    if (customUrl) {
      setCurrentUrl(customUrl);
    }
  };

  const predefinedUrls = [
    { 
      name: "IOA Australia", 
      url: "https://www.aquaphobia.org.au/", 
      icon: Waves,
      description: "Institute of Aquaphobia - Overcoming water fears"
    },
    { 
      name: "Ocean Conservation", 
      url: "https://oceanconservancy.org/", 
      icon: Heart,
      description: "Protecting our oceans for future generations"
    },
    { 
      name: "Marine Research", 
      url: "https://www.whoi.edu/", 
      icon: Compass,
      description: "Woods Hole Oceanographic Institution"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-surface">
      {/* Header Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-gradient-ocean rounded-full animate-float">
              <Waves className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-ocean bg-clip-text text-transparent">
              Ocean Portal
            </h1>
            <div className="p-3 bg-gradient-wave rounded-full animate-wave">
              <Anchor className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dive into immersive web content with our beautiful ocean-themed iframe viewer. 
            Designed for the Institute of Aquaphobia Australia and beyond.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <Badge variant="secondary" className="animate-pulse">✨ Glass Morphism</Badge>
            <Badge variant="secondary" className="animate-pulse">🌊 Ocean Animations</Badge>
            <Badge variant="secondary" className="animate-pulse">📱 Responsive Design</Badge>
            <Badge variant="secondary" className="animate-pulse">🔒 Secure Viewing</Badge>
          </div>
        </div>

        {/* URL Controls */}
        <Card className="glass-card mb-8 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              Navigation Control
            </CardTitle>
            <CardDescription>
              Choose a predefined destination or enter your own URL to explore
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Predefined URLs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {predefinedUrls.map((site) => (
                <Card
                  key={site.name}
                  className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 border-2 hover:border-primary/50"
                  onClick={() => setCurrentUrl(site.url)}
                >
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-center mb-3">
                      <div className="p-2 bg-gradient-ocean rounded-lg">
                        <site.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-sm">{site.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{site.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Custom URL Input */}
            <div className="flex gap-3">
              <Input
                placeholder="Enter custom URL (e.g., https://example.com)"
                value={customUrl}
                onChange={(e) => setCustomUrl(e.target.value)}
                className="flex-1"
              />
              <Button 
                variant="ocean" 
                onClick={handleUrlChange}
                disabled={!customUrl}
                className="min-w-[120px]"
              >
                <Compass className="w-4 h-4 mr-2" />
                Navigate
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Ocean Iframe */}
        <div className="animate-fade-in">
          <OceanIframe
            src={currentUrl}
            title="IOA Australia Portal"
            description="Exploring aquaphobia resources and water safety education"
          />
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <Card className="glass-card animate-fade-in">
            <CardContent className="p-6 text-center">
              <div className="p-3 bg-gradient-ocean rounded-full w-fit mx-auto mb-4 animate-float">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Secure Viewing</h3>
              <p className="text-sm text-muted-foreground">
                Sandboxed iframe with security controls for safe browsing
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card animate-fade-in">
            <CardContent className="p-6 text-center">
              <div className="p-3 bg-gradient-wave rounded-full w-fit mx-auto mb-4 animate-wave">
                <Waves className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Ocean Animations</h3>
              <p className="text-sm text-muted-foreground">
                Beautiful wave animations and ocean-themed visual effects
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card animate-fade-in">
            <CardContent className="p-6 text-center">
              <div className="p-3 bg-gradient-depth rounded-full w-fit mx-auto mb-4 animate-pulse">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Full-Screen Mode</h3>
              <p className="text-sm text-muted-foreground">
                Immersive full-screen viewing with elegant controls
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;