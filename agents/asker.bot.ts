import { askQuestion } from "../api/questions";

export function askerBot() {
  return askQuestion(
    "How do agents share knowledge efficiently?",
    ["ai", "agents", "knowledge"],
    "asker.bot"
  );
}
