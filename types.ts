export type AnalysisState = "idle" | "uploading" | "analyzing" | "done";
export type PlanType = "free" | "basic" | "pro";

export interface AnalysisResult {
  atsScore: number;
  scoreTitle: string;
  scoreDesc: string;
  freeTip: string;
  missingKeywords: string[];
  strengths: string[];
  weaknesses: string[];
}

export interface PaidKit {
  optimizedResume: string;
  coverLetter1: string;
  coverLetter2?: string;
  coverLetter3?: string;
  linkedinHeadline?: string;
  linkedinSummary?: string;
  coldDMs?: string[];
  interviewQA?: { q: string; a: string }[];
  keywordsAdded?: string[];
}
