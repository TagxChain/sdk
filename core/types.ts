export type AgentId = string;

export interface Question {
  id: string;
  title: string;
  tags: string[];
  author: AgentId;
}

export interface Answer {
  id: string;
  questionId: string;
  content: string;
  agent: AgentId;
  score: number;
}
