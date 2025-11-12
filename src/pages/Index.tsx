import { useState } from "react";
import { Hero } from "@/components/Hero";
import { ImageUploader } from "@/components/ImageUploader";
import { ResultsDisplay } from "@/components/ResultsDisplay";
import { HowItWorks } from "@/components/HowItWorks";
import { Leaf } from "lucide-react";

export interface PredictionResult {
  prediction: "Healthy" | "Diseased";
  confidence: number;
}

const Index = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleImageUpload = async (imageUrl: string) => {
    setUploadedImage(imageUrl);
    setResult(null);
    setIsAnalyzing(true);

    // TODO: Replace with your actual Python API endpoint
    // Example:
    // const formData = new FormData();
    // formData.append('image', imageFile);
    // const response = await fetch('YOUR_API_ENDPOINT', {
    //   method: 'POST',
    //   body: formData
    // });
    // const data = await response.json();
    // setResult(data);

    // Demo simulation - replace this with actual API call
    setTimeout(() => {
      const mockResult: PredictionResult = {
        prediction: Math.random() > 0.5 ? "Healthy" : "Diseased",
        confidence: Math.random() * 30 + 70, // 70-100%
      };
      setResult(mockResult);
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleReset = () => {
    setUploadedImage(null);
    setResult(null);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Leaf className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Ginger Leaf Disease Detection</h1>
              <p className="text-sm text-muted-foreground">AI-Powered Plant Health Analysis</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Hero />
        
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <ImageUploader
              onImageUpload={handleImageUpload}
              uploadedImage={uploadedImage}
              onReset={handleReset}
            />

            {(isAnalyzing || result) && (
              <ResultsDisplay
                result={result}
                isAnalyzing={isAnalyzing}
                uploadedImage={uploadedImage}
              />
            )}
          </div>
        </section>

        <HowItWorks />
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>Ginger Leaf Disease Detection System • Built with React & TensorFlow</p>
          <p className="mt-2">Connect your Python ML backend to enable real-time predictions</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
