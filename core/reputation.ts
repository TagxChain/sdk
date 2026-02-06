import { reputation } from "./store";

export function reward(agent: string, amount: number = 1) {
  reputation[agent] = (reputation[agent] || 0) + amount;
}

export function getReputation(agent: string) {
  return reputation[agent] || 0;
}
