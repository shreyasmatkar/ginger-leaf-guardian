import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { PredictionResult } from "@/pages/Index";

interface ResultsDisplayProps {
  result: PredictionResult | null;
  isAnalyzing: boolean;
  uploadedImage: string | null;
}

export const ResultsDisplay = ({ result, isAnalyzing, uploadedImage }: ResultsDisplayProps) => {
  if (isAnalyzing) {
    return (
      <Card className="mt-8 p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Loader2 className="w-12 h-12 text-primary animate-spin" />
          <h3 className="text-xl font-semibold text-foreground">Analyzing Leaf...</h3>
          <p className="text-sm text-muted-foreground">Processing image with AI model</p>
          <Progress value={66} className="w-64" />
        </div>
      </Card>
    );
  }

  if (!result) return null;

  const isHealthy = result.prediction === "Healthy";
  const statusColor = isHealthy ? "healthy" : "diseased";
  const bgColor = isHealthy ? "bg-healthy-light" : "bg-diseased-light";
  const borderColor = isHealthy ? "border-healthy/30" : "border-diseased/30";

  return (
    <Card className={`mt-8 p-8 border-2 ${borderColor} animate-in fade-in slide-in-from-bottom-4 duration-500`}>
      <div className="space-y-6">
        <div className="flex items-center justify-center gap-3">
          {isHealthy ? (
            <CheckCircle2 className={`w-16 h-16 text-${statusColor}`} />
          ) : (
            <AlertCircle className={`w-16 h-16 text-${statusColor}`} />
          )}
        </div>

        <div className="text-center space-y-2">
          <h3 className="text-3xl font-bold text-foreground">{result.prediction}</h3>
          <p className="text-muted-foreground">
            {isHealthy
              ? "Your ginger leaf appears to be in good health"
              : "Disease detected in the ginger leaf"}
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Confidence Level</span>
            <span className="font-semibold text-foreground">{result.confidence.toFixed(1)}%</span>
          </div>
          <Progress value={result.confidence} className="h-3" />
        </div>

        <Card className={`p-6 ${bgColor} border-${statusColor}/20`}>
          <h4 className="font-semibold text-foreground mb-3">
            {isHealthy ? "✓ Recommendations" : "⚠ Action Required"}
          </h4>
          <ul className="space-y-2 text-sm text-foreground/80">
            {isHealthy ? (
              <>
                <li>• Continue regular watering and fertilization schedule</li>
                <li>• Monitor leaf condition regularly</li>
                <li>• Maintain good air circulation around plants</li>
              </>
            ) : (
              <>
                <li>• Isolate affected plants to prevent disease spread</li>
                <li>• Remove and dispose of infected leaves properly</li>
                <li>• Apply appropriate fungicide treatment</li>
                <li>• Improve drainage and reduce leaf wetness</li>
                <li>• Consult agricultural extension service for severe cases</li>
              </>
            )}
          </ul>
        </Card>

        <div className="pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            Note: This is an AI prediction. For critical decisions, please consult with a plant pathologist 
            or agricultural expert.
          </p>
        </div>
      </div>
    </Card>
  );
};
