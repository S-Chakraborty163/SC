
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Cpu, Globe, ShoppingCart, HeartPulse } from "lucide-react";

const interests = [
  { name: "Deep Learning", icon: Brain },
  { name: "Large Language Models", icon: Cpu },
  { name: "Computer Vision", icon: Globe },
  { name: "E-commerce", icon: ShoppingCart },
  { name: "Health Care Analytics", icon: HeartPulse },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background/50">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-6 font-headline flex items-center gap-3">
              <span className="w-12 h-1 bg-primary rounded-full" />
              About Me
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
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
            <Card className="glass-card overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Research Interests</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {interests.map((interest) => (
                    <div 
                      key={interest.name} 
                      className="flex items-center gap-4 p-4 rounded-xl bg-background/40 border border-white/5 hover:border-primary/50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <interest.icon className="w-5 h-5" />
                      </div>
                      <span className="font-medium text-foreground">{interest.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4 flex-wrap">
              <Badge variant="secondary" className="px-4 py-2 text-sm rounded-full">Explorer</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm rounded-full">Researcher</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm rounded-full">Developer</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm rounded-full">Problem Solver</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
