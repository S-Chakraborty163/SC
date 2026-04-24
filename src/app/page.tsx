
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Learnings } from "@/components/sections/Learnings";
import { Hobbies } from "@/components/sections/Hobbies";
import { Contact } from "@/components/sections/Contact";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Learnings />
      <Hobbies />
      <Contact />
      
      <footer className="py-12 border-t border-white/5 bg-background">
        <div className="container px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Soumyajit Chakraborty. Built with curiosity and code.
          </p>
        </div>
      </footer>
      
      <Toaster />
    </main>
  );
}
