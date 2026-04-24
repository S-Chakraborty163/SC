
"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Car, Bot, Tv, TrendingUp, ScanFace } from "lucide-react";
import CyberneticGridShader from "@/components/ui/cybernetic-grid-shader";
import { Radar, IconContainer } from "@/components/ui/radar-effect";

const projects = [
  {
    title: "License Plate Detection System",
    description: "Developed a real-time system using YOLOv8, achieving 91.8% mAP@50. Engineered end-to-end data pipelines and optimized model performance through comprehensive EDA.",
    highlights: [
      "91.8% mAP@50 precision on custom dataset",
      "Automated Pascal VOC to YOLO format conversion",
      "Real-time visualization with OpenCV and Matplotlib"
    ],
    icon: <Car className="h-8 w-8 text-primary" />,
    tags: ["Python", "PyTorch", "YOLOv8", "OpenCV"],
    github: "https://github.com/S-Chakraborty163/car-license-plate-detection",
  },
  {
    title: "Medical Assistant Bot (RAG)",
    description: "Engineered a RAG system for medical QA using FastAPI and LangChain. Integrated Llama-3.3-70B with Pinecone for accurate semantic search and source attribution.",
    highlights: [
      "Groq's Llama-3.3-70B + Gemini Embeddings",
      "Context-only responses to prevent hallucinations",
      "Asynchronous FastAPI with modular architecture"
    ],
    icon: <Bot className="h-8 w-8 text-primary" />,
    tags: ["FastAPI", "LangChain", "Pinecone", "Llama-3"],
    github: "https://github.com/S-Chakraborty163/Medical-Assistant-Bot",
  },
  {
    title: "TV Series Narrative Analyzer",
    description: "End-to-end NLP pipeline analyzing narrative patterns across 220+ episodes. Built character network generators and zero-shot theme classifiers.",
    highlights: [
      "Zero-shot classification with BART-large-MNLI",
      "Co-occurrence graphs using NetworkX and PyVis",
      "Fine-tuned DistilBERT for technique analysis"
    ],
    icon: <Tv className="h-8 w-8 text-primary" />,
    tags: ["Hugging Face", "spaCy", "NetworkX"],
    github: "https://github.com/S-Chakraborty163/TV-series-analysis",
  },
  {
    title: "Tesla Stock Price Prediction",
    description: "Built an LSTM neural network in PyTorch to forecast stock prices on 14+ years of data. Focused on time series feature engineering and normalization.",
    highlights: [
      "3,600+ daily records processed",
      "Engineered volatility and moving average indicators",
      "Interactive comparative visualizations"
    ],
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    tags: ["PyTorch", "scikit-learn", "LSTM"],
    github: "https://github.com/S-Chakraborty163/Tesla-Stock-Price-Prediction",
  },
  {
    title: "Facial Emotion Recognition",
    description: "Implemented multiple CNN architectures for real-time emotion detection. Used transfer learning with VGG16 and ResNet50V2 to handle imbalanced data.",
    highlights: [
      "Custom CNNs and Transfer Learning",
      "Applied Early Stopping and LR Scheduling",
      "Gradio interface for real-time testing"
    ],
    icon: <ScanFace className="h-8 w-8 text-primary" />,
    tags: ["TensorFlow", "Keras", "Gradio"],
    github: "https://github.com/S-Chakraborty163/Emotion-detection-project-using-CNN",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden bg-black">
      {/* Dynamic Cybernetic Background */}
      <div className="absolute inset-0 z-0">
        <CyberneticGridShader />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      <div className="container relative z-10 px-6">
        <div className="text-center mb-24">
          <h2 className="text-xs font-bold tracking-[0.4em] text-primary uppercase mb-4">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h3>
          <p className="max-w-2xl mx-auto text-white/50 text-lg">
            A showcase of my explorations in Computer Vision, NLP, and Predictive Analytics.
          </p>
        </div>

        {/* Radar Effect Visualization */}
        <div className="relative flex h-[400px] w-full items-center justify-center mb-32 overflow-hidden">
           <div className="absolute top-0 flex w-full max-w-4xl items-center justify-between px-10">
             <IconContainer text="CV" delay={0.1} icon={projects[0].icon} />
             <IconContainer text="RAG" delay={0.2} icon={projects[1].icon} />
             <IconContainer text="NLP" delay={0.3} icon={projects[2].icon} />
           </div>
           <div className="flex w-full max-w-2xl items-center justify-around">
             <IconContainer text="Finance" delay={0.4} icon={projects[3].icon} />
             <IconContainer text="Deep Learning" delay={0.5} icon={projects[4].icon} />
           </div>
           <Radar className="absolute -bottom-20" />
           <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="bg-white/5 backdrop-blur-xl border-white/5 flex flex-col overflow-hidden hover:border-primary/20 transition-all duration-500 group">
              <CardHeader className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    {project.icon}
                  </div>
                  <div className="flex gap-2 flex-wrap justify-end">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-[9px] uppercase tracking-wider border-white/10 bg-white/5 text-white/60">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </CardHeader>
              <CardContent className="px-8 flex-grow">
                <ul className="space-y-3">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-sm text-white/40">
                      <span className="text-primary font-bold">/</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-8 pt-0 flex justify-between gap-4 mt-8">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4" /> Source Code
                </a>
                <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-primary transition-all" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
