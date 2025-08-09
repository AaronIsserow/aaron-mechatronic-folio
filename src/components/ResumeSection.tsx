import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Calendar, MapPin, Building } from "lucide-react";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Resume</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download my full CV or browse through my key experiences and education below.
          </p>
          <Button 
            className="mt-6 bg-secondary hover:bg-secondary/90 group"
            onClick={() => window.open('/CVAARONUpdate2025.pdf', '_blank')}
          >
            <Download size={20} className="mr-2" />
            Download CV (PDF)
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Education */}
          <Card className="animate-slide-in border-primary/20 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Building size={20} />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-2 border-secondary pl-4">
                <h3 className="font-semibold text-foreground">
                  Bachelor of Science in Mechatronics Engineering
                </h3>
                <p className="text-secondary font-medium">University of Cape Town</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                  <Calendar size={14} />
                  <span>2021 - 2025 (Expected)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={14} />
                  <span>Cape Town, South Africa</span>
                </div>
              </div>

              <div className="border-l-2 border-secondary pl-4">
                <h3 className="font-semibold text-foreground">
                  Herzlia High School
                </h3>
                <p className="text-secondary font-medium">Matriculated with 87 average</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                  <Calendar size={14} />
                  <span>2020</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="animate-slide-in border-primary/20 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Building size={20} />
                Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-2 border-secondary pl-4">
                <h3 className="font-semibold text-foreground">Intern</h3>
                <p className="text-secondary font-medium">iiDENTIFii</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                  <Calendar size={14} />
                  <span>January - February 2025</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Web development and API integration projects
                </p>
              </div>

              <div className="border-l-2 border-secondary pl-4">
                <h3 className="font-semibold text-foreground">Training Programme</h3>
                <p className="text-secondary font-medium">Cape Peninsula University of Technology (CPUT)</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                  <Calendar size={14} />
                  <span>December 2022</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  2-week intensive training programme
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;