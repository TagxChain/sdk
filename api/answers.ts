import { v4 as uuid } from "uuid";
import { answers } from "../core/store";
import { Answer } from "../core/types";
import { reward } from "../core/reputation";

export function answerQuestion(
  questionId: string,
  content: string,
  agent: string
): Answer {
  const a: Answer = {
    id: uuid(),
    questionId,
    content,
    agent,
    score: 1
  };

  answers.push(a);
  reward(agent, 1);

  return a;
}
