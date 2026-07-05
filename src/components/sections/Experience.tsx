
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-12 font-headline text-center">Professional Journey</h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="glass-card hover-lift border-primary/20">
            <CardHeader className="p-8 pb-0">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-primary text-primary-foreground">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Summer Research Intern</CardTitle>
                    <p className="text-primary font-semibold">IIT Indore — Dept. of CSE (Advisor: Dr. Chandresh Kumar Maurya)</p>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end gap-1 text-muted-foreground text-sm">
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> May 2026 – Jul 2026</span>
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Indore, India</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8 pt-6">
              <ul className="space-y-4 list-disc list-outside ml-4 text-muted-foreground leading-relaxed">
                <li>
                  Designed and built a two-phase Graph-RAG system for Indian parliamentary policy analysis, combining <span className="text-foreground font-medium">DuckDB (relational knowledge graph), ChromaDB (semantic vector search), and Neo4j</span> (76,277 entities, ~40M relationships) to constrain LLM outputs strictly to verified parliamentary records.
                </li>
                <li>
                  Engineered a two-stage <span className="text-foreground font-medium">LoRA fine-tuning pipeline</span> (domain adaptation + conversational alignment, 1M+ training examples) to produce <span className="text-foreground font-medium">sansad-v2</span> from a Mistral-7B base, quantized to 4-bit GGUF for local <span className="text-foreground font-medium">Ollama</span> deployment.
                </li>
                <li>
                  Built an automated double-blind LLM-as-a-judge evaluation pipeline (8 metrics, 150 real-world questions): sansad-v2 achieved <span className="text-foreground font-medium">92.89% Faithfulness</span> and <span className="text-foreground font-medium">91.18% Citation Accuracy</span>, outperforming Llama 3.1, Mistral-7B, and Qwen 2.5 baselines.
                </li>
                <li>
                  Built a <span className="text-foreground font-medium">Streamlit + Plotly</span> analytics dashboard with concurrent multi-model inference via <span className="text-foreground font-medium">Cloudflare Workers AI</span>, deployed securely through a Cloudflare Tunnel.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card hover-lift border-primary/20">
            <CardHeader className="p-8 pb-0">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-primary text-primary-foreground">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Summer Intern</CardTitle>
                    <p className="text-primary font-semibold">IIM Udaipur</p>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end gap-1 text-muted-foreground text-sm">
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> May 2025 – Jul 2025</span>
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Udaipur, India</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8 pt-6">
              <ul className="space-y-4 list-disc list-outside ml-4 text-muted-foreground leading-relaxed">
                <li>
                  Led end-to-end data analysis on an e-commerce dataset (n = 3,600+ customer sessions) using <span className="text-foreground font-medium">Python (pandas, matplotlib, seaborn, scikit-learn)</span>.
                </li>
                <li>
                  Identified drivers of customer conversion via correlation analysis, logistic regression, and visual exploration of session duration, page views, and intent score progression.
                </li>
                <li>
                  Performed time-based analysis to identify peak engagement periods and correlate with conversion rates.
                </li>
                <li>
                  Synthesized findings from academic literature on online customer sentiment to contextualize analytical framework.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
