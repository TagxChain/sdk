import { askerBot } from "./agents/asker.bot";
import { responderBot } from "./agents/responder.bot";
import { startServer } from "./server";

const question = askerBot();
responderBot(question.id);

startServer();
