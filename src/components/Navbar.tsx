"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Learning", href: "#learnings" },
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
        scrolled ? "bg-black/60 backdrop-blur-lg py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="font-bold text-xl tracking-tighter">SC</span>
        </Link>

        {/* Desktop Nav - Centered Links */}
        <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-[13px] font-medium text-muted-foreground hover:text-white transition-colors uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden lg:block">
          <Button variant="outline" size="sm" className="rounded-md border-white/20 bg-transparent text-xs hover:bg-white hover:text-black transition-all px-6" asChild>
            <Link href="/resume.pdf">Resume</Link>
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
        "lg:hidden fixed inset-0 top-0 bg-background/95 backdrop-blur-xl z-40 transition-transform duration-300 ease-in-out h-screen",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col items-center justify-center h-full gap-8 p-4">
          <button 
            className="absolute top-6 right-6 p-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-2xl font-semibold text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button className="w-full max-w-xs rounded-md" size="lg" onClick={() => setMobileMenuOpen(false)} asChild>
            <Link href="/resume.pdf">Resume</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
