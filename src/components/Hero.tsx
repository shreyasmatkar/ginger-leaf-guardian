import { Sparkles, Brain, Leaf } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Powered by Deep Learning</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Detect Ginger Leaf Diseases
            <span className="block text-primary mt-2">Instantly with AI</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Upload a photo of your ginger plant leaf and get instant analysis using advanced 
            computer vision and deep learning technology.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">AI-Powered</p>
                <p className="text-sm text-muted-foreground">Deep Learning Model</p>
              </div>
            </div>

            <div className="flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Instant Results</p>
                <p className="text-sm text-muted-foreground">Get predictions in seconds</p>
              </div>
            </div>

            <div className="flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              <div className="p-3 bg-healthy/10 rounded-lg">
                <Leaf className="w-6 h-6 text-healthy" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">High Accuracy</p>
                <p className="text-sm text-muted-foreground">Reliable plant diagnostics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
