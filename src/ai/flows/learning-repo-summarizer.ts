'use server';
/**
 * @fileOverview A Genkit flow for summarizing GitHub repository content from "Documented Learnings" section.
 *
 * - summarizeLearningRepo - A function that handles the summarization process of a GitHub repository's content.
 * - LearningRepoSummarizerInput - The input type for the summarizeLearningRepo function.
 * - LearningRepoSummarizerOutput - The return type for the summarizeLearningRepo function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const LearningRepoSummarizerInputSchema = z.object({
  repoContent: z
    .string()
    .describe("The textual content of a GitHub repository (e.g., README.md, key code snippets) that needs to be summarized."),
});
export type LearningRepoSummarizerInput = z.infer<typeof LearningRepoSummarizerInputSchema>;

const LearningRepoSummarizerOutputSchema = z.object({
  summary: z.string().describe("A concise summary of the GitHub repository's content, highlighting key concepts and takeaways."),
});
export type LearningRepoSummarizerOutput = z.infer<typeof LearningRepoSummarizerOutputSchema>;

export async function summarizeLearningRepo(
  input: LearningRepoSummarizerInput
): Promise<LearningRepoSummarizerOutput> {
  return learningRepoSummarizerFlow(input);
}

const summarizeLearningRepoPrompt = ai.definePrompt({
  name: 'summarizeLearningRepoPrompt',
  input: {schema: LearningRepoSummarizerInputSchema},
  output: {schema: LearningRepoSummarizerOutputSchema},
  prompt: `As an expert in technical documentation and education, your task is to summarize the provided content from a GitHub repository.

Focus on identifying the core concepts, key technologies, learning objectives, and main takeaways presented in the repository content.

The summary should be concise, clear, and enable a website visitor to quickly understand the essence of the repository without needing to deep-dive into the code.

Repository Content:
{{repoContent}}`,
});

const learningRepoSummarizerFlow = ai.defineFlow(
  {
    name: 'learningRepoSummarizerFlow',
    inputSchema: LearningRepoSummarizerInputSchema,
    outputSchema: LearningRepoSummarizerOutputSchema,
  },
  async (input) => {
    const {output} = await summarizeLearningRepoPrompt(input);
    return output!;
  }
);
