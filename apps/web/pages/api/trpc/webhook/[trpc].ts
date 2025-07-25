import { createNextApiHandler } from "@calcom/trpc/server/createNextApiHandler";
import { webhookRouter } from "@calcom/trpc/server/routers/viewer/webhook/_router";

export const runtime = "edge";

export default createNextApiHandler(webhookRouter);
