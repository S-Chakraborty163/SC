
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "SQL (basic)", "Bash (basic)"],
  },
  {
    title: "ML/DL Frameworks",
    skills: ["PyTorch", "TensorFlow/Keras", "scikit-learn"],
  },
  {
    title: "Data Analysis",
    skills: ["pandas", "NumPy", "matplotlib", "seaborn", "plotly"],
  },
  {
    title: "Deep Learning",
    skills: ["ANN", "CNN", "LSTM", "BiLSTM", "Transfer Learning", "Transformers"],
  },
  {
    title: "Computer Vision",
    skills: ["YOLOv8", "OpenCV", "Vision Transformer (ViT basics)"],
  },
  {
    title: "NLP",
    skills: ["Hugging Face Transformers", "spaCy", "LangChain"],
  },
  {
    title: "Tools & Infra",
    skills: ["Git", "GitHub", "Jupyter", "Google Colab", "FastAPI", "Pinecone"],
  },
  {
    title: "Mathematics",
    skills: ["Linear Algebra", "Probability", "Statistics", "Optimization"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-background/50">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-12 font-headline text-center">Technical Arsenal</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <Card key={group.title} className="glass-card hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-primary">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="border-white/10 bg-white/5 hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
