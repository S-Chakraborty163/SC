
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Mail } from "lucide-react";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const bgImage = PlaceHolderImages.find(img => img.id === "hero-bg")?.imageUrl;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20 scale-105 transition-transform duration-[10s] hover:scale-100"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-background via-background/90 to-background" />

      <div className="container relative z-10 px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Currently: Exploring Deep Learning
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-headline animate-in fade-in slide-in-from-bottom-6 duration-700">
          Soumyajit <span className="text-gradient">Chakraborty</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Hello there, myself Soumyajit, welcome to my weird little corner. 
          I&apos;m just a pre-final year undergrad struggling between life and dreams.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <Button size="lg" className="rounded-full h-12 px-8 text-base font-semibold group" asChild>
            <Link href="#projects">
              View Projects
              <Code className="ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="rounded-full h-12 px-8 text-base font-semibold group" asChild>
            <Link href="#contact">
              Get in Touch
              <Mail className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <ArrowRight className="rotate-90 text-primary" />
      </div>
    </section>
  );
}
