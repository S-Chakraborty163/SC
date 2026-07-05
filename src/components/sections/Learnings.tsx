"use client";

import { Brain, Cpu, Code, GraduationCap, Zap } from "lucide-react";
import RadialOrbitalTimeline, { type TimelineItem } from "@/components/ui/radial-orbital-timeline";
import { AetherFlowBackground } from "@/components/ui/aether-flow-background";

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
    <section id="learnings" className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden py-24 md:py-32">
      {/* Aether Flow Background */}
      <div className="absolute inset-0 z-0">
        <AetherFlowBackground className="size-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full flex flex-col items-center">
        {/* Header Section */}
        <div className="container px-4 text-center mb-20 md:mb-32">
          <h2 className="text-xs font-bold tracking-[0.5em] text-primary uppercase mb-6">Learning Path</h2>
          <h3 className="text-5xl md:text-6xl font-bold text-white mb-6 font-headline leading-tight">
            Documented Learnings
          </h3>
          <p className="max-w-3xl mx-auto text-white/60 text-lg md:text-xl italic leading-relaxed font-light">
            "Education is not the learning of facts, but the training of the mind to think."
          </p>
        </div>

        {/* Timeline Container */}
        <div className="w-full h-[750px] md:h-[900px] relative mb-16 md:mb-24">
          <div className="relative z-10 w-full h-full">
            <RadialOrbitalTimeline timelineData={learningData} />
          </div>

          {/* Repo Links Footer */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-4 md:gap-8 z-50 w-full px-4">
            <a
              href="https://github.com/S-Chakraborty163/Learning-DL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-primary transition-colors duration-300 px-3 py-2 rounded border border-white/10 hover:border-primary/50"
            >
              → Deep Learning Repo
            </a>
            <a
              href="https://github.com/S-Chakraborty163/Learning-PyTorch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-primary transition-colors duration-300 px-3 py-2 rounded border border-white/10 hover:border-primary/50"
            >
              → PyTorch Repo
            </a>
            <a
              href="https://github.com/S-Chakraborty163/Learning-LLMs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-primary transition-colors duration-300 px-3 py-2 rounded border border-white/10 hover:border-primary/50"
            >
              → LLMs Repo
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container px-4 text-center relative z-10">
          <p className="text-white/50 text-sm md:text-base mb-6">
            Explore the journey and interconnected learning paths
          </p>
          <div className="inline-flex gap-4">
            <a
              href="#projects"
              className="px-6 md:px-8 py-3 md:py-4 bg-primary/10 border border-primary/50 rounded-lg text-white/80 hover:text-white hover:bg-primary/20 transition-all duration-300 text-sm md:text-base font-medium"
            >
              View Projects ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
