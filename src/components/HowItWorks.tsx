import { Card } from "@/components/ui/card";
import { Upload, Brain, CheckCircle } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Image",
      description: "Take a clear photo of your ginger leaf and upload it to the system",
      color: "primary",
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Our deep learning model analyzes the leaf for signs of disease or health",
      color: "accent",
    },
    {
      icon: CheckCircle,
      title: "Get Results",
      description: "Receive instant classification with confidence scores and recommendations",
      color: "healthy",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered system uses state-of-the-art computer vision to analyze your ginger leaves
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className={`p-4 bg-${step.color}/10 rounded-full`}>
                  <step.icon className={`w-8 h-8 text-${step.color}`} />
                </div>
              </div>
              <div className="mb-2 text-sm font-semibold text-primary">Step {index + 1}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </Card>
          ))}
        </div>

        <Card className="mt-12 p-8 bg-primary/5 border-primary/20">
          <h3 className="text-xl font-bold text-foreground mb-4 text-center">
            About the Technology
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-foreground/80">
            <div>
              <h4 className="font-semibold mb-2 text-foreground">Deep Learning Model</h4>
              <p className="text-muted-foreground">
                Built using TensorFlow and Keras with transfer learning from MobileNetV2/EfficientNetB0 
                architecture for optimal accuracy and performance.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-foreground">Training Dataset</h4>
              <p className="text-muted-foreground">
                Trained on a curated dataset of ginger leaf images with both healthy and diseased samples, 
                using advanced data augmentation techniques.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-foreground">Prediction Confidence</h4>
              <p className="text-muted-foreground">
                Each prediction includes a confidence score to help you understand the reliability of 
                the classification result.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-foreground">Continuous Improvement</h4>
              <p className="text-muted-foreground">
                The model can be retrained with new data to improve accuracy and adapt to new disease 
                patterns over time.
              </p>
            </div>
          </div>
        </Card>

        <div className="mt-8 p-6 bg-accent/10 border border-accent/20 rounded-lg">
          <h4 className="font-semibold text-foreground mb-2">🔌 API Integration Required</h4>
          <p className="text-sm text-foreground/80">
            To enable real-time predictions, connect your Python backend API endpoint. Update the API call 
            in <code className="px-2 py-1 bg-background rounded text-primary">src/pages/Index.tsx</code> with 
            your deployed model's URL (Google Colab, Railway, Render, etc.).
          </p>
        </div>
      </div>
    </section>
  );
};
