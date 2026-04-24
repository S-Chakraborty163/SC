
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const bgImage = PlaceHolderImages.find(img => img.id === "hero-bg")?.imageUrl;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay matching the reference */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 grayscale contrast-125"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/80 via-black/40 to-black" />

      <div className="container relative z-10 px-4 text-center max-w-4xl">
        <p className="text-xs font-bold tracking-[0.3em] text-muted-foreground uppercase mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Hello There
        </p>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 font-headline text-white animate-in fade-in slide-in-from-bottom-6 duration-700">
          Soumyajit <br className="md:hidden" /> Chakraborty
        </h1>
        
        <p className="max-w-xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000">
          myself Soumyajit, welcome to my weird little corner.<br />
          I&apos;m just a pre-final year undergrad struggling between life and dreams.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <Button size="lg" className="rounded-md h-12 px-10 text-sm font-semibold bg-white text-black hover:bg-white/90 transition-all" asChild>
            <Link href="#projects">
              View Projects
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="rounded-md h-12 px-10 text-sm font-semibold border-white/20 bg-black/40 text-white hover:bg-white/10 transition-all" asChild>
            <Link href="#contact">
              Contact
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
