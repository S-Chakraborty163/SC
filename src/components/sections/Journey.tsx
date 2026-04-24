
"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const researchInterests = [
  "Deep Learning",
  "Large Language Models",
  "Computer Vision",
  "E-commerce Analytics",
  "Healthcare Analytics",
];

const skills = [
  { category: "LANGUAGES", items: ["Python", "SQL", "Bash"] },
  { category: "ML/DL", items: ["PyTorch", "TensorFlow/Keras", "scikit-learn"] },
  { category: "DATA", items: ["pandas", "NumPy", "matplotlib", "seaborn", "plotly"] },
  { category: "DEEP LEARNING", items: ["ANN", "CNN", "LSTM", "BiLSTM", "Transformers"] },
  { category: "COMPUTER VISION", items: ["YOLOv8", "OpenCV", "ViT"] },
  { category: "NLP", items: ["HuggingFace", "spaCy", "LangChain"] },
  { category: "TOOLS", items: ["Git", "FastAPI", "Pinecone", "Jupyter", "Colab"] },
  { category: "MATH", items: ["Linear Algebra", "Probability", "Statistics", "Optimization"] },
];

export function Journey() {
  const bgImage = PlaceHolderImages.find(img => img.id === "journey-bg")?.imageUrl || "";

  return (
    <section id="about" className="relative min-h-screen py-24 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={bgImage} 
          alt="Journey Background" 
          fill 
          className="object-cover opacity-40 grayscale-[0.2]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
      </div>

      <div className="container relative z-10 px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: About & Interests */}
          <div className="space-y-16">
            <div className="space-y-8">
              <h2 className="text-xs font-bold tracking-[0.4em] text-muted-foreground uppercase">About</h2>
              <div className="space-y-6 text-lg text-foreground/90 leading-relaxed font-light max-w-xl">
                <p>
                  I&apos;ve always been the kind of person who enjoyed getting stuck on problems—whether it was math puzzles as a kid or models that refuse to behave now.
                </p>
                <p>
                  I started in mechanical engineering, but somewhere between systems thinking and discovering transformers, I realised I was more interested in how machines learn than how they move.
                </p>
                <p>
                  Since then, I&apos;ve been exploring deep learning, building things that sometimes work, often break, and always teach me something. Still figuring things out, still asking questions—just slightly better ones each time.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-xs font-bold tracking-[0.4em] text-muted-foreground uppercase">Research Interests</h2>
              <div className="flex flex-wrap gap-3">
                {researchInterests.map((interest) => (
                  <Badge 
                    key={interest} 
                    variant="outline" 
                    className="rounded-full px-6 py-1.5 border-white/20 bg-white/5 text-sm font-normal text-foreground/80 hover:bg-white/10 transition-colors"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Experience & Skills */}
          <div className="space-y-16">
            <div className="space-y-8">
              <h2 className="text-xs font-bold tracking-[0.4em] text-muted-foreground uppercase">Experience</h2>
              <Card className="bg-white/5 backdrop-blur-md border-white/10 rounded-xl overflow-hidden">
                <CardContent className="p-8 space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold">Research Intern</h3>
                      <p className="text-muted-foreground text-sm">IIM Udaipur</p>
                    </div>
                    <span className="text-muted-foreground text-xs font-medium uppercase tracking-wider">May 2025 – Jul 2025</span>
                  </div>
                  <ul className="space-y-4 text-sm text-foreground/70 list-none">
                    <li className="flex gap-3">
                      <span className="text-white/40">—</span>
                      <span>Led end-to-end data analysis on an e-commerce dataset (n = 3,600+ sessions) using Python</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-white/40">—</span>
                      <span>Identified drivers of customer conversion via correlation analysis and logistic regression</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-white/40">—</span>
                      <span>Performed time-based analysis to identify peak engagement and correlate with conversion rates</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-white/40">—</span>
                      <span>Synthesized academic literature on online customer sentiment to contextualize findings</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <h2 className="text-xs font-bold tracking-[0.4em] text-muted-foreground uppercase">Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <Card key={skill.category} className="bg-white/5 backdrop-blur-sm border-white/10 rounded-lg">
                    <CardContent className="p-5 space-y-2">
                      <h4 className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase">{skill.category}</h4>
                      <p className="text-sm text-foreground/80 font-medium">
                        {skill.items.join("  ")}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
