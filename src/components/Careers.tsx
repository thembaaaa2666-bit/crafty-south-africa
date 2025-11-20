import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Upload } from "lucide-react";

const Careers = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceCategory: "",
    experienceYears: "",
    message: "",
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceCategories = [
    "Plumbing",
    "Electrical",
    "Tiling",
    "Painting",
    "Solar Installations",
    "Gardening",
    "General Maintenance",
    "Paving",
    "Carpentry",
    "Ceiling Installations",
    "Security Fencing",
    "Security Systems",
  ];

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(file.type)) {
        toast.error("Please upload a PDF or Word document");
        return;
      }
      // Validate file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size must be less than 5MB");
        return;
      }
      setCvFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!cvFile) {
      toast.error("Please upload your CV");
      return;
    }

    setIsSubmitting(true);

    try {
      // Upload CV file to storage
      const fileExt = cvFile.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("cvs")
        .upload(filePath, cvFile);

      if (uploadError) {
        throw uploadError;
      }

      // Insert application data
      const { error: insertError } = await supabase.from("applicants").insert({
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        service_category: formData.serviceCategory,
        experience_years: formData.experienceYears ? parseInt(formData.experienceYears) : null,
        message: formData.message || null,
        cv_file_path: filePath,
      });

      if (insertError) {
        throw insertError;
      }

      toast.success("Application submitted successfully! We'll be in touch soon.");
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        serviceCategory: "",
        experienceYears: "",
        message: "",
      });
      setCvFile(null);
      // Reset file input
      const fileInput = document.getElementById("cv-upload") as HTMLInputElement;
      if (fileInput) fileInput.value = "";
    } catch (error: any) {
      console.error("Error submitting application:", error);
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="careers" className="py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Are you a skilled professional in any of our service areas? We're always looking for
            talented individuals to join the Pleasant Solutions family. Submit your CV below!
          </p>
        </div>

        <Card className="max-w-2xl mx-auto p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  required
                  placeholder="071 234 5678"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="serviceCategory">Service Category *</Label>
                <Select
                  value={formData.serviceCategory}
                  onValueChange={(value) => handleChange("serviceCategory", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your expertise" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experienceYears">Years of Experience</Label>
                <Input
                  id="experienceYears"
                  type="number"
                  min="0"
                  max="50"
                  value={formData.experienceYears}
                  onChange={(e) => handleChange("experienceYears", e.target.value)}
                  placeholder="e.g., 5"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Tell Us About Yourself (Optional)</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Share your experience, qualifications, and why you'd like to join our team..."
                className="min-h-[120px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cv-upload">Upload Your CV * (PDF or Word, max 5MB)</Label>
              <div className="flex items-center gap-4">
                <Input
                  id="cv-upload"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                  className="cursor-pointer"
                />
                {cvFile && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Upload className="h-4 w-4" />
                    <span className="truncate max-w-[200px]">{cvFile.name}</span>
                  </div>
                )}
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Careers;
