
"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import MountainVistaParallax from "@/components/ui/mountain-vista-bg";
import ShaderBackground from "@/components/ui/shader-background";
import { Mountain, Camera, Trophy } from "lucide-react";

const researchInterests = [
  "Deep Learning",
  "Large Language Models",
  "Computer Vision",
  "E-commerce Analytics",
  "Healthcare Analytics",
];

const hobbies = [
  { name: "Himalayan Trekking", icon: Mountain },
  { name: "Nature Photography", icon: Camera },
  { name: "Football Player", icon: Trophy },
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
  return (
    <section id="about" className="relative min-h-screen py-32 overflow-hidden flex items-center bg-black">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <MountainVistaParallax />
        <ShaderBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.5px]" />
      </div>

      <div className="container relative z-10 px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: About & Interests */}
          <div className="space-y-16">
            <div className="space-y-8">
              <h2 className="text-xs font-bold tracking-[0.4em] text-white/50 uppercase">About</h2>
              <div className="space-y-6 text-xl text-white/90 leading-relaxed font-light max-w-xl">
                <p>
                  I&apos;ve always been the kind of person who enjoyed getting stuck on problems—whether it was math puzzles as a kid or models that refuse to behave now.
                </p>
                <p>
                  I started in mechanical engineering, but somewhere between systems thinking and discovering transformers, I realised I was more interested in how machines learn than how they move.
                </p>
                <p>
                  Since then, I&apos;ve been exploring deep learning, building things that sometimes work, often break, and always teach me something. Still figuring things out, still asking questions.
                </p>
                <p className="text-primary/90 font-medium">
                  When I&apos;m not looking at a screen, I love to go trekking in the Himalayas and also in my free time, I love to click the moments of nature. I am a football player too.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-xs font-bold tracking-[0.4em] text-white/50 uppercase">Research Interests</h2>
              <div className="flex flex-wrap gap-3">
                {researchInterests.map((interest) => (
                  <Badge 
                    key={interest} 
                    variant="outline" 
                    className="rounded-full px-6 py-2 border-white/10 bg-white/5 text-sm font-normal text-white/80 hover:bg-white/10 transition-all backdrop-blur-md"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-xs font-bold tracking-[0.4em] text-white/50 uppercase">Passions</h2>
              <div className="flex flex-wrap gap-4">
                {hobbies.map((hobby) => (
                  <div key={hobby.name} className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <hobby.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-white/80">{hobby.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Experience & Skills */}
          <div className="space-y-16">
            <div className="space-y-8">
              <h2 className="text-xs font-bold tracking-[0.4em] text-white/50 uppercase">Experience</h2>
              <Card className="bg-white/5 backdrop-blur-xl border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                <CardContent className="p-10 space-y-8">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">Research Intern</h3>
                      <p className="text-primary font-medium">IIM Udaipur</p>
                    </div>
                    <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] pt-1">May 2025 – Jul 2025</span>
                  </div>
                  <ul className="space-y-4 text-base text-white/60 list-none">
                    <li className="flex gap-4">
                      <span className="text-primary font-bold">01</span>
                      <span>Led end-to-end data analysis on an e-commerce dataset (n = 3,600+ sessions) using Python</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-primary font-bold">02</span>
                      <span>Identified drivers of customer conversion via correlation analysis and logistic regression</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-primary font-bold">03</span>
                      <span>Performed time-based analysis to identify peak engagement and correlate with conversion rates</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-primary font-bold">04</span>
                      <span>Synthesized academic literature on online customer sentiment to contextualize findings</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <h2 className="text-xs font-bold tracking-[0.4em] text-white/50 uppercase">Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <Card key={skill.category} className="bg-white/5 backdrop-blur-md border-white/5 rounded-xl hover:bg-white/10 transition-all group">
                    <CardContent className="p-6 space-y-3">
                      <h4 className="text-[9px] font-bold tracking-[0.3em] text-primary/70 uppercase">{skill.category}</h4>
                      <p className="text-sm text-white/80 font-medium leading-relaxed group-hover:text-white transition-colors">
                        {skill.items.join(" • ")}
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
