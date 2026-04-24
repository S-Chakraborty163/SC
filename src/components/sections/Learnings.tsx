
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Sparkles, Loader2, ChevronRight } from "lucide-react";
import { summarizeLearningRepo } from "@/ai/flows/learning-repo-summarizer";

const learningRepos = [
  {
    name: "Deep Learning",
    url: "https://github.com/S-Chakraborty163/Learning-DL",
    context: "Detailed study notes on ANN, CNN, and LSTM architectures with implementation details in PyTorch and TensorFlow."
  },
  {
    name: "PyTorch Basics",
    url: "https://github.com/S-Chakraborty163/Learning-PyTorch",
    context: "Hands-on projects covering tensors, autograd, and building modular neural network training loops from scratch."
  },
  {
    name: "Large Language Models",
    url: "https://github.com/S-Chakraborty163/Learning-LLMs",
    context: "Exploration of transformer blocks, attention mechanisms, and fine-tuning BERT and GPT models using Hugging Face."
  }
];

export function Learnings() {
  const [summaries, setSummaries] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});

  const handleSummarize = async (name: string, context: string) => {
    setLoading(prev => ({ ...prev, [name]: true }));
    try {
      const result = await summarizeLearningRepo({ repoContent: context });
      setSummaries(prev => ({ ...prev, [name]: result.summary }));
    } catch (error) {
      console.error("Failed to summarize:", error);
    } finally {
      setLoading(prev => ({ ...prev, [name]: false }));
    }
  };

  return (
    <section id="learnings" className="py-24 bg-background/50">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-headline">Documented Learnings</h2>
          <p className="text-muted-foreground text-lg italic">
            "Education is not the learning of facts, but the training of the mind to think."
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {learningRepos.map((repo) => (
            <Card key={repo.name} className="glass-card overflow-hidden group border-white/5">
              <div className="flex flex-col md:flex-row">
                <CardHeader className="p-8 md:w-1/3 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-center">
                  <CardTitle className="text-xl mb-4 group-hover:text-primary transition-colors">
                    {repo.name}
                  </CardTitle>
                  <Button variant="outline" size="sm" className="w-full justify-start rounded-full border-primary/30" asChild>
                    <a href={repo.url} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> View Repo
                    </a>
                  </Button>
                </CardHeader>
                <CardContent className="p-8 md:w-2/3 space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">AI Insights</p>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleSummarize(repo.name, repo.context)}
                      disabled={loading[repo.name]}
                      className="text-secondary hover:text-secondary hover:bg-secondary/10"
                    >
                      {loading[repo.name] ? (
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                      ) : (
                        <Sparkles className="w-4 h-4 mr-2" />
                      )}
                      {summaries[repo.name] ? "Regenerate Summary" : "Generate Summary"}
                    </Button>
                  </div>
                  
                  {summaries[repo.name] ? (
                    <div className="bg-secondary/5 border border-secondary/20 p-4 rounded-xl animate-in fade-in slide-in-from-top-2">
                      <p className="text-foreground leading-relaxed text-sm">
                        {summaries[repo.name]}
                      </p>
                    </div>
                  ) : (
                    <div className="text-muted-foreground/60 italic text-sm flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" /> 
                      Click summarize to see key takeaways from this repository...
                    </div>
                  )}
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
