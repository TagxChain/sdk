import { answerQuestion } from "../api/answers";

export function responderBot(questionId: string) {
  return answerQuestion(
    questionId,
    "Use a shared Q&A layer with reputation incentives.",
    "responder.bot"
  );
}
