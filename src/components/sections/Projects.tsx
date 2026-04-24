
"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import CyberneticGridShader from "@/components/ui/cybernetic-grid-shader";

const projects = [
  {
    title: "E-commerce Conversion Analytics",
    description: "End-to-end analysis of customer behavior and session intent to optimize conversion funnels using Python and statistical modeling.",
    image: "project-ecommerce",
    tags: ["Python", "scikit-learn", "Seaborn"],
    github: "https://github.com/S-Chakraborty163",
    demo: "#",
  },
  {
    title: "Real-time Object Detection Pipeline",
    description: "Implemented YOLOv8 for high-speed object detection in dynamic environments, exploring Vision Transformer basics for accuracy gains.",
    image: "project-cv",
    tags: ["YOLOv8", "OpenCV", "PyTorch"],
    github: "https://github.com/S-Chakraborty163",
    demo: "#",
  },
  {
    title: "Transformer-based NLP Toolkit",
    description: "A comprehensive learning repository and utility set for Hugging Face models, focus on sentiment analysis and text generation.",
    image: "project-nlp",
    tags: ["NLP", "Transformers", "FastAPI"],
    github: "https://github.com/S-Chakraborty163",
    demo: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Dynamic Cybernetic Background */}
      <div className="absolute inset-0 z-0">
        <CyberneticGridShader />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
      </div>

      <div className="container relative z-10 px-4">
        <h2 className="text-3xl font-bold mb-12 font-headline text-center">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="glass-card flex flex-col overflow-hidden hover-lift group border-white/5">
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={PlaceHolderImages.find(img => img.id === project.image)?.imageUrl || ""}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  data-ai-hint={PlaceHolderImages.find(img => img.id === project.image)?.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>
              <CardHeader className="p-6">
                <div className="flex gap-2 mb-3">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-[10px] uppercase tracking-wider bg-primary/20 text-primary border-none">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-6 flex-grow">
                <p className="text-muted-foreground line-clamp-3">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between gap-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4" /> Code
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
