import { useCallback, useState } from "react";
import { Upload, X, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface ImageUploaderProps {
  onImageUpload: (imageUrl: string) => void;
  uploadedImage: string | null;
  onReset: () => void;
}

export const ImageUploader = ({ onImageUpload, uploadedImage, onReset }: ImageUploaderProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragging(true);
    } else if (e.type === "dragleave") {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const files = e.dataTransfer.files;
      if (files && files[0]) {
        handleFile(files[0]);
      }
    },
    []
  );

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (JPG, PNG, etc.)",
        variant: "destructive",
      });
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 10MB",
        variant: "destructive",
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target?.result as string;
      onImageUpload(imageUrl);
      toast({
        title: "Image uploaded",
        description: "Analyzing your ginger leaf...",
      });
    };
    reader.readAsDataURL(file);
  };

  if (uploadedImage) {
    return (
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Uploaded Image</h3>
          <Button variant="outline" size="sm" onClick={onReset}>
            <X className="w-4 h-4 mr-2" />
            Upload New
          </Button>
        </div>
        <div className="relative rounded-lg overflow-hidden bg-muted">
          <img
            src={uploadedImage}
            alt="Uploaded ginger leaf"
            className="w-full h-auto max-h-96 object-contain"
          />
        </div>
      </Card>
    );
  }

  return (
    <Card
      className={`p-8 transition-all duration-300 ${
        isDragging ? "border-primary border-2 bg-primary/5" : "border-border"
      }`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center justify-center text-center space-y-4">
        <div className="p-6 bg-primary/10 rounded-full">
          {isDragging ? (
            <Upload className="w-12 h-12 text-primary animate-bounce" />
          ) : (
            <ImageIcon className="w-12 h-12 text-primary" />
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground">
            {isDragging ? "Drop your image here" : "Upload Ginger Leaf Image"}
          </h3>
          <p className="text-sm text-muted-foreground max-w-sm">
            Drag and drop an image here, or click to select a file from your device
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button asChild className="relative">
            <label className="cursor-pointer">
              <Upload className="w-4 h-4 mr-2" />
              Choose File
              <input
                type="file"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                accept="image/*"
                onChange={handleFileInput}
              />
            </label>
          </Button>
        </div>

        <p className="text-xs text-muted-foreground pt-4">
          Supported formats: JPG, PNG, WEBP • Max size: 10MB
        </p>
      </div>
    </Card>
  );
};
