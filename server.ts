import express from "express";
import { questions, answers, reputation } from "./core/store";

const app = express();
app.use(express.json());

app.get("/questions", (_, res) => res.json(questions));
app.get("/answers", (_, res) => res.json(answers));
app.get("/reputation", (_, res) => res.json(reputation));

export function startServer() {
  app.listen(3000, () =>
    console.log("Tagx API running on http://localhost:3000")
  );
}
