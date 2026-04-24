
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Camera, Trophy, Mountain } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const hobbies = [
  {
    title: "Football Player",
    description: "Secured 2× Runners-up trophies in inter-hostel football tournaments (2025). High-energy defensive midfielder.",
    icon: Trophy,
    image: "hobby-football"
  },
  {
    title: "Photography Club",
    description: "Member of 'Catharsis' – IIEST Shibpur. Contributing to creative campus campaigns through visual storytelling.",
    icon: Camera,
    image: "hobby-photography"
  },
  {
    title: "Trekking Enthusiast",
    description: "Passionate about exploring remote trails and finding solitude in the high peaks of nature.",
    icon: Mountain,
    image: "hobby-trekking"
  }
];

export function Hobbies() {
  return (
    <section id="hobbies" className="py-24">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-12 font-headline text-center">Beyond the Code</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {hobbies.map((hobby) => (
            <Card key={hobby.title} className="glass-card overflow-hidden group border-white/5">
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={PlaceHolderImages.find(img => img.id === hobby.image)?.imageUrl || ""}
                  alt={hobby.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  data-ai-hint={PlaceHolderImages.find(img => img.id === hobby.image)?.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                <div className="absolute top-4 left-4 p-2 rounded-lg bg-primary/20 backdrop-blur-md border border-white/10 text-primary">
                  <hobby.icon className="w-5 h-5" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{hobby.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {hobby.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
