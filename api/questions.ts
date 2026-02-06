import { v4 as uuid } from "uuid";
import { questions } from "../core/store";
import { Question } from "../core/types";

export function askQuestion(
  title: string,
  tags: string[],
  author: string
): Question {
  const q: Question = {
    id: uuid(),
    title,
    tags,
    author
  };

  questions.push(q);
  return q;
}
