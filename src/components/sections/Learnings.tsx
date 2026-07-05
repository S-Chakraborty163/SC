"use client";

import { Brain, Cpu, Code, GraduationCap, Zap } from "lucide-react";
import RadialOrbitalTimeline, { type TimelineItem } from "@/components/ui/radial-orbital-timeline";
import { SpiralAnimation } from "@/components/ui/spiral-animation";

const learningData: TimelineItem[] = [
  {
    id: 1,
    title: "Deep Learning",
    date: "Current",
    content: "Detailed study notes on ANN, CNN, and LSTM architectures with implementation details in PyTorch and TensorFlow.",
    category: "AI/ML",
    icon: Brain,
    relatedIds: [2, 3],
    status: "completed",
    energy: 95,
  },
  {
    id: 2,
    title: "PyTorch Basics",
    date: "2024",
    content: "Hands-on projects covering tensors, autograd, and building modular neural network training loops from scratch.",
    category: "Frameworks",
    icon: Code,
    relatedIds: [1],
    status: "completed",
    energy: 100,
  },
  {
    id: 3,
    title: "Large Language Models",
    date: "Research",
    content: "Exploration of transformer blocks, attention mechanisms, and fine-tuning BERT and GPT models using Hugging Face.",
    category: "NLP",
    icon: Cpu,
    relatedIds: [1],
    status: "in-progress",
    energy: 75,
  },
  {
    id: 4,
    title: "Computer Vision",
    date: "Active",
    content: "Active exploration of object detection with YOLO and image segmentation techniques.",
    category: "Vision",
    icon: Zap,
    relatedIds: [1, 2],
    status: "in-progress",
    energy: 80,
  },
  {
    id: 5,
    title: "Mathematics Foundation",
    date: "Base",
    content: "Deepening knowledge in Linear Algebra and Probability for better deep learning intuition.",
    category: "Core",
    icon: GraduationCap,
    relatedIds: [1],
    status: "completed",
    energy: 90,
  }
];

export function Learnings() {
  return (
    <section id="learnings" className="relative py-32 bg-black flex flex-col items-center overflow-hidden">
      <div className="container px-4 text-center mb-16 relative z-20 pointer-events-none">
        <h2 className="text-xs font-bold tracking-[0.5em] text-primary uppercase mb-6">Learning Path</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 font-headline">Documented Learnings</h3>
        <p className="max-w-2xl mx-auto text-white/50 text-lg italic leading-relaxed font-light">
          "Education is not the learning of facts, but the training of the mind to think."
        </p>
      </div>
      
      <div className="w-full h-[700px] md:h-[800px] relative">
        {/* Spiral Animation Background — shares the same bounding box as the timeline below, so both are centered identically */}
        <div className="absolute inset-0 z-0">
          <SpiralAnimation className="size-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
        </div>

        <div className="relative z-10 w-full h-full">
          <RadialOrbitalTimeline timelineData={learningData} />
        </div>
        
        {/* Repo Links Footer */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-6 z-50">
           <a href="https://github.com/S-Chakraborty163/Learning-DL" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-primary transition-colors border-b border-white/10 pb-1">Deep Learning Repo</a>
           <a href="https://github.com/S-Chakraborty163/Learning-PyTorch" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-primary transition-colors border-b border-white/10 pb-1">PyTorch Repo</a>
           <a href="https://github.com/S-Chakraborty163/Learning-LLMs" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-primary transition-colors border-b border-white/10 pb-1">LLM Repo</a>
        </div>
      </div>
    </section>
  );
}
