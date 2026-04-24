
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Terminal, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Learnings", href: "#learnings" },
  { name: "Hobbies", href: "#hobbies" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-white/5 py-3 shadow-lg" : "bg-transparent py-5"
      )}
    >
      <div className="container px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground group-hover:rotate-12 transition-transform shadow-lg shadow-primary/20">
            <Terminal className="w-6 h-6" />
          </div>
          <span className="font-headline font-bold text-xl tracking-tight">
            Soumyajit<span className="text-primary">.</span>Byte
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
          <Button variant="outline" size="sm" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
            <Link href="#contact">Hire Me</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden fixed inset-0 top-[72px] bg-background/95 backdrop-blur-xl z-40 transition-transform duration-300 ease-in-out",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col items-center justify-center h-full gap-8 p-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-2xl font-headline font-semibold text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button className="w-full max-w-xs rounded-full" size="lg" onClick={() => setMobileMenuOpen(false)} asChild>
            <Link href="#contact">Hire Me</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
